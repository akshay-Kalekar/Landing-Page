import React from "react"
import Dropdown from "./Dropdown."
export default function Navbar(){

    return(
        <nav className="flex justify-between space-x-8 h-[10vh]  items-center overflow-hidden ">
          <div className="flex sm:justify-left space-x-8">
            <a href="#" className="border-2 bg-yellow-300 text-end "> MR  </a>
        {[
          ['Vectos', '#'],
          ['Photos', '#'],
          ['PSD', '#'],
          ['Video', '#'],
        ].map(([title, url]) => (
          <a href={url} className="rounded-lg px-3 py-2 text-[#979797] font-medium hover:bg-slate-100 hover:text-[#222429]">{title}</a>
        ))}
      <Dropdown/>
      </div>
    <div className="flex space-x-5  items-center ">
    <a href="#"> <div className=" border-2 border-[#a8a6a6] rounded-lg px-3 py-2 mr-5 w-fit  flex items-center text-[#a8a6a6]"> + Submit</div></a>
    <a href="#" >  <div className="rounded-full shadow-lg p-3"> <img src='./Images/gmail.ico' height={40} width={40} /></div>  </a>
    <a href="#" >  <div className="rounded-full shadow-lg p-3"> <img src='./Images/facebook.png' height={40} width={40} /></div>  </a>
      <div>
        
      </div>
    </div>



      </nav>
    )
}