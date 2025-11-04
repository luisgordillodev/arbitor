import "./globals.css";

export const metadata = {
  title: "ARBITOR",
  description: "Plataforma integral para árbitros de baloncesto",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-[#1a3a5f] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
