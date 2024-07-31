import axios from "axios"
import { useState } from "react"
import { LuCloudRainWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { IoIosTime } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion"

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
    <div>

<motion.div className="flex flex-row justify-center items-center pt-[30px] gap-[25px]" initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:0.5}}>
    <motion.input className="text-center placeholder:font-semibold placeholder:text-[20px] text-[20px] text-orange-600 font-semibold placeholder-orange-600 bg-transparent border-b-[2px] border-orange-600 outline-none" initial={{opacity:0,x:-50}} animate={{x:0,opacity:1}} transition={{delay:0.5,duration:1.5}} type="text" placeholder="Enter City" value={city} onChange={handleCityName} onKeyDown={handleEnter} />
    <BsSearch className="text-orange-600 font-bold text-[30px] cursor-pointer"  onClick={getData} />
</motion.div>

       {data && <motion.h2 initial={{opacity:0,y:50}} animate={{opacity:1,y:0}}  transition={{duration:1.5}} className="text-orange-600 font-bold text-[25px] text-center pt-[30px]">{data.location.name},{data.location.country} </motion.h2> }
        
       {data&& <div className="flex flex-col justify-center items-center mt-[50px] gap-0">
       <motion.h2 initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{delay:0.25,duration:1.5}}  className="text-[45px] text-orange-600 font-bold">{data.current.temp_c}°C</motion.h2> 
       <motion.img initial={{opacity:0,x:50}} animate={{opacity:1,x:0}} transition={{delay:0.5,duration:1.5}}  className="w-[90px] h-auto mt-[-15px]" src={data.current.condition.icon} alt='img' />
        </div> }



{data&& <div className="flex flex-wrap justify-center items-center mt-[30px] gap-[40px]">

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:0.75}}  className="flex flex-row justify-center items-center">
        <img src={data.current.condition.icon} alt="img" />
        <h2 className="ml-[-5px] text-orange-600 font-bold text-[25px]">{data.current.condition.text}</h2>
    </motion.div>

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:1}}  className="flex flex-row justify-center items-center gap-[4px]">
    <LuCloudRainWind className="text-[30px] font-bold text-orange-600"/>
    <h2 className=" text-orange-600 font-bold text-[25px]">{data.current.wind_kph}</h2>
    </motion.div>

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:1.25}}  className="flex flex-row justify-center items-center">
    <WiHumidity className="text-[30px] font-bold text-orange-600"/>
    <h2 className=" text-orange-600 font-bold text-[25px]">{data.current.humidity}</h2>
    </motion.div>

    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1.5,delay:1.5}}  className="flex flex-row justify-center items-center gap-[4px]">
    <IoIosTime className="text-[30px] font-bold text-orange-600"/>
    <h2 className=" text-orange-600 font-bold text-[25px]">{data.location.localtime}</h2>
    </motion.div>

    

</div> }
{data && <motion.h1 initial={{opacity:0,x:-50}} animate={{opacity:1,x:0}} transition={{duration:1.5,delay:1.75}}  className="text-orange-600 text-[20px] font-bold text-center pt-[30px]">Last Updated : {data.current.last_updated}</motion.h1>
        }
    </div>
  )
}

export default Weather