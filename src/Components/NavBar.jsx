import '../../src/index.css'

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand">
                    <img src="../src/assets/Images/LOGO.png" alt="Logo" />
                </a>
                
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <a href="">
                    <button className='btn btn-outline-success'>Favorites</button>
                </a>
            </div>
        </nav>
    )
}

export default NavBar;