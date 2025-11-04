"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [dni, setDni] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch("http://localhost:8000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ dni, password }),
            });

            if (!res.ok) {
                setError("DNI o contraseña incorrectos");
                return;
            }

            const data = await res.json();
            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user_name", data.name);
            localStorage.setItem("user_dni", data.dni);

            router.push("/dashboard");
        } catch {
            setError("Error al conectar con el servidor");
        }
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-[#1a3a5f] overflow-hidden">
            {/* Fondo con imagen del árbitro desenfocada */}
            <img
                src="/referee-bg.png"
                alt="Fondo árbitro"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />

            {/* Capa oscura semi-transparente para contraste */}
            <div className="absolute inset-0 bg-[#1a3a5f]/70"></div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-sm px-6">
                {/* Logo */}
                <img
                    src="/logo-icon.png"
                    alt="ARBITOR"
                    className="w-40 h-40 mb-6 drop-shadow-lg"
                />

                {/* Bienvenida */}
                <h2 className="text-[#f88846] text-lg font-semibold text-center mb-10">
                    Bienvenido a <span className="font-bold">ARBITOR</span><br />
                    <span className="text-white text-sm font-normal">Tu asistente arbitral inteligente</span>
                </h2>

                {/* Formulario */}
                <form
                    onSubmit={handleLogin}
                    className="w-full flex flex-col space-y-6 text-white"
                >
                    {/* Input DNI */}
                    <div className="flex items-center border-b border-[#f88846] py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#f88846"
                            className="w-5 h-5 mr-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 20.25a8.25 8.25 0 0 1 15 0"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Usuario"
                            className="bg-transparent flex-1 outline-none text-[#f88846] placeholder-[#f88846] font-medium"
                            value={dni}
                            onChange={(e) => setDni(e.target.value.toUpperCase())}
                            required
                        />
                    </div>

                    {/* Input contraseña */}
                    <div className="flex items-center border-b border-[#f88846] py-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="#f88846"
                            className="w-5 h-5 mr-3"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75A4.5 4.5 0 0 0 12 2.25a4.5 4.5 0 0 0-4.5 4.5V10.5m9 0h-9m9 0a2.25 2.25 0 0 1 2.25 2.25v6.75a2.25 2.25 0 0 1-2.25 2.25h-9A2.25 2.25 0 0 1 5.25 19.5v-6.75A2.25 2.25 0 0 1 7.5 10.5m9 0V6.75"
                            />
                        </svg>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="bg-transparent flex-1 outline-none text-[#f88846] placeholder-[#f88846] font-medium"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    {/* Mensaje de error */}
                    {error && (
                        <p className="text-red-400 text-sm text-center mt-2">{error}</p>
                    )}

                    {/* Botón de inicio */}
                    <button
                        type="submit"
                        className="mt-4 border border-[#f88846] text-[#f88846] py-2 rounded-full font-semibold hover:bg-[#f88846] hover:text-white transition duration-300"
                    >
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
}
