import Link from "next/link";
import { services, officers, reports } from "@/data/data";
import type { Service, Officer, Report } from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Core Pajak - Tax Modules",
  description: "Integrated national tax administration system.",
};

const StatCard = ({
  label,
  value,
  colorClass = "text-white",
}: {
  label: string;
  value: string;
  colorClass?: string;
}) => (
  <div className="rounded-3xl border border-slate-800 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
    <h3 className={`text-3xl font-black ${colorClass}`}>{value}</h3>
    <p className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider">{label}</p>
  </div>
);

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.1),transparent_40%)]"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Hero Left */}
            <div>
              <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                Smart Core Pajak System v2.0
              </div>

              <h1 className="mt-8 text-5xl font-black leading-[1.1] md:text-7xl">
                Digitalisasi
                <span className="block text-cyan-400">Administrasi Pajak</span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                Platform modern untuk pengelolaan perpajakan, validasi NPWP,
                monitoring transaksi, dan laporan pajak realtime yang terintegrasi.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/login"
                  className="rounded-2xl bg-cyan-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                >
                  Login System
                </Link>

                <Link
                  href="/services"
                  className="rounded-2xl border border-slate-700 px-8 py-4 font-bold text-white transition hover:bg-slate-900 hover:border-slate-500"
                >
                  Tax Services
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-3 gap-5">
                <StatCard label="Reports" value="12K+" colorClass="text-cyan-400" />
                <StatCard label="Users" value="8K+" />
                <StatCard label="Uptime" value="99.9%" colorClass="text-emerald-400" />
              </div>
            </div>

            {/* Hero Right / Dashboard Preview */}
            <div className="rounded-[40px] border border-slate-800 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-sm lg:p-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">System Monitor</h3>
                  <p className="text-sm text-slate-500">Realtime network status</p>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
                  LIVE
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Revenue", val: "Rp 2.4B", col: "text-cyan-400" },
                  { label: "Entities", val: "542", col: "text-white" },
                  { label: "Validation", val: "Active", col: "text-emerald-400" },
                  { label: "Latency", val: "24ms", col: "text-yellow-400" },
                ].map((item, i) => (
                  <div key={i} className="rounded-3xl bg-slate-950/50 border border-slate-800/50 p-6 transition hover:border-slate-700">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.label}</p>
                    <h4 className={`mt-3 text-2xl font-black ${item.col}`}>{item.val}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-3xl">
            <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-bold text-cyan-700">
              Core Capabilities
            </div>
            <h2 className="mt-5 text-5xl font-black text-slate-900">Core System Services</h2>
            <p className="mt-6 text-xl text-slate-600">
              Solusi end-to-end untuk kebutuhan administrasi pajak modern.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service: Service, index: number) => (
              <Link
                key={index}
                href={`/services/${service.id}`}
                className="group rounded-[32px] bg-white p-8 shadow-sm border border-slate-100 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-50 text-3xl transition group-hover:bg-cyan-500 group-hover:text-white">
                  {service.icon}
                </div>
                <h3 className="mt-8 text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-slate-500 leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICERS */}
      <section id="officers" className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-600">
            Our Experts
          </div>
          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Professional <span className="text-cyan-600">Tax Officers</span>
          </h2>
          
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {officers.map((officer: Officer) => (
              <Link
                key={officer.id}
                href={`/officers/${officer.id}`}
                className="group relative overflow-hidden rounded-[32px] border border-slate-200 p-8 transition hover:border-cyan-500/50 hover:shadow-xl"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-5xl transition group-hover:scale-110">
                  👨‍💼
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900">{officer.name}</h3>
                  <p className="mt-2 font-medium text-cyan-600">{officer.specialty}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS SECTION */}
      <section className="bg-slate-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-4xl font-black text-white">Live Reporting</h2>
              <p className="mt-4 text-slate-400 text-lg">Pantau status verifikasi pajak secara langsung.</p>
            </div>
            <Link href="/reports" className="text-cyan-400 font-bold hover:underline">
              View All Reports →
            </Link>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/50 backdrop-blur">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-slate-800 bg-slate-800/50 text-sm font-bold uppercase tracking-wider text-slate-400">
                  <tr>
                    <th className="px-8 py-5">Taxpayer</th>
                    <th className="px-8 py-5">NPWP</th>
                    <th className="px-8 py-5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {reports.slice(0, 5).map((report: Report) => (
                    <tr key={report.id} className="transition hover:bg-white/5">
                      <td className="px-8 py-6 font-bold text-white">{report.taxpayer}</td>
                      <td className="px-8 py-6 text-slate-400 font-mono">{report.npwp}</td>
                      <td className="px-8 py-6">
                        <span className={`inline-block rounded-lg px-3 py-1 text-xs font-black uppercase ${
                          report.status === "Verified" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
                        }`}>
                          {report.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}