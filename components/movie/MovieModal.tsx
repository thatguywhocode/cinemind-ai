"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface MovieModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function MovieModal({
  open,
  onClose,
  children,
}: MovieModalProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/70
            backdrop-blur-md
          "
        >

          {/* Backdrop */}

          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
            }}
            className="
              relative
              z-10
              h-[90vh]
              w-[92vw]
              max-w-7xl
              overflow-hidden
              rounded-[34px]
              border
              border-yellow-500/10
              bg-[#090A0D]
              shadow-[0_0_120px_rgba(0,0,0,.6)]
            "
          >

            {/* Close */}

            <button
              onClick={onClose}
              className="
                absolute
                right-8
                top-8
                z-50
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-black/30
                backdrop-blur-xl
                transition-all
                hover:border-yellow-500
              "
            >
              <X size={22} />
            </button>

            {/* Scroll */}

            <div className="h-full overflow-y-auto">

              {children}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}