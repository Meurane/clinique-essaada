"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { AlertCircle } from "lucide-react";
import { submitRdv, type RdvFormState } from "@/app/rendez-vous/actions";

const initialState: RdvFormState = { status: "idle" };

const motifs = [
  "1ère consultation néphrologie",
  "Dialyse de passage (vacances)",
  "Suivi / renouvellement",
  "Autre",
];

const creneaux = [
  { value: "matin", label: "Matin (05h — 09h)" },
  { value: "journee", label: "Journée (09h30 — 13h30)" },
  { value: "soir", label: "Soir (14h — 19h)" },
];

const fieldInputClass =
  "w-full h-12 px-4 rounded-xl border-2 border-neutral-200 bg-white text-neutral-900 focus-visible:border-primary-600 focus-visible:ring-4 focus-visible:ring-primary-200 focus-visible:outline-none";

export function RdvForm() {
  const [state, action, pending] = useActionState(submitRdv, initialState);
  const errorId = useId();
  const phoneHelpId = useId();
  const hasError = state.status === "error";
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasError && alertRef.current) {
      alertRef.current.focus();
      alertRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [hasError, state.message]);

  return (
    <form action={action} className="space-y-5" noValidate>
      <p className="text-sm text-neutral-600">
        Les champs marqués d'un{" "}
        <span className="text-danger-700 font-semibold" aria-hidden="true">
          *
        </span>{" "}
        sont obligatoires.
      </p>
      {/* Honeypot — hors-écran, invisible sans display:none */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label htmlFor="rdv-website">Ne pas remplir</label>
        <input
          id="rdv-website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className="block font-medium text-neutral-800 mb-2">
            Nom complet <span className="text-danger-700" aria-hidden="true">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            aria-required="true"
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            autoComplete="name"
            defaultValue={state.values?.nom ?? ""}
            className={fieldInputClass}
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block font-medium text-neutral-800 mb-2">
            Téléphone <span className="text-danger-700" aria-hidden="true">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={hasError}
            aria-describedby={hasError ? `${phoneHelpId} ${errorId}` : phoneHelpId}
            autoComplete="tel"
            inputMode="tel"
            pattern="^\+?[0-9\s().\-]{9,20}$"
            placeholder="048 72 25 70"
            defaultValue={state.values?.telephone ?? ""}
            className={fieldInputClass}
          />
          <p id={phoneHelpId} className="mt-2 text-sm text-neutral-600">
            Ex. 048 72 25 70, +213 555 12 34 56 ou +33 6 12 34 56 78.
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="motif" className="block font-medium text-neutral-800 mb-2">
          Motif
        </label>
        <select
          id="motif"
          name="motif"
          defaultValue={state.values?.motif ?? ""}
          className={fieldInputClass}
        >
          <option value="" disabled>
            — Sélectionner —
          </option>
          {motifs.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="font-medium text-neutral-800 mb-2">
          Créneau souhaité <span className="text-neutral-500 font-normal">(facultatif)</span>
        </legend>
        <div className="grid sm:grid-cols-3 gap-3">
          {creneaux.map((c) => (
            <label
              key={c.value}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-neutral-200 hover:border-primary-500 cursor-pointer bg-white has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary-700 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-white min-h-[48px]"
            >
              <input
                type="radio"
                name="creneau"
                value={c.value}
                defaultChecked={state.values?.creneau === c.value}
                className="sr-only peer"
              />
              <span
                aria-hidden="true"
                className="w-5 h-5 rounded-full border-2 border-neutral-300 peer-checked:border-primary-600 peer-checked:bg-primary-600 grid place-items-center shrink-0"
              >
                <span className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100" />
              </span>
              <span className="text-base">{c.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block font-medium text-neutral-800 mb-2">
          Message <span className="text-neutral-500 font-normal">(facultatif)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={state.values?.message ?? ""}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 bg-white text-neutral-900 focus-visible:border-primary-600 focus-visible:ring-4 focus-visible:ring-primary-200 focus-visible:outline-none"
          placeholder="Toute information utile à votre demande."
        />
        <p className="mt-2 text-sm text-neutral-600">
          Merci de ne pas transmettre d'informations médicales sensibles dans ce
          formulaire. Elles seront recueillies en consultation.
        </p>
      </div>

      <label className="flex items-start gap-3 text-base text-neutral-700 rounded-md has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary-700 has-[:focus-visible]:ring-offset-2 has-[:focus-visible]:ring-offset-white p-1 -m-1">
        <input
          type="checkbox"
          name="consent"
          required
          aria-required="true"
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className="mt-1 w-5 h-5 rounded accent-primary-600"
        />
        <span>
          J'autorise la Clinique ESSAADA à utiliser les informations
          ci-dessus pour me recontacter au sujet de ma demande de rendez-vous
          (loi 18-07 relative à la protection des données personnelles).
        </span>
      </label>

      {hasError && state.message && (
        <div
          id={errorId}
          ref={alertRef}
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          className="flex items-start gap-3 p-4 rounded-xl bg-danger-50 border border-danger-200 text-danger-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-danger-200"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white px-8 py-4 rounded-full font-semibold transition-colors min-h-[56px] focus-visible:ring-4 focus-visible:ring-primary-200"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
