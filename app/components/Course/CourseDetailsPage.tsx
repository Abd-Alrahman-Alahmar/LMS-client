import { useGetCourseDetailsQuery } from '../../../redux/features/courses/coursesApi';
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader';
import Heading from '../../../app/utils/Heading';
import Header from '../Header';
import Footer from '../Footer';
import CourseDetails from './CourseDetails';
import { useCreatePaymentIntentMutation, useGetStripePublishablekeyQuery } from '../../../redux/features/orders/ordersApi';
import { loadStripe } from "@stripe/stripe-js";


type Props = {
    id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
    const [route, setRoute] = useState("Login");
    const [open, setOpen] = useState(false);
    const { data, isLoading } = useGetCourseDetailsQuery(id);
    const [createPaymentIntent, { data: paymentIntentData }] = useCreatePaymentIntentMutation();
    const { data: config, } = useGetStripePublishablekeyQuery({});
    const [stripePromise, setStripePromise] = useState<any>(null);
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        if (config) {
            const publishablekey = config?.publishableKey;
            setStripePromise(loadStripe(publishablekey));
        }
        if (data) {
            const amount = Math.round(data.course.price * 100);
            createPaymentIntent(amount);
        };
    }, [config, data]);

    useEffect(() => {
        if (paymentIntentData) {
            setClientSecret(paymentIntentData?.client_secret);
        }
    }, [paymentIntentData])

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (

                    <div>
                        <Heading
                            title={data.course.name + " - ELearning"}
                            description={
                                "ELearning is a programming community which is developed by rahman for helping programmers"}
                            keywords={data?.course?.tags}
                        />
                        <Header
                            route={route}
                            setRoute={setRoute}
                            open={open}
                            setOpen={setOpen}
                            activeItem={1}
                        />
                        {
                            stripePromise && (
                                <CourseDetails data={data.course} stripePromise={stripePromise} clientSecret={clientSecret}
                                setRoute={setRoute}
                                setOpen={setOpen} />
                            )
                        }
                        <Footer />
                    </div>
                )
            }
        </>

    )
}

export default CourseDetailsPage