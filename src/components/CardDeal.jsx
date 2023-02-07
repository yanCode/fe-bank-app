import style, {layout} from "../style.js";
import Button from "./Button.jsx";
import {cards} from "../assets";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>
        Find a better card deal<br className="sm:block hidden"/> in few easy steps.
      </h2>
      <p className={`${style.paragraph} mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
        ac, ametau.
      </p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={cards} alt="card" className="w-[100%] h-[100%]"/>
    </div>


  </section>
)
export default CardDeal