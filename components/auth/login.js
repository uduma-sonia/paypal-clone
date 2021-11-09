import Image from "next/image";

export default function Login() {
  return (
    <section>
      <div className="flex justify-cente items-center">
        <div className="border border-red-900 w-96">
          <div>
            <Image
              src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png"
              alt="PayPal Logo"
              width={120}
              height={30}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
