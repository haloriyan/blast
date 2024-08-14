import React, { useEffect, useState } from "react";
import Sidebar from "../Partials/Sidebar";
import Header from "../Partials/Header";
import { useSidebar } from "../Providers/SidebarProvider";
import axios from "axios";
import config from "../config";
import { MdMoney } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import Currency from "../lib/Currency";

const Purchase = () => {
    const { isExpanded } = useSidebar();
    const [isLoading, setLoading] = useState(true);
    const [triggerLoading, setTriggerLoading] = useState(true);
    const user = JSON.parse(window.localStorage.getItem('user_data'));

    const [raw, setRaw] = useState(false);
    const [page, setPage] = useState(1);
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        if (isLoading && triggerLoading && user) {
            setTriggerLoading(false);
            axios.post(`${config.baseUrl}/api/user/upgrade-history?page=1`, {
                token: user.token,
            })
            .then(response => {
                let res = response.data;
                setLoading(false);
                setPurchases(res.purchases.data);
            })
        }
    }, [isLoading, triggerLoading, user])

    return (
        <>
            <Header />
            <Sidebar active="purchase" />
            <div className="absolute top-20 right-0 w-9/12 mobile:w-full p-4 ps-0 mobile:ps-4">
                <div className="bg-white shadow-[0px_16px_32px_rgba(0,0,0,0.05)] p-4 rounded-lg mt-4">
                    {
                        isLoading ?
                        <>
                            <div className="w-full h-12 bg-slate-200"></div>
                            <div className="flex gap-4 mt-2">
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                                <div className="flex grow h-10 bg-slate-200"></div>
                            </div>
                        </>
                        :
                        <table className="table w-full">
                            <thead>
                                <tr className="border-b text-left">
                                    <th className="py-4 text-slate-700">Nama Paket</th>
                                    <th className="py-4 text-slate-700"><BiMoney /></th>
                                    <th className="py-4 text-slate-700">Tindakan</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    purchases.map((purc, p) => (
                                        <tr key={p}>
                                            <td className="py-4 text-slate-700">{purc.package_name}</td>
                                            <td className="py-4 text-slate-700">{Currency(purc.total_pay).encode()}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Purchase