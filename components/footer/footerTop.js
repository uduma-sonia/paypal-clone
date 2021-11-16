import { useRouter } from "next/router";

export default function FooterTop() {
  const router = useRouter();

  return (
    <section className="bg-secondary text-center py-10 md:py-20">
      <div className="container mx-auto">
        <h5 className="font-light mb-4" style={{ fontSize: "27px" }}>
          Sign up and get started
        </h5>

        <button
          onClick={() => router.push("/signup")}
          className="rounded bg-primary text-white font-semibold text-sm tracking-tighter rounded-full py-3 px-32 hover:bg-primarytwo"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
