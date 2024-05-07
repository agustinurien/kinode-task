import Image from "next/image";
import styles from "./page.module.css";
import Starting from "./components/starting/Starting";
import AboutUs from "./components/about/AboutUs";
import Team from "./components/team/Team";
import Partners from "./components/partners/Partners";

export default function Home() {
  return (
    <main >
      <div className="gradient" >
        <Starting />
        <AboutUs />
        <div className="gradient_effect">
        </div>
      </div>
      <Team />
      <Partners />
    </main>
  );
}
