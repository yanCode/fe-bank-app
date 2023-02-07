import style from "../style.js";
import {FeedbackCard} from "./";
import {feedback} from "../constants";

const Testimonials = () => (
  <section id="client" className={`${style.paddingY} ${style.flexCenter} flex-col relative`}>
    <div></div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={`${style.heading2} flex-1`}>What people are <br className="sm:block hidden"/> saying about us</h1>
      <div className='flex-1 md:mt-0 mt-6'>
        <p className={`${style.paragraph} max-w-[450px] text-left`}>Everything you need to accept card payments
          and grow your business anywhere on the planet.</p>
      </div>
    </div>
    <div className="flex flex-wrap">
      {feedback.map(card=>(
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)
export default Testimonials