import { useEffect, useRef, useState } from "react";
import imageBratty from "../../assets/images/artists/bratty.webp";
import imageLeonLarregui from "../../assets/images/artists/leon-larregui.webp";
import imageLittleJesus from "../../assets/images/artists/little-jesus.webp";
import imageReyno from "../../assets/images/artists/reyno.webp";
import imageTheWarning from "../../assets/images/artists/the-warning.webp";
import imageEdMaverick from "../../assets/images/artists/ed-maverick.webp";
import imageDanielaSpalla from "../../assets/images/artists/daniela-spalla.webp";
import imageSiddhartha from "../../assets/images/artists/siddhartha.webp";
import imageInsite from "../../assets/images/artists/insite.webp";
import imageTechnicolorFabrics from "../../assets/images/artists/technicolor-fabrics.webp";
const guests = [
  {
    name: "Bratty",
    role: "Banda indie / Artista invitada",
    category: "Banda",
    description:
      "Bratty es el proyecto solista de Jenny Juárez. Fusiona lo-fi, surf y pop con letras sobre juventud y emociones.",
    image: imageBratty,
  },
  {
    name: "León Larregui",
    role: "Ponente / Vocalista de Zoé",
    category: "Artista",
    description:
      "León Larregui es el vocalista de Zoé, una de las bandas más influyentes del rock alternativo en México.",
    image: imageLeonLarregui,
  },
  {
    name: "Little Jesus",
    role: "Indie rock con presencia en festivales",
    category: "Banda",
    description:
      "Little Jesus es una banda de la Ciudad de México que ha llevado su sonido a festivales nacionales e internacionales.",
    image: imageLittleJesus,
  },
  {
    name: "Reyno",
    role: "Banda mexicana con letras introspectivas",
    category: "Banda",
    description:
      "Reyno combina atmósferas melancólicas y letras profundas con un sonido indie y alternativo.",
    image: imageReyno,
  },
  {
    name: "The Warning",
    role: "Trío de rock alternativo con proyección global",
    category: "Banda",
    description:
      "The Warning es una banda integrada por tres hermanas regias que se ha consolidado en la escena global del rock.",
    image: imageTheWarning,
  },
  {
    name: "Ed Maverick",
    role: "Artista folk/indie con proyección internacional",
    category: "Solista",
    description:
      "Ed Maverick es conocido por su estilo introspectivo y letras honestas que conectan con las nuevas generaciones.",
    image: imageEdMaverick,
  },
  {
    name: "Daniela Spalla",
    role: "Artista pop alternativo Argentina/México",
    category: "Solista",
    description:
      "Daniela Spalla mezcla elementos del pop alternativo con un estilo narrativo elegante y nostálgico.",
    image: imageDanielaSpalla,
  },
  {
    name: "Siddhartha",
    role: "Cantautor y productor del indie mexicano",
    category: "Solista",
    description:
      "Siddhartha es un exbaterista de Zoé y ahora solista reconocido por su sonido indie fresco y letras introspectivas.",
    image: imageSiddhartha,
  },
  {
    name: "Insite",
    role: "Rock alternativo con influencia bilingüe",
    category: "Banda",
    description:
      "Insite es una banda de rock alternativo con una base sólida de fans tanto en español como en inglés.",
    image: imageInsite,
  },
  {
    name: "Technicolor Fabrics",
    role: "Indie pop/rock con presencia internacional",
    category: "Banda",
    description:
      "Originarios de Guadalajara, su sonido fresco y melódico ha cruzado fronteras con giras internacionales.",
    image: imageTechnicolorFabrics,
  },
];

export default function Guests({ uiTheme }) {
  // Estados
  const [selectedGuest, setSelectedGuest] = useState(null);
  
  // Referencias
  const dialogRef = useRef(null);

  // Efectos
  useEffect(() => {
    if (selectedGuest && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [selectedGuest]);

  // Manejadores de eventos
  const handleClickCloseDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSelectedGuest(null);
  };

  // Vista
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

      {/* Tarjetas */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {guests.map((guest, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-md w-full max-w-xs h-60 mx-auto transition hover:scale-105 duration-200"
            onClick={() => setSelectedGuest(guest)}
          >
            {/* Imagen de fondo */}
            <img
              src={guest.image}
              alt={guest.name}
              loading="lazy"
              className="absolute inset-0 w-full min-h-full object-cover pointer-events-none"
            />
            <div className="relative z-10 p-4 flex flex-col justify-center items-center text-white text-center min-h-[240px] bg-black/30">
              <h3 className="text-xl font-semibold">{guest.name}</h3>
              <p className="text-sm opacity-90">{guest.role}</p>
              <span className="mt-2 inline-block text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                {guest.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/60 rounded-xl w-[90%] max-w-2xl p-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        onClose={handleClickCloseDialog}
        closedBy="any"
      >
        {selectedGuest && (
          <div
            className={`p-6 rounded-xl shadow-lg relative flex flex-col items-center text-center ${
              uiTheme ? "bg-slate-50" : "bg-gray-950"
            } ${uiTheme ? "text-slate-950" : "text-gray-100"}`}
          >
            <button
              onClick={handleClickCloseDialog}
              className="absolute top-2 right-1 sm:right-4 text-5xl text-pink-500 hover:text-pink-800"
            >
              &times;
            </button>
            <img
              src={selectedGuest.image}
              alt={selectedGuest.name}
              className="w-11/12 sm:w-4/5 h-48 object-cover rounded-md mb-4 aspect-square"
              loading="lazy"
            />
            <h3 className="text-2xl font-bold mb-1">{selectedGuest.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{selectedGuest.role}</p>
            <span className="inline-block text-xs text-orange-800 bg-orange-100 px-2 py-1 rounded-full mb-4">
              {selectedGuest.category}
            </span>
            <p className="text-base leading-relaxed">
              {selectedGuest.description}
            </p>
          </div>
        )}
      </dialog>
    </section>
  );
}
