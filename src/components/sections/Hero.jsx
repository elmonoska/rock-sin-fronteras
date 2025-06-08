import logoSpotify from "../../assets/images/brands/spotify-logo.svg";
import logoConverse from "../../assets/images/brands/converse-logo-1.svg";
import logoBose from "../../assets/images/brands/bose.svg";
import logoHM from "../../assets/images/brands/h-m.svg";
import logoRayBan from "../../assets/images/brands/ray-ban-1.svg";
import logoCocaCola from "../../assets/images/brands/coca-cola-2021.svg";
import logoMonster from "../../assets/images/brands/monster-logo.svg";
export default function Hero() {
  const logos = [
    logoSpotify,
    logoConverse,
    logoBose,
    logoHM,
    logoRayBan,
    logoCocaCola,
    logoMonster,
  ];
  return (
    <section
      className="relative bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white py-16 px-6"
      id="hero"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          1ra Convención
          <br />
          <span className="text-fuchsia-400">EL PULSO DEL INDIE ROCK</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          Rock sin fronteras: la fusión de sonidos alternativos
        </p>

        <p className="mt-2 text-sm md:text-base text-gray-300">
          16, 17 y 18 de octubre de 2026 · Hotel Hilton Mexico City Reforma
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#programa"
            className="bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-2 px-6 rounded-full"
          >
            Ver programa
          </a>
          <a
            href="#registro"
            className="border border-white hover:bg-white hover:text-purple-950 transition text-white font-semibold py-2 px-6 rounded-full"
          >
            Registrarme
          </a>
        </div>

        {/* Carrusel de logotipos */}
        <div className="mt-4 relative overflow-hidden w-full py-6 ">
          <div className="flex gap-12 whitespace-nowrap animate-marquee py-4">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="w-[100px] h-[40px] flex items-center justify-center shrink-0"
              >
                <img
                  src={logo}
                  alt="Patrocinador"
                  className="h-10 inline-block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
