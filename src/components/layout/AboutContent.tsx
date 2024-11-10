import React from "react";
import "./styles.css"

interface AboutContent {
  name: string;
  desc: string;
}

export default function AboutContent({ name, desc }: AboutContent) {
  return (
    <div className="about-content">
      <h2 className="about-title">{name}:</h2>
      <p className="about-desc">{desc}</p>
    </div>
  );
}