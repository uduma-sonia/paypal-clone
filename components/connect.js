import Image from "next/image";
import connect1 from "../images/connect1.png";
import connect2 from "../images/connect2.png";
import connect3 from "../images/connect3.png";

export default function Connect() {
  return (
    <section
      className="bg-secondary text-primary font-main"
      style={{ padding: "80px 0px" }}
    >
      <div className="text-center mb-10">
        <h2 className="text-center text-3xl font-normal opacity-80 mb-9">
          PayPal connects buyers and sellers.
        </h2>

        <button
          className="font-bold"
          style={{
            color: "#666666",
            borderBottom: "1px solid #666666",
            fontSize: "12px",
            padding: "8px",
          }}
        >
          For buyers
        </button>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 container mx-auto md:px-28">
        <div className="relative border-b-2 border-gray-200 pb-3 md:border-none">
          {/* ARROW  */}

          <span className="w-8 h-8 border border-l-0 border-b-0 border-gray-300 absolute transform rotate-45 top-16 right-2 hidden md:block"></span>

          <div className="text-center">
            <Image src={connect1} width={170} height={160} alt="logo" />
          </div>

          <div className="flex pl-2 md:pl-0">
            <button
              className="border border-silver w-10 h-10 md:w-12 rounded-full font-semibold"
              style={{ fontSize: "13px" }}
            >
              1
            </button>

            <p
              className="text-xs font-semibold pl-5 pr-3"
              style={{ fontSize: "13px" }}
            >
              {" "}
              <span className="text-secondary">Sign up </span> with just an
              email address and password.
            </p>
          </div>
        </div>

        <div className="relative border-b-2 border-gray-200 pb-3 md:border-none">
          <span className="w-8 h-8 border border-l-0 border-b-0 border-gray-300 absolute transform rotate-45 top-16 right-2 hidden md:block"></span>

          <div className="text-center">
            <Image src={connect2} width={170} height={160} alt="logo" />
          </div>

          <div className="flex pl-2 md:pl-0 items-center md:items-center">
            <button
              className="border border-silver w-10 h-10 rounded-full font-semibold"
              style={{ fontSize: "13px" }}
            >
              2
            </button>

            <p
              className="text-xs font-semibold pl-5"
              style={{ fontSize: "13px" }}
            >
              {" "}
              Securely add your cards.
            </p>
          </div>
        </div>

        <div>
          <div className="text-center">
            <Image src={connect3} width={170} height={160} alt="logo" />
          </div>

          <div className="flex pl-2 md:pl-0 items-center md:items-center">
            <button
              className="border border-silver w-10 h-10 rounded-full font-semibold"
              style={{ fontSize: "13px" }}
            >
              3
            </button>

            <p
              className="text-xs font-semibold pl-5"
              style={{ fontSize: "13px" }}
            >
              Use the PayPal button to check out with <br /> just an email
              address and password.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          className="border border-primary rounded-full mt-8 text-secondary font-bold"
          style={{
            padding: "13px 40px 15px",
            width: "180px",
            fontSize: "13px",
          }}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}
