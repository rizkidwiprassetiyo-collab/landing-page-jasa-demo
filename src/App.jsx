import React from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  MessageCircle,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const whatsappNumber = "6285692943604";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

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

const problems = [
  "Calon client belum langsung paham jasa yang ditawarkan.",
  "Benefit, proses, dan harga belum tersusun dengan rapi.",
  "Portofolio dan testimoni belum tampil meyakinkan.",
  "Promosi hanya mengarah ke chat tanpa penjelasan lengkap.",
];

const steps = [
  "Diskusi kebutuhan client",
  "Analisis masalah utama",
  "Susun penawaran yang jelas",
  "Eksekusi atau pendampingan",
  "Review hasil dan optimasi",
];

const audiences = [
  "Freelancer",
  "Konsultan",
  "Coach / mentor",
  "Kursus",
  "Agency kecil",
  "Fotografer",
  "Desainer interior",
  "Personal brand",
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

const faq = [
  {
    q: "Untuk siapa landing page jasa seperti ini?",
    a: "Cocok untuk freelancer, konsultan, coach, kursus, agency kecil, fotografer, desainer interior, dan personal brand yang menjual keahlian atau layanan.",
  },
  {
    q: "Apa bedanya dengan website profil biasa?",
    a: "Landing page jasa lebih fokus pada penawaran: masalah client, solusi, benefit, paket, testimoni, proses, dan CTA untuk konsultasi.",
  },
  {
    q: "Apakah bisa dipakai untuk iklan?",
    a: "Bisa. Struktur seperti ini cocok untuk diarahkan dari iklan, bio sosial media, WhatsApp, atau kartu nama digital.",
  },
];

function buildWhatsappLink(text) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function LandingPageJasaPremiumDemo() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0614] text-white selection:bg-fuchsia-300 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(217,70,239,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.13),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.045] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:52px_52px]" />

      <section className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-7 md:px-10 lg:px-12">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-fuchsia-400 text-slate-950 shadow-[0_0_42px_rgba(232,121,249,0.30)]"
              >
                <Sparkles size={23} />
              </motion.div>
              <div>
                <p className="font-semibold tracking-wide">PersonaPro</p>
                <p className="text-xs text-slate-400">Demo Landing Page Jasa</p>
              </div>
            </div>
            <a
              href={buildWhatsappLink("Halo, saya ingin konsultasi layanan.")}
              className="hidden rounded-full border border-white/15 bg-white/[0.04] px-5 py-2 text-sm font-semibold text-slate-200 backdrop-blur transition hover:border-fuchsia-200/60 hover:bg-white hover:text-slate-950 md:inline-flex"
            >
              Konsultasi
            </a>
          </nav>

          <div className="grid items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-7">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm text-fuchsia-100 shadow-[0_0_34px_rgba(232,121,249,0.08)] backdrop-blur">
                <BadgeCheck size={16} />
                Landing page untuk jasa & personal brand
              </motion.div>

              <motion.div variants={fadeUp} className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.04]">
                  Ubah keahlian menjadi penawaran jasa yang jelas dan meyakinkan.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Demo landing page untuk freelancer, konsultan, coach, mentor, kursus, agency kecil, kreator, atau personal brand yang ingin menjelaskan layanan, paket, testimoni, dan mengarahkan calon client ke WhatsApp.
                </p>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={buildWhatsappLink("Halo, saya ingin konsultasi layanan.")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(232,121,249,0.25)] transition hover:-translate-y-0.5 hover:bg-fuchsia-300"
                >
                  Konsultasi via WhatsApp
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a
                  href="#paket"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Lihat Paket
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-3 pt-4 sm:grid-cols-3">
                {["Penawaran jelas", "CTA WhatsApp", "Siap untuk iklan"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <CheckCircle2 size={17} className="text-fuchsia-300" />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-[2.75rem] bg-fuchsia-400/10 blur-3xl" />
              <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl shadow-slate-950/35 backdrop-blur-xl">
                <div className="rounded-[1.75rem] bg-white p-5 text-slate-950">
                  <div className="rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(232,121,249,0.24),transparent_32%),linear-gradient(135deg,#fdf4ff,#ffffff,#dbeafe)] p-5">
                    <div className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-2xl shadow-fuchsia-950/10 backdrop-blur">
                      <p className="text-sm font-semibold text-fuchsia-700">Preview Penawaran</p>
                      <h3 className="mt-3 text-2xl font-semibold">Strategi yang lebih terarah</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        Masalah, solusi, paket layanan, testimoni, dan CTA dirangkum dalam satu halaman yang mudah dipahami.
                      </p>
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {["Problem jelas", "Benefit kuat", "Paket harga", "CTA langsung"].map((item) => (
                          <div key={item} className="rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/60">
                            <CheckCircle2 className="mb-3 text-fuchsia-600" size={19} />
                            <p className="text-sm font-medium">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <Users className="mb-3 text-slate-700" size={20} />
                      <p className="text-sm font-semibold">Cocok untuk jasa</p>
                      <p className="mt-1 text-xs text-slate-500">Freelancer, coach, kursus, agency</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                      <Rocket className="mb-3 text-slate-700" size={20} />
                      <p className="text-sm font-semibold">Siap campaign</p>
                      <p className="mt-1 text-xs text-slate-500">Bisa dipakai untuk iklan dan bio link</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Fokus", "Jasa & Personal Brand", "Dibuat untuk orang atau bisnis yang menjual keahlian, layanan, konsultasi, atau paket kerja."],
            ["Tujuan", "Penawaran Lebih Jelas", "Calon client lebih cepat memahami masalah, solusi, paket, dan langkah untuk menghubungi."],
            ["Brand", "Demo by NoTech", "Contoh landing page ini dibuat sebagai bagian dari portofolio NoTech Digital Studio."],
          ].map(([label, title, description]) => (
            <motion.div whileHover={{ y: -6 }} key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">{label}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <section className="relative z-10 border-y border-white/10 bg-white/[0.03]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:px-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Masalah Umum</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Banyak jasa bagus, tapi penawarannya belum mudah dipahami.</h2>
            <p className="mt-5 text-sm leading-7 text-slate-400">Landing page membantu mengubah penjelasan jasa menjadi alur yang lebih meyakinkan.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((item) => (
              <motion.div whileHover={{ y: -6 }} key={item} className="rounded-[2rem] border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
                <ShieldCheck className="mb-5 text-fuchsia-300" size={21} />
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Layanan</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Struktur layanan yang mudah dijual</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div variants={fadeUp} whileHover={{ y: -8 }} key={service.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-2xl hover:shadow-fuchsia-950/10">
                  <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-fuchsia-100 text-fuchsia-700">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="paket" className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Paket</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Paket layanan dibuat jelas dari awal</h2>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <motion.div variants={fadeUp} whileHover={{ y: -8 }} key={item.name} className={`rounded-[2rem] border p-6 shadow-2xl ${item.highlighted ? "border-fuchsia-300 bg-fuchsia-400 text-slate-950 shadow-fuchsia-950/20" : "border-white/10 bg-white/[0.055] text-white shadow-slate-950/20 backdrop-blur"}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                {item.highlighted && <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-fuchsia-100">Direkomendasikan</span>}
              </div>
              <p className="mt-4 text-3xl font-semibold">{item.price}</p>
              <p className={`mt-3 text-sm leading-6 ${item.highlighted ? "text-slate-800" : "text-slate-400"}`}>{item.description}</p>
              <ul className="mt-6 space-y-3">
                {item.items.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${item.highlighted ? "text-slate-800" : "text-slate-300"}`}>
                    <CheckCircle2 size={17} className={item.highlighted ? "text-slate-950" : "text-fuchsia-300"} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Proses</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Alur kerja yang membuat client merasa aman</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">Landing page jasa harus menjelaskan bukan hanya apa yang dijual, tapi juga bagaimana proses kerja berlangsung.</p>
          </motion.div>
          <div className="space-y-3">
            {steps.map((step, index) => (
              <motion.div whileHover={{ x: 6 }} key={step} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-fuchsia-500 text-sm font-semibold text-white">{index + 1}</div>
                <p className="text-slate-700">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Target Client</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Cocok untuk jasa dan personal brand yang ingin terlihat lebih profesional</h2>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item) => (
            <motion.div whileHover={{ x: 6 }} key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm text-slate-300 backdrop-blur">
              <CheckCircle2 size={17} className="text-fuchsia-300" />
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 bg-white py-20 text-slate-950">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-700">Testimoni</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Social proof untuk meningkatkan kepercayaan</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div variants={fadeUp} whileHover={{ y: -8 }} key={item.name} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-2xl hover:shadow-fuchsia-950/10">
                <Quote className="mb-5 text-fuchsia-500" size={26} />
                <p className="text-sm leading-7 text-slate-600">“{item.text}”</p>
                <div className="mt-6 border-t border-slate-200 pt-5">
                  <p className="font-semibold">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-300">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Pertanyaan umum calon client</h2>
        </motion.div>
        <div className="space-y-4">
          {faq.map((item) => (
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} key={item.q} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur">
              <h3 className="font-semibold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[2.25rem] border border-fuchsia-200/30 bg-fuchsia-400 p-8 text-slate-950 shadow-[0_0_80px_rgba(232,121,249,0.22)] md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.48fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm text-fuchsia-100">
                <Zap size={16} />
                Penawaran jasa siap dikirim
              </div>
              <h2 className="text-3xl font-semibold md:text-4xl">Siap mengubah layanan menjadi halaman penawaran yang lebih profesional?</h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-800 md:text-base">
                CTA bisa diarahkan ke WhatsApp, form konsultasi, Calendly, Google Form, atau sistem booking sesuai kebutuhan client.
              </p>
            </div>
            <a href={buildWhatsappLink("Halo, saya ingin konsultasi landing page jasa.")} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Chat WhatsApp
              <MessageCircle size={17} />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-6 py-8 text-sm text-slate-500 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row md:items-center">
          <p>© 2026 PersonaPro. Demo Landing Page Jasa.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <ClipboardCheck size={16} />
            Demo by NoTech Digital Studio
          </div>
        </div>
      </footer>
    </main>
  );
}
