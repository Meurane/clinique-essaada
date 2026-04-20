"use server";

import { redirect } from "next/navigation";

export type RdvFormState = {
  status: "idle" | "success" | "error";
  message?: string;
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

  if (honeypot) {
    return { status: "success" };
  }

  if (!nom || nom.length < 2) {
    return { status: "error", message: "Merci de renseigner votre nom." };
  }
  if (!telephone || telephone.replace(/\D/g, "").length < 8) {
    return {
      status: "error",
      message: "Merci de renseigner un numéro de téléphone valide.",
    };
  }
  if (!consent) {
    return {
      status: "error",
      message: "Votre consentement est requis pour traiter votre demande.",
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
        };
      }
    } catch (err) {
      console.error(err);
      return {
        status: "error",
        message:
          "Erreur lors de l'envoi. Merci de nous contacter par téléphone ou WhatsApp.",
      };
    }
  } else {
    console.warn(
      "RDV submission received but RESEND_API_KEY is not set. Payload:",
      { nom, telephone, motif, creneau, message },
    );
  }

  redirect("/rendez-vous?success=1");
}
