import style, {layout} from "../style.js";
import Button from "./Button.jsx";
import {features} from '../constants'


const FeatureCard = ({title, icon, content, index})=>(
  <div className={`flex flex-row rounded-[20px] p-6 mb-6 last:mb-0 feature-card`}>
    <div className={`w-[64px] h-[64px] ${style.flexCenter}`}>
      <img src={icon} className="w-[80%] h-[80%] rounded-full object-contain" alt={title}/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>You do the business, <br className="sm:block hidden"/> we’ll handle the money.
        </h2>
        <p className={`${style.paragraph}  mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving
          money. But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>)
}

export default Business