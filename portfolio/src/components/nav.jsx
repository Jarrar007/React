import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { motion } from "framer-motion"

const Nav = () => {


useGSAP(()=>{
    gsap.to('.header',{
        y: 10,
        repeat : -1,
        yoyo : true,
        duration : 2,
        delay : 1.5,
        opacity : 1,
        stagger: {
            amount : 1,
        }
    })
})




  return (
    <div className="flex justify-between items-center px-[25px] py-2">
        <motion.div initial = {{y : 50 , opacity : 0}} animate = {{y : 0 , opacity : 1}} transition={{duration : 1.5, delay : 1.5}} id="logo" className="text-[30px] font-extrabold text-white cursor-pointer">
        MJA
        </motion.div>

        <div className="text-[30px] text-white flex justify-center items-center gap-5">

        <a href="https://github.com/Jarrar007" target="_blank">
         <FaGithub  className=" cursor-pointer header opacity-[0]"/>
         </a>

        <a href="https://www.instagram.com/jarrar07?igsh=MTRyMnJ3bHA4OWlnNQ==" target="_blank"> <FaInstagram className=" cursor-pointer header opacity-[0]"/>
        </a>

        <a href="mailto:jarrarahmed2003@gmail.com" target="_blank">
            <BiLogoGmail className=" cursor-pointer header opacity-[0]"/>
            </a>

        <a href=" https://wa.me/+923084632236" target="_blank">
        <FaWhatsapp className=" cursor-pointer header opacity-[0]"/>
        </a>
        </div>
    </div>
  )
}

export default Nav;