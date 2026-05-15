"use client";

import { useState } from "react";
import DashboardCard from "@/component/DashboardCard";
import Sidebar from "@/component/Sidebar";
import TaxChart from "@/component/TaxChart";
import StatusChart from "@/component/StatusChart";
import { reports, type Report } from "@/data/data";


export default function DashboardPage() {
  const [search, setSearch] = useState("");

  const filteredReports = reports.filter(
    (report: Report) =>
      report.taxpayer.toLowerCase().includes(search.toLowerCase()) ||
      report.npwp.includes(search)
  );

  return (
    <section className="min-h-screen bg-[#f8fafc]">
      <div className="grid lg:grid-cols-[280px_1fr]">
        <Sidebar />

        <main className="p-6 lg:p-10">
          {/* Header Section */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
                </span>
                Live System Overview
              </div>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">
                Dashboard Overview
              </h2>
              <p className="mt-2 font-medium text-slate-500">
                Monitoring taxpayer validation and realtime reporting.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative group">
              <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
                <svg className="h-5 w-5 text-slate-400 transition-colors group-focus-within:text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search taxpayer or NPWP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-5 text-sm font-medium shadow-sm outline-none transition-all focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 lg:w-[320px]"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <DashboardCard title="Total Wajib Pajak" value="1.2M" />
            <DashboardCard title="SPT Diproses" value="542K" />
            <DashboardCard title="Validasi NPWP" value="98.2%" />
            <DashboardCard title="Pending Data" value="24K" />
          </div>

          {/* Charts Section */}
          <div className="mt-8 grid gap-8 xl:grid-cols-2">
            <TaxChart />
            <StatusChart />
          </div>

          {/* Table Section */}
          <div className="mt-8 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-8">
              <h3 className="text-xl font-black text-slate-900">Taxpayer Monitoring</h3>
              <p className="text-sm font-medium text-slate-500">
                Showing {filteredReports.length} total results
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50/50 text-xs font-bold uppercase tracking-widest text-slate-400">
                    <th className="px-8 py-5">Taxpayer</th>
                    <th className="px-8 py-5">NPWP Number</th>
                    <th className="px-8 py-5">Type</th>
                    <th className="px-8 py-5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {filteredReports.length > 0 ? (
                    filteredReports.map((report: Report, index: number) => (
                      <tr key={index} className="group transition hover:bg-slate-50/80">
                        <td className="px-8 py-5">
                          <span className="font-bold text-slate-900 transition-colors group-hover:text-cyan-600">
                            {report.taxpayer}
                          </span>
                        </td>
                        <td className="px-8 py-5 font-mono text-sm text-slate-500">{report.npwp}</td>
                        <td className="px-8 py-5 text-sm font-medium text-slate-600">{report.taxType}</td>
                        <td className="px-8 py-5 text-right">
                          <span className={`inline-flex rounded-lg px-3 py-1.5 text-xs font-black uppercase tracking-tighter ${
                              report.status === "Verified" ? "border border-emerald-100 bg-emerald-50 text-emerald-600" : 
                              report.status === "Pending" ? "border border-yellow-100 bg-yellow-50 text-yellow-600" : 
                              report.status === "Approved" ? "border border-cyan-100 bg-cyan-50 text-cyan-600" : 
                              "border border-orange-100 bg-orange-50 text-orange-600"
                            }`}>
                            {report.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-8 py-20 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-4xl">🔍</span>
                          <h4 className="mt-4 font-bold text-slate-900">No data found</h4>
                          <p className="text-sm text-slate-500">Try adjusting your search for "{search}"</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}