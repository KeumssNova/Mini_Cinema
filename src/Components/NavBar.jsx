import { Link } from 'react-router-dom';
import '../../src/index.css'



const NavBar = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="../src/assets/Images/LOGO.png" alt="Logo" />
                </Link>
                
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div><Link to='/Bookmark' className='btn btn-outline-success'>Favorites</Link></div>
            </div>
        </nav>
    )
}

export default NavBar;
