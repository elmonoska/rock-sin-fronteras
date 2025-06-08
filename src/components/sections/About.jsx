export default function About({ uiTheme }) {
  return (
    <section
      id="acerca-de"
      className={`py-16 px-6 container grid gap-12 md:grid-cols-2 items-center ${
        uiTheme ? "text-slate-950" : "text-gray-100"
      }`}
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-fuchsia-400">
          ¿De qué trata esta convención?
        </h2>

        <p className="text-lg mb-6">
          La 1ra Convención "El Pulso del Indie Rock" es un espacio de
          encuentro, diálogo y celebración para artistas, productores y amantes
          del rock alternativo de habla hispana. Un evento único para compartir
          ideas, sonidos e identidades.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-orange-500">
          Principios que nos guían:
        </h3>

        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className=" font-medium">Evolución musical:</span> repensar el
            indie desde una perspectiva contemporánea.
          </li>
          <li>
            <span className="font-medium">Creatividad y colaboración:</span>{" "}
            conectar escenas, proyectos y trayectorias.
          </li>
          <li>
            <span className="font-medium">Experiencia integral:</span>{" "}
            conciertos, paneles, arte y comunidad.
          </li>
          <li>
            <span className="font-medium">Diversidad e inclusión:</span> un
            espacio abierto a nuevas voces y miradas.
          </li>
        </ul>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
        <img
          src="/images/poster-preview.webp"
          alt="Cartel promocional del evento"
          className="w-full h-full object-cover opacity-90"
        />
      </div>
    </section>
  );
}
