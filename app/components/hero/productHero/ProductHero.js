// Components
import Image from "next/image";

// Styles
import styles from "./productHero.module.css";

export default function ProductHero() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className="font-display">
            Sperm <span className="font-bold">InCyte</span>
          </h1>
        </div>
      </div>
      <Image
        src="/img/index/mother-and-calf.jpg" // borrow image from index asset folder
        alt="mother and calf"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
    </div>
  );
};