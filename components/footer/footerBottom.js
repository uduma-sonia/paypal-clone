export default function FooterBottom() {
  return (
    <section style={{ padding: "50px 0px" }}>
      <div className="container mx-auto px-8 md:px-28">
        <div className="text-dark font-semibold text-xs md:border border-dotted md:border-t-0 md:border-l-0 md:border-r-0 border-gray-600 pb-3 mb-3">
          <div className="md:w-96 w-full flex md:justify-between justify-evenly flex-wrap">
            <a className="cursor-pointer w-36 md:w-auto">Help and Contact</a>

            <a className="cursor-pointer w-20 md:w-auto">Fees</a>

            <a className="cursor-pointer w-20 md:w-auto">Security</a>

            <a className="cursor-pointer mt-4 md:mt-0">Features</a>

            <a className="cursor-pointer mt-4 md:mt-0">Shop</a>
          </div>
        </div>

        <div
          className="text-dark font-semibold opacity- flex justify-between flex-col md:flex-row"
          style={{ fontSize: "11px" }}
        >
          <div className="w-80 flex md:justify-between justify-evenly flex-wrap">
            <a className="cursor-pointer w-16 md:w-auto">About</a>

            <a className="cursor-pointer w-20 md:w-auto">Newsrooms</a>

            <a className="cursor-pointer w-16 md:w-auto">jobs</a>

            <a className="cursor-pointer w-16 md:w-auto">Sitemap</a>

            <a className="cursor-pointer mt-2 md:mt-0">Developers</a>
          </div>

          <div className="md:w-96 flex md:justify-between justify-evenly flex-wrap mt-5 md:mt-0">
            <a>© 1999–2021 All rights reserved.</a>

            <a className="mx-5 cursor-pointer">Accessibility</a>

            <a className="cursor-pointer">Privacy</a>

            <a className="mx-5 mt-2 md:mt-0 cursor-pointer">Legal</a>
          </div>
        </div>

        <p
          className="text-dark font-semibold mt-5 text-center md:text-left opacity-"
          style={{ fontSize: "11px" }}
        >
          PayPal Pte. Ltd. (“3PL”) has applied for a license under the Singapore
          Payment Services Act (“PS Act”) with the Monetary Authority of
          Singapore. During this statutory transitional period, 3PL is operating
          under an exemption from holding a license and is allowed to continue
          to provide specific payment services.
        </p>
      </div>
    </section>
  );
}
