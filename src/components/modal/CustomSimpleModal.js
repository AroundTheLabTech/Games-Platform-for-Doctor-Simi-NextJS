import React from "react";

// Modal Types: 'info', 'success', 'error', 'warning'
const MODAL_STYLES = {
  info: { border: "2px solid #2196f3ff", background: "#4a3f9c" },
  success: { border: "2px solid #4caf50", background: "#4a3f9c" },
  error: { border: "2px solid #f44336", background: "#4a3f9c" },
  warning: { border: "2px solid #ff9800", background: "#4a3f9c" },
};

const BUTTON_STYLES = {
  primary: { background: "#2196f3", color: "#fff" },
  success: { background: "#4caf50", color: "#fff" },
  danger: { background: "#f44336", color: "#fff" },
  warning: { background: "#ff9800", color: "#fff" },
  default: { background: "#e0e0e0", color: "#333" },
};

export default function CustomSimpleModal({
  open,
  onClose,
  title,
  message,
  buttonText,
  buttonType = "primary",
  buttonProps,
  children,
  modalType = "info",
  showButton = true,
}) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000
    }}>
      <div style={{
        minWidth: 300,
        maxWidth: 400,
        padding: 24,
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        ...MODAL_STYLES[modalType]
      }}>
        {title && <h2 style={{ marginTop: 0 }}>{title}</h2>}
        {message && <p>{message}</p>}
        {children}
        <div style={{ marginTop: 24, display: "flex", gap: 8, justifyContent: "center" }}>
          {showButton && buttonText && (
            <button
              style={{
                padding: "8px 16px",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                ...BUTTON_STYLES[buttonType] || BUTTON_STYLES.default,
                border: "none",
                padding: "10px 15px",
                borderRadius: "10px",
              }}
          onClick={onClose}
          {...buttonProps}
            >
          {buttonText}
        </button>
          )}
      </div>
    </div>
    </div >
  );
}