export default function Contact({ uiTheme }) {
  return (
    <section
      id="contacto"
      className={`py-16 px-6 ${uiTheme ? "text-slate-900" : "text-white"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-4">
          ¿Tienes dudas o comentarios?
        </h2>
        <p className="text-lg mb-8">
          Escríbenos si necesitas más información sobre la convención, registro
          o logística del evento.
        </p>

        <div className="space-y-4 text-base">
          <p>
            <span className="font-medium">Correo:</span>{" "}
            <a
              href="mailto:contacto@elpulsoindierock.com"
              className="text-orange-600 hover:underline"
            >
              contacto@elpulsoindierock.com
            </a>
          </p>
          <p>
            <span className="font-medium">Ubicación:</span> Hotel Hilton Mexico
            City Reforma
          </p>
          <p>
            <span className="font-medium">Horario de atención:</span> Lunes a
            viernes de 10:00 a 18:00 hrs
          </p>
        </div>
      </div>
    </section>
  );
}
