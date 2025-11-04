"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#1a3a5f] overflow-hidden">
      {/* Fondo con imagen del árbitro */}
      <img
        src="/referee-bg.png"
        alt="Fondo árbitro"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-[#1a3a5f]/70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-fadeIn">
        {/* Logo */}
        <img
          src="/logo-icon.png"
          alt="ARBITOR"
          className="w-40 h-40 mb-8 drop-shadow-lg"
        />

        {/* Texto de bienvenida */}
        <h1 className="text-[#f88846] mb-8 text-2xl font-bold mb-2">
          Bienvenido a ARBITOR
        </h1>

        {/* Botones */}
        <div className="flex flex-col space-y-4 w-48">
          <button
            onClick={goToLogin}
            className="bg-[#f88846] text-[#1a3a5f] py-2 rounded-full font-semibold hover:bg-[#ff8c5a] transition duration-300"
          >
            Iniciar sesión
          </button>

          <button
            className="border border-[#f88846] text-[#f88846] py-2 rounded-full font-semibold hover:bg-[#f88846] hover:text-[#1a3a5f] transition duration-300"
            onClick={() => alert("Funcionalidad de demo próximamente")}
          >
            Ver demo
          </button>
        </div>
      </div>
    </div>
  );
}
