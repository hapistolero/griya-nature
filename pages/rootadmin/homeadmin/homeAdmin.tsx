import React from "react";


export default function HomeAdmin(){
    return(
        <>
        <section className="w-full h-full bg-slate-700 pt-5 md:h-[90vh]  overflow-y-scroll md:mt-20">
            <div className="w-full h-fit flex hp:flex-col md:flex-row   justify-around items-center p-5 ">
                <div className="h-[7em] sm:h-[9em] md:h-[10em] w-[80%] m-2 rounded-lg  bg-white">
                    <p>1</p>
                </div>
                <div className="h-[7em] sm:h-[9em] md:h-[10em] w-[80%] m-2 rounded-lg  bg-white"></div>
                <div className="h-[7em] sm:h-[9em] md:h-[10em] w-[80%] m-2 rounded-lg  bg-white"></div>

            </div>

            <div className="h-[20em] md:h-[23em] w-full ">
                <h2 className="text-white text-center m-5"> Laporan </h2>

                <div className="h-[80%] w-[80%] bg-white m-auto rounded-lg ">

                </div>

            </div>

        </section>


        </>
    )
}