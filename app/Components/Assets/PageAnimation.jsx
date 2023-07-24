"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageAnimation = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageAnimation;
