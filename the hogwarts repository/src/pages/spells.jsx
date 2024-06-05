import { useState, useEffect } from "react"
import axios from "axios"
import SpellCard from "../components/spellCard"

const Spells = () => {

  const [spells,setSpells] = useState([])

  useEffect(()=>{
    async function fetch () {
      await axios.get('https://potterapi-fedeperin.vercel.app/en/spells').then((res)=>{
        setSpells(res.data)

      })
    }
    fetch()
  },[])

  return (
    <>
    <h1 className='text-center text-orange-600 font-bold text-3xl mb-6 cursor-pointer'>SPELLS</h1>
    <div className="flex flex-wrap justify-center items-center p-8 gap-6">
{spells.map((spell,index)=>{
  return (
    <div key={index}>
<SpellCard name={spell.spell}  description={spell.use} />
</div>
  )
})}
    </div>
    </>
  )
}

export default Spells