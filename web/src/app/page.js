import Image from "next/image";
import styles from "./page.module.css";
import diamondImg from "../assets/Group 433.png";
import YouTubePlayer from "./components/YouTubePlayer";
import operationImg from "../assets/image 1.png";
import ContactUsForm from "./components/ContactUsForm";

const services = [
  {
    heading: 'Financial statements',
    desc: 'The three main types of financial statements are the balance sheet, the income statement, and the cash flow statement. These three statements together show the assets and liabilities of a business.',
  },
  {
    heading: 'Press releases',
    desc: 'Morbi purus libero, elementum nec gravida ac, commodo at erat. Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus mattis.Morbi purus libero, Morbi purus libero, elementum nec.',
  },
  {
    heading: 'Webcast links',
    desc: 'A webcast is a media presentation distributed over the Internet using streaming media technology to distribute a single content source to many simultaneous listeners/viewers.',
  },
  {
    heading: 'Corporate governance',
    desc: 'Corporate governance is the system of rules, practices and processes by which a company is directed and controlled. Corporate Governance refers to the way in which companies are governed and to what purpose.',
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.mainCarousel}>
        <div className={styles.carouselContent}>
          <h1>Lorem ipsum dolor sit amet, consec</h1>
          <p>Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in ligula consequat malesuada. Praesent posuere vestibulum neque ac posuere.</p>
        </div>
      </section>

      <section className={styles.aboutUs}>
        <div className={styles.aboutUsContent}>
          <Image src={diamondImg} />
          <h2>Aenean vulputate quis est et pulvinar.</h2>
          <p>Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec </p>
          <button className={styles.aboutUsBtn}>About us</button>
        </div>
      </section>

      <section>
        <div className={styles.videoContainer}>
          <YouTubePlayer videoId={"LXb3EKWsInQ"} />
        </div>
      </section>

      <section className={styles.servicesContainer}>
        <div className={styles.serviceList}>
          {services.map((item, index) => (
            <div className={styles.serviceListContentList} key={index}>
              <div className={styles.serviceListContent}>
                <h2 className={styles.plusIcon}>+</h2>
                <h3>{item.heading}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.operationContainer}>
        <div>
          <Image height={601} src={operationImg} />
        </div>
        <div className={styles.operationContent}>
          <h2 className={styles.operationHeading}>Usce arcu turpis, vehicula in elementum tincidunt, faucibus at ligula.</h2>
          <p className={styles.operationSubHeading}>Proin pharetra lectus non felis vulputate, nec commodo quam mattis. Donec fermentum diam eget sem placerat vestibulum. Donec consectetur ut leo quis feugiat.</p>
          <p className={styles.operationDesc}>
            Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar in vestibulum eu, condimentum sit amet lacus. Fusce ex augue, facilisis ut ligula vitae, fringilla dictum sem. Donec tempus blandit nulla vel auctor. Donec non vestibulum tellus, sit amet condimentum felis. Maecenas scelerisque elit a lectus consequat tincidunt.
          </p>
          <button className={styles.operationBtn}>Read about operations</button>
        </div>
      </section>

      <section className={styles.contact}>
        <ContactUsForm />
      </section>
    </main>
  );
}
