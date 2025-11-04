"use client";

import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 mt-12 mx-6">
      <div className="flex items-center space-x-2">
        {/* Logo horizontal */}
        <img src="/logo-typographic.png" alt="ARBITOR" className="w-48" />
      </div>

      <div className="flex items-center space-x-3">
        {/* Icono de búsqueda */}
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f88846" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </button>

        {/* Icono de notificación */}
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f88846" className="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
          </svg>
        </button>
      </div>
    </header>
  );
}
