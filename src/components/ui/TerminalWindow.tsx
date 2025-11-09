import React from "react";
import { motion } from "framer-motion";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  title = "terminal",
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-secondary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-tertiary shadow-xl ${className}`}
    >
      {/* Terminal Header */}
      <div className="bg-tertiary/50 px-4 py-3 flex items-center justify-between border-b border-tertiary/50">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-slate-dark text-sm font-mono">{title}</div>
        <div className="w-20" /> {/* Spacer for centering */}
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm md:text-base">{children}</div>
    </motion.div>
  );
};

export default TerminalWindow;
