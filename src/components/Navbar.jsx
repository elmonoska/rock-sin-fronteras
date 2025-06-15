import logo from "../assets/images/logo-h.webp";
import logoSonyMusic from "../assets/images/sony-music-logo.webp";
export default function Navbar({ uiTheme, setUiTheme }) {
  // Cambia el tema light dark
  function handleTheme() {
    setUiTheme(!uiTheme);
  }
  // Delegador de eventos
  document.addEventListener("click", (e) => {
    const $menuInput = document.getElementById("menu-input");
    // Oculta el menu si se le da clic a un enlace con la clase nav__link
    if (e.target.closest(".nav__link")) {
      $menuInput.checked = false;
    }
  });

  return (
    <>
      <nav className="nav bg-purple-950 shadow-md sticky top-0 z-40 text-slate-50">
        <section className="nav__container flex justify-between md:justify-around items-center mx-auto h-[80px] w-[90vw]">
          <figure className="h-16 w-auto overflow-hidden flex items-center">
            <a href="/" className="block h-full">
              <img
                src={logo}
                alt="Logo fer project"
                className="h-full max-h-full object-contain block"
              />
            </a>
          </figure>

          <img src={logoSonyMusic} alt="Sony Music Logo" loading="lazy" className="w-[75px]" />

          <label className="nav__toggle z-50 w-[30px] h-[30px] bg-[url('/icons/menu-open.svg')] bg-cover cursor-pointer transition-[background] has-[input:checked]:bg-[url('/icons/menu-close.svg')] peer/menu md:hidden">
            <input
              type="checkbox"
              id="menu-input"
              className="nav__input hidden"
            />
          </label>

          <ul className="nav__list fixed inset-[0] p-[1.5rem_5%] grid place-content-center gap-[2.5rem] text-center bg-purple-950/90 *:hover:*:text-fuchsia-400 -translate-x-full peer-has-[input:checked]/menu:translate-x-0 transition-transform md:translate-x-0 md:static md:grid-flow-col md:place-items-center md:p-0 md:transition-all">
            <li>
              <a href="#acerca-de" className="nav__link">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#programa" className="nav__link">
                Programa
              </a>
            </li>
            <li>
              <a href="#participantes" className="nav__link">
                Invitados
              </a>
            </li>
            <li className="lg:inline-block nav__link">
              <a href="#sede">Sede</a>
            </li>
            <li className="md:hidden lg:inline-block nav__link">
              <a href="#registro">Registro</a>
            </li>
            <li className="md:hidden lg:inline-block nav__link">
              <a href="#contacto">Contacto</a>
            </li>

            <button
              onClick={handleTheme}
              aria-label="Cambiar tema"
              className={`w-16 h-8 flex items-center rounded-full p-1 transition-all duration-300 mx-auto
        ${uiTheme ? "bg-orange-400" : "bg-pink-500"}`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white text-sm flex items-center justify-center transition-all duration-300
          ${uiTheme ? "translate-x-0" : "translate-x-8"}`}
              >
                {uiTheme ? "☀️" : "🌙"}
              </div>
            </button>
          </ul>
        </section>
      </nav>
    </>
  );
}
