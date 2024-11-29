import Image from "next/image"


function Skill (){
    return(
        <main className="w-full h-full md:h-[400px ] bg-yellow-50 flex justify-center items-start mt-20">
        <div className=" w-full md:w-[80%] flex flex-col justify-center items-center">
            {/*top*/}
            <div className="flex  flex-col justify-center items-center">
                <div className="bg-gray-200 w-[100px] h-10 flex justify-center items-center text-xl  rounded-xl text-gray-500 mt-2">Skills</div>
                <p className="mt-3 text-center text-xs md:text-lg">Lorem ipsum dolor sit,  sit nostrum, perferendis dolor?</p>
            </div>
            {/*bottom*/}
            <div className="w-fullmd:w-[80%] flex flex-wrap justify-center items-center gap-4 mt-10 mb-20">
                {/*box1*/}
                <div>
                    <Image src={"/picture/javascript.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                 {/*box2*/}
                 <div>
                    <Image src={"/picture/nestjs.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                 {/*box3*/}
                 <div>
                    <Image src={"/picture/git.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                   {/*box4*/}
                   <div>
                    <Image src={"/picture/next.js.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                   {/*box5*/}
                   <div>
                    <Image src={"/picture/node.js.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                   {/*box6*/}
                   <div>
                    <Image src={"/picture/postgreSQL.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                   {/*box7*/}
                   <div>
                    <Image src={"/picture/react.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                   {/*box8*/}
                   <div>
                    <Image src={"/picture/sass.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                   {/*box9*/}
                   <div>
                    <Image src={"/picture/storybook.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                 {/*box10*/}
                 <div>
                    <Image src={"/picture/tailwindcss.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>


                 {/*box11*/}
                 <div>
                    <Image src={"/picture/typescript.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>


                 {/*box12*/}
                 <div>
                    <Image src={"/picture/figma.jpg"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>


                 {/*box13*/}
                 <div>
                    <Image src={"/picture/expressjs.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

                 {/*box14*/}
                 <div>
                    <Image src={"/picture/cypress.png"}
                    width={100}
                    height={100}
                    alt="pic"></Image>
                </div>

          


            </div>
      </div>
        </main>
    )
}
export default Skill