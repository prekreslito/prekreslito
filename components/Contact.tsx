"use client";

import { useState } from "react";

export default function Poptavka() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
      alert("Poptávka byla úspěšně odeslána.");

      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } else {
      alert("Něco se pokazilo.");
    }
  }

  return (
    <section
      id="poptavka"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center">

        <span className="text-cyan-400 uppercase tracking-[4px]">
          Poptávka
        </span>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black">
          Nezávazná poptávka
        </h2>

        <p className="mt-6 text-slate-400 text-xl">
          Vyplňte formulář a připravím vám cenovou nabídku zdarma.
        </p>

      </div>

      <div className="mt-14 mx-auto max-w-2xl rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-xl p-8 shadow-xl">

        <div className="flex justify-center items-center gap-20">

          <div className="text-center">
            <div className="text-5xl">💰</div>
            <h3 className="mt-4 text-lg font-bold">
              Cenová nabídka zdarma
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">✅</div>
            <h3 className="mt-4 text-lg font-bold">
              Neplatíte předem
            </h3>
          </div>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-16 mx-auto max-w-4xl space-y-6"
      >

        <input
          type="text"
          placeholder="Jméno *"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg"
        />

        <input
          type="email"
          placeholder="E-mail *"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg"
        />

        <input
          type="tel"
          placeholder="Telefon"
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg"
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
          className="w-full rounded-2xl border border-white/10 bg-[#111827] px-6 py-5 text-lg"
        >
          <option value="">Vyberte typ projektu</option>
          <option>Rodinný dům</option>
          <option>Chata</option>
          <option>Garáž</option>
          <option>Jiný projekt</option>
        </select>

        <textarea
          rows={6}
          placeholder="Popis projektu"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg"
        />

        <button
          disabled={loading}
          className="w-full rounded-2xl bg-cyan-500 py-5 text-xl font-bold hover:bg-cyan-400"
        >
          {loading ? "Odesílám..." : "Odeslat nezávaznou poptávku"}
        </button>

      </form>
    </section>
  );
}