import React from 'react';
import '@/app/globals.css';
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TopRightPopup({
  title = "Notification",
  message = "This is an informational message.",
  visible,
}) {

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50 w-[90%] max-w-sm rounded-2xl bg-gray-900 text-white shadow-xl"
        >
          <div className="flex items-start gap-3 p-4">
            <div className="flex-1">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{message}</p>
            </div>
            <button
              onClick={() => setVisible(false)}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}