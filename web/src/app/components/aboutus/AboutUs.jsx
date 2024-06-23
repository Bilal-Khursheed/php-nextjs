import Image from "next/image";
import styles from "./AboutUs.module.css";
import diamondImg from "../../../assets/Group 433.png";

export default function AboutUs() {
    return (
        <section className={styles.aboutUs}>
            <div className={styles.aboutUsContent}>
                <Image src={diamondImg} />
                <h2>Aenean vulputate quis est et pulvinar.</h2>
                <p>Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum. Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec rutrum. Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis nec ipsum nec.</p>
                <button className={styles.aboutUsBtn}>About us</button>
            </div>
        </section>
    );
}
