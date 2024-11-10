"use client";
import { motion } from "framer-motion";
import AboutContent from "@/components/layout/AboutContent";
import ProfileImage from "@/components/layout/ProfileImage";
import SectionHeader from "@/components/layout/SectionHeader";
import "./style.css"; // Import your custom CSS file

const skills = [
  { name: "HTML", level: 50 },
  { name: "CSS", level: 50 },
  { name: "Bootstrap", level: 50 },
  { name: "JavaScript", level: 40 },
  { name: "React JS", level: 40 },
  { name: "Node JS", level: 35 },
  { name: "Nest JS", level: 30 },
  { name: "Tailwind CSS", level: 50 },
  { name: "Express JS", level: 40 },
  { name: "TypeORM", level: 35 },
  { name: "PostgreSQL", level: 30 },
  { name: "MongoDB", level: 30 },
  { name: "Next Js", level: 35 },
  { name: "Prisma", level: 35 },
];

interface framerTypes {
  name: string;
  level: number;
}

const ProgressBar = ({ name, level }: framerTypes) => (
  <div className="progress-bar-wrapper">
    <div className="progress-bar-label">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="progress-bar">
      <motion.div
        className="progress-fill"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <div className="page-container">
        <div className="profile-container">
          <ProfileImage />
        </div>
        <div className="about-container">
          <SectionHeader title="About Me" />
          <div className="about-grid">
            <div>
              <p className="about-text">
                Hello there! My name is Alan Walker. I am a graphic designer, and I'm
                very passionate and dedicated to my work.
              </p>
              <p className="about-text">
                With 20 years of experience as a professional graphic designer, I
                have acquired the skills and knowledge necessary to make your
                project a success.
              </p>
            </div>
            <div>
              <AboutContent name="Name" desc="Alan Walker" />
              <AboutContent name="Address" desc="Sharah-e-Faisal, Karachi" />
              <AboutContent name="Study" desc="Shah Abdul Latif Bhittai University" />
              <AboutContent name="Degree" desc="Bachelors of Computer Science" />
              <AboutContent name="Email" desc="akhtar.hameed521@gmail.com" />
            </div>
          </div>

          <div className="progress-container">
            <SectionHeader title="Expertise" />
            {skills.map((skill) => (
              <ProgressBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
