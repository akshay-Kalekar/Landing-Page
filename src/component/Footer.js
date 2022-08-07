import { AiOutlineArrowRight } from "react-icons/ai";


export default function Footer(){
   return( <div className=" text-xs sm:text-lg flex justify-between my-10" >
{/*Hyperlink to redirect to collection */}
<a href="#" className="underline flex gap-1"><span>Discover All <br/> Collections</span>  <img src="./Images/collection.png" className="h-1/2   sm:h-full sm:w-28"/></a>
{/* Next Page */}
<div className="flex items-center gap-2 border rounded-md  sm:px-8 sm:py-1 ">
    Next page  <AiOutlineArrowRight/>
</div>

    {/* Page Numbering */}
         <div className="flex gap-2"> <span className=" p-1 text-center">Page</span> <span><button className="border p-1 bg-[#979797] blur-[0.8px]" >&lt;</button><span className=" border p-1 text-center">1</span><button className="border p-1 bg-[#979797]">&gt;</button></span><span className=" p-1 text-center">of 120</span></div>

    </div>
   )
}