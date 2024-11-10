"use client"
import ProfileImage from "@/components/layout/ProfileImage";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import styles from "@/app/Home.module.css";

export default function Home() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, typingSpeed, loopNum, titles]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.gridContainer}>
            <div className={styles.profileImageContainer}>
              <ProfileImage />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.name}>Akhtar Hameed</h1>
              <hr className={styles.divider} />
              <h2 className={styles.title}>
                {text}
                <span className={styles.blinkingCursor}>|</span>
              </h2>
              <div className={styles.buttonContainer}>
                <Button>Get in touch</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
