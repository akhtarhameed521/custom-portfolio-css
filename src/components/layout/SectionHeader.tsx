import React from 'react';
import './styles.css'; // Import the custom CSS file

interface ContentTypes {
  title: string;
}

export default function SectionHeader({ title }: ContentTypes) {
  return (
    <div className="section-header">
      <h2 className="section-titles">{title}</h2>
      <hr className="section-divider" />
    </div>
  );
}
