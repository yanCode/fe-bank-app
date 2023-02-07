import style from "../style.js";
import {arrowUp} from "../assets/index.js";

const GetStarted = () => {
  return (
    <div className={
      `${style.flexCenter} 
         w-[140px] 
         h-[140px] 
         rounded-full 
         cursor-pointer
         p-[2px]
         bg-blue-gradient`}>
      <div className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full `}>
        <div className={`${style.flexStart} items-center`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-0.5">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow up icon" className='w-[32px] h-[32px] object-cover'/>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>)
}

export default GetStarted