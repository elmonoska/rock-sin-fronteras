import Base from "./layouts/Base";
import "./styles/App.css";
import { useState } from "react";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import EventProgram from "./components/sections/EventProgram";
import Guests from "./components/sections/Guests";
import Venue from "./components/sections/Venue";
import Register from "./components/sections/Register";
import Contact from "./components/sections/Contact";

export default function App() {
  // Estados
  const [uiTheme, setUiTheme] = useState(true);
  // Vista
  return (
    <>
      <Base uiTheme={uiTheme} setUiTheme={setUiTheme}>
        <main className={`grow ${uiTheme ? "bg-slate-50" : "bg-gray-950 "}`}>
          <Hero />
          <About uiTheme={uiTheme} />
          <EventProgram uiTheme={uiTheme} />
          <Guests uiTheme={uiTheme} />
          <Venue uiTheme={uiTheme} />
          <Register uiTheme={uiTheme} />
          <Contact uiTheme={uiTheme} />
        </main>
      </Base>
    </>
  );
}
