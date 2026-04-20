"use client";

import { useActionState } from "react";
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

export function RdvForm() {
  const [state, action, pending] = useActionState(submitRdv, initialState);

  return (
    <form action={action} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nom" className="block font-medium text-neutral-800 mb-2">
            Nom complet <span className="text-red-600">*</span>
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            required
            autoComplete="name"
            className="w-full h-12 px-4 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none bg-white text-neutral-900"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="block font-medium text-neutral-800 mb-2">
            Téléphone <span className="text-red-600">*</span>
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="+213 00 00 00 00 00"
            className="w-full h-12 px-4 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none bg-white text-neutral-900"
          />
        </div>
      </div>

      <div>
        <label htmlFor="motif" className="block font-medium text-neutral-800 mb-2">
          Motif
        </label>
        <select
          id="motif"
          name="motif"
          defaultValue=""
          className="w-full h-12 px-4 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none bg-white text-neutral-900"
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
        <legend className="font-medium text-neutral-800 mb-2">Créneau souhaité</legend>
        <div className="grid sm:grid-cols-3 gap-3">
          {creneaux.map((c) => (
            <label
              key={c.value}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-neutral-200 hover:border-primary-500 cursor-pointer bg-white has-[:checked]:border-primary-600 has-[:checked]:bg-primary-50"
            >
              <input
                type="radio"
                name="creneau"
                value={c.value}
                className="w-5 h-5 accent-primary-600"
              />
              <span className="text-base">{c.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block font-medium text-neutral-800 mb-2">
          Message (facultatif)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:border-primary-500 focus:outline-none bg-white text-neutral-900"
          placeholder="Toute information utile à votre demande."
        />
        <p className="mt-2 text-sm text-neutral-500">
          Merci de ne pas transmettre d'informations médicales sensibles dans ce
          formulaire. Elles seront recueillies en consultation.
        </p>
      </div>

      <label className="flex items-start gap-3 text-base text-neutral-700">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 w-5 h-5 rounded accent-primary-600"
        />
        <span>
          J'autorise la Clinique ESSAADA à utiliser les informations
          ci-dessus pour me recontacter au sujet de ma demande de rendez-vous
          (loi 18-07 relative à la protection des données personnelles).
        </span>
      </label>

      {state.status === "error" && state.message && (
        <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
          <p>{state.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white px-8 py-4 rounded-full font-semibold transition-colors min-h-[56px]"
      >
        {pending ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
