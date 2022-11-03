
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { colors } from '../../store/pages.js';

import { getDatabase, ref, set, push, child, get } from "firebase/database";
import { app, database } from '../../firebase-config.js';
/* fontSize={{ xs: '20px', sm: '26px', md: '34px', lg: '46px' }} */
// TODO: firebase
export default function Form() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [query, setQuery] = useState("");

    // const handleChange = (e) => {
    //     setTitle(e.target.value);
    // };

    const addTodo = () => {
        const formRef = ref(db, "/Form");
        const form = {
            fname,
            done: false,
        };
        push(formRef, form);
    };
    // const db = database;
    const db = getDatabase();


    const update = (e) => {
        e.preventDefault();
        try {
            set(ref(db, `/Form/${new Date().toUTCString()}`), {
                time: new Date().toLocaleString(),
                fname: fname,
                lname: lname,
                phone: phone,
                email: email,
                address: address,
                message: query,
            });
            console.log(fname);
        } catch (e) {
            alert(e.message);
            return;
        }
        alert("Submitted details successfully");
    }


    var s = window.location.pathname.split('/');
    var siteURLName = s[1];
    const [colorsObj, setcolorsObj] = React.useState(colors[siteURLName]);
    React.useEffect(() => {
        setcolorsObj(colors[siteURLName]);
    }, [window.location.pathname]);
    return (
        <div id="#Form">
            <Box
                mx={{ xs: 3, sm: 10 }}
                my={{ xs: 2, sm: 5 }}
                bgcolor={'white'}>
                <Container sx={{ width: '100%' }}>
                    <Box className="rounded-2xl" display={'flex'} flexDirection={'column'} flexWrap={'wrap'} alignItems={'center'} justifyContent='center' margin={'10px'} boxShadow={5} padding={{ xs: 1, sm: 2 }} >
                        <div >
                            <Typography className='drop-shadow-xl' textAlign="center" fontFamily={'sans-serif'} fontWeight={'bold'} color={colorsObj} variant="h3" pt={{ xs: 1, sm: 2 }}>Contact Us</Typography>

                        </div>
                        {/* <div sx={{ bgcolor: 'black', width: '75%', margin: '5px' }} >
                        </div>
                        <hr color={'black'} bgcolor={'black'} /> */}
                        <div className="flex items-center justify-center p-12">
                            <div className="mx-auto w-full max-w-[550px]">
                                {/** -----------  Form --------- */}
                                <form
                                // method="post"
                                // action="https://formsubmit.co/65a91a5e604fdb62c49d62a810ee2b35"
                                >
                                    <div className="-mx-3 flex flex-wrap">
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <label
                                                    forname="fName"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="fName"
                                                    id="fName"
                                                    placeholder="First Name"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-yellow-500 focus:border-[#ce9f13] focus:shadow-md"
                                                    onChange={(data) => {
                                                        setFname(data.target.value);
                                                        console.log("setFname", fname);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-3 sm:w-1/2">
                                            <div className="mb-5">
                                                <label
                                                    forname="lName"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lName"
                                                    id="lName"
                                                    placeholder="Last Name"
                                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-yellow-500 focus:border-[#ce9f13] focus:shadow-md"
                                                    onChange={(data) => {
                                                        setLname(data.target.value);
                                                        console.log("setLname", lname);
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            forname="phone"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            placeholder="Enter your phone number"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-yellow-500 focus:border-[#ce9f13] focus:shadow-md"
                                            onChange={(data) => {
                                                setPhone(data.target.value);
                                                console.log("setPhone", phone);
                                            }}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            forname="email"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your email"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-yellow-500 focus:border-[#ce9f13] focus:shadow-md"
                                            onChange={(data) => {
                                                setEmail(data.target.value);
                                                console.log("setEmail", email);
                                            }}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            forname="address"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Delivery Address
                                        </label>
                                        <input
                                            type="textarea"
                                            name="address"
                                            id="address"
                                            placeholder="Enter your delivery address"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-yellow-500 focus:border-[#ce9f13] focus:shadow-md"
                                            onChange={(data) => {
                                                setAddress(data.target.value);
                                                console.log("setAddress", address);
                                            }}
                                        />
                                    </div>
                                    <div className="mb-5">
                                        <label
                                            forname="address"
                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                        >
                                            Any Queries
                                        </label>
                                        <input
                                            type="textarea"
                                            name="message"
                                            id="message"
                                            placeholder="Enter your query"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-b-yellow-500 focus:border-[#ce9f13] focus:shadow-md"
                                            onChange={(data) => {
                                                setQuery(data.target.value);
                                                console.log("setQuery", query);
                                            }}
                                        />
                                    </div>
                                    <Box color={colorsObj}>
                                        <button onClick={(e) => update(e)} className="font-extrabold text-2xl bg-slate-700 p-3 rounded-lg transition delay-100 hover:-translate-y-1 hover:bg-slate-900 duration-300">
                                            Submit
                                        </button>
                                    </Box>
                                </form>
                            </div>
                        </div>
                    </Box>
                </Container>
            </Box >
        </div >
    );
}