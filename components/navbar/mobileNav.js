import Image from "next/dist/client/image";
import p_logo from "../../images/p_logo.png";
import { useRouter } from "next/dist/client/router";

export default function MobileNav() {
  const router = useRouter();
  return (
    <section className="absolute bg-white w-full" style={{ zIndex: "9" }}>
      <div className="flex justify-between items-center h-16 px-3">
        <button className="text-secondary font-bold text-xxs border border-primary rounded-full px-5 py-2">
          Menu
        </button>

        <div>
          <Image src={p_logo} width={54} height={45} alt="logo" />
        </div>

        <button
          onClick={() => router.push("/signin")}
          className="text-secondary font-bold text-xxs border border-primary rounded-full px-5 py-2"
        >
          Log In
        </button>
      </div>
    </section>
  );
}
