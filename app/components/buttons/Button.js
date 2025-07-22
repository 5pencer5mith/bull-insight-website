"use client";

import Link from 'next/link'

// Styles
import styles from "./button.module.css";

export default function Button({ buttonText, buttonDest, buttonStyles }) {
  return (
    <Link href={buttonDest}>
      <div className={`${buttonStyles}`}>
        <h3>{buttonText}</h3>
      </div>
    </Link>
  );
};
