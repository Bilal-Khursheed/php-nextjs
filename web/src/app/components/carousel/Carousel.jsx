import styles from "./Carousel.module.css";

export default function Carousel() {
    return (
        <section className={styles.mainCarousel}>
            <div className={styles.carouselContent}>
                <h1>Lorem ipsum dolor sit amet, consec</h1>
                <p>Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat in ligula consequat malesuada. Praesent posuere vestibulum neque ac posuere.</p>
            </div>
        </section>
    );
}
