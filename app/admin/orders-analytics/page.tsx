'use client'
import Heading from '../../../app/utils/Heading';
import AdminProtected from '../../../app/hooks/adminProtected';
import React from 'react'
import AdminSidebar from '../../../app/components/Admin/sidebar/AdminSidebar';
import OrdersAnalytics from '../../../app/components/Admin/Analytics/OrdersAnayltics';
import DashboardHero from '../../../app/components/Admin/DashboardHero';
import { ProSidebarProvider } from 'react-pro-sidebar';


type Props = {}

const Page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Elearning - Admin"
                    description="ELearning is a platform for students to learn and get help from teachers"
                    keywords="Programming, MERN, Redux ,Machine Learning" />
                <div className="flex h-screen">
                    <div className="1500px:w-[16%] w-1/5">
                    <ProSidebarProvider>
                        <AdminSidebar />
                        </ProSidebarProvider>
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <OrdersAnalytics/>
                    </div>
                </div>
           </AdminProtected>
        </div>
    )
}
export default Page;