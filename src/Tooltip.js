import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 100);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      <AnimatePresence>
        {active && (
          <motion.div
            key={"tooltip"}
            initial={{ opacity: 0, y: "5%", x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: "0%", x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: "5%", x: "-50%", scale: 0.9 }}
            className={`Tooltip-Tip ${props.direction || "top"}`}
            style={{
              backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : "#000",
            }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
          >
            {/* Content */}
            {props.content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
