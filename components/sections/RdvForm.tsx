"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useTranslations } from "next-intl";
import { AlertCircle, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { submitRdv, type RdvFormState } from "@/app/[locale]/rendez-vous/actions";
import { site, waUrl } from "@/lib/site";

const initialState: RdvFormState = { status: "idle" };

// `value` reste en français : il est inséré tel quel dans l'e-mail (FR) envoyé à la clinique (actions.ts).
const motifs = [
  { value: "1ère consultation néphrologie", key: "consultationNephrologie" },
  { value: "Dialyse de passage (vacances)", key: "dialysePassage" },
  { value: "Suivi / renouvellement", key: "suiviRenouvellement" },
  { value: "Autre", key: "autre" },
];

const creneaux = [
  { value: "matin", labelKey: "matin" },
  { value: "journee", labelKey: "journee" },
  { value: "soir", labelKey: "soir" },
];

const fieldInputClass =
  "w-full h-12 px-4 rounded-xl border-2 border-neutral-200 bg-white text-neutral-900 focus-visible:border-primary-600 focus-visible:ring-4 focus-visible:ring-primary-200 focus-visible:outline-none";

export function RdvForm() {
  const t = useTranslations("rendezVous");
  const [state, action, pending] = useActionState(submitRdv, initialState);
  const errorId = useId();
  const phoneHelpId = useId();
  const hasError = state.status === "error";
  const isWhatsapp = state.status === "whatsapp";
  const alertRef = useRef<HTMLDivElement>(null);
  const confirmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasError && alertRef.current) {
      alertRef.current.focus();
      alertRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [hasError, state.message]);

  useEffect(() => {
    if (isWhatsapp && confirmRef.current) {
      confirmRef.current.focus();
      confirmRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isWhatsapp]);

  if (isWhatsapp) {
    return (
      <div
        ref={confirmRef}
        tabIndex={-1}
        className="rounded-2xl bg-accent-50 border border-accent-600/40 p-8 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent-600/30"
      >
        <CheckCircle2 className="w-12 h-12 text-accent-600 mx-auto mb-4" aria-hidden="true" />
        <h2 className="font-display text-2xl font-bold text-neutral-900 mb-2">
          {t("whatsappHandoff.title")}
        </h2>
        <p className="text-neutral-700 mb-6">{t("whatsappHandoff.body")}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={waUrl(state.waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb558] text-white px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {t("whatsappHandoff.whatsappCta")}
          </a>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 border border-primary-200 hover:bg-primary-50 px-6 py-4 rounded-full font-semibold min-h-[56px] transition-colors"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            {t("success.callCta")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" noValidate>
      <p className="text-sm text-neutral-600">
        {t("form.requiredIntro.before")}{" "}
        <span className="text-danger-700 font-semibold" aria-hidden="true">
          *
        </span>{" "}
        {t("form.requiredIntro.after")}
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
        <label htmlFor="rdv-website">{t("form.honeypotLabel")}</label>
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
            {t("form.nom.label")} <span className="text-danger-700" aria-hidden="true">*</span>
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
            {t("form.telephone.label")} <span className="text-danger-700" aria-hidden="true">*</span>
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
            {t("form.telephone.help")}
          </p>
        </div>
      </div>

      <div>
        <label htmlFor="motif" className="block font-medium text-neutral-800 mb-2">
          {t("form.motif.label")}
        </label>
        <select
          id="motif"
          name="motif"
          defaultValue={state.values?.motif ?? ""}
          className={fieldInputClass}
        >
          <option value="" disabled>
            {t("form.motif.placeholder")}
          </option>
          {motifs.map((m) => (
            <option key={m.key} value={m.value}>
              {t(`form.motif.options.${m.key}`)}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className="font-medium text-neutral-800 mb-2">
          {t("form.creneau.legend")} <span className="text-neutral-500 font-normal">{t("form.optional")}</span>
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
              <span className="text-base">{t(`form.creneau.options.${c.labelKey}`)}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block font-medium text-neutral-800 mb-2">
          {t("form.message.label")} <span className="text-neutral-500 font-normal">{t("form.optional")}</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={state.values?.message ?? ""}
          className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 bg-white text-neutral-900 focus-visible:border-primary-600 focus-visible:ring-4 focus-visible:ring-primary-200 focus-visible:outline-none"
          placeholder={t("form.message.placeholder")}
        />
        <p className="mt-2 text-sm text-neutral-600">
          {t("form.message.notice")}
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
          {t("form.consent")}
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
        {pending ? t("form.submitting") : t("form.submit")}
      </button>
    </form>
  );
}
