// Components
import Image from "next/image";

// Styles
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>Your Home for a Healthy Herd</h1>
        </div>
      </div>
      <div className={styles.bgImage}>
        <Image
          src="/img/hero/cattle_grazing.jpg"
          alt="grazing cattle"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
        />
      </div>
    </div>
  );
}
