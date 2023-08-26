const Footer = () => {
    return ( 
        <footer className="mt-48 bg-black p-10">
            {/* footer grid container */}
            <div className="flex items-center gap-10">
                {/* logo container */}
                <div>
                <svg id="logo-35" width="50" height="39" viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" class="ccompli1" fill="#007AFF"></path> <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z" class="ccustom" fill="#312ECB"></path> </svg>
                <p className="text-white">Build Dapps Effortlessly with <br/>our Services </p>
                </div>
                {/* Useful links container */}
                <div className="list-none text-white">
                    <ul>
                        <li className="pb-3">Home</li>
                        <li className="pb-3">Deploy</li>
                        <li className="pb-3">Learn more</li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;