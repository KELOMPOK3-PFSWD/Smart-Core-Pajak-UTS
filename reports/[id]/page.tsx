import Link from "next/link";
import { reports } from "@/data/data";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReportDetailPage({ params }: Props) {
  const { id } = await params;
  const report = reports.find((item) => String(item.id) === id);

  if (!report) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <div className="rounded-[40px] border border-slate-200 bg-white p-16 text-center shadow-xl">
          <span className="mb-6 block text-7xl">📄</span>
          <h1 className="text-4xl font-black text-slate-900">Report Not Found</h1>
          <p className="mt-4 text-lg text-slate-500">The requested taxpayer report could not be found.</p>
          <Link
            href="/reports"
            className="mt-8 inline-block rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white transition hover:bg-cyan-500 hover:text-slate-950"
          >
            Back to Reports
          </Link>
        </div>
      </section>
    );
  }

  // Objek helper untuk mapping warna status agar JSX tetap bersih
  const statusColors: Record<string, string> = {
    Verified: "bg-emerald-500/10 text-emerald-400",
    Pending: "bg-yellow-500/10 text-yellow-400",
    Approved: "bg-cyan-500/10 text-cyan-400",
    Rejected: "bg-orange-500/10 text-orange-400",
  };

  return (
    <section className="min-h-screen bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Navigation */}
        <Link
          href="/reports"
          className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-700 shadow-sm transition hover:bg-slate-950 hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Reports
        </Link>

        <div className="mt-8 overflow-hidden rounded-[48px] border border-white bg-white shadow-xl shadow-slate-200/50">
          
          {/* Hero Header */}
          <div className="relative overflow-hidden bg-slate-950 px-10 py-16 text-white">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                  Taxpayer Report
                </div>
                <h1 className="mt-6 text-5xl font-black tracking-tight">{report.taxpayer}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                  Detailed taxpayer reporting information and digital tax administration data from Smart Core Pajak.
                </p>
              </div>

              {/* Status Badge */}
              <div className={`rounded-[40px] border border-white/10 px-10 py-8 text-center backdrop-blur-xl ${statusColors[report.status] || "bg-slate-500/10 text-slate-400"}`}>
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-70">Report Status</p>
                <h2 className="mt-4 text-5xl font-black tracking-tighter">{report.status}</h2>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid gap-6 p-10 md:grid-cols-2 xl:grid-cols-4">
            {[
              { label: "NPWP Number", value: report.npwp, color: "text-slate-900" },
              { label: "Tax Type", value: report.taxType, color: "text-cyan-500" },
              { label: "Tax Period", value: "2025", color: "text-slate-900" },
              { label: "Total Amount", value: "Rp 125M", color: "text-emerald-500" },
            ].map((info, idx) => (
              <div key={idx} className="rounded-[32px] border border-slate-100 bg-slate-50 p-8">
                <p className="text-xs font-black uppercase tracking-widest text-slate-400">{info.label}</p>
                <h3 className={`mt-4 text-2xl font-black ${info.color}`}>{info.value}</h3>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="px-10 pb-6">
            <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-10">
              <h2 className="text-3xl font-black text-slate-900">Report Summary</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                <p>Laporan pajak ini telah diproses melalui sistem Smart Core Pajak untuk memastikan validasi data wajib pajak secara realtime dan terintegrasi.</p>
                <p>Semua data administrasi perpajakan telah diverifikasi sesuai regulasi perpajakan nasional guna menjaga keamanan dan transparansi.</p>
              </div>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="border-t border-slate-100 px-10 py-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Activity Logs</h2>
                <p className="mt-2 text-slate-500">Latest taxpayer reporting activities.</p>
              </div>
              <div className="inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-3 text-xs font-black uppercase tracking-widest text-cyan-600">
                Monitoring Active
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {[
                { title: "Taxpayer identity validated", time: "10 mins ago", status: "Verified", color: "bg-emerald-50 text-emerald-600" },
                { title: "Tax payment successfully received", time: "25 mins ago", status: "Paid", color: "bg-cyan-50 text-cyan-600" },
                { title: "National database synchronization completed", time: "1 hour ago", status: "Synced", color: "bg-yellow-50 text-yellow-600" },
              ].map((log, index) => (
                <div key={index} className="flex items-center justify-between rounded-3xl border border-slate-100 p-6 transition hover:bg-slate-50">
                  <div>
                    <h3 className="font-black text-slate-900">{log.title}</h3>
                    <p className="mt-1 text-sm font-bold text-slate-400">{log.time}</p>
                  </div>
                  <span className={`rounded-xl px-4 py-2 text-xs font-black uppercase ${log.color}`}>{log.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex flex-col gap-4 border-t border-slate-100 px-10 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-black text-slate-900">Download Tax Report</h3>
              <p className="mt-2 text-slate-500">Export taxpayer report into PDF format.</p>
            </div>
            <button className="rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white transition hover:bg-cyan-500 hover:text-slate-950">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}