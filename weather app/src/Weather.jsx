import axios from "axios"
import { useState } from "react"
import { LuCloudRainWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion"
import { MdLocationOn } from "react-icons/md";


const Weather = () => {

    const [city,setCity] = useState("")
    const [data,setData] = useState ()


      function handleCityName (event) {
         setCity(event.target.value)
      }

    async function getData () {
        await axios.get(`https://api.weatherapi.com/v1/current.json?key=b0e9330f64f64d699c5210043243007&q=${city}`).then((res)=>{
            setData(res.data)
            setCity("")
        
          })
      }

      function handleEnter (event) {
           
        if (event.keyCode == 13) {
            getData()
        }
      }


  return (
    <div className="flex flex-col justify-center items-center">

<motion.div className="flex flex-row justify-center items-center pt-[30px] gap-[25px]" initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:0.5}}>
    <motion.input className="text-center placeholder:font-semibold placeholder:text-[20px] font-mono text-[20px] text-white font-semibold placeholder-white bg-transparent border-b-[2px] border-white outline-none" initial={{opacity:0,x:-50}} animate={{x:0,opacity:1}} transition={{delay:0.5,duration:1.5}} type="text" placeholder="Enter City" value={city} onChange={handleCityName} onKeyDown={handleEnter} />
    <BsSearch className="text-white font-bold text-[30px] cursor-pointer"  onClick={getData} />
</motion.div>

       {data &&
        <motion.h2 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}}  transition={{duration:1.5}} className=" flex flex-row justify-center items-center text-white font-bold font-mono text-[25px] text-center pt-[30px]"><MdLocationOn/>{data.location.name},{data.location.country} </motion.h2> }

{data && <motion.div initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:0.25}}  className="flex flex-row justify-center items-center gap-[4px]">
    <h2 className=" text-white font-bold font-mono text-[15px]">{data.location.localtime}</h2>
    </motion.div> }
        
       {data&& <div className="flex flex-col justify-center items-center pt-[20px] gap-0">
       <motion.h2 initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:1.5}}  className="text-[55px] text-white font-bold font-mono">{data.current.temp_c}°C</motion.h2> 
  
        </div> }



{data&& <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:0.5}}  className="flex flex-wrap justify-center items-center mt-[30px] gap-[20px] w-[320px] h-[100px] rounded-3xl bg-slate-800 bg-opacity-[0.8]">

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:0.75}}  className="flex flex-row justify-center items-center">
        <img className="w-[30px] h-auto" src={data.current.condition.icon} alt="img" />
        <h2 className=" text-white font-mono font-bold text-[15px]">{data.current.condition.text}</h2>
    </motion.div>

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:1}}  className="flex flex-row justify-center items-center gap-[4px]">
    <LuCloudRainWind className="text-[20px] font-bold text-white"/>
    <h2 className=" text-white font-mono font-bold text-[20px]">{data.current.wind_kph}</h2>
    </motion.div>

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:1.25}}  className="flex flex-row justify-center items-center">
    <WiHumidity className="text-[25px] font-bold text-[#ffffff]"/>
    <h2 className=" text-white font-mono font-bold text-[20px]">{data.current.humidity}</h2>
    </motion.div>

   

    

</motion.div> }

{data && <motion.h1 initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:1.75}}  className="text-white text-[15px] font-bold font-mono text-center pt-[30px]">Last Updated : {data.current.last_updated}</motion.h1>
        }
    </div>
  )
}

export default Weather