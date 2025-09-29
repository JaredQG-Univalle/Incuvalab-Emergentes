// Toast.jsx
import React, { useEffect } from 'react';
import './Toast.css';
import { CheckCircle } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <CheckCircle className="toast-icon" />
      <span>{message}</span>
    </div>
  );
}
