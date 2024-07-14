"use client";
import React, { useRef } from "react";
import "./index.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Tooltip } from "react-tooltip";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

function Modal({ open, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (open) {
      gsap.to(modalRef.current, {
        duration: 0.3,
        width: "100%",
        height: "100%",
        opacity: 1,
        ease: "power1.out",
      });
    } else {
      gsap.to(modalRef.current, {
        duration: 0.3,
        width: "40%",
        height: "40%",
        opacity: 0,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <>
      {open && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal-content">
            <div className="modal-close-area">
              <button
                className="modal-close-button"
                onClick={onClose}
                data-tooltip-id="my-tooltip"
              >
                X
              </button>
              <Tooltip id="my-tooltip" content="close" />
            </div>

            <iframe
              src="/assets/pdfs/resume.pdf"
              className="modal-iframe"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
