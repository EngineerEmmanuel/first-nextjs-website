"use client"

import Image from "next/image";

import handShakeImage from "../Images/handshake.png"

const HandShake = () => {
    return ( 
        <section>
            {/* Hand shake grid con */}
            <div className="grid grid-cols-2 items-center ml-8 mr-8 bg-gray-900 rounded-xl p-5 mt-48 gap-5">
                {/* Hand shake text con */}
                <div>
                    <h2 className="text-blue-500 text-6xl mb-7">Earn Trust while <br/> you Earn ZAP </h2>
                    <p className="text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ut sint nihil, ratione magnam necessitatibus tenetur accusamus placeat, at unde doloribus deserunt reprehenderit repellat officia ipsa eum? Assumenda in, facilis aspernatur laudantium a, itaque mollitia sit incidunt sunt ullam architecto ducimus error eligendi doloremque esse quam magnam iste nam dignissimos?</p>
                    {/* hand shake button con */}
                    <div>
                        <button className="hero-btn-bg-color p-2 w-10rem rounded-md text-white mt-5">EARN NOW</button>
                    </div>
                </div>
                {/* Hand shake image con */}
                <div>
                    <Image src={handShakeImage} alt="trust" className="w-5rem "/>
                </div>
            </div>
        </section>
     );
}
 
export default HandShake;