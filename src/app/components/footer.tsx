import Image from "next/image"
import { MdMailLock } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosCopy } from "react-icons/io";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";







function Footer (){
    return(
        <main className="w-full h-full md:h-[400px ] bg-green-300 flex justify-center items-start mt-20 pb-10 ">
        <div className=" w-full md:w-[80%] flex flex-col justify-center items-center ">
            {/*top*/}
            <div className="   w-[60%] md:w-full flex  flex-col justify-center items-center">
                <div className="bg-gray-200 w-[120px] h-10 flex justify-center items-center text-xl  rounded-xl text-gray-500 mt-2">Get in touch</div>
                <p className="mt-3 text-center md:text-xs md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore commodi aut reiciendis alias officia cupiditate at asperiores, minus animi error!</p>
            </div>
            <div className="mt-4 space-y-4">
                <h1 className="flex md:text-3xl justify-center items-center font-bold"> < MdMailLock className="mr-3 md:text-4xl" />ABC@email.com <IoIosCopy className="ml-3 cursor-pointer"  /></h1>
                <h2 className="flex md:text-3xl justify-center items-center"> <FaSquarePhone className="mr-3 md:text-4xl"  />00-000-000-000 <IoIosCopy className="ml-3 cursor-pointer"  /></h2>
            </div>
            <div  >
                <p className="mt-2 w-[100%] md:w-full justify-center items-center ">You may also find me on these platforms</p>
                <div className="flex justify-evenly items-center  mt-2 mb-10 ">
                <AiOutlineGithub      className="text-2xl"/>
                <FaLinkedin           className="text-2xl text-blue-500"/>
                <RiFacebookCircleFill className="text-2xl text-blue-500"/>
                </div>
            </div>
                  

             
    
        </div>
        </main>
    )
}
export default Footer