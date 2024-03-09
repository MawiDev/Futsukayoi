import sticker from "../assets/header-sticker-removebg-preview.png"

const Navbar = () => {
  return (
    <nav className="bg-[#454545] imponent">
      <a href="/" className="text-3xl brand hongkonghustle" style={{ color: "rgb(253 224 71)" }}>
        Nikayoi
      </a>
      <input id="bmenub" type="checkbox" className="show" />
      <label htmlFor="bmenub" className="pr-6 bg-gray-100 burger button"></label>
      <div className="menu" style={{backgroundColor: "#454545",color: "rgb(243 244 246)" }}>
        <a href="#" className="pseudo button icon-picture">
          Demo
        </a>
        <a href="#" className="button icon-puzzle">
          Plugins
        </a>
      </div>
    </nav>
  );
};

export default function Header() {
  return (
    <header className="bg-yellow-400">
      <Navbar />
      <div className="grid grid-cols-2 justify-items-center px-2 pt-20">
        <img src={sticker} alt="header" width={150}/>
        <div>
            <h2 className="text-3xl text-[#454545] akira">Calcolatore <br/> alcool <br/> nel corpo.</h2>
        </div>
      </div>
    </header>
  );
}
