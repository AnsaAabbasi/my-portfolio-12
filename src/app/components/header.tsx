import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
  

function Header() {
    return (
        <header className="w-full h-14  flex justify-between items-center bg-green-300 ">
            {/*logo*/}
            <div>
                <h1 className="text-2xl font-bold pl-3">{"<AA/>"}</h1>
            </div>
             {/*Nav links*/}
             <ul className="hidden md:block">
                <li className="space-x-5 pr-4">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>Project</Link>
                <button className="bg-gray-400 hover:bg-gray-950 text-white px-4 py-2 rounded-xl">Download CV</button>
                </li>
             </ul>
            
        <Sheet>
  <SheetTrigger className="text-xl md:hidden"> 
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Ansa Abbasi</SheetTitle>
      <SheetDescription>
      <ul className="flex flex-col">
                <li className="flex flex-col gap-y-4">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>About</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>Project</Link>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-xl">Download CV</button>
                </li>
             </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </header>
    )
  }
  export default Header