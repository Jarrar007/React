const MovieCard = ({img,title,year,type}) => {
    return (
     <>
     <a href="https://ww4.fmovies.co/24/" target="_blank">
      <div className="bg-black w-48 h-auto text-white border-2  p-1 rounded-xl border-black cursor-pointer shadow-black shadow-lg movieCard hover:scale-110 transition-transform duration-300 m-4 "   >
        <div className=" bg-gray-400 w-44 h-36 flex justify-center items-center bg-center bg-cover"  style={{backgroundImage : `url(${img})`}}></div>
        <h2 className="mt-2 text-center overflow-hidden whitespace-normal">{title}</h2> 
        <h2 className="mt-1 text-center">{year}</h2>
        <h2 className="mt-1 text-center">{type}</h2>
      </div>
      </a>
      </> 
    );
  };
  
  export default MovieCard;
  