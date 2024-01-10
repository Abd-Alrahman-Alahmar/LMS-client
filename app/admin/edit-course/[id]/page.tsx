"use client"
import React from 'react'
import AdminSidebar from "../../../components/Admin/sidebar/AdminSidebar";
import Heading from '../../../../app/utils/Heading';
import DashboardHeader from "../../../../app/components/Admin/DashboardHeader";
import EditCourse from '../../../../app/components/Admin/Course/EditCourse';
import { ProSidebarProvider } from 'react-pro-sidebar';

type Props = {}

const Page = ({params}:any) => {
    const id = params?.id;
    return (
        <div>
            <Heading
                title="Elearning - Admin"
                description="ELearning is a platform for students to learn and get help from teachers"
                keywords="Prograaming,MERN, Redux, Machine Learning"
            />
            <div className="flex">
                <div className="1500px:w-[16%] w-1/5">
                <ProSidebarProvider>
                        <AdminSidebar />
                        </ProSidebarProvider>
                </div>
                <div className="w-[85%]">
                    <DashboardHeader />
                    <EditCourse id={id}/>
                </div>
            </div>
        </div>
    )
}

export default Page