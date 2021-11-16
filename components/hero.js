import Image from "next/image";
import hero_img from "../images/hero_img.jpeg";
import hero_img_mobile from "../images/hero_img_mobile.jpeg";

export default function Hero() {
  return (
    <section className="relative w-full font-main">
      <div className="h-xl relative hidden md:block">
        <Image
          layout="fill"
          src={hero_img}
          alt="hero-image"
          placeholder="blur"
        />
      </div>

      <div className="relative h-96 md:hidden">
        <Image src={hero_img_mobile} layout="fill" alt="hero-image" />
      </div>

      {/* HERO TEXT  */}
      <div className="absolute top-28 md:top-52  text-white w-full text-center">
        <h2
          className="font-light hidden md:block"
          style={{
            fontSize: "3.15714286rem",
          }}
        >
          We’ve got you covered.
        </h2>

        <h2 className="md:hidden font-light text-4xl mb-8">
          The simpler, safer <br /> way to pay online.
        </h2>

        <p
          className="font-semibold my-5 opacity-90 hidden md:block"
          style={{ fontSize: "15px" }}
        >
          We can reimburse you if something’s not right. Shop with peace of
          mind, we protect your eligible purchases. If your <br /> order doesn’t
          arrive or isn’t as the seller described, we can help you get your
          money back.
        </p>

        <button className="md:hidden rounded bg-primary text-white font-semibold text-sm tracking-tighter rounded-full py-3 w-72 mb-5 hover:bg-primarytwo">
          Sign up for Free
        </button>

        <button className="hidden md:inline-block rounded bg-primary text-white font-semibold text-sm tracking-tighter rounded-full py-3 px-32 hover:bg-primarytwo">
          Learn More
        </button>

        <p className="md:hidden text-xxs font-semibold">
          Own a business? Open a Business account.
        </p>
      </div>
    </section>
  );
}

{
  /* <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> */
}

// https://paypal-clone.vercel.app/
