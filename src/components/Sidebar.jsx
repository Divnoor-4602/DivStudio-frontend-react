import React, { useState } from "react";
import { navLinks } from "../constants";
import { AnimatePresence, delay, motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prevValue) => !prevValue);
  };

  const menuVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const linkVariants = {
    initial: {
      y: "50vh",
      transition: {
        duration: 0.5,
      },
    },

    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const containerVariants = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      {/* menu button */}
      <button
        className="text-base cursor-pointer font-semibold block lg:hidden"
        onClick={handleOpen}
      >
        Menu
      </button>
      {/* menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen origin-top bg-secondary text-primary z-10"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="flex justify-between items-center px-6 py-8">
              <div className="h-10 w-10 bg-primary rounded-full"></div>
              <button
                className="text-primary font-semibold"
                onClick={handleOpen}
              >
                Close
              </button>
            </div>
            <motion.div
              className="mt-32 flex flex-col justify-center items-center gap-6 overflow-hidden"
              variants={containerVariants}
              initial="initial"
              animate="open"
              exit="initial"
            >
              {navLinks.map((link) => {
                return (
                  <>
                    <motion.div
                      key={link.title}
                      className="text-3xl cursor-pointer font-semibold"
                      variants={linkVariants}
                    >
                      {link.title}
                    </motion.div>
                  </>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
