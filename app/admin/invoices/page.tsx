'use client'
import React from 'react'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import Heading from "../../../app/utils/Heading";
import AllInvoices from '../../../app/components/Admin/Order/AllInvoice';
import DashboardHero from '../../../app/components/Admin/DashboardHero';
import { ProSidebarProvider } from 'react-pro-sidebar';

type Props = {}

const Page = (props: Props) => {
return (
    <div>
        <Heading
            title="Elearning - Admin"
            description="Learning is a platform for students to learn and get help from teachers"
            keywords="Prograaming,MERN,Redux, Machine Learning" />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
            <ProSidebarProvider>
                        <AdminSidebar />
                        </ProSidebarProvider>
            </div>
            <div className="w-[85%]">
                <DashboardHero />
                <AllInvoices />
            </div>
        </div>
    </div>
)
}

export default Page