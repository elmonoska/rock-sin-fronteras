import FooterDev from "../components/FooterDev";
import Navbar from "../components/Navbar";

export default function Base({ uiTheme, setUiTheme, children }) {
  return (
    <>
      <div className={`flex flex-col min-h-dvh`}>
        <Navbar uiTheme={uiTheme} setUiTheme={setUiTheme} />
        {children}
        <FooterDev />
      </div>
    </>
  );
}
