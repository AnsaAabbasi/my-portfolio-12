import { Dot, Github, Instagram, Linkedin, LocateIcon, LocateOffIcon, MapPinCheckInside, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


function Hero() {
  return (
    <main className="w-full h-full md:h-[480px]  flex justify-center items-center bg-yellow-50">
      <div className="flex w-full w-[80%] h-full flex-col md:flex-row justify-between items-start pt-6">
        {/*left*/}
        <div className=" w-full md:w-[50%] flex justify-center items-center ">
          <Image src={"/picture/profile pic1.jpg"}
            width={100}
            height={100}
            alt="pic"
            className="w-[250px] h-[250px]">

          </Image>
        </div>

        {/*right*/}
        <div className=" w-full  md:w-40%] space-y-5">
          <h1 className="text-3xl ">Hi, I`&apos;`m Ansa Abbasiii</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis recusandae earumbr <br></br>dolorum
            neque ad laborum ipsum magni esse fuga enim.</p>
          <div>
            <p className="flex"> <MapPinCheckInside />Karachi, Pakistan</p>
            <p className="flex"> <Dot className="text-green-500" /> Available for new Projects</p>
          </div>
          <div className="flex space-x-3">
            <Link href={"#"}> <Github className="text-gray-800"/></Link>
            <Link href={"#"}><Linkedin className="text-blue-500" /></Link>
            <Link href={"#"}><Instagram className="text-pink-500"/></Link>
           </div>
        </div>
      </div>
    </main>
  )
}
export default Hero