import Image from "next/image"
import Link from "next/link";
import { IoLinkOutline } from "react-icons/io5";


function Work (){
    return(
        <main className="w-full h-full md:h-[400px ]  flex justify-center items-start ">
        <div className=" w-full md:w-[80%] flex flex-col justify-center items-center">
            {/*top*/}
            <div className="flex  flex-col justify-center items-center">
                <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-xl  rounded-xl text-gray-500 mt-2">Work</div>
                <p className=" w-[70%] md:w-[100%] justify-center items-center mt-3 text-center text-xs md:text-lg">Lorem ipsum dolor sit,  sit nostrum, perferendis dolor?</p>
            </div>
            <div className=" w-full flex flex-col md:flex-row justify-center items-center bg-yellow-50 mt-10 p-10 rounded-xl shadow-lg">
                {/*left*/}
                <div className="w-[70%] md:w-[70%] flex justify-center items-center ">
                  <Link href={"#"}> 
                   <Image src={"/picture/resume.jpg"}
                    width={100}
                    height={100}
                    className="w-[300px] rounded-xl"
                    alt="picture"></Image>
                    </Link>
                </div>

                 {/*right*/}
                 <div className=" w-[70%] md:w-[70%]  space-y-4 mt-4 md:mt-0">
                    <h1 className="text-2xl font-bold">Resume</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores asperiores iste omnis tenetur mollitia, rem quasi at explicabo nemo aut?</p>
                    <div className="flex flex-wrap gap-x-3">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Typescript</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Nextjs</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Tailwind</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">HTML</div>
                    </div>
                    <Link href={"#"}>
                    <IoLinkOutline  className="mt-4" />
                    </Link>
                 </div>
            </div>

             
             {/*2nd project*/}
 
            <div className=" w-full flex flex-col md:flex-row justify-center items-center bg-yellow-50 mt-10 p-10 rounded-xl shadow-lg">
                {/*left*/}
                <div className="w-[70%] md:w-[70%] flex justify-center items-center ">
                  <Link href={"#"}> 
                   <Image src={"/picture/WeatherApp.jpg"}
                    width={100}
                    height={100}
                    className="w-[300px] rounded-xl"
                    alt="picture"></Image>
                    </Link>
                </div>

                 {/*right*/}
                 <div className=" w-[70%] md:w-[70%]  space-y-4 mt-4 md:mt-0">
                    <h1 className="text-2xl font-bold">WeatherApp</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores asperiores iste omnis tenetur mollitia, rem quasi at explicabo nemo aut?</p>
                    <div className="flex flex-wrap gap-x-3">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Typescript</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Nextjs</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Tailwind</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">HTML</div>
                    </div>
                    <Link href={"#"}>
                    <IoLinkOutline  className="mt-4" />
                    </Link>
                 </div>
            </div>

          




             {/*3rd project*/}
 
             <div className=" w-full flex flex-col md:flex-row justify-center items-center bg-yellow-50 mt-10 p-10 rounded-xl shadow-lg">
                {/*left*/}
                <div className="w-[70%] md:w-[70%] flex justify-center items-center ">
                  <Link href={"#"}> 
                   <Image src={"/picture/conuntdowntimer.jpg"}
                    width={100}
                    height={100}
                    className="w-[300px] rounded-xl"
                    alt="picture"></Image>
                    </Link>
                </div>

                 {/*right*/}
                 <div className=" w-[70%] md:w-[70%]  space-y-4 mt-4 md:mt-0">
                    <h1 className="text-2xl font-bold">CountdownTimer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores asperiores iste omnis tenetur mollitia, rem quasi at explicabo nemo aut?</p>
                    <div className="flex flex-wrap gap-x-3">
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Typescript</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Nextjs</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">Tailwind</div>
                    <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-sm  rounded-xl text-gray-500 mt-2">HTML</div>
                    </div>
                    <Link href={"#"}>
                    <IoLinkOutline  className="mt-4" />
                    </Link>
                 </div>
            </div>



    
      </div>
        </main>
    )
}
export default Work