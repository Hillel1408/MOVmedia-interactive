import { type ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export default function Modal({ isOpen, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-x-auto overflow-y-auto min-w-480">
      {children}
    </div>
  );
}
