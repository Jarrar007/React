import './manga comp.css'

function MangaComp ({img,website}) {

    return (
        <div>


        <a href={website} target='_blank'>
        <img className='mangaimg' src={img} alt="manga img" />
        </a>


        </div>
    )
}

export default MangaComp;