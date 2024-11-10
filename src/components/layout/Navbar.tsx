"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./styles.css"; // Import the custom CSS file

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">My Portfolio</h1>

        <button onClick={toggleMenu} className="menu-button">
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <ul className="desktop-menu">
          {["home", "about", "projects", "experience", "contact"].map((item) => (
            <Link key={item} href={`/${item === "home" ? "" : item}`}>
              {item}
            </Link>
          ))}
        </ul>

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              transition={{ type: "spring", stiffness: 80 }}
            >
              {["home", "about", "projects", "experience", "contact"].map((item) => (
                <Link key={item} href={`/${item === "home" ? "" : item}`}>
                  <span onClick={() => setIsOpen(false)}>{item}</span>
                </Link>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
