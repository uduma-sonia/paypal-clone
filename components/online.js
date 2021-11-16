import Image from "next/image";
import online_img from "../images/online_img.jpg";

export default function Online() {
  return (
    <section
      className="font-main text-primary text-center pt-10 pb-20 md:py-20 px-10 md:px-0"
      // style={{ padding: "80px 0px" }}
    >
      <h2 className="text-3xl md:text-4xl font-light mb-10">
        PayPal is for everyone <br className="md:hidden" /> who pays online.
      </h2>

      <div className="">
        <Image src={online_img} alt="avatar" />
      </div>

      <h3 className="mt-3 text-2xl">Individuals</h3>

      <p className="text-xxs font-semibold mt-4 mb-6 md:mb-0">
        Find out why we have more than 200M active accounts worldwide.
      </p>

      <button
        className="border border-primary rounded-full mt-6 text-secondary font-bold py-4 w-56 md:w-44"
        style={{
          // padding: "13px 40px 15px",
          // width: "180px",
          fontSize: "13px",
        }}
      >
        Learn More
      </button>
    </section>
  );
}
