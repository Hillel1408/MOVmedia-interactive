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
    <div className="fixed overflow-y-auto left-0 right-0 top-0 bottom-0 grid grid-cols-[391px_1fr] items-end">
      {children}
    </div>
  );
}
