import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

const MenuModal = ({ item, onClose }) => {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] grid place-items-center p-4" onClick={onClose}>
          <div className="absolute inset-0 bg-[#1a0d02]/75 backdrop-blur-md" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl w-full bg-[#FFF8F2] rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 grid place-items-center rounded-full bg-white/95 text-[#5C2C06] hover:bg-[#D4AF37] hover:text-[#3a1c04] transition-colors"
              aria-label="Close">
              <FiX size={20} />
            </button>
            <div className="bg-gradient-to-br from-[#FFF1E0] to-[#FFE0BB] p-6 md:p-10 grid place-items-center">
              <img src={item.image} alt={item.name} className="w-full max-w-sm object-contain drop-shadow-xl" loading="lazy" />
            </div>
            <div className="p-6 md:p-10 flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {item.popular && <span className="text-[10px] uppercase tracking-wider font-semibold text-[#A52A2A] bg-[#A52A2A]/10 px-2.5 py-1 rounded-full">Popular</span>}
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5C2C06] bg-[#5C2C06]/10 px-2.5 py-1 rounded-full">{item.category}</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-[#5C2C06] leading-tight">{item.name}</h3>
              <p className="text-sm md:text-base text-[#5C2C06]/75 leading-relaxed">{item.description}</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-display text-4xl font-extrabold gold-text-gradient">₹{item.price}</span>
                <span className="text-xs text-[#5C2C06]/55 pb-2">per plate</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuModal;