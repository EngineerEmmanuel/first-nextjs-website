"use client"
import Image from 'next/image';
import dataImage from "../Images/encrypted.png";
const SmartData = () => {
    return ( 
        <section>
            {/* Smart data grid container */}
            <div className="grid grid-cols-2 items-center ml-8 mr-8 bg-gray-900 rounded-xl p-5">
                {/* image container */}
                <div className="">
                    <Image src={dataImage} alt="encryption" className="w-5rem " />
                </div>
                {/* data text container */}
                <div>
                    <h2 className="text-blue-500 text-6xl">Smart Data for <br/> Smart Contracts</h2>
                    <p className='text-blue-500 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit at, vitae ex illum atque non eaque esse libero quaerat error, rerum porro. Ratione vitae necessitatibus ab obcaecati cumque architecto a assumenda laudantium iusto consequuntur, natus, perspiciatis, alias libero facilis provident.</p>
                    {/* smart data button container */}
                    <div className='pt-4'>
                        <button className="hero-btn-bg-color text-white p-2 w-10rem rounded-md">LEARN MORE</button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default SmartData;