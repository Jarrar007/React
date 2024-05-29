import './nav.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Nav () {



  const [menu , setMenu] = useState (false)



  function handleCancel () {

    setMenu (false)

  }



 function handleMenu () {

if (menu) { 

  return (

      <div style={{ width : '250px', height : '100vh', backgroundColor: '#000000c2', position: 'fixed', marginLeft : '0px', marginTop : '0px' }}>

      <ul style={{display : 'flex', flexDirection : 'column', gap : '25px', fontSize : '20px', listStyle : 'none'}}>

               <li><Link to = "/">Home</Link></li>
                <li><Link to = "my-favourite">My Favourite</Link></li>
                <li><Link to = "highest-rated">Highest Rated</Link></li>
                <li><Link to = "watch">Watch</Link></li>
                <li><Link to = "manga">Manga</Link></li>
                <li><Link to = "discover">Discover</Link></li>
                <li style={{fontSize : '30px', cursor : 'pointer' }}  onClick={handleCancel}> ❌ </li>
                
        </ul>
    
        </div>
   
  )
}
}



function handleTrue () {
  setMenu (true)
}




return (

  <div>

{handleMenu ()}


    


<div className='head'>

 <div onClick={handleTrue} id='menu'>
 ☰
    </div>

<div> 
    <Link to="/"><p id='title'>Anizone 07</p> </Link>
    </div>


 

  


        
    </div>

    </div>
    )

}

export default Nav;