import Image from "next/image";
import styles from "./Operation.module.css";
import operationImg from "../../../assets/image 1.png";

export default function Operation() {
  return (
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
  );
}
