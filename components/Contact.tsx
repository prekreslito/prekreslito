"use client";

import { useState } from "react";
import UploadButton from "./uploader/UploadButton";

export default function Poptavka() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    files: [] as string[],
    website: "",
    createdAt: Date.now(),
  });

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
        files: [],
        website: "",
        createdAt: Date.now(),
      });
    } else {
      alert("Nepodařilo se odeslat poptávku.");
    }
  }

  return (
    <section
      id="poptavka"
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8 md:py-24 lg:py-32"
    >
      <div className="text-center">

        <span className="text-sm uppercase tracking-[4px] text-cyan-400 sm:text-base">
          Poptávka
        </span>

        <h2 className="mt-5 text-4xl font-black sm:text-5xl lg:text-6xl">
          Nezávazná poptávka
        </h2>

        <p className="mt-6 text-lg text-slate-400 sm:text-xl">
          Vyplňte formulář a připravím vám cenovou nabídku zdarma.
        </p>

      </div>

      {!success && (
        <>

          <div className="mx-auto mt-12 max-w-2xl rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-6 shadow-xl backdrop-blur-xl sm:p-8">

            <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-20">

              <div className="text-center">

                <div className="text-5xl">
                  💰
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Cenová nabídka zdarma
                </h3>

              </div>

              <div className="text-center">

                <div className="text-5xl">
                  ✅
                </div>

                <h3 className="mt-4 text-lg font-bold">
                  Neplatíte předem
                </h3>

              </div>

            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-12 max-w-4xl space-y-6"
          >
                      <input
              type="text"
              name="website"
              autoComplete="off"
              tabIndex={-1}
              value={form.website}
              onChange={(e) =>
                setForm({
                  ...form,
                  website: e.target.value,
                })
              }
              className="hidden"
            />

            <input
              type="text"
              required
              placeholder="👤 Jméno *"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg transition-all duration-300 focus:border-cyan-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            />

            <input
              type="email"
              required
              placeholder="📧 E-mail *"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg transition-all duration-300 focus:border-cyan-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            />

            <input
              type="tel"
              placeholder="📞 Telefon"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg transition-all duration-300 focus:border-cyan-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            />

            <select
              required
              value={form.projectType}
              onChange={(e) =>
                setForm({
                  ...form,
                  projectType: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-[#111827] px-6 py-5 text-lg transition-all duration-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            >
              <option value="">
                Vyberte typ projektu
              </option>

              <option>Rodinný dům</option>
              <option>Chata</option>
              <option>Garáž</option>
              <option>Jiný projekt</option>

            </select>
                        <div className="rounded-3xl border-2 border-dashed border-cyan-500/30 bg-white/5 p-6 sm:p-8">

              <h3 className="mb-4 text-center text-xl font-bold sm:text-2xl">
                Nahrajte výkresy
              </h3>

              <p className="mb-6 text-center text-slate-400">
                Můžete nahrát až <strong>30 souborů</strong>.
                <br />
                PDF • DWG • DXF • DOC • DOCX • XLS • XLSX • JPG • PNG • WEBP • ZIP • RAR • 7Z
              </p>

              <div className="flex justify-center">

                <UploadButton
                  onUploaded={(urls) =>
                    setForm((prev) => ({
                      ...prev,
                      files: urls,
                    }))
                  }
                />

              </div>

            </div>

            <textarea
              rows={6}
              placeholder="📝 Popis projektu"
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg transition-all duration-300 focus:border-cyan-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
            />

            <button
              disabled={loading}
              className="w-full rounded-2xl bg-cyan-500 py-5 text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70 sm:text-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Odesílám...
                </span>
              ) : (
                "Odeslat nezávaznou poptávku"
              )}
            </button>

          </form>

        </>
      )}

      {success && (

        <div className="mx-auto mt-14 max-w-5xl">

          <div className="rounded-[40px] border border-green-500/20 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-cyan-500/10 p-8 text-center shadow-[0_0_80px_rgba(34,197,94,0.15)] backdrop-blur-2xl sm:p-14">

            <div className="mx-auto flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-green-500 text-6xl shadow-2xl sm:h-32 sm:w-32 sm:text-7xl">
              ✅
            </div>

            <h2 className="mt-8 text-4xl font-black sm:mt-10 sm:text-5xl">
              Děkujeme!
            </h2>
                        <p className="mt-6 text-xl text-slate-300 sm:mt-8 sm:text-2xl">
              Vaše poptávka byla úspěšně odeslána.
            </p>

            <p className="mt-4 text-base text-slate-400 sm:text-lg">
              Potvrzení bylo odesláno na váš e-mail.
            </p>

            <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-black/20 p-6 sm:mt-12 sm:p-8">

              <h3 className="mb-6 text-xl font-bold sm:text-2xl">
                Co bude následovat?
              </h3>

              <div className="space-y-5 text-left">

                <div className="flex items-center gap-4">
                  <span className="text-3xl">📂</span>
                  <span>Zkontroluji všechny nahrané soubory.</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl">💰</span>
                  <span>Připravím cenovou nabídku zdarma.</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-3xl">📧</span>
                  <span>Ozvu se vám co nejdříve na e-mail nebo telefon.</span>
                </div>

              </div>

            </div>

            <button
              type="button"
              onClick={() => {
                setSuccess(false);

                setForm({
                  name: "",
                  email: "",
                  phone: "",
                  projectType: "",
                  message: "",
                  files: [],
                  website: "",
                  createdAt: Date.now(),
                });
              }}
              className="mt-10 w-full rounded-2xl bg-cyan-500 px-8 py-5 text-lg font-bold transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-400 sm:mt-12 sm:w-auto sm:px-10 sm:text-xl"
            >
              Odeslat další poptávku
            </button>

          </div>

        </div>

      )}

    </section>
  );
}