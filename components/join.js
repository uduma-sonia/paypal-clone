export default function Join() {
  return (
    <section
      className="bg-blue text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle farthest-side at center bottom,#009cde,#003087 0)",
        padding: "80px 0px",
      }}
    >
      <div className="container mx-auto">
        <h2
          className="text-center font-light mb-20"
          style={{ fontSize: "35px" }}
        >
          Join 200M active PayPal accounts worldwide.
        </h2>

        <div className="flex px-24">
          <div className="w-1/3 px-5 flex flex-col justify-between">
            <div>
              <h5 className="font-light" style={{ fontSize: "28px" }}>
                Safer and protected
              </h5>

              <p className="font-semibold" style={{ fontSize: "13px" }}>
                Shop with peace of mind. We don’t share your full financial
                information with sellers. And PayPal Buyer Protection covers
                your eligible purchases if they don’t show up or match their
                description.
              </p>
            </div>

            <a className="font-bold text-xs tracking-tight cursor-pointer">
              More about security
            </a>
          </div>

          <div className="w-1/3 px-5 flex flex-col justify-between">
            <div>
              <h5 className="font-light" style={{ fontSize: "28px" }}>
                Simple and convenient
              </h5>

              <p className="text-xs font-semibold" style={{ fontSize: "13px" }}>
                Pay online with your PayPal password and skip entering your
                financial information. Or pay even faster with One Touch™, stay
                logged in and check out without entering your password. Plus,
                rest assured knowing Buyer Protection is available for your
                eligible purchases.
              </p>
            </div>

            <a className="font-bold text-xs tracking-tight cursor-pointer mt-4">
              More about One Touch™
            </a>
          </div>

          <div className="w-1/3 px-5 flex flex-col justify-between">
            <div>
              <h5 className="font-light" style={{ fontSize: "28px" }}>
                Mostly free, always upfront
              </h5>

              <p className="text-xs font-semibold" style={{ fontSize: "13px" }}>
                It’s free to open a PayPal account and buy something using
                PayPal unless it involves a currency conversion.
              </p>
            </div>

            <a className="font-bold text-xs tracking-tight cursor-pointer">
              More about fees
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
