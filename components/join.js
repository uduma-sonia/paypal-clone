export default function Join() {
  return (
    <section
      className="bg-blue text-white py-5 md:py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle farthest-side at center bottom,#009cde,#003087 0)",
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-center opacity-90 mb-20 text-3xl md:text-4xl">
          Join 200M active PayPal accounts worldwide.
        </h2>

        <div className="flex flex-col md:flex-row md:px-24">
          <div className="md:w-1/3 w-full px-5 flex flex-col justify-between mb-5 md:mb-5">
            <div className="mb-5 md:mb-0">
              <h5 className="font-light text-2xl md:text-3xl mb-3 md:mb-2">
                Safer and protected
              </h5>

              <p className="font-semibold md:text-xls text-xs">
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

          <div className="md:w-1/3 w-full px-5 flex flex-col justify-between mb-5 md:mb-5">
            <div className="mb-5 md:mb-0">
              <h5 className="font-light text-2xl md:text-3xl mb-3 md:mb-2">
                Simple and convenient
              </h5>

              <p className="md:text-xls text-xs font-semibold">
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

          <div className="md:w-1/3 w-full px-5 flex flex-col justify-between mb-5 md:mb-5">
            <div className="mb-5 md:mb-0">
              <h5 className="font-light text-2xl md:text-3xl mb-3 md:mb-2">
                Mostly free, always upfront
              </h5>

              <p className="md:text-xls text-xs font-semibold">
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
