import Image from "next/dist/client/image";
import p_logo from "../../images/p_logo.png";
import { useRouter } from "next/dist/client/router";

export default function Register() {
  const router = useRouter();
  return (
    <section className="h-screen font-main">
      <div className="flex justify-center">
        <div style={{ width: "470px" }}>
          <div className="flex justify-between items-center">
            {/* <p>Flag</p> */}

            <div className="cursor-pointer" onClick={() => router.push("/")}>
              <Image src={p_logo} width={55} height={43} alt="logo" />
            </div>

            <button
              onClick={() => router.push("/signin")}
              className="tracking-tighter mr-4 font-semibold text-secondary text-xs"
            >
              Log In
            </button>
          </div>

          <div className="text-center mt-8 text-primary">
            <h4 className="font-medium" style={{ fontSize: "28px" }}>
              Sign up for PayPal
            </h4>

            <p className="font-semibold mt-4" style={{ fontSize: "17px" }}>
              First, add your mobile number
            </p>
          </div>

          <div className="flex justify-center my-7">
            <input
              type="text"
              className="tracking-tight px-2 mt-1 block rounded border border-input font-normal text-black text-sm w-96"
              placeholder="Mobile number"
              style={{ height: "47px" }}
            />
          </div>

          <div className="flex justify-center flex-col items-center">
            <p className="text-xs font-semibold w-96 opacity-90 mb-8">
              By continuing, you confirm that you’re the owner or primary user
              of this mobile phone number. You agree to receive automated texts
              to confirm your phone number. Message and data rates may apply.
            </p>

            <button className="text-white text-xs font-semibold bg-primary hover:bg-primarytwo rounded-full py-3 px-16">
              Next
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 text-gray text-xxs border border-dotted border-l-0 border-r-0 border-b-0 border-gray-400 w-screen h-14 font-bold flex flex-col items-center justify-center">
        <p>©1999–2021 PayPal. All rights reserved.</p>

        <div>
          <a className="cursor-pointer">Privacy</a>

          <a className="cursor-pointer mx-2">Legal</a>

          <a className="cursor-pointer">Contact</a>
        </div>
      </div>
    </section>
  );
}
