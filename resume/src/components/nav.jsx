import { Link } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => {
  return (
    <div className='nav'>
    <Link to='/'>Home</Link>
    <Link to='/projects'>Projects</Link>
        </div>
  )
}

export default Nav