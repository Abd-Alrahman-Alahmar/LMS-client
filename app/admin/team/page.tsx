'use client'
import React from 'react'
import Heading from '../../utils/Heading'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar";
import AdminProtected from '../../hooks/adminProtected'
import DashboardHero from '../../components/Admin/DashboardHero';
import AllUsers from '../../../app/components/Admin/Users/AllUsers';
import { ProSidebarProvider } from 'react-pro-sidebar';

type Props = {}

const Page = (props: Props) => {
    return (
        <div>
            <AdminProtected>
                <Heading
                    title="Elearing - Admin"
                    description="Learning is a platform for students to learn and get help from teachers"
                    keywords="Prograaming, MERN, Redux, Machine Learning" />
                <div className="flex h-[120vh]">
                    <div className="1500px:w-[16%] w-1/5">
                    <ProSidebarProvider>
                        <AdminSidebar />
                        </ProSidebarProvider>
                    </div>
                    <div className="w-[85%]">
                        <DashboardHero />
                        <AllUsers isTeam={true}/>
                    </div>
                </div>
            </AdminProtected>
        </div>
    )
}
export default Page

