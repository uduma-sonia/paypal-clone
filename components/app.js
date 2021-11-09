import Hero from "./hero";
import Navbar from "./navbar";
import Online from "./online";
import Connect from "./connect";

export default function Components() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Online />
      <Connect />
    </div>
  );
}
