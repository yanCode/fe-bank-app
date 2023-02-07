import style, {layout} from "../style.js";
import {apple, bill, google} from '../assets'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt='billing' className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] top-0 w-[50%] h-[50%] -left-1/2 white__gradient rounded-full"/>
        <div className="absolute bottom-0 w-[50%] h-[50%] -left-1/2 pink__gradient rounded-full"/>
        <div/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.
        </h2>
        <p className={`${style.paragraph} mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
          Fusce ipsum orci rhoncus
          aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="apple" className="w-[128px] h-[42px] cursor-pointer" />
          <img src={google} alt="google_play" className="w-[128px] h-[42px] cursor-pointer ml-8"/>
        </div>
      </div>
    </section>)
}

export default Billing