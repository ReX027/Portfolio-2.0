"use client";
import React from "react";
import "./index.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Tooltip } from "react-tooltip"; //test

function Modal({ open, onClose }) {
  gsap.registerPlugin(useGSAP);

  const modalRef = useRef();
  useGSAP(() => {
    if (open) {
      gsap.to(modalRef.current, {
        duration: 0.3,
        width: "60%",
        height: "95%",
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
