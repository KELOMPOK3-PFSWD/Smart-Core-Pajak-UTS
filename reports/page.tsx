import Link from "next/link";
import { reports, type Report } from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Core Pajak - Tax Modules",
  description: "Integrated national tax administration system.",
};

export default function ReportsPage() {
  return (
    <section className="min-h-screen bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Tax Monitoring
          </div>

          <h1 className="mt-5 text-5xl font-black text-slate-900">
            Tax Reports
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Monitoring dan validasi laporan perpajakan digital nasional
            secara realtime.
          </p>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Taxpayer</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">NPWP</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Tax Type</th>
                  <th className="px-8 py-5 text-left text-sm font-bold text-slate-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report: Report) => (
                  <tr
                    key={report.id}
                    className="border-t border-slate-100 transition hover:bg-cyan-50"
                  >
                    <td className="px-8 py-6 font-semibold text-slate-900">
                      <Link
                        href={`/reports/${report.id}`}
                        className="transition hover:text-cyan-600"
                      >
                        {report.taxpayer}
                      </Link>
                    </td>
                    <td className="px-8 py-6 text-slate-700">{report.npwp}</td>
                    <td className="px-8 py-6 text-slate-700">{report.taxType}</td>
                    <td className="px-8 py-6">
                      <span
                        className={`rounded-xl px-4 py-2 text-sm font-bold ${
                          report.status === "Verified"
                            ? "bg-emerald-100 text-emerald-700"
                            : report.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : report.status === "Approved"
                            ? "bg-cyan-100 text-cyan-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
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
  );
}