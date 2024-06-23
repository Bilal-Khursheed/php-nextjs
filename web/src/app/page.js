import styles from "./page.module.css";
import YouTubePlayer from "./components/youtubePlayer/YouTubePlayer";
import ContactUsForm from "./components/contactUsForm/ContactUs";
import Carousel from "./components/carousel/Carousel";
import AboutUs from "./components/aboutus/AboutUs";
import Services from "./components/services/Services";
import Operation from "./components/operation/Operation";


export default function Home() {
  return (
    <main className={styles.main}>
      <Carousel />
      <AboutUs />
      <YouTubePlayer videoId={"LXb3EKWsInQ"} />
      <Services />
      <Operation />
      <ContactUsForm />
    </main>
  );
}
