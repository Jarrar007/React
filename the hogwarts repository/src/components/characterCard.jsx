const CharacterCard = ({img,name,hosue,actor}) => {
  return (
    <div className="w-48 h-auto bg-gray-700 p-2 rounded-md cursor-pointer hover:scale-105 transition-transform shadow-black shadow-lg">
      <div
        className=" bg-gray-500 w-42 h-32 bg-center bg-cover mb-2"
        style={{
          backgroundImage:
            `url('${img}')`,
        }}
      ></div>
      <h2 className="font-bold text-center text-orange-500">{name}</h2>
      <h2 className="font-bold text-center text-orange-500">{hosue}</h2>
      <h2 className="text-center font-bold text-orange-500">{actor}</h2>
    </div>
  );
};

export default CharacterCard;
