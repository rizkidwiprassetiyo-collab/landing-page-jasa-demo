import React from "react";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CalendarCheck, CheckCircle2, ClipboardCheck, Clock, MessageCircle, Quote, Rocket, ShieldCheck, Sparkles, Star, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Konsultasi Strategi",
    description: "Sesi konsultasi untuk memahami masalah, menentukan prioritas, dan menyusun langkah kerja yang lebih jelas.",
    icon: Target,
  },
  {
    title: "Paket Implementasi",
    description: "Bantuan eksekusi untuk kebutuhan jasa, campaign, sistem kerja, konten, atau proses bisnis tertentu.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Pendampingan Bulanan",
    description: "Support rutin untuk evaluasi, perbaikan, dan pengembangan bertahap sesuai kebutuhan client.",
    icon: CalendarCheck,
  },
];

const packages = [
  {
    name: "Starter",
    price: "Mulai Rp499rb",
    description: "Untuk client yang butuh arahan awal dan rencana kerja sederhana.",
    items: ["1 sesi konsultasi", "Ringkasan masalah", "Rekomendasi langkah awal"],
  },
  {
    name: "Growth",
    price: "Mulai Rp1,5jt",
    description: "Untuk client yang ingin mulai eksekusi dengan struktur lebih jelas.",
    items: ["Konsultasi + analisis", "Rencana kerja detail", "Template/dokumen pendukung", "1x revisi strategi"],
    highlighted: true,
  },
  {
    name: "Partner",
    price: "Mulai Rp3jt/bln",
    description: "Untuk client yang butuh pendampingan rutin dan evaluasi berkala.",
    items: ["Support bulanan", "Review progress", "Prioritas komunikasi", "Rekomendasi optimasi"],
  },
];

const steps = [
  "Diskusi kebutuhan client",
  "Analisis masalah utama",
  "Susun rencana kerja",
  "Eksekusi / pendampingan",
  "Review hasil dan optimasi",
];

const testimonials = [
  {
    name: "Dina Mahesa",
    role: "Owner Bisnis Lokal",
    text: "Penjelasannya runtut dan langsung ke masalah utama. Saya jadi lebih mudah menentukan prioritas bisnis.",
  },
  {
    name: "Raka Putra",
    role: "Freelancer",
    text: "Landing page seperti ini membantu jasa terlihat lebih profesional dan mudah dijelaskan ke calon client.",
  },
  {
    name: "Maya Sari",
    role: "Founder Komunitas",
    text: "Struktur layanan, paket, dan CTA-nya jelas. Cocok untuk personal brand atau jasa konsultasi.",
  },
];

export default function LandingPageJasaDemo() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.28),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-fuchsia-400 text-neutral-950">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="font-semibold">PersonaPro</p>
                <p className="text-xs text-neutral-400">Demo Landing Page Jasa</p>
              </div>
            </div>
            <a href="https://wa.me/6285692943604?text=Halo%20saya%20ingin%20konsultasi%20layanan" className="hidden rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition hover:bg-white hover:text-neutral-950 md:inline-flex">
              Konsultasi
            </a>
          </nav>

          <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.04fr_0.96fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100">
                <BadgeCheck size={16} />
                Landing page untuk jasa & personal brand
              </div>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl md:leading-[1.05]">
                  Ubah keahlian menjadi penawaran jasa yang jelas dan meyakinkan.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-neutral-300 md:text-lg">
                  Demo landing page untuk freelancer, konsultan, coach, mentor, kursus, agency kecil, kreator, atau personal brand yang ingin menjelaskan layanan, paket, testimoni, dan mengarahkan calon client ke WhatsApp.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="https://wa.me/6285692943604?text=Halo%20saya%20ingin%20konsultasi%20layanan" className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-fuchsia-300">
                  Konsultasi via WhatsApp
                  <ArrowRight size={17} />
                </a>
                <a href="#paket" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Lihat Paket
                </a>
              </div>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                {["Penawaran jelas", "CTA WhatsApp", "Siap untuk iklan"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-neutral-300">
                    <CheckCircle2 size={17} className="text-fuchsia-300" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-neutral-950/40 backdrop-blur">
              <div className="rounded-[1.5rem] bg-white p-5 text-neutral-950">
                <div className="mb-5 rounded-[1.25rem] bg-gradient-to-br from-fuchsia-100 via-white to-purple-100 p-5">
                  <div className="rounded-2xl border border-white/80 bg-white/80 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-medium text-fuchsia-700">Preview Penawaran</p>
                    <h3 className="mt-3 text-2xl font-semibold">Strategi yang lebih terarah</h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">Masalah, solusi, paket layanan, testimoni, dan CTA dirangkum dalam satu halaman yang mudah dipahami.</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {["Problem jelas", "Benefit kuat", "Paket harga", "CTA langsung"].map((item) => (
                        <div key={item} className="rounded-2xl bg-white p-4 text-sm shadow-sm">
                          <CheckCircle2 className="mb-2 text-fuchsia-600" size={18} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <Users className="mb-3 text-neutral-700" size={20} />
                    <p className="text-sm font-semibold">Cocok untuk jasa</p>
                    <p className="mt-1 text-xs text-neutral-500">Freelancer, coach, kursus, agency</p>
                  </div>
                  <div className="rounded-2xl border border-neutral-200 p-4">
                    <Rocket className="mb-3 text-neutral-700" size={20} />
                    <p className="text-sm font-semibold">Siap campaign</p>
                    <p className="mt-1 text-xs text-neutral-500">Bisa dipakai untuk iklan dan bio link</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Masalah Umum</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Banyak jasa bagus, tapi penawarannya belum mudah dipahami.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Calon client tidak langsung paham jasa yang ditawarkan.",
            "Harga dan paket belum disusun dengan jelas.",
            "Testimoni dan bukti kerja belum ditampilkan rapi.",
            "Link promosi hanya mengarah ke chat tanpa penjelasan lengkap.",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <ShieldCheck className="mb-4 text-fuchsia-300" size={20} />
              <p className="text-sm leading-7 text-neutral-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Layanan</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Struktur layanan yang mudah dijual</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-neutral-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="paket" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Paket</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Paket layanan dibuat jelas dari awal</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <div key={item.name} className={`rounded-3xl border p-6 ${item.highlighted ? "border-fuchsia-300 bg-white text-neutral-950 shadow-2xl" : "border-white/10 bg-white/[0.04]"}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                {item.highlighted && <span className="rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-semibold text-fuchsia-800">Direkomendasikan</span>}
              </div>
              <p className={`mt-4 text-3xl font-semibold ${item.highlighted ? "text-neutral-950" : "text-fuchsia-200"}`}>{item.price}</p>
              <p className={`mt-3 text-sm leading-6 ${item.highlighted ? "text-neutral-600" : "text-neutral-300"}`}>{item.description}</p>
              <ul className="mt-6 space-y-3">
                {item.items.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${item.highlighted ? "text-neutral-700" : "text-neutral-300"}`}>
                    <CheckCircle2 size={17} className="text-fuchsia-400" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-900 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Proses</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Alur kerja yang membuat client merasa aman</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-400">Landing page jasa harus menjelaskan bukan hanya apa yang dijual, tapi juga bagaimana proses kerja berlangsung.</p>
          </div>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fuchsia-400 text-sm font-semibold text-neutral-950">{index + 1}</div>
                <p className="text-neutral-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-neutral-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Testimoni</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Social proof untuk meningkatkan kepercayaan</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-neutral-200 bg-neutral-50 p-6">
                <Quote className="mb-5 text-fuchsia-500" size={26} />
                <p className="text-sm leading-7 text-neutral-600">“{item.text}”</p>
                <div className="mt-5 border-t border-neutral-200 pt-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-neutral-500">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-fuchsia-400 p-8 text-neutral-950 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em]">Call to Action</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Siap mengubah layanan menjadi halaman penawaran yang lebih profesional?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-800">CTA bisa diarahkan ke WhatsApp, form konsultasi, Calendly, Google Form, atau sistem booking sesuai kebutuhan client.</p>
            </div>
            <a href="https://wa.me/6285692943604?text=Halo%20saya%20ingin%20konsultasi%20layanan" className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
              Chat WhatsApp
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-neutral-500 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p>© 2026 PersonaPro. Demo landing page jasa by NoTech.</p>
          <div className="flex items-center gap-2">
            <ClipboardCheck size={16} />
            Penawaran, paket, testimoni, proses, dan CTA WhatsApp.
          </div>
        </div>
      </footer>
    </main>
  );
}
