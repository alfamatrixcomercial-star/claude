"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  label: string;
  onClose: () => void;
  children: ReactNode;
}

// Centered card over a dimmed page. Closed modals stay mounted but invisible
// so the fade can run both ways.
export function Modal({ open, label, onClose, children }: ModalProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-[opacity,visibility] duration-[260ms] ease-mw",
        open ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-mw-tinta/45" onClick={onClose} />
      <div className="pointer-events-none relative flex h-full items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className={cn(
            "pointer-events-auto max-h-[85dvh] w-full max-w-sm overflow-y-auto rounded-3xl border border-mw-arena bg-white p-6 shadow-mw-3 transition-transform duration-[260ms] ease-mw",
            open ? "scale-100" : "scale-95",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
