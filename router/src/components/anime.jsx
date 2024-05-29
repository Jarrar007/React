import './anime.css'

function Anime ({img,title,season,video}) {
    return (
        <div className='anime'>
<a href={video} target='_blank'> <img src={img} alt="anime img" /></a>
<div className='info'>
   <a id='video' href={video} target='_blank'>{title}</a> 
    <br />
    Seasons : {season}
    
</div>

        </div>
    )
}

export default Anime;