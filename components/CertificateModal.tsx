'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  name: string;
}

export default function CertificateModal({ isOpen, onClose, imageSrc, name }: CertificateModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
    >
      <div
        className="panel relative max-h-[90vh] w-full max-w-4xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center border bg-[var(--background)] text-xl"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="p-4">
          <h3 id="certificate-title" className="mb-4 pr-12 text-center text-lg font-semibold">
            {name}
          </h3>
          <div className="relative w-full h-auto max-h-[70vh] overflow-auto">
            <Image
              src={imageSrc}
              alt={name}
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

