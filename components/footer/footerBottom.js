export default function FooterBottom() {
  return (
    <section style={{ padding: "50px 0px" }}>
      <div className="container mx-auto px-8 md:px-28">
        <div className="text-dark font-semibold text-xs border border-dotted border-t-0 border-l-0 border-r-0 border-gray-600 pb-3 mb-3">
          <a className="cursor-pointer border border-gray-900 ">
            Help and Contact
          </a>

          <a className="mx-5 cursor-pointer">Fees</a>

          <a className="cursor-pointer">Security</a>
          <br />

          <a className="mx-5 cursor-pointer">Features</a>

          <a className="cursor-pointer">Shop</a>
        </div>

        <div
          className="text-dark font-semibold opacity-80 flex justify-between flex-col md:flex-row"
          style={{ fontSize: "11px" }}
        >
          <div>
            <a className="cursor-pointer">About</a>

            <a className="mx-5 cursor-pointer">Newsrooms</a>

            <a className="cursor-pointer">jobs</a>

            <a className="mx-5 cursor-pointer">Sitemap</a>

            <a className="cursor-pointer">Developers</a>
          </div>

          <div className="border border-gray-900 ">
            <a>© 1999–2021 All rights reserved.</a>

            <a className="mx-5 cursor-pointer">Accessibility</a>

            <a className="cursor-pointer">Privacy</a>

            <a className="mx-5 cursor-pointer">Legal</a>
          </div>
        </div>

        <p
          className="text-dark font-bold mt-5 text-center md:text-left"
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
