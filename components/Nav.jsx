const Nav = () => {
    return ( 
        <nav className="flex justify-between items-center list-none bg-black p-4">
            {/* Logo container */}
            <div>
            <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>

            </div>
            
            <ul className="flex ">
                <li className="pr-3 cursor-pointer text-white">Home</li>
                <li className="pr-3 cursor-pointer text-white">About</li>
                <li className="pr-3 cursor-pointer text-white">Contact Us</li>
            </ul>
            {/* Nav btn container */}
            <div>
                <button className="hero-btn-bg-color w-30 p-2 mr-4 rounded-xl text-white">LEARN MORE</button>
            </div>
        </nav>
     );
}
 
export default Nav;