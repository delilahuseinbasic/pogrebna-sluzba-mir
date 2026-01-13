import { useState } from "react";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";

interface VirtualCandleProps {
  candleCount: number;
  onLightCandle: () => void;
}

export default function VirtualCandle({ candleCount, onLightCandle }: VirtualCandleProps) {
  const [isLit, setIsLit] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleLightCandle = () => {
    setIsLit(true);
    setShowMessage(true);
    onLightCandle();

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <div className="relative">
      {/* Candle count display */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full border border-amber-200">
          <Flame className="h-5 w-5 text-amber-600" />
          <span className="text-sm">
            <strong className="text-amber-900">{candleCount}</strong>{" "}
            <span className="text-neutral-600">
              {candleCount === 1 ? "osoba je upalila svijecu" : "osoba je upalilo svijecu"}
            </span>
          </span>
        </div>
      </div>

      {/* Virtual candle */}
      <div className="flex flex-col items-center gap-6 p-8 bg-gradient-to-b from-neutral-50 to-neutral-100 rounded-lg border-2 border-amber-200/50">
        {/* Candle visualization */}
        <div className="relative">
          <AnimatePresence>
            {isLit && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2"
              >
                {/* Flame */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative w-8 h-12">
                    {/* Outer glow */}
                    <div className="absolute inset-0 bg-amber-400/30 blur-xl rounded-full"></div>
                    {/* Main flame */}
                    <svg viewBox="0 0 32 48" className="w-full h-full">
                      <ellipse cx="16" cy="36" rx="10" ry="12" fill="#FFD700" opacity="0.3" />
                      <ellipse cx="16" cy="32" rx="8" ry="10" fill="#FFA500" opacity="0.5" />
                      <ellipse cx="16" cy="28" rx="6" ry="8" fill="#FF6B35" opacity="0.7" />
                      <path
                        d="M 16 16 Q 14 22 16 30 Q 18 22 16 16 Z"
                        fill="#FFEB3B"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Candle body */}
          <div className="w-16 h-32 bg-gradient-to-b from-amber-100 to-amber-200 rounded-t-lg rounded-b-sm border-2 border-amber-300 relative overflow-hidden">
            {/* Wax drip effect */}
            <div className="absolute top-0 left-2 w-2 h-8 bg-amber-200/50 rounded-full"></div>
            <div className="absolute top-4 right-3 w-1.5 h-6 bg-amber-200/50 rounded-full"></div>
            {/* Candle texture */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Candle base */}
          <div className="w-20 h-2 bg-gradient-to-b from-amber-300 to-amber-400 -mx-2 rounded-sm border-2 border-amber-400"></div>
        </div>

        {/* Button */}
        <Button
          onClick={handleLightCandle}
          disabled={isLit}
          className={`${
            isLit
              ? "bg-amber-600 hover:bg-amber-600"
              : "bg-amber-500 hover:bg-amber-600"
          } transition-all`}
          size="lg"
        >
          <Flame className="mr-2 h-5 w-5" />
          {isLit ? "Svijeca upaljena" : "Upali svijecu"}
        </Button>

        {/* Success message */}
        <AnimatePresence>
          {showMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-sm text-center text-neutral-600 italic"
            >
              Vasa svijeca sjaji u sjecanje...
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
