import Image from "next/image";
import growthImage from "../Images/growth.png";

const Growth = () => {
    return ( 
        <section>
            {/*  */}
            <div className="grid grid-cols-2 items-center col-gap-3 place-center mr-5 ml-5 bg-gray-900 mt-48 rounded-xl p-5">
                {/* Growth image container */}
                <div>
                    <Image src={growthImage} alt="Growth image" className="w-22 "/>
                </div>
                {/* Growth text container */}
                <div>
                    <h2 className="text-blue-500 text-6xl mb-7">Monitize Tokenized <br/>Services with <br/> Customizable Bonding Curves </h2>
                    <p className="pt-4 text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque, repellat veniam magnam nostrum fuga incidunt ut dolor, sequi aliquid earum enim totam. Expedita cupiditate, quas libero eius tempora earum aliquam! Vel perspiciatis distinctio eum, deserunt voluptas repellendus laudantium ipsum.</p>
                </div>
            </div>
        </section>
     );
}
 
export default Growth;