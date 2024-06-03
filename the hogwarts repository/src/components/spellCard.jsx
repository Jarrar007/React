const SpellCard = ({name,description}) => {
  return (
    <div className="w-56 h-auto p-4 bg-gray-600 rounded-lg hover:scale-105 shadow-black shadow-lg transition-transform cursor-pointer overflow-hidden">
        <h1 className="text-center font-extrabold text-3xl text-orange-500 overflow-ellipsis">{name}</h1>
        <h2 className="text-center font-bold text-white">{description}</h2>
    </div>
  )
}

export default SpellCard