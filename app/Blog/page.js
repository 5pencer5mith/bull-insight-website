"use client";

// Hooks
import { useState, useEffect } from "react";

// Components
import BlogButton from "../components/buttons/BlogButton";

// Styles
import styles from "./page.module.css";

export default function Blog() {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.title}>
        <h1>Posts</h1>
      </div>

      <div className={styles.posts}>
        <BlogButton
          postImageAlt="Image of a bull sperm exhibiting coiled tail morphology"
          postNum={1}
          postDate="1/12/2025"
          postTitle="Understanding Sperm Morphology and Its Vital Role in Bull Fertility Assessments"
          postSummary="Sperm morphology is a crucial factor in bull fertility, directly affecting conception rates and calf production. Bulls with higher percentages of normal sperm are more likely to achieve early pregnancies, boosting herd efficiency. A thorough sperm morphology assessment during a Bull Breeding Soundness Exam helps identify potential fertility issues and guide better breeding decisions, considering genetic, environmental, and management factors that impact sperm quality."
          postImage="/img/morphology/CoiledTail/coiledtail3.jpg"
          postDest="/Blog/Posts/post-1"
        />
      </div>
    </div>
  );
}
