import Hero from "./hero";
import Online from "./online";
import Connect from "./connect";
import Join from "./join";
import AppFooter from "./footer";
import Navbar from "./navbar";

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
