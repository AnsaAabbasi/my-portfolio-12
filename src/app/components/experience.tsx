import Image from "next/image"


function Experience() {
    return (
        <main className="w-full h-full md:h-[400px ]  flex justify-center items-start mt-20">
            <div className=" w-full md:w-[80%] flex flex-col justify-center items-center">
                {/*top*/}
                <div className="flex  flex-col justify-center items-center">
                    <div className="bg-gray-200 w-[120px] h-10 flex justify-center items-center text-xl  rounded-xl text-gray-500 mt-2">Experience</div>
                    <p className="mt-3 text-center text-xs md:text-lg">Lorem ipsum dolor sit, amet sit nostrum, perferendis dolor?</p>
                </div>
                {/*bottom*/}
                <div className=" bg-yellow-50 w-full md:w-[70%] flex flex-wrap justify-center items-center gap-5 mt-10 mb-10 p-5 rounded-xl shadow-lg">
                    {/*top*/}
                    <div className="flex  flex-col md:flex-row justify-between w-full">
                        <h2 className="text-xl font-bold text-green-400">UPWORK</h2>
                        <h2 className="text-xl font-bold" >Front-dev</h2>
                        <p>2023-prent</p>
                    </div>
                    {/*bottom*/}
                    <div className="w-full md:w-[70%] ">
                        <ul>
                            <li className="list-disc  ml-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus odio ducimus incidunt voluptatem earum sequi. Quid natus nisi? Eius, eveniet provident!</li>
                            <li className="list-disc  ml-20 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus odio umquam cupiditate aperiam temporibus esse quo aspernatur asperiores natus nisi? Eius,.</li>
                            <li className="list-disc  ml-20 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus odio ducimus incidunt voluptatem earum sequi. Quidem numquam cupiditate aperiam tempor!</li>

                        </ul>
                    </div>
                </div>    

                
                    {/*div 2*/}
                    <div className=" bg-yellow-50 w-full md:w-[70%] flex flex-wrap justify-center items-center gap-5 mt-10 mb-10 p-5 rounded-xl shadow-lg">
                    {/*top*/}
                    <div className="flex  flex-col md:flex-row justify-between w-full">
                        <h2 className="text-xl font-bold text-green-400">UPWORK</h2>
                        <h2 className="text-xl font-bold" >Front-dev</h2>
                        <p>2023-prent</p>
                    </div>
                    {/*bottom*/}
                    <div className="w-full md:w-[70%] ">
                        <ul>
                            <li className="list-disc  ml-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus odio ducimus incidunt voluptatem earum sequi. Quid natus nisi? Eius, eveniet provident!</li>
                            <li className="list-disc  ml-20 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus odio umquam cupiditate aperiam temporibus esse quo aspernatur asperiores natus nisi? Eius,.</li>
                            <li className="list-disc  ml-20 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem natus odio ducimus incidunt voluptatem earum sequi. Quidem numquam cupiditate aperiam tempor!</li>

                        </ul>
                    </div>
                </div>    

            </div>
        </main>
    )
}
export default Experience