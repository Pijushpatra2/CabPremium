"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, AlertCircle, Info } from "lucide-react";

export type ToastType = "success" | "error" | "info";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  toast: (message: Omit<ToastMessage, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, type = "info", duration = 4000 }: Omit<ToastMessage, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, type, duration }]);

      setTimeout(() => {
        dismiss(id);
      }, duration);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      <div className="fixed bottom-5 right-5 z-55 flex flex-col gap-3 w-full max-w-sm pointer-events-none px-4 sm:px-0">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
              className="pointer-events-auto bg-white border border-primary/10 rounded-2xl p-4 shadow-xl flex items-start gap-3 glass-card relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5"
              style={{
                borderColor:
                  t.type === "success"
                    ? "rgba(32, 197, 137, 0.2)"
                    : t.type === "error"
                    ? "rgba(220, 38, 38, 0.2)"
                    : "rgba(11, 93, 72, 0.2)",
              }}
            >
              {/* Highlight strip color */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1.5"
                style={{
                  backgroundColor:
                    t.type === "success"
                      ? "#20C589"
                      : t.type === "error"
                      ? "#dc2626"
                      : "#0B5D48",
                }}
              />

              {/* Icon */}
              <div className="shrink-0 mt-0.5">
                {t.type === "success" && <CheckCircle2 className="h-5 w-5 text-accent" />}
                {t.type === "error" && <AlertCircle className="h-5 w-5 text-red-600" />}
                {t.type === "info" && <Info className="h-5 w-5 text-primary" />}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="font-bold text-sm text-primary leading-tight">{t.title}</h4>
                {t.description && (
                  <p className="text-xs text-primary/70 mt-1 leading-relaxed">{t.description}</p>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => dismiss(t.id)}
                className="shrink-0 p-1 hover:bg-primary/5 rounded-lg text-primary/40 hover:text-primary transition-colors duration-150"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
