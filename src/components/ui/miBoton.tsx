import React from "react";
import { Button } from "@/components/ui/button"; // si usas shadcn/ui

const MiBoton = () => {
  const manejarClick = async () => {
    try {
      const response = await fetch(
        "https://462a720093bae5b0855b2b7e6450b2.11.environment.api.powerplatform.com/copilotstudio/dataverse-backed/authenticated/bots/cra2e_agent/conversations?api-version=2022-03-01-preview",
        {
          method: "POST", // o "GET", depende de la API
          headers: {
            "Content-Type": "application/json",
            // 👇 Aquí agregas tu token de autenticación si es necesario
            Authorization: `Bearer TU_TOKEN_AQUI`,
          },
          body: JSON.stringify({
            // 👇 Si la API espera datos, los pasas aquí
            mensaje: "Hola desde React",
          }),
        }
      );

      if (!response.ok) throw new Error("Error en la petición");

      const data = await response.json();
      console.log("Respuesta del bot:", data);
      alert(JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Button onClick={manejarClick} size="lg" variant="outline">
      Hablar con FONBOT
    </Button>
  );
};

export default MiBoton;
