import React from "react";
import "../CSS/Home.css";

export default function Home() {
    return (
        <>
            <div className="w-full">
                <div className="img flex items-center justify-end px-10 md:px-20">
                    <div className="text-right max-w-xl">
                        <h1 className="text-white font-bold leading-tight
                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                            Smiling With <br /> Healthy Teeth
                        </h1>

                        <p className="mt-6 text-white
                        text-base sm:text-lg md:text-xl">
                            We have the specialist, <br />
                            the expertise & the equipment to help
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-10 gap-6 px-4 md:px-12">
                <div className="md:col-span-6 mt-8 md:mt-12">
                    <p className="text-5xl md:text-6-xl sm:text-6.5xl font-serif">Welcome to docmet hospital & healthcare </p> <br />
                    <img className="rounded-lg " src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/single-img-01.png" alt="" />
                </div>

                <div className="md:col-span-4 bg-gray-100 p-6 md:p-10 rounded-lg">
                    <p className="text-lg sm:text-xl mt-12 font-serif">
                    We have the specialists, the expertise & <br /> the equipment to help. We have fully <br /> integrated technology service.
                    
                    </p></div>
            </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 md:px-10   ">

                        <div className="div  md:grid-col-3 sm:grid-col-6 bg-white ">
                             <p className=" text-2xl sm:text-3xl lg:text-4xl p-6  font-serif"><span className="lg:text-4xl xl:text-5xl">35 +</span>  Certified dentists <br />
                                 <span className="text-lg"> Skilled dental professionals at service</span>
                             </p> <hr /> 
                             <p className="text-2xl sm:text-3xl lg:text-4xl  p-6  font-serif"><span className="lg:text-4xl xl:text-5xl">67 +</span> Treated patients <br />
                                 <span className="text-lg"> Give excellence in orthodontic dentistry</span>
                             </p> <hr /> 
                             <p className="text-2xl sm:text-3xl lg:text-4xl  p-6 font-serif"><span className="lg:text-4xl xl:text-5xl">10 + +</span> Organized chairty<br />
                                 <span className="text-lg"> Dedicated development on global scale</span>
                             </p> <hr /> 
                             <p className="text-2xl sm:text-3xl lg:text-4xl  p-6  font-serif"><span className="lg:text-4xl xl:text-5xl">25 +</span> Overseas clinics <br />
                                 <span className="text-lg"> Healthcare located over many countries</span>
                             </p> <hr /> 



                        </div>
                        <div className="md:grid-col-3 mt-1 bg-gray-100 ml-6">
                            <p className="text-2xl lg:text-5xl sm:text-3xl">We creating bright <br /> beautiful smiles happen</p> <br />
                            <p className="text-base mt-4 leading-relaxed">Expanding group of dental practices across the World. With the skills <br /> and knowledge we have gathered over many years of working privately <br />and within the ABC, we ensure your care remains at the heart of <br /> everything we do and make your beautiful smile.</p>

                            <img className="mx-10 rounded-lg mt-5 w-full h-auto object-cover" src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/single-img-02.jpg" alt="" />
                        </div>

                        <div className=" mt-1">
                            

                            <img className="mx-10 rounded-lg mt-5 w-full h-auto object-cover" src="https://www.themetechmount.com/medisat/dm3/wp-content/uploads/sites/3/2023/08/single-img-03.jpg" alt="" />

                            <p className="text-lg sm:text-xl lg:4xl font-serif mt-10">Skilled dental professionals conduct high-quality <br /> treatments covering all specialities, striving for <br /> excellent patient care.</p>
                        </div>



                    </div>


             


        </>

    );
}
