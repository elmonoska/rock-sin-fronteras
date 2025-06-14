import imageHotel1 from "../../assets/images/hotel/hotel-1.webp";
import imageHotel2 from "../../assets/images/hotel/hotel-2.webp";
import imageHotel3 from "../../assets/images/hotel/hotel-3.webp";
import imageHotel4 from "../../assets/images/hotel/hotel-4.webp";
const hotelImages = [
  {
    image: imageHotel1,
    alt: "Vista frontal del hotel",
  },
  {
    image: imageHotel2,
    alt: "Sala de eventos del hotel",
  },
  {
    image: imageHotel3,
    alt: "Dormitorios del hotel",
  },
  {
    image: imageHotel4,
    alt: "Terraza de hotel",
  },
];
export default function Venue({ uiTheme }) {
  return (
    <section
      id="sede"
      className={`py-16 px-6 mx-auto w-full md:w-[80dvw] flex flex-col gap-4 ${
        uiTheme ? "text-slate-950" : "text-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-4">
          Sede
        </h2>
        <p className="text-lg">
          Todo en un solo lugar: confort, accesibilidad y experiencia.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-orange-500 mb-2 text-center">
          Hotel Hilton Mexico City Reforma
        </h3>

        <div className="w-full max-w-xl aspect-video mx-auto rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4875596749957!2d-99.1487733241562!3d19.434534840617882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x843aca350ab771a5%3A0xcc366795ad494b89!2sHilton%20Reforma%20M%C3%A9xico%20City!5e0!3m2!1ses-419!2smx!4v1749934515073!5m2!1ses-419!2smx"
            loading="lazy"
            allowFullScreen
            className="w-full min-h-full"
          />
        </div>

        <article className="grid items-center gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {hotelImages.map((hotel) => (
            <img
              src={hotel.image}
              alt={hotel.alt}
              loading="lazy"
              className="rounded-lg w-full min-h-full "
            />
          ))}
        </article>
      </div>
    </section>
  );
}
