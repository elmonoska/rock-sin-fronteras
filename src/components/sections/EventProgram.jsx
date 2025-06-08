import { useState } from "react";

const programData = {
  "16 OCT": [
    {
      time: "7:00 hrs",
      title: "Desayuno de Bienvenida",
      location: "Restaurante Los Dones",
      borderColor: "border-orange-500",
      textColor: "text-pink-400",
      tag: "Desayuno",
    },
    {
      time: "8:00 - 9:20 hrs",
      title: "Registro de participantes",
      location: "Salón Reforma A",
      description:
        "Recepción, entrega de material del evento, gafetes y acreditación de prensa, staff y medios.",
      borderColor: "border-fuchsia-500",
      textColor: "text-fuchsia-300",
      tag: "Registro",
    },
    {
      time: "9:30 hrs",
      title: "Ceremonia Inaugural",
      location: "Salón Reforma A",
      borderColor: "border-orange-500",
      textColor: "text-fuchsia-300",
      tag: "Ceremonia",
    },
    {
      time: "10:15 hrs",
      title: "Panel inaugural: “Rock sin fronteras: el nuevo lenguaje musical”",
      location: "Salón Reforma A",
      description:
        "Ponentes: Mariana Delgado, Alexis de Anda, María Letona, Diego Mancera, Sebastián Cruz.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Panel",
    },
    {
      time: "11:30 hrs",
      title: "Receso – Coffee Break",
      location: "Lobby Salón Reforma",
      borderColor: "border-orange-500",
      textColor: "text-orange-300",
      tag: "Receso",
    },
    {
      time: "13:30 hrs",
      title: "Comida Buffet",
      location: "Terraza del Hotel",
      borderColor: "border-orange-500",
      textColor: "text-orange-400",
      tag: "Comida",
    },
    {
      time: "15:00 hrs",
      title:
        "Mesa de Negocios: “Speed meetings” entre bandas, managers y promotores",
      location: "Salón Don Alberto",
      description: "Dinámica tipo networking rotativo para cerrar acuerdos.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Networking",
    },
    {
      time: "16:30 hrs",
      title: "Receso y Tiempo para Networking Informal",
      location: "Área Lounge",
      borderColor: "border-orange-500",
      textColor: "text-orange-300",
      tag: "Networking",
    },
    {
      time: "17:00 hrs",
      title:
        "Panel interactivo: “Monetización y visibilidad en plataformas digitales”",
      location: "Salón Reforma B",
      description:
        "Ponentes: Fernanda Tapia, Pamela Treviño, Carla Morales, Alberto Escudero. Moderadora: Fernanda Tapia.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Panel",
    },
    {
      time: "18:30 hrs",
      title: "Cena Networking",
      location: "Salón Reforma A",
      borderColor: "border-orange-500",
      textColor: "text-orange-300",
      tag: "Cena",
    },
    {
      time: "19:30 hrs",
      title: "Concierto de Apertura",
      location: "Salón Don Diego",
      description: "Bandas: The Warning, Little Jesus, DJ Tripnotic.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Concierto",
    },
  ],
  "17 OCT": [
    {
      time: "7:00 hrs",
      title: "Desayuno Buffet",
      location: "Restaurante Los Dones",
      borderColor: "border-orange-500",
      textColor: "text-orange-400",
      tag: "Desayuno",
    },
    {
      time: "9:00 hrs",
      title:
        "Conferencia magistral: “Del garage al top 10: el viaje de una banda indie”",
      location: "Salón Reforma A",
      description: "Ponente: León Larregui (Zoé)",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Conferencia",
    },
    {
      time: "10:00 hrs",
      title: "Talleres simultáneos (grupales, con inscripción previa)",
      location: "Salón Don Diego y Salón Don Alberto",
      description:
        "Producción musical con herramientas caseras (Andrés Landero) y Branding musical y diseño de merch (Beatriz Melgoza)",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-300",
      tag: "Taller",
    },
    {
      time: "12:30 hrs",
      title: "Comida Buffet",
      location: "Terraza del Hotel",
      borderColor: "border-orange-500",
      textColor: "text-orange-400",
      tag: "Comida",
    },
    {
      time: "14:30 hrs",
      title:
        "Panel: “El mercado latino: oportunidades para artistas bilingües”",
      location: "Salón Reforma A",
      description:
        "Ponentes: Erika Ruiz, Andrea Rojas, Daniel Karam. Moderador: Pepe Campa.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Panel",
    },
    {
      time: "16:15 hrs",
      title: "Cena Ligera Box Lunch",
      location: "Área Lounge",
      borderColor: "border-orange-500",
      textColor: "text-orange-300",
      tag: "Cena",
    },
    {
      time: "17:00 hrs",
      title: "Escenario emergente: “Voces del Futuro”",
      location: "Salón Don Diego",
      description:
        "Presentación de 4 bandas seleccionadas vía convocatoria nacional.",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-300",
      tag: "Showcase",
    },
    {
      time: "19:30 hrs",
      title: "Noche VIP – SONY MUSIC EXPERIENCE",
      location: "Salón Reforma A",
      description:
        "Coctel exclusivo, showcase acústico, y espacio de networking entre patrocinadores, bandas y figuras públicas.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "VIP",
    },
  ],
  "18 OCT": [
    {
      time: "7:30 hrs",
      title: "Desayuno Buffet Libre",
      location: "Restaurante Los Dones",
      borderColor: "border-orange-500",
      textColor: "text-orange-400",
      tag: "Desayuno",
    },
    {
      time: "9:00 hrs",
      title:
        "Panel: “El rock como puente entre culturas: narrativas en dos idiomas”",
      location: "Salón Reforma A",
      description:
        "Ponentes: Lety Sahagún, Guillermo Guevara, Daniel Salazar. Moderador: Paco Ayala.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Panel",
    },
    {
      time: "10:30 hrs",
      title: "Coffee Break + Activación cultural",
      location: "Lobby general",
      description: "Espacio de merch, firmas de autógrafos, y muestra gráfica.",
      borderColor: "border-orange-500",
      textColor: "text-orange-300",
      tag: "Receso",
    },
    {
      time: "11:00 hrs",
      title: "Pitch creativo: “Proyectos colaborativos con marcas”",
      location: "Salón Reforma B",
      description:
        "Bandas y solistas presentan ideas de colaboración a Spotify, Converse y H&M.",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-300",
      tag: "Pitch",
    },
    {
      time: "13:30 hrs",
      title: "Comida de Clausura",
      location: "Salón Reforma A",
      borderColor: "border-orange-500",
      textColor: "text-orange-400",
      tag: "Comida",
    },
    {
      time: "17:00 hrs",
      title: "Mesa redonda: “El futuro del rock alternativo en Iberoamérica”",
      location: "Salón Reforma A",
      description:
        "Periodistas, editores de playlists, programadores de festivales. Cierre con preguntas del público.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Mesa redonda",
    },
    {
      time: "18:30 hrs",
      title: "Ceremonia de Clausura",
      location: "Salón Reforma A",
      borderColor: "border-fuchsia-500",
      textColor: "text-fuchsia-300",
      tag: "Ceremonia",
    },
    {
      time: "19:00 hrs",
      title: "Concierto de Clausura y Cena Afterparty",
      location: "Salón Don Diego",
      description:
        "Bandas: Insite, invitado sorpresa + DJ set bilingüe. Cena tipo Buffet.",
      borderColor: "border-pink-500",
      textColor: "text-pink-400",
      tag: "Concierto",
    },
  ],
};

function EventCard({ event, uiTheme }) {
  return (
    <div
      className={`bg-white/5 border-l-4 rounded-lg shadow p-6 ${
        event.borderColor
      } ${
        uiTheme ? "border-y border-y-zinc-300 border-r border-r-zinc-300" : ""
      }`}
    >
      <p className="text-sm mb-1">{`${event.time} ${event.location}`}</p>

      <h3 className={`text-xl font-semibold ${event.textColor}`}>
        {event.title}
      </h3>

      {event.tag && (
        <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium rounded-full px-2 py-0.5 mt-2">
          {event.tag}
        </span>
      )}

      {event.description && <p className="mt-2">{event.description}</p>}
    </div>
  );
}

export default function EventProgram({ uiTheme }) {
  const [selectedDay, setSelectedDay] = useState("16 OCT");
  const events = programData[selectedDay];

  return (
    <section
      id="programa"
      className={`py-16 px-6 container ${
        uiTheme ? "text-slate-950" : "text-gray-100"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400">
          Programa del evento
        </h2>
        <p className="text-lg">
          Explora las actividades por día. Conferencias, talleres y
          presentaciones musicales.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {Object.keys(programData).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selectedDay === day
                ? "bg-orange-600 text-white"
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Lista de eventos dinámicos */}
      <div
        className="grid md:grid-cols-2 gap-6 relative animate-fade md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-px md:before:bg-slate-400 "
        key={selectedDay}
      >
        {events.map((event, index) => (
          <div
            key={index}
            className={`relative p-4 ${
              index % 2 === 0 ? "md:pr-10" : "md:pl-10"
            }`}
          >
            <div
              className={`hidden md:block absolute top-5 w-3 h-3 bg-orange-500 rounded-full shadow-md ${
                index % 2 === 0
                  ? "right-0 md:right-[-7px]"
                  : "left-0 md:left-[-7px]"
              }`}
            ></div>

            <EventCard event={event} uiTheme={uiTheme} />
          </div>
        ))}
      </div>
    </section>
  );
}
