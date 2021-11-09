import Image from "next/image";

export default function Navbar() {
  return (
    <section
      className="px-40 bg-white absolute w-full font-main"
      style={{ height: "66px", zIndex: "99" }}
    >
      <div className="flex items-center h-full justify-between">
        <div>
          <a
            href="https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2"
            title="PayPal"
            onClick="javascript:window.open('https://www.paypal.com/c2/webapps/mpp/paypal-popup?locale.x=en_C2','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"
          >
            <Image
              src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png"
              alt="PayPal Logo"
              width={120}
              height={30}
              alt="logo"
            />
          </a>
        </div>

        <div>
          <p className="text-primary text-xxs opacity-80 tracking-tight font-bold">
            PERSONAL
          </p>
        </div>

        <div style={{ fontSize: "11px" }}>
          <button className="tracking-tighter mr-4 font-bold text-secondary border border-primary rounded-full py-2 px-5">
            Log In
          </button>

          <button className="tracking-tigher font-bold text-white rounded-full py-2 px-5 bg-primary hover:bg-primarytwo">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
