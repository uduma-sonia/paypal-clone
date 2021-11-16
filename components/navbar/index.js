import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import logo from "../../images/logo.png";
import MobileNav from "./mobileNav";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>

      <section
        className="px-40 bg-white absolute w-full font-main hidden md:block"
        style={{ height: "66px", zIndex: "99" }}
      >
        <div className="flex items-center h-full justify-between">
          <div>
            <Image
              // src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png"
              src={logo}
              alt="PayPal Logo"
              width={120}
              height={30}
            />
          </div>

          <div>
            <p className="text-primary text-xxs opacity-80 tracking-tight font-bold">
              PERSONAL
            </p>
          </div>

          <div style={{ fontSize: "11px" }}>
            <button
              onClick={() => router.push("/signin")}
              className="tracking-tighter mr-4 font-bold text-secondary border border-primary rounded-full py-2 px-5"
            >
              Log In
            </button>

            <button
              onClick={() => router.push("/signup")}
              className="tracking-tigher font-bold text-white rounded-full py-2 px-5 bg-primary hover:bg-primarytwo"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
