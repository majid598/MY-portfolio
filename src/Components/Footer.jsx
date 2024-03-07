import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const footer = () => {

 return (
    <>
     <div class="footer bg-[url('./assets/bg.jpg')] bg-cover bg-no-repeat -z-[99]">
      <h1 className="text-[15vw] absolute bottom-12 left-[20%] text-white">Mr Raju</h1>
      <div className="foot mx-[7.5%] w-[85%] h-20 z-[999] border-t-2 text-white border-[#474747] absolute bottom-0 flex items-center px-8 justify-between">
        <div className="w-[30%] flex items-center h-full">
          <h2 className="text-2xl font-light">Copyright © Mr raju</h2>
        </div>
        <div className=" w-[50%]h-full px-10 flex items-center gap-24">
          <a target="_blank" href="https://github.com/majid598" className="lol flex overflow-hidden px-2 py-1 relative z-[99] items-center gap-2"><div className="gol w-0 h-[2px] bg-white left-0 absolute transition-all duration-500 bottom-0"></div><FaGithub className="text-xl"/><h3>Github</h3></a>
          <a target="_blank" href="https://www.instagram.com/code_with_raju01/" className="lol flex overflow-hidden px-2 py-1 relative z-[99] items-center gap-2"><div className="gol w-0 h-[2px] bg-white left-0 absolute transition-all duration-500 bottom-0"></div><FaInstagram className="text-xl"/><h3>Instagram</h3></a>
          <a target="_blank" href="https://www.linkedin.com/in/majid-ali-0331302b2/" className="lol flex overflow-hidden px-2 py-1 relative z-[99] items-center gap-2"><div className="gol w-0 h-[2px] bg-white left-0 absolute transition-all duration-500 bottom-0"></div><BsLinkedin className="text-xl"/><h3>Linked</h3></a>
        </div>
      </div>
    </div>  
    </>
  )
}

export default footer