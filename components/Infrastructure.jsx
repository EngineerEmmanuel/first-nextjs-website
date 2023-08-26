import Image from "next/image";
import targetImage from "../Images/target.png";
import phoneImage from "../Images/phone-charge.png";
import openSourceImage from "../Images/open-source.png";

const Infrastructure = () => {
    const infrstructureData = [
        {
            id:1,
            headerText:"Open Source Code",
            paraText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur natus doloremque similique. Vel, facilis non? Molestiae assumenda labore quae?",
            img:openSourceImage
        },
        {
            id:2,
            headerText:" Power Your Dapps",
            paraText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur natus doloremque similique. Vel, facilis non? Molestiae assumenda labore quae?",
            img: phoneImage
        },
        {
            id:3,
            headerText:"Connect with Endpoints",
            paraText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aspernatur natus doloremque similique. Vel, facilis non? Molestiae assumenda labore quae?",
            img: targetImage
        }
    ]
    return ( 
        <section className="mt-48">
            <h1 className="text-blue-500 text-center mb-5 text-4xl">Highly Customizable Infrastructure</h1>
            {/* infrastructure grid container */}
            <div className="grid grid-cols-3 items-center gap-6 ml-8 mr-8  ">
                {infrstructureData.map((info)=>{
                    return(
                        // infrastructure con
                        <div className="border border-solid border-1 border-blue-500 rounded-xl w-50 text-white h-full p-2 cursor-pointer">
                            {/* img con */}
                            <div>
                                <Image src={info.img} alt={info.headerText} className="w-20"/>
                            </div>
                            {/* details container */}
                            <div>
                                <h3 className="mb-4 font-black mt-4">{info.headerText}</h3>
                                <p>{info.paraText}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
     );
}
 
export default Infrastructure;