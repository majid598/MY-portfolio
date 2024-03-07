import { useState } from "react";
import {
  FaArrowLeft,
  FaMailBulk,
  FaPhone,
  FaSms,
  FaUser,
} from "react-icons/fa";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Layout/Layout";
import { success } from "../main";

const Contact = () => {
  const [userDtails, setuserDtails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const server = import.meta.env.VITE_SERVER;

  const onChange = (e) => {
    setuserDtails({ ...userDtails, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userDtails;

    let d = JSON.stringify({
      name,
      email,
      phone,
      message,
    });
    const res = await fetch(`${server}/api/auth/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: d,
    });

    const data = await res.json();
    if (data.success) {
      setuserDtails({
        name,
        email,
        phone,
        message: "",
      });
      success.play();
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <Layout>
      <div
        className={`w-full text-white px-10 flex items-center justify-center relative z-[99] transition-all duration-1000 h-screen`}
      >
        <div className="w-full h-3/4 px-20 py-10 rounded-lg shadow boder-2 mx-auto">
          <h1 className="text-3xl font-semibold w-full text-center mb-5">
            Keep in Touch
          </h1>
          <form onSubmit={submit} className="flex flex-col gap-5">
            <div className="w-full h-12 rounded-md overflow-hidden relative">
              <FaUser className="absolute text-xl top-1/2 left-2 -translate-y-1/2" />
              <input
                className="w-full bg-transparent outline-none border-[1px] rounded-md text-white px-2 pl-10 h-full"
                type="text"
                name="name"
                value={userDtails.name}
                onChange={onChange}
                placeholder="Type your nice name here"
              />
            </div>
            <div className="w-full h-12 rounded-md overflow-hidden relative">
              <input
                className="w-full bg-transparent outline-none border-[1px] rounded-md text-white px-2 pl-10 h-full"
                type="email"
                name="email"
                value={userDtails.email}
                onChange={onChange}
                placeholder="Type your email here"
              />
              <FaMailBulk className="absolute text-xl top-1/2 left-2 -translate-y-1/2" />
            </div>
            <div className="w-full h-12 rounded-md overflow-hidden relative">
              <input
                className="w-full bg-transparent outline-none border-[1px] rounded-md text-white px-2 pl-10 h-full"
                type="number"
                placeholder="Type your phone number"
                name="phone"
                value={userDtails.phone}
                onChange={onChange}
              />
              <FaPhone className="absolute text-xl top-1/2 left-2 -translate-y-1/2" />
            </div>
            <div className="w-full h-auto rounded-md relative">
              <textarea
                autocomplete="off"
                rows="4"
                className="bg-transparent border-2 text-black outline-none rounded-lg text-sm py-4 resize-none w-full px-2 pl-10 h-full"
                type="text"
                name="message"
                value={userDtails.message}
                onChange={onChange}
                placeholder="Type your concern"
              ></textarea>
              <FaSms className="absolute text-xl top-4 left-2" />
            </div>
            <input
              className="w-full bg-sky-500 text-white cursor-pointer font-extrabold p-3 text-xl rounded-full"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <ToastContainer pauseOnHover={false} position="bottom-center" />
      </div>
    </Layout>
  );
};

export default Contact;
