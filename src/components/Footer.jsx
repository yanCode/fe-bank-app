import style from "../style.js";
import {logo} from "../assets";
import {footerLinks, socialMedia} from "../constants/index.js";

const Footer = () => (
  <section className={`${style.flexCenter} ${style.paddingY} flex-col`}>
    <div className={`${style.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start">
        <img src={logo} alt='hoobank' className="w-[266px] h-[72px] object-contain"/>
        <p className={`${style.paragraph} mt-4  max-w-[310px] ml-4`}>A new way to make the payments easy, reliable and
          secure.</p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt:10">
        {footerLinks.map(footerLink => (
          <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{footerLink.title}</h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary mb-2 last:mb-0`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full justify-between items-center flex md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-light text-center  text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img key={social.id} src={social.icon} alt={social.id}
               className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0`}/>
        ))}
      </div>
    </div>
  </section>
)

export default Footer