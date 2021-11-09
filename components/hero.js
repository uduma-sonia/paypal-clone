import Image from "next/image";
import hero_img from "../images/hero_img.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full font-main">
      <div>
        <Image src={hero_img} height={650} alt="logo" />
      </div>

      {/* HERO TEXT  */}
      <div className="absolute top-52  text-white w-full text-center">
        <h2
          className="font-light"
          style={{
            fontSize: "3.15714286rem",
          }}
        >
          We’ve got you covered.
        </h2>

        <p
          className="font-semibold my-4 opacity-90"
          style={{ fontSize: "15px" }}
        >
          We can reimburse you if something’s not right. Shop with peace of
          mind, we protect your eligible purchases. If your <br /> order doesn’t
          arrive or isn’t as the seller described, we can help you get your
          money back.
        </p>

        <button className="rounded bg-primary text-white font-semibold text-sm tracking-tighter rounded-full py-3 px-32 hover:bg-primarytwo">
          Learn More
        </button>
      </div>
    </section>
  );
}

{
  /* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */
}
