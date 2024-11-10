import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";
import ProfileImage from "@/components/layout/ProfileImage";
import SectionHeader from "@/components/layout/SectionHeader";
import "./style.css"; 

export default function Page() {
  return (
    <div className="contact-container">
      <div>
        <ProfileImage />
      </div>
      <div className="contact-content">
        <SectionHeader title="Contact" />
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have any questions or need help? Fill out the form below, and we’ll get back to you as soon as possible!
        </p>

        <form className="contact-form">
          <div className="contact-grid">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <Input id="name" type="text" placeholder="Enter your name" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <Input id="email" type="email" placeholder="Enter your email" className="form-input" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <Textarea id="message" rows={4} placeholder="Type your message..." className="form-textarea" />
          </div>

          <div className="submit-container">
            <Button type="submit" className="submit-button">
              Send Message
            </Button>
          </div>
        </form>

        <div className="contact-info">
          <h2 className="contact-info-title">Contact Info</h2>
          <div className="contact-info-item">
            <Mail className="contact-info-icon" />
            <p className="contact-info-text">akhtar.hameed521@gmail.com</p>
          </div>
          <div className="contact-info-item">
            <Phone className="contact-info-icon" />
            <p className="contact-info-text">+1 (234) 567-890</p>
          </div>
          <div className="contact-info-item">
            <MapPin className="contact-info-icon" />
            <p className="contact-info-text">1234 Street, City, Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
