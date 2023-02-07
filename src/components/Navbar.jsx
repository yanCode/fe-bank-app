import {logo, menu, close} from '../assets'
import {navLinks} from "../constants";
import {useState} from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (<nav className="w-full flex py-6 justify-between items-center navbar">
    <img src={logo} alt="hoobank" className="h-[32px]"/>
    {/*lg screen menu*/}
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li key={nav.id} className={`font-poppins  font-normal text-white cursor-pointer text-[16px] mr-10 last:mr-0`}>
          <a href={`#${nav.id}`}>
            {nav.title}
          </a>
        </li>))}
    </ul>
    {/*mobile menu*/}
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img src={toggle ? close : menu} alt="mobile menu"
           className='w-[28px] h-[28px] object-contain'
           onClick={() => setToggle(prevState => !prevState)}/>
      <div className={`${toggle ? 'flex' : 'hidden'}
       absolute top-20 my-2 mx-4 right-0 p-6 bg-black-gradient min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-end items-start flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id}
                className={`font-poppins  font-normal text-white cursor-pointer text-[16px]  mb-4 last:mb-0`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>))}
        </ul>
      </div>
    </div>
  </nav>)
}

export default Navbar