import LocomotiveScroll from 'locomotive-scroll';
import { useState } from 'react';
import { FaArrowUp } from "react-icons/fa";


const page = () => {
    // const [isscroll, setisscroll] = useState(false)
    const scroll = new LocomotiveScroll();
    const Top = () =>{
        scroll.scrollTo(0)
      }
    
    
  return (
    <div onClick={Top} className="scroll z-[999] w-16 flex overflow-hidden items-center justify-center h-16 fixed right-5 bottom-5 rounded-full bg-transparent hover:bg-black/70 transition-all duration-300 cursor-pointer border-2 border-black">
     <FaArrowUp id="scroll" className="relative text-2xl"/>
    </div>
  )
}

export default page