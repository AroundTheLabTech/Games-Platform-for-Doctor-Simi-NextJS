'use client';
import { useEffect, useState } from "react";
import { applyNewPassword } from "@/services/backend";

export default function ResetPasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oobCode, setOobCode] = useState(null);
  const [error, setError] = useState(null);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    if (modalMessage === "¡Contraseña actualizada con éxito!") {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    // Capturar `oobCode` de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("oobCode");
    setOobCode(code);
  }, []);

  useEffect(() => {
    if(newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
    }
    else {
      setError(null);
    }
  }, [confirmPassword, newPassword]);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      if (!oobCode) {
        throw new Error("Código de restablecimiento no válido.");
      }

      const result = await applyNewPassword(oobCode, newPassword);
      setShowModal(true);
      setModalMessage("¡Contraseña actualizada con éxito!");
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
      setShowModal(true);
      setModalMessage("Error al actualizar la contraseña" + " " + error.message);
    }
  };

  return (
    <section className="container-login-game">

      {/* Columna */}
      <div className="columna">
        <img
          className="medal"
          src="img/medallas/medal1.svg">
        </img>
        <img
          className="medal"
          src="img/medallas/medal2.svg">
        </img>
      </div>

      <div className="login-center">
        <div>
          <form onSubmit={handleResetPassword}>
            <h2>Restablecer Contraseña</h2>
            <div className="inputs-container">
              <input
                type="password"
                placeholder="Nueva contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {error && <p>{error}</p>}
            <div className="bottoms-container">
              <button className="push--flat" type="submit">
                <h3 className="text-boton">GUARDAR</h3>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Columna */}
      <div className="columna">
        <img
          className="medal"
          src="img/medallas/medal3.svg">
        </img>
        <img
          className="medal"
          src="img/medallas/medal4.svg">
        </img>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>{modalMessage.includes("éxito") ? "¡Éxito!" : "Error"}</h2>
            <p>{modalMessage}</p>
            <button className="push--flat" onClick={handleCloseModal}>
              <h3 className="text-boton modal-boton">CONTINUAR</h3>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
