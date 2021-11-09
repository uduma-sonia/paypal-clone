import Hero from "./hero";
import Navbar from "./navbar";
import Online from "./online";
import Connect from "./connect";
import Join from "./join";
import AppFooter from "./footer";

export default function Components() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Online />
      <Connect />
      <Join />
      <AppFooter />
    </div>
  );
}
