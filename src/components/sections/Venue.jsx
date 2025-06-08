export default function Venue({ uiTheme }) {
  return (
    <section
      id="sede"
      className={`py-16 px-6 container ${
        uiTheme ? "text-slate-950" : "text-gray-100"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-4">
          Sede y servicios
        </h2>
        <p className="text-lg">
          Todo en un solo lugar: confort, accesibilidad y experiencia.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Hotel Hilton Mexico City Reforma
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            <li>Ubicado junto a la Alameda Central.</li>
            <li>
              Centro principal para conferencias, ruedas de prensa y showcases.
            </li>
            <li>
              Acceso a transporte público, estacionamiento y servicios premium.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Transporte
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            <li>
              Traslados desde AICM y terminales para invitados especiales.
            </li>
            <li>Vans y sprinters ejecutivos para logística del evento.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Hospedaje
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            <li>Reservas especiales para artistas y staff técnico.</li>
            <li>Hoteles alternos: Holiday Inn, Barceló Reforma.</li>
            <li>Tarifas preferenciales para asistentes por convenio.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">
            Alimentación y Servicios técnicos
          </h3>
          <ul className="list-disc list-inside text-sm md:text-base space-y-1">
            <li>Menús especiales (vegano, vegetariano, sin gluten).</li>
            <li>Zona de food trucks y restaurantes cercanos recomendados.</li>
            <li>Audio, video, traducción simultánea y streaming en vivo.</li>
            <li>Staff técnico especializado y apoyo durante actividades.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
