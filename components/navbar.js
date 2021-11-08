import Image from "next/image";

export default function Navbar() {
  return (
    <section
      className="px-28 bg-white absolute w-screen font-main"
      style={{ height: "72px", zIndex: "99" }}
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
              width={125}
              height={32}
            />
          </a>
        </div>

        <div>
          <p className="text-primary text-xs opacity-80 tracking-widest font-bold">
            PERSONAL
          </p>
        </div>

        <div className="text-xxs">
          <button className="mr-4 font-bold text-secondary border border-primary rounded-full py-2 px-5">
            Log In
          </button>

          <button className="font-bold text-white rounded-full py-2 px-6 bg-primary hover:bg-primarytwo">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}
