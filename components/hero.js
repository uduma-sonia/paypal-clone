import Image from "next/image";
import hero_img from "../images/hero_img.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full font-main">
      <div>
        <Image src={hero_img} height={700} />
      </div>

      {/* HERO TEXT  */}
      <div className="absolute top-56  text-white w-full text-center">
        <h2
          className="font-light"
          style={{
            fontSize: "3.35714286rem",
          }}
        >
          We’ve got you covered.
        </h2>

        <p className="font-semibold my-5 text-base">
          We can reimburse you if something’s not right. Shop with peace of
          mind, we protect your eligible purchases. If your <br /> order doesn’t
          arrive or isn’t as the seller described, we can help you get your
          money back.
        </p>

        <button className="rounded bg-primary text-white font-semibold text-sm rounded-full py-3 px-36 hover:bg-primarytwo">
          Learn More
        </button>
      </div>
    </section>
  );
}

{
  /* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */
}
