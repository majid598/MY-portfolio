import { useState } from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  FaArrowLeft,
  FaMailBulk,
  FaPhone,
  FaSms,
  FaUser,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { success } from "../main";

const Navbar = () => {
  const [userDtails, setuserDtails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const server = import.meta.env.VITE_SERVER;

  const [isactive, setisactive] = useState(false);
  const [iscontact, setiscontact] = useState(false);

  const nav = () => {
    setisactive(!isactive);
  };

  const contact = () => {
    document.querySelector(".contact").classList.add("active");
    document.querySelector(".back").classList.add("active");
    setiscontact(true);
  };
  const dismiss = () => {
    document.querySelector(".contact").classList.remove("active");
    document.querySelector(".back").classList.remove("active");
    setiscontact(false);
  };

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
      success.play()
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  return (
    <nav className="bg-[#EFEAE3]">
      <div class="nav relative">
        <Link
          to="/"
          className={`opacit flex text-6xl font-bold relative w-72 cursor-pointer ${
            isactive ? "active" : ""
          }`}
        >
          Mr raju
          <span className="h-3 w-3 absolute bottom-2 right-16 bg-black rounded-full"></span>
        </Link>
        <button
          onClick={nav}
          className="menu fixed right-3 z-[999] top-3 w-36 items-center px-5 py-2 justify-between rounded-full border-2 border-black/50"
        >
          <div
            className={`crross w-1/2 h-full flex flex-col items-start gap-[5px] ${
              isactive ? "active" : ""
            }`}
          >
            <div
              className={`cross h-[2px] transition-all duration-500 rounded-full w-7 bg-black ${
                isactive ? "active" : ""
              }`}
            ></div>
            <div
              className={`cross2 h-[2px] transition-all duration-500 rounded-full w-7 bg-black ${
                isactive ? "active" : ""
              }`}
            ></div>
          </div>
          <h2 className="text-xl">Menu</h2>
        </button>
      </div>
      <div
        id="full"
        className={`fixed top-[-100vh] transition-all duration-500 w-full h-screen bg-black/30 ${
          isactive ? "active" : ""
        }`}
      >
        <div className="relative h-2/3 bg-[#EFEAE3] w-full leading-tight rounded-bl-3xl rounded-br-3xl items-end justify-end flex flex-col pt-10">
          <Link to="/" className={`h relative tracking-tighter z-50`}>
            Home
          </Link>
          <Link to={'/contact'} className={`h relative z-50`}>Contact</Link>
          <Link to="/portfolio" className={`h relative z-50`}>
            Portfolio
          </Link>
        </div>
      </div>
      <div className="nav2">
        <Link
          to="/"
          className={`h relative z-50 ${
            iscontact ? "active hover:text-black" : "hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link
          to="/portfolio"
          className={`h relative z-50 ${
            iscontact ? "active hover:text-black" : "hover:text-white"
          }`}
        >
          Portfolio
        </Link>
        <button
          onClick={contact}
          className={`h relative z-50 ${
            iscontact ? "active hover:text-black" : "hover:text-white"
          }`}
        >
          Contact
        </button>
        <div
          className={`contact text-white absolute -right-[100vw] transition-all duration-1000 top-0 w-[100vw] h-screen bg-black`}
        >
          <button
            onClick={dismiss}
            className="back overflow-hidden m-8 rotate-180 relative left-full transition-all duration-1000 w-12 h-12 flex items-center justify-center border-[1px] rounded-full  border-white"
          >
            <FaArrowLeft className="text-white absolute z-50" />
          </button>
          <div className="w-2/6 h-3/4 px-20 py-10 rounded-lg shadow boder-2 mx-auto">
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
                  className="bg-transparent border-2 outline-none rounded-lg text-sm py-4 resize-none w-full text-white px-2 pl-10 h-full"
                  type="text"
                  name="message"
                  value={userDtails.message}
                  onChange={onChange}
                  placeholder="Type your concern"
                ></textarea>
                <FaSms className="absolute text-xl top-4 left-2" />
              </div>
              <input
                className="w-full bg-white text-black cursor-pointer font-extrabold p-3 text-xl rounded-full"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          <ToastContainer pauseOnHover={false} />
        </div>
      </div>
      <h3>Menu</h3>
    </nav>
  );
};

export default Navbar;
