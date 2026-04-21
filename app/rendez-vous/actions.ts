"use server";

import { redirect } from "next/navigation";

export type RdvFormValues = {
  nom?: string;
  telephone?: string;
  motif?: string;
  creneau?: string;
  message?: string;
};

export type RdvFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  values?: RdvFormValues;
};

function norm(v: FormDataEntryValue | null) {
  return (v?.toString() ?? "").trim();
}

export async function submitRdv(
  _prev: RdvFormState,
  formData: FormData,
): Promise<RdvFormState> {
  const nom = norm(formData.get("nom"));
  const telephone = norm(formData.get("telephone"));
  const motif = norm(formData.get("motif"));
  const creneau = norm(formData.get("creneau"));
  const message = norm(formData.get("message"));
  const consent = formData.get("consent") === "on";
  const honeypot = norm(formData.get("website"));

  const values: RdvFormValues = { nom, telephone, motif, creneau, message };

  if (honeypot) {
    console.info("[rdv] honeypot triggered — dropping silently");
    redirect("/rendez-vous?success=1");
  }

  if (!nom || nom.length < 2) {
    return { status: "error", message: "Merci de renseigner votre nom.", values };
  }
  const telDigits = telephone.replace(/\D/g, "");
  const telShapeValid = /^\+?[0-9\s().-]{9,20}$/.test(telephone);
  if (!telShapeValid || telDigits.length < 9 || telDigits.length > 15 || /^0+$/.test(telDigits)) {
    return {
      status: "error",
      message: "Merci de renseigner un numéro valide (ex. 06 12 34 56 78 ou +213 555 12 34 56).",
      values,
    };
  }
  if (!consent) {
    return {
      status: "error",
      message: "Votre consentement est requis pour traiter votre demande.",
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.RDV_RECIPIENT_EMAIL ?? "cliniqueessaada22@gmail.com";

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Clinique ESSAADA <no-reply@cliniquessaada.fr>",
          to: [to],
          subject: `Nouvelle demande de RDV — ${nom}`,
          text: [
            `Nom : ${nom}`,
            `Téléphone : ${telephone}`,
            `Motif : ${motif || "(non précisé)"}`,
            `Créneau souhaité : ${creneau || "(non précisé)"}`,
            "",
            "Message :",
            message || "(aucun)",
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        console.error("Resend API error", await res.text());
        return {
          status: "error",
          message:
            "Nous n'avons pas pu envoyer votre demande. Merci de réessayer ou de nous appeler.",
          values,
        };
      }
    } catch (err) {
      console.error(err);
      return {
        status: "error",
        message:
          "Erreur lors de l'envoi. Merci de nous contacter par téléphone ou WhatsApp.",
        values,
      };
    }
  } else {
    console.error("[rdv] RESEND_API_KEY not set — submission cannot be processed");
    return {
      status: "error",
      message:
        "Service indisponible actuellement. Merci de nous appeler ou d'écrire sur WhatsApp.",
      values,
    };
  }

  redirect("/rendez-vous?success=1");
}
