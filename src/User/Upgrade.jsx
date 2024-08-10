import React, { useState } from "react";
import Sidebar from "../Partials/Sidebar";
import Header from "../Partials/Header";
import Switch from "../components/Switch";
import { BiCheck } from "react-icons/bi";
import { IconCheck } from "@tabler/icons-react";
import { useSidebar } from "../Providers/SidebarProvider";

const CheckCircle = () => {
    return (
        <div className="bg-green-100 text-green-500 flex items-center justify-center rounded-full h-6 aspect-square">
            <IconCheck size={14} />
        </div>
    )
}

const Upgrade = () => {
    const { isExpanded } = useSidebar();
    const [plan, setPlan] = useState('');
    const [period, setPeriod] = useState('monthly');

    return (
        <>
            <Header />
            <Sidebar active="upgrade" />
            <div className={`absolute top-20 right-0 ${isExpanded ? 'w-9/12' : 'w-11/12'} mobile:w-full p-4 ps-0 mobile:ps-4`}>
                <div className="text-slate-700 text-center text-4xl font-bold">Siap Tingkatkan Penjualan?</div>
                <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="p-1 px-2 rounded-full border border-primary text-primary text-xs opacity-0">
                        Hemat 00%
                    </div>
                    <div className="text-slate-700">per-Bulan</div>
                    <Switch active={period === "yearly"} onChange={() => setPeriod(
                        period === "monthly" ? "yearly" : "monthly"
                    )} />
                    <div className="text-slate-700">per-Tahun</div>
                    <div className="p-1 px-2 rounded-full border border-primary text-primary text-xs">
                        Hemat 50%
                    </div>
                </div>

                <div className="flex gap-8 mt-8">
                    <div className="flex flex-col grow p-8 rounded-lg shadow shadow-[0px_16px_32px_rgba(0,0,0,0.05)]">
                        <div className="text-center text-slate-700 text-xl font-medium">PERSONAL</div>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="text-slate-500">Rp</div>
                            <div className="text-4xl font-black text-slate-700">200.000</div>
                        </div>
                        <div className="text-sm text-slate-500 text-center mt-2">Paket 3 bulan</div>

                        <div className="flex flex-col grow">
                        <div className="text-slate-700 mt-4">Fitur Lengkap</div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm"><span className="font-bold">2</span> Nomor Whatsapp</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm"><span className="font-bold">10.000</span> Kontak</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Broadcast Tanpa Batas</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Device Tanpa Batas</div>
                            </div>
                        </div>

                        <div className="text-slate-700 mt-6">Support</div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">24/7 Layanan Pelanggan</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Video Tutorial</div>
                            </div>
                        </div>
                        </div>

                        <button className="border border-primary text-primary rounded-lg h-12 mt-8">
                            Pilih Paket
                        </button>
                    </div>
                    <div className="flex flex-col grow p-8 rounded-lg shadow shadow-[0px_16px_32px_rgba(0,0,0,0.05)] border border-primary relative">
                        <div className="absolute top-2 right-2 text-xs text-primary font-bold bg-primary bg-opacity-20 p-2 rounded">
                            BEST SELLER
                        </div>

                        <div className="text-center text-slate-700 text-xl font-medium">STANDARD</div>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="text-slate-500">Rp</div>
                            <div className="text-4xl font-black text-slate-700">200.000</div>
                        </div>
                        <div className="text-sm text-slate-500 text-center mt-2">Paket 3 bulan</div>

                        <div className="text-green-500 mt-4">Include Fitur Personal +</div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Hitung BPJS</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Hitung Pajak</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Penggajian Otomatis</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Manajemen Aset</div>
                            </div>
                        </div>

                        <div className="text-slate-700 mt-6">Support</div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">24/7 Layanan Pelanggan</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">99.9% Uptime SLA</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Pelatihan Penggunaan Aplikasi</div>
                            </div>
                        </div>

                        <button className="border border-primary bg-primary text-white font-bold rounded-lg h-12 mt-8">
                            Pilih Paket
                        </button>
                    </div>
                    <div className="flex flex-col grow p-8 rounded-lg shadow shadow-[0px_16px_32px_rgba(0,0,0,0.05)]">
                        <div className="text-center text-slate-700 text-xl font-medium">PREMIUM</div>
                        <div className="flex gap-2 items-center justify-center">
                            <div className="text-slate-500">Rp</div>
                            <div className="text-4xl font-black text-slate-700">200.000</div>
                        </div>
                        <div className="text-sm text-slate-500 text-center mt-2">Paket 3 bulan</div>

                        <div className="text-green-500 mt-4">Include Fitur Personal +</div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Database Karyawan</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Manajemen Aset</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Absensi Karyawan</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Manajemen Aset</div>
                            </div>
                        </div>

                        <div className="text-slate-700 mt-6">Support</div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">24/7 Layanan Pelanggan</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">99.9% Uptime SLA</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle />
                                <div className="text-slate-600 text-sm">Pelatihan Penggunaan Aplikasi</div>
                            </div>
                        </div>

                        <button className="border border-primary text-primary rounded-lg h-12 mt-8">
                            Pilih Paket
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upgrade