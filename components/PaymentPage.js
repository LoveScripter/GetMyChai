"use client";
import React from "react";
import Script from "next/script";
import { fetchPayment, initiate } from "@/actions/useractions";
import { useState, useEffect } from "react";
import { useSession as session } from "next-auth/react";
import { fetchuser } from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation"

const PaymentPage = ({ username }) => {

    const [paymentform, setpaymentform] = useState({name:"",message:"",amount:""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setpayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    const handleChange = (e) => {
        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (searchParams.get("paymentdone") == "true") {
            toast('Payment has been made', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }

        router.push(`/${username}`)
    }, [])


    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
        let dbpayments = await fetchPayment(username)
        setpayments(dbpayments)
    }

    useEffect(() => {
        getData()
    }, [])



    const Pay = async (amount) => {
        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "GetMyChai", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }


    return (
        <>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='cover w-full relative'>
                <img className='object-cover w-full h-48 md:h-[350px]' src={currentUser.coverpic} alt="" />
                <div className='absolute z-10 -bottom-12 right-[38%] md:right-[41%] lg:right-[45%] rounded-full size-24 md:size-32 overflow-hidden'>
                    <img className='rounded-full border-2 border-white size-24 md:size-32' width={125} src={currentUser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex flex-col gap-2 justify-center items-center my-[60px]">
                <div className='font-bold text-xl'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    Let's help {username} to get a Chai!
                </div>
                <div className='text-slate-400'>
                    {payments.length} Payments . ₹{payments.reduce((a, b) => a + b.amount, 0)} raised
                </div>
            </div>
            <div className="payment flex gap-3 w-[80%] mx-auto mb-10 flex-col lg:flex-row">
                <div className="supporters lg:w-1/2 bg-slate-950 rounded-lg p-10">
                    <h2 className='text-2xl font-bold'>Top 5 Supporters</h2>
                    <ul className='mt-6 mx-5 text-lg'>
                        {payments && payments.length > 0 ? (
                            <ul>
                                {payments.map((p, i) => (
                                    <li key={i} className='my-2 items-center flex gap-2'>
                                        <img width={30} height={30} src="avatar.gif" alt="user avatar" />
                                        <span>{p.name} donated <span className='font-bold'>₹{p.amount}</span> with a message "{p.message}"</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="font-bold text-lg">No Payments to display</div>
                        )}
                    </ul>
                </div>
                <div className="makePayment lg:w-1/2 bg-slate-950 rounded-lg p-10">
                    <h2 className='text-2xl font-bold'>Make a Payment</h2>
                    <div className='flex flex-col gap-2 mt-6'>

                        <div className='flex gap-2'>
                            <input type="text" onChange={handleChange} value={paymentform.name} name="name" className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Name' />
                            <input type="text" onChange={handleChange} value={paymentform.message} name="message" className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Message' />
                        </div>

                        <div>
                            <input type="text" onChange={handleChange} value={paymentform.amount} name="amount" className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Amount' />
                        </div>
                        <button type="button" onClick={() => { Pay(Number.parseInt(paymentform.amount) * 100) }} className=" text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mb-2 disabled:bg-slate-700 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount < 1}>Pay</button>
                    </div>
                    <div className='flex gap-2 mt-5'>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => { Pay(1000) }}>Pay ₹10</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => { Pay(2000) }}>Pay ₹20</button>
                        <button className='bg-slate-800 p-3 rounded-lg' onClick={() => { Pay(3000) }}>Pay ₹30</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentPage;
