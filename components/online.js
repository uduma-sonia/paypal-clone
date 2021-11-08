import Image from "next/image";
import online_img from "../images/online_img.jpg";

export default function Online() {
  return (
    <section
      className="font-main text-primary text-center"
      style={{ padding: "90px 0px" }}
    >
      <h2 className="text-4xl font-light mb-16">
        PayPal is for everyone who pays online.
      </h2>

      <div className="">
        <Image src={online_img} />
      </div>

      <h3 className="mt-3 text-2xl">Individuals</h3>

      <p className="text-xs font-semibold mt-4">
        Find out why we have more than 200M active accounts worldwide.
      </p>

      <button
        className="border border-primary rounded-full mt-8 text-secondary font-bold text-xs"
        style={{ padding: "13px 30px 15px", width: "200px" }}
      >
        Learn More
      </button>
    </section>
  );
}
