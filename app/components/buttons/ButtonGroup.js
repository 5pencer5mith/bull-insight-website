"use client";

// Styles
import styles from "./buttonGroup.module.css";

export default function ButtonGroup ({
  button1Text,
  button1Dest,
  button2Text,
  button2Dest,
}) {
  return (
    <div className={styles.buttons}>
      <div className={styles.button1}>
        <a href={button1Dest}>{button1Text}</a>
      </div>

      <div className={styles.button2}>
        <a href={button2Dest}>{button2Text}</a>
      </div>
    </div>
  );
};
