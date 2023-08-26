const Oracles = () => {
    return ( 
        <section>
            {/* the oracles grid container */}
            <div className="grid grid-cols-2 items-center gap-5 bg-gray-900 ml-8 mr-8 mt-48 rounded-xl p-5">
                {/* the oracles text container */}
                <div>
                    <h2 className="text-blue-500 text-6xl mb-7">Customize Oracles <br/> and Tokens</h2>
                    <p className="text-blue-500 pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum excepturi reprehenderit molestiae beatae quisquam consectetur est eos sed! Eos, non vitae voluptate dignissimos quo distinctio possimus debitis facilis cupiditate, dolorem similique laudantium esse neque hic, voluptas commodi doloremque deserunt? Corporis.</p>
                {/* oracle btn container */}
                <div className="mt-4">
                    <button className="border border-solid border-1 border-blue-500 w-22 p-2 text-white rounded-xl">BUILD NOW</button>
                </div>
                </div>
                {/* oracles video container */}
                <div>
                <video controls className="w-full rounded-xl">
                <source src="https://media.istockphoto.com/id/1418835422/video/3d-glitch-of-sculpture-thinker.mp4?s=mp4-640x640-is&k=20&c=hedezParc8w3Rt5tiUzoi9AlJ9r9U_jri57vXqhnL7o=" type="video/mp4"  />
                Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </section>
     );
}
 
export default Oracles;