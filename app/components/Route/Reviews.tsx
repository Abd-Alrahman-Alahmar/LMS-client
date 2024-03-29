import { styles } from '../../../app/styles/style';
import React from 'react'
import Image from 'next/image';
import ReviewCard from '../Review/ReviewCard';

type Props = {}

export const reviews = [
    {
        name: "Gene Bates",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        profession: "Student | Cambridge university",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
    },
    {
        name: "Paul Santos",
        avatar: "https://randomuser.me/api/portraits/men/7.jpg",
        profession: "Full stack developer | Quarter ltd.",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
    },
    {
        name: "Jay Gibbs",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        profession: "computer systems engineering student | Zimbabwe",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
    },
    {
        name: "Mark Davidson",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        profession: "Junior Web Developer | Indonesia",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
    },
    {
        name: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/4.jpg",
        profession: "Full stack web developer | Algeria",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
    },
    {
        name: "Tom Mckenzie",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        profession: "Full stack web developer | Canada",
        comment:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
            rating: 5
    }
];

const Reviews = (props: Props) => {
    return (
        <div className="w-[90%] 800px:w-[85%] m-auto">
            <div className="w-full 800px:flex items-center">
                <div className="800px:w-[50%] w-full">
                    <Image
                        src={require("../../../public/assests/business1-img.png")}
                        alt="business"
                        width={700}
                        height={700}
                    />
                </div>
                <div className="800px:w-[50%] w-full">
                    <h3 className={`${styles.title} 800px:!text-[40px]`}>
                        Our Students Are <span className="text-gradient">Our Strength</span>{" "}
                        <br /> See What They Say About Us
                    </h3>
                    <br />
                    <p className={styles.label}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque unde
                        voluptatum dignissimos, nulla perferendis dolorem voluptate nemo
                        possimus magni deleniti natus accusamus officiis quasi nihil
                        commodi, presentium quidem, quis doloribus?
                    </p>
                </div>
                <br />
                <br />
                
            </div>
            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-2 lg:gap-[25px] xl:grid-cols-2 xl:gap-[35px] mb-12 border-0 md:[&>*:nth-child(3)]:md:[&>*:nth-child(6)]:!mt-[-40px]">
                    {reviews &&
                        reviews.map((i, index) => <ReviewCard item={i} key={index} />)}
                </div>
        </div>
    )
}

export default Reviews