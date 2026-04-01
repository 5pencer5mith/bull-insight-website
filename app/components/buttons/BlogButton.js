"use client";

// Components
import Image from "next/image";
import { IonIcon } from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";

// Styles
import Styles from "./blogButton.module.css";

export default function BlogButton({
  postTitle,
  postSummary,
  postImage,
  postDest,
  postDate,
  postNum,
  postImageAlt,
}) {
  return (
    <div className={Styles.button}>
      <a href={postDest}>
        <div className={Styles.postContent}>
          <div className={Styles.postImage}>
            <Image
              src={postImage}
              alt={postImageAlt}
              width={300}
              height={200}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className={Styles.postSummary}>
            <h1>{postTitle}</h1>
            <h5>
              Post: {postNum} | Date: {postDate}
            </h5>
            <p>{postSummary}</p>
          </div>
        </div>
        <div className={Styles.learnMore}>
          <h3>Go To Article</h3>
          <IonIcon
            className={Styles.icons}
            icon={arrowForwardOutline}
            style={{
              color: "#005999",
              fontSize: "30px",
              verticalAlign: "middle",
            }}
          />
        </div>
      </a>
    </div>
  );
};
