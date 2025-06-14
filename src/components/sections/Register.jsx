export default function Register({ uiTheme }) {
  return (
    <section
      id="registro"
      className={`py-20 px-6 text-center ${
        uiTheme ? "text-slate-900" : "text-white"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-400 mb-4">
          Regístrate
        </h2>
        <p className="text-lg mb-8">
          Si recibiste invitación, confirma tu asistencia aquí.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSftQV3qKEUaJe72Cq7pNSNDZBlGI1RGo4zsn428ikvXMPFYYA/viewform"
          className="inline-block bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
          target="_blank"
        >
          Registrarme ahora
        </a>
      </div>
    </section>
  );
}
