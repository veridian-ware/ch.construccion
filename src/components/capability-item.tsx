"use client";

import { motion } from "framer-motion";

export function CapabilityItem({
  label,
  index
}: {
  label: string;
  index: number;
}) {
  return (
    <motion.li
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="border-t border-ink/15 py-4 flex items-baseline gap-4"
    >
      <span className="opacity-50 text-xs tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="font-display text-2xl md:text-3xl tracking-tighter">
        {label}
      </span>
    </motion.li>
  );
}
