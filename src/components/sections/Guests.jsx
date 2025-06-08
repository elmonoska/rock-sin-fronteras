export default function Guests({ uiTheme }) {
  const guests = [
    {
      name: "Bratty",
      role: "Banda indie / Artista invitada",
      category: "Banda",
    },
    {
      name: "León Larregui",
      role: "Ponente / Vocalista de Zoé",
      category: "Artista",
    },
    {
      name: "Little Jesus",
      role: "Indie rock con presencia en festivales",
      category: "Banda",
    },
    {
      name: "Reyno",
      role: "Banda mexicana con letras introspectivas",
      category: "Banda",
    },
    {
      name: "The Warning",
      role: "Trío de rock alternativo con proyección global",
      category: "Banda",
    },
    {
      name: "Ed Maverick",
      role: "Artista folk/indie con proyección internacional",
      category: "Solista",
    },
    {
      name: "Daniela Spalla",
      role: "Artista pop alternativo Argentina/México",
      category: "Solista",
    },
    {
      name: "Siddhartha",
      role: "Cantautor y productor del indie mexicano",
      category: "Solista",
    },
    {
      name: "Sony Music",
      role: "Aliado y patrocinador musical del evento",
      category: "Patrocinador",
    },
    {
      name: "Fernanda Tapia",
      role: "Moderadora y personalidad reconocida",
      category: "Conductora",
    },
  ];

  return (
    <section
      id="participantes"
      className={`py-16 px-6 container ${
        uiTheme ? "text-slate-950" : "text-gray-100"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-4">
          Artistas e invitados
        </h2>
        <p className="text-lg">
          Bandas, artistas, periodistas, productores y más.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-cols-3">
        {guests.map((guest, index) => (
          <div
            key={index}
            className={`bg-white/5 p-4 rounded-lg shadow-md text-center w-full max-w-xs min-h-[200px] flex flex-col justify-center items-center ${
              uiTheme ? "border border-zinc-300" : ""
            }`}
          >
            <h3 className="text-xl font-semibold">{guest.name}</h3>
            <p className="text-sm text-gray-400">{guest.role}</p>
            <span className="mt-2 inline-block text-xs text-orange-800 bg-orange-100 px-2 py-1 rounded-full">
              {guest.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
