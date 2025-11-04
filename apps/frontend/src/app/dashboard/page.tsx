"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("user_name");

    if (!token) router.push("/login");
    else setUserName(name || "");
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl font-bold text-[#1a3a5f] mb-2">
        Bienvenido, {userName || "árbitro"} 🏀
      </h1>
      <p className="text-gray-600">Has iniciado sesión correctamente.</p>
    </div>
  );
}
