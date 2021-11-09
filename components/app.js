import Hero from "./hero";
import Navbar from "./navbar";
import Online from "./online";
import Connect from "./connect";
import Join from "./join";

export default function Components() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Online />
      <Connect />
      <Join />
    </div>
  );
}
