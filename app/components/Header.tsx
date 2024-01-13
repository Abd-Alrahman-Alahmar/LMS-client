'use client'
import Link from "next/link";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import NavItems from "./NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";
import CustomModal from "../utils/CustomModal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import Verification from "./Auth/ Verification";
import avatar from "../../public/assests/Avatar.png"
import { useSession } from "next-auth/react";
import { useLogOutQuery, useSocialAuthMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useLoadUserQuery } from "../../redux/features/api/apiSlice";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem: number;
    route: string;
    setRoute: (route: string) => void;
}
const Header: FC<Props> = ({ activeItem, setOpen, route, open, setRoute }) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const { data: userData, isLoading, refetch } = useLoadUserQuery(undefined, {refetchOnMountOrArgChange: true});
    const { data } = useSession();
    const [socialAuth, { isSuccess, error }] = useSocialAuthMutation();
    const [logout, setLogout] = useState(false);
    const { } = useLogOutQuery(undefined, {
        skip: !logout ? true : false,
    });

    useEffect(() => {
        if (!isLoading) {
            if (!userData) {
                if (data) {
                    socialAuth({
                        email: data?.user?.email,
                        name: data?.user?.name,
                        avatar: data.user?.image,
                    });
                    refetch();
                }
            }
            if (data === null) {
                if (isSuccess) {
                    toast.success("Login Successfully");
                }
            }
            //might need to update later
            if (data === null && !isLoading && !userData) {
                setLogout(true);
            }
        }
    }, [data, userData, isLoading]);

    const handleClose = (e: any) => {
        if (e.target.id === "screen") {
            {
                setOpenSidebar(false)
            }
        }
    }

    return (
        <div className="w-full sticky top-0 z-[90]">
            <div
                className={`
                     "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black fixed top-0 left-0 w-full h-[80px] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
                    `}
            >
                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
                        <div>
                            <Link href={"/"}
                                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
                            >
                                {/* Logo */}
                                ELearning
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <NavItems activeItem={activeItem}
                                isMobile={false}
                            />
                            <ThemeSwitcher />
                            {/* only for mobile */}
                            <div className="800px:hidden">
                                <HiOutlineMenuAlt3
                                    size={25}
                                    className="cursor-pointer dark:text-white text-black"
                                    onClick={() => setOpenSidebar(true)}
                                />

                            </div>
                            {userData ? (
                                <Link href={"/profile"}>
                                    <Image
                                        src={userData.avatar ? userData.avatar.url : avatar}
                                        alt=""
                                        width={30}
                                        height={30}
                                        className="w-[30px] h-[30px] ml-2 rounded-full cursor-pointer"
                                        style={{ border: activeItem === 5 ? "2px solid #37a39a'" : "none" }}
                                    />
                                </Link>
                            ) : (
                                <HiOutlineUserCircle
                                    size={25}
                                    className="hidden 800px:block ml-2 cursor-pointer dark:text-white text-black"
                                    onClick={() => setOpen(true)}
                                />
                            )}
                        </div>
                    </div>

                </div>
                {/* mobile sidebar */}
                {openSidebar && (
                    <div
                        className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
                        onClick={handleClose}
                        id="screen"
                    >
                        <div className="w-[70%] fixed z-[90] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
                            <NavItems activeItem={activeItem} isMobile={true} />
                            {userData ? (
                                <Link href={"/profile"}>
                                    <Image
                                        src={userData.avatar ? userData.avatar.url : avatar}
                                        alt=""
                                        width={30}
                                        height={30}
                                        className="w-[30px] h-[30px] rounded-full ml-[20px] cursor-pointer"
                                        style={{ border: activeItem === 5 ? "2px solid #37a39a'" : "none" }}
                                    />
                                </Link>
                            ) : (
                                <HiOutlineUserCircle
                                    size={25}
                                    className="800px:block cursor-pointer ml-6 dark:text-white text-black"
                                    onClick={() => setOpen(true)}
                                />
                            )}
                            <br />
                            <br />
                            <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                                Copyright © 2023 ELearning </p>
                        </div>
                    </div>
                )}
            </div>
            {
                route === "Login" && (
                    <>
                        {
                            open && (<CustomModal
                                open={open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeltem={activeItem}
                                component={Login}
                                refetch={refetch}
                            />
                            )
                        }
                    </>
                )
            }

            {
                route === "Sign-Up" && (
                    <>
                        {
                            open && (<CustomModal
                                open={open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeltem={activeItem}
                                component={SignUp}
                            />
                            )
                        }
                    </>
                )
            }

            {
                route === "Verification" && (
                    <>
                        {
                            open && (<CustomModal
                                open={open}
                                setOpen={setOpen}
                                setRoute={setRoute}
                                activeltem={activeItem}
                                component={Verification}
                            />
                            )
                        }
                    </>
                )
            }

        </div>
    );
};

export default Header;