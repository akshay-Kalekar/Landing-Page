import { TbDownload } from "react-icons/tb";


export default function Card({title,img}){
    const textlength = title.length


    return (<div className="rounded-md bg-white  flex flex-col items-center p-4 gap-4 justify-evenly    ">
        <div className=" bg-[#f6f6f6] rounded-lg block h-[50%] w-full">
            <img src={img} className="h-full w-full"/>
        </div>
        <div className="inline" >
            <span className=" text-lg  sm:text-8xl text-[#222429] lg:text-[8rem] ">{title.slice(0,1)}</span><span className=" text-sm sm:text-lg text-[#979797] lg:text-xl">{title.slice(1,textlength)}</span>
        </div>
        <div >
          <a href={img} className="w-fit flex items-center justify-center gap-x-2 lg:text-3xl font-bold   "  download> <div className="underline w-fit "> Download  </div> <TbDownload/> </a> 
        </div>
    </div>
    )
}