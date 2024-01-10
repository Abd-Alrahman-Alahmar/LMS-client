'use client'
import { useGetUsersAllCoursesQuery } from '../../redux/features/courses/coursesApi';
import { useGetHeroDataQuery } from '../../redux/features/layout/layoutApi';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader';
import Header from '../components/Header';
import Heading from '../utils/Heading';
import { styles } from '../styles/style';
import CourseCard from '../components/Course/CourseCard';
import Footer from '../components/Footer';

type Props = {}

const Page = (props: Props) => {
    const searchParams = useSearchParams();
    const search = searchParams?.get('title');
    const { data, isLoading } = useGetUsersAllCoursesQuery(undefined, {});
    const { data: categoriesData } = useGetHeroDataQuery("Categories", {});
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
    const [courses, setcourses] = useState([]);
    const [category, setCategory] = useState("All");

    useEffect(() => {
        if (category === "All") {
            setcourses(data?.courses);
        }
        if (category !== "All") {
            setcourses(
                data?.courses.filter((item: any) => item.categories === category)
            );
        }
        if (search) {
            setcourses(
                data?.courses.filter((item: any) => item.name.toLowerCase().includes(search.toLowerCase()))
            );
        }
    }, [data, category, search]);

    const categories = categoriesData?.layout.categories;

    return (
        <div>
            {
                isLoading ? (
                    <Loader />
                ) : ( 
                    <>
                        <Header
                            route={route}
                            setRoute={setRoute}
                            open={open}
                            setOpen={setOpen}
                            activeItem={1}
                        />
                        <div className="w-[95%] 800px:w-[85%] m-auto min-h-[80vh]">
                            <Heading
                                title={"All courses - Elearning"}
                                description={"Elearning is a programming community."}
                                keywords={
                                    "programming community, coding skills, expert insights, collaboration, growth"
                                }
                            />
                            <br />
                            <br />
                            <div className="w-full flex items-center flex-wrap text-white mt-10">
                                <div
                                    className={`h-[35px] m-3 px-7 ${category === "All" ?  "bg-[#37a39a]" : "border border-[#37a39a]" }
                                    flex items-center justify-center dark:text-[#fff] text-black rounded-[30px] cursor-pointer`}
                                        
                                        
                                        
                                    onClick={() => setCategory("All")}
                                >
                                    All
                                </div>
                                {
                                    categories && categories.map((item: any, index: number) => (
                                        <div key={index}>
                                            <div
                                                className={`h-[35px] m-3 px-7 ${category === item.title
                                                    ? "bg-[#37a39a]"
                                                    : "border border-[#37a39a]"
                                                    }  flex items-center justify-center font-Poppins dark:text-[#fff] text-black rounded-[30px] cursor-pointer`}
                                                onClick={() => setCategory(item.title)}
                                            >
                                                {item.title}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            {
                                courses && courses.length === 0 && (
                                    <p className={`${styles.label} justify-center min-h-[50vh] flex items-center`}>
                                        {search ? "No courses found!" : "No courses found in this category. Please try another one!"}
                                    </p>
                                )
                            }
                            <br />
                            <br />
                            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-g">
                                {courses &&
                                    courses.map((item: any, index: number) => (
                                        <CourseCard item={item} key={index} />
                                    ))}
                            </div>
                        </div>
                        <Footer />
                    </>
                )
            }
        </div>
    )
}

export default Page;