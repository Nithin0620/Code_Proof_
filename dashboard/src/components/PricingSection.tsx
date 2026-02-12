export default function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          Pricing
        </p>
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Start free, scale to enterprise
        </h2>
        <p className="text-sm text-slate-600 sm:text-base">
          Choose the right level of enforcement for your team, from local VS Code
          usage to organization-wide CI/CD integration.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {/* Free tier */}
        <div className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 text-left shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Free
          </p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            VS Code extension
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Local pre-commit enforcement for individual developers.
          </p>
          <div className="mt-4 text-2xl font-semibold text-slate-900">
            $0
            <span className="text-sm font-normal text-slate-500">
              {" "}
              / developer
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Includes a generous rate limit suitable for most personal use.
          </p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
            <li>• VS Code extension access</li>
            <li>• Local scans with sensible rate limits</li>
            <li>• Basic report history on this device</li>
          </ul>
          <button
            type="button"
            className="mt-6 w-full rounded-xl border border-slate-300 bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Install extension
          </button>
        </div>

        {/* Premium tier */}
        <div className="flex flex-col rounded-2xl border border-slate-900 bg-slate-900 px-6 py-7 text-left text-slate-50 shadow-md ring-2 ring-slate-900">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Premium
          </p>
          <h3 className="mt-3 text-lg font-semibold text-white">
            Unlimited usage
          </h3>
          <p className="mt-2 text-sm text-slate-200">
            Full access for growing teams that need aggressive enforcement.
          </p>
          <div className="mt-4 text-2xl font-semibold text-white">
            $9.99
            <span className="text-sm font-normal text-slate-300">
              {" "}
              / developer / month
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-300">
            Unlimited protected projects, reports, and findings.
          </p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-100">
            <li>• Unlimited VS Code and CLI usage</li>
            <li>• Unlimited projects and report retention</li>
            <li>• Priority support and onboarding</li>
          </ul>
          <button
            type="button"
            className="mt-6 w-full rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            Talk to sales
          </button>
        </div>

        {/* Corporate API tier */}
        <div className="flex flex-col rounded-2xl border border-slate-200/70 bg-white p-6 text-left shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Enterprise
          </p>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">
            Corporate API
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Hardened API for large organizations to integrate into CI/CD.
          </p>
          <div className="mt-4 text-2xl font-semibold text-slate-900">
            Custom
            <span className="text-sm font-normal text-slate-500">
              {" "}
              / contract
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Designed for high volume pipelines, multiple business units, and
            strict compliance.
          </p>
          <ul className="mt-4 flex-1 space-y-2 text-sm text-slate-600">
            <li>• Signed corporate API with SLAs</li>
            <li>• CI/CD pipeline integration examples</li>
            <li>• SSO, audit exports, and dedicated support</li>
          </ul>
          <button
            type="button"
            className="mt-6 w-full rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-100"
          >
            Contact enterprise team
          </button>
        </div>
      </div>
    </section>
  );
}

