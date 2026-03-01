"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

export default function BlurIn({ children, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.h2
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0, y: 20 }}
      animate={
        isInView
          ? { filter: "blur(0px)", opacity: 1, y: 0 }
          : {}
      }
      transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
      className={`text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] ${className || ""}`}
    >
      {children}
    </motion.h2>
  );
}