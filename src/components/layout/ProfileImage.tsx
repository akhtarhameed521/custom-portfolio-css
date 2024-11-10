import Image from 'next/image';
import React from 'react';
import './styles.css'; // Import the custom CSS file

export default function ProfileImage() {
  return (
    <div className="profile-image-container">
      <Image src={'/img/profile.jpg'} width={400} height={1000} alt='profile image' />
    </div>
  );
}
