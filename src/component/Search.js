import { MdBookmarks } from "react-icons/md";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <form className="flex flex-col items-center">
{/* search bar */}
      <div className=" w-[80vw] md:w-[90vw]">
        <input
          type={"search"}
          placeholder="Search"
          className=" border focus:border-red-50 w-[100%] md:w-[80%] px-3 py-1.5 lg:text-xl "
        />
      </div>
      <div className="flex w-3/4  justify-between mx-5 my-5  text-sm lg:text-lg  ">
        <div className="flex justify-evenly gap-6">
          <a href="#">
            <div className="relative">
              <div className="orangeDot "></div>
              <div>Latest</div>
            </div>
          </a>
          <a href="#">
            <div>Popular</div>
          </a>
          <div>|</div>
          <a href="#">
            <div className=" text-[#FF4E00]">Premium</div>
          </a>

          <a href="#">
            <div className=" text-[#3481EF]">Free</div>
          </a>
        </div>
        <div className="flex justify-evenly gap-5">
          <a href="#">
            <div>
              <TbAdjustmentsHorizontal />
            </div>
          </a>
          <a href="#">
            <div>
              <MdBookmarks />
            </div>
          </a>
        </div>
      </div>
    </form>
  );
}
