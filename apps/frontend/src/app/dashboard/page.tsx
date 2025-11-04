import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-[#1a3a5f] text-white overflow-hidden">
      <img
        src="/referee-bg.png"
        alt="Fondo árbitro"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-[#1a3a5f]/80"></div>

      <div className="relative z-10 flex flex-col min-h-screen pb-20">
        {/* Header común */}
        <Header />

        {/* Contenido específico de esta pantalla */}
        <main className="px-4">
          {/* MÉTRICAS */}
          <section className="grid grid-cols-2 gap-4 mt-4">
            <div className="border border-[#f88846] rounded-xl p-4 text-center">
              <p className="text-sm text-[#f88846]">Partidos arbitrados</p>
              <p className="text-3xl font-bold mt-1">54</p>
            </div>
            <div className="border border-[#f88846] rounded-xl p-4 text-center">
              <p className="text-sm text-[#f88846]">Categoría más frecuente</p>
              <p className="text-2xl font-bold mt-1">Senior</p>
            </div>
            <div className="border border-[#f88846] rounded-xl p-4 text-center">
              <p className="text-sm text-[#f88846]">Total importes acumulados</p>
              <p className="text-2xl font-bold mt-1">1432€</p>
            </div>
            <div className="border border-[#f88846] rounded-xl p-4 text-center">
              <p className="text-sm text-[#f88846]">Promedio mensual de partidos</p>
              <p className="text-2xl font-bold mt-1">23</p>
            </div>
          </section>

          {/* PRÓXIMOS ENCUENTROS */}
          <section className="border border-[#f88846] rounded-xl p-4 mt-6">
            <p className="text-[#f88846] text-sm mb-3 font-semibold">
              Próximos encuentros
            </p>
            <div className="flex flex-col space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Cadete Aut. Masc.</span>
                <span>Corralejo - 12:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Junior LIIC Fem.</span>
                <span>Pto del Rosario - 16:00h</span>
              </div>
              <div className="flex justify-between">
                <span>Senior LIIC Masc.</span>
                <span>Morro Jable - 12:30h</span>
              </div>
              <div className="flex justify-between">
                <span>Junior Aut. Fem.</span>
                <span>Corralejo - 12:00h</span>
              </div>
            </div>
            <p className="text-center text-[#f88846] mt-3 text-xs italic">
              ver más...
            </p>
          </section>
        </main>

        {/* Barra inferior común */}
        <BottomNav />
      </div>
    </div>
  );
}
