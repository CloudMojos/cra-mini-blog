const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="title">ANK Thoughts</h1>
            <ul className="navlinks">
                <li><a href="/">Home</a></li>
                <li><a href="/create">New Blog</a></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;