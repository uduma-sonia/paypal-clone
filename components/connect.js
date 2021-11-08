import Image from "next/image";
import connect1 from "../images/connect1.png";
import connect2 from "../images/connect2.png";
import connect3 from "../images/connect3.png";

export default function Connect() {
  return (
    <section
      className="bg-secondary text-primary h-screen font-main"
      style={{ padding: "90px 0px" }}
    >
      <div className="text-center mb-10">
        <h2 className="text-center text-4xl font-light mb-10">
          PayPal connects buyers and sellers.
        </h2>

        <button
          className="font-bold"
          style={{
            color: "#666666",
            borderBottom: "1px solid #666666",
            fontSize: "14px",
            padding: "10px",
          }}
        >
          For Buyers
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 container mx-auto">
        <div className="border border-red-900 flex flex-col items-center">
          <Image src={connect1} />

          <div className="flex">
            <button className="border border-silver">1</button>

            <p>Sign up with just an email address and password.</p>
          </div>
        </div>

        <div className="border border-red-900 flex flex-col items-center">
          <Image src={connect2} />
        </div>

        <div className="border border-red-900 flex flex-col items-center">
          <Image src={connect3} />
        </div>
      </div>
    </section>
  );
}
