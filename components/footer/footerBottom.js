export default function FooterBottom() {
  return (
    <section style={{ padding: "50px 0px" }}>
      <div className="container mx-auto px-28">
        <div className="text-dark font-semibold text-xs border border-dotted border-t-0 border-l-0 border-r-0 border-gray-600 pb-3 mb-3">
          <a>Help and Contact</a>

          <a className="mx-5">Fees</a>

          <a>Security</a>

          <a className="mx-5">Features</a>

          <a>Shop</a>
        </div>

        <div
          className="text-dark font-semibold opacity-80 flex justify-between"
          style={{ fontSize: "11px" }}
        >
          <div>
            <a>About</a>

            <a className="mx-5">Newsrooms</a>

            <a>jobs</a>

            <a className="mx-5">Sitemap</a>

            <a>Developers</a>
          </div>

          <div>
            <a>© 1999–2021 All rights reserved.</a>

            <a className="mx-5">Accessibility</a>

            <a>Privacy</a>

            <a className="mx-5">Legal</a>
          </div>
        </div>

        <p className="text-dark font-bold mt-5" style={{ fontSize: "11px" }}>
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
