import React, { useState } from "react";
import { MdOutlineSkipNext, MdOutlineSkipPrevious } from "react-icons/md";
import AppIcon from "../components/AppIcon";
import { Link } from "react-router-dom";
import { IconHome, IconSend, IconMessageDots, IconUserSquare, IconShoppingCart, IconShoppingBag, IconCalendar } from "@tabler/icons-react";
import { useSidebar } from "../Providers/SidebarProvider";

const Sidebar = ({active = 'send'}) => {
    const { isExpanded, setExpanded } = useSidebar();
    const isMobile = window.screen.width <= 480;

    return (
        <div className={`fixed desktop:top-0 left-0 bottom-0 ${isExpanded ? 'w-3/12' : 'w-1/12'} mobile:w-full p-4 flex flex-col`}>
            <div className="bg-primary shadow-[0px_16px_32px_rgba(0,0,0,0.05)] text-white rounded-lg mobile:rounded-full p-4 mobile:p-2 desktop:pb-8 flex flex-col grow mobile:flex-row mobile:items-center mobile:gap-2 mobile:justify-center">
                {
                    !isMobile &&
                    <div className="flex items-center gap-4 p-2 mb-4">
                        <div className="flex grow">
                            <AppIcon size={'40px'} />
                        </div>
                        <div className="cursor-pointer" onClick={() => setExpanded(false)}>
                            <MdOutlineSkipPrevious />
                        </div>
                    </div>
                }

                <Link to={'/dashboard'} className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full ${active === "dashboard" ? "bg-white bg-opacity-25" : ""}`}>
                    <IconHome size={24} />
                    { isExpanded && <div className="font-bold mobile:hidden">Dasbor</div> }
                </Link>

                { isExpanded && <div className="text-white text-opacity-60 text-xs font-bold mt-1 p-4 pb-1 mobile:hidden">BROADCAST</div> }
                <Link to={'/message/create'} className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full ${active === "send-message" ? "bg-white bg-opacity-25" : ""}`}>
                    <IconSend size={24} />
                    { isExpanded && <div className="font-bold mobile:hidden">Kirim Pesan</div> }
                </Link>
                <Link to={'/history'} className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full ${active === "message" ? "bg-white bg-opacity-25" : ""}`}>
                    <IconMessageDots size={24} />
                    { isExpanded && <div className="font-bold mobile:hidden">Riwayat Pesan</div> }
                </Link>
                <Link to={'/contact'} className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full ${active === "contact" ? "bg-white bg-opacity-25" : ""}`}>
                    <IconUserSquare size={24} />
                    { isExpanded && <div className="font-bold mobile:hidden">Kontak</div> }
                </Link>

                { isExpanded && <div className="text-white text-opacity-60 text-xs font-bold mt-1 p-4 pb-1 mobile:hidden">PAKET</div> }
                <Link to={'/upgrade'} className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full ${active === "upgrade" ? "bg-white bg-opacity-25" : ""}`}>
                    <IconShoppingBag size={24} />
                    { isExpanded && <div className="font-bold mobile:hidden">Pembelian</div> }
                </Link>
                {
                    window.screen.width > 480 &&
                    <Link to={'/upgrade-calendar'} className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full ${active === "upgrade-calendar" ? "bg-white bg-opacity-25" : ""}`}>
                        <IconCalendar size={24} />
                        { isExpanded && <div className="font-bold mobile:hidden">Riwayat</div>}
                    </Link>
                }

                {
                    !isExpanded &&
                    <>
                        <div className="flex grow"></div>
                        <div className={`flex items-center gap-4 p-4 rounded-2xl mobile:rounded-full cursor-pointer`} onClick={() => setExpanded(true)}>
                            <MdOutlineSkipNext />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Sidebar