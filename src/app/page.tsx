import Welcome from "../components/page/Welcome";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className={"pageMain"}>
      <Welcome />
      {/* <Footer /> */}
    </main>
  );
}
