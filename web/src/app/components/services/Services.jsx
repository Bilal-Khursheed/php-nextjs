import styles from "./Services.module.css";

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

export default function Services() {
  return (
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
  );
}
