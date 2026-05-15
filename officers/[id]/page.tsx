import Link from "next/link";
import { officers } from "@/data/data";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function OfficerDetailPage({ params }: Props) {
  const { id } = await params;

  const officer = officers.find((item) => String(item.id) === id);

  if (!officer) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
        <div className="rounded-[40px] border border-slate-200 bg-white p-16 text-center shadow-xl">
          <span className="mb-6 block text-6xl">👤</span>
          <h1 className="text-4xl font-black text-slate-900">Officer Not Found</h1>
          <p className="mt-4 font-medium text-slate-500">
            The requested profile could not be found in the expert database.
          </p>
          <Link
            href="/officers"
            className="mt-8 inline-block rounded-2xl bg-slate-950 px-8 py-4 text-sm font-black text-white transition-all hover:bg-cyan-500 hover:text-slate-950"
          >
            Back to Team
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Navigation */}
        <Link
          href="/officers"
          className="group inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-700 shadow-sm transition-all hover:bg-slate-950 hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Team
        </Link>

        {/* Profile Card */}
        <div className="mt-8 overflow-hidden rounded-[48px] border border-white bg-white shadow-xl shadow-slate-200/50">
          
          {/* Hero Header */}
          <div className="relative overflow-hidden bg-slate-950 px-10 py-16 text-white">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[100px]"></div>

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col items-center gap-8 lg:flex-row lg:text-left">
                <div className="flex h-40 w-40 items-center justify-center rounded-[40px] bg-gradient-to-br from-cyan-500 to-blue-600 text-7xl shadow-2xl ring-8 ring-white/5 transition-transform duration-500 hover:scale-105">
                  👨‍💼
                </div>

                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-emerald-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                    Currently Online
                  </div>
                  <h1 className="mt-6 text-5xl font-black tracking-tight leading-tight">
                    {officer.name}
                  </h1>
                  <p className="mt-3 text-2xl font-bold text-cyan-400">
                    {officer.specialty}
                  </p>
                </div>
              </div>

              <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl lg:text-right">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Employee ID
                </p>
                <h2 className="mt-4 text-6xl font-black tracking-tighter text-cyan-400">
                  #{String(officer.id).padStart(3, "0")}
                </h2>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 p-10 md:grid-cols-3">
            <div className="rounded-[32px] border border-slate-100 bg-slate-50/50 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Active Division</p>
              <h3 className="mt-4 text-3xl font-black text-slate-900">Tax Admin</h3>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-slate-50/50 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Efficiency Rate</p>
              <h3 className="mt-4 text-3xl font-black text-emerald-500">98.4%</h3>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-slate-50/50 p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Tenure Period</p>
              <h3 className="mt-4 text-3xl font-black text-cyan-500">5+ Years</h3>
            </div>
          </div>

          {/* Biography */}
          <div className="px-10 pb-6">
            <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-10">
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Professional Profile</h2>
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
                <strong>{officer.name}</strong> adalah pakar di bidang{" "}
                <strong>{officer.specialty}</strong> yang bertanggung jawab
                penuh atas manajemen sistem perpajakan digital Smart Core Pajak. 
                Memiliki pengalaman dalam validasi data wajib pajak, monitoring realtime, 
                pelaporan nasional, serta pengawasan administrasi perpajakan berbasis teknologi modern.
              </p>
            </div>
          </div>

          {/* Activity Logs */}
          <div className="border-t border-slate-100 px-10 py-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-3xl font-black text-slate-900">Task History</h2>
                <p className="mt-2 font-medium text-slate-500">Latest verification and approval logs.</p>
              </div>
              <div className="inline-flex rounded-2xl border border-cyan-100 bg-cyan-50 px-6 py-3 text-xs font-black uppercase tracking-widest text-cyan-600">
                Performance: High
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {/* Task Item 1 */}
              <div className="flex items-center justify-between rounded-3xl border border-slate-100 p-6 transition-all hover:border-cyan-200 hover:bg-slate-50/50">
                <div>
                  <h3 className="font-black text-slate-900">NPWP Identity Validation</h3>
                  <p className="mt-1 text-sm font-bold text-slate-400">5 mins ago</p>
                </div>
                <span className="rounded-xl bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-tighter text-cyan-600">
                  Completed
                </span>
              </div>

              {/* Task Item 2 */}
              <div className="flex items-center justify-between rounded-3xl border border-slate-100 p-6 transition-all hover:border-emerald-200 hover:bg-slate-50/50">
                <div>
                  <h3 className="font-black text-slate-900">Corporate Tax Report Approval</h3>
                  <p className="mt-1 text-sm font-bold text-slate-400">20 mins ago</p>
                </div>
                <span className="rounded-xl bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-tighter text-emerald-600">
                  Verified
                </span>
              </div>

              {/* Task Item 3 */}
              <div className="flex items-center justify-between rounded-3xl border border-slate-100 p-6 transition-all hover:border-slate-300 hover:bg-slate-50/50">
                <div>
                  <h3 className="font-black text-slate-900">System Health Parameters Check</h3>
                  <p className="mt-1 text-sm font-bold text-slate-400">1 hour ago</p>
                </div>
                <span className="rounded-xl bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-tighter text-slate-600">
                  Routine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}