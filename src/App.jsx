import React, { useRef, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

/* Images */
import beer from "./assets/beer.png";
import bottleBeer from "./assets/bottle-beer.png";
import wine from "./assets/wine.png";
import amaro from "./assets/amaro2.png";
import liquore from "./assets/liquore.png";
import cocktails from "./assets/cocktails.png";
import Footer from "./components/Footer";

function App() {
  const [countWeight, setCountWeight] = useState(60);

  const [countBeer, setCountBeer] = useState(0);
  const [countBottleBeer, setCountBottleBeer] = useState(0);
  const [countWine, setCountWine] = useState(0);
  const [countAmaro, setCountAmaro] = useState(0);
  const [countLiquore, setCountLiquore] = useState(0);
  const [countCocktail, setCountCocktail] = useState(0);

  const [isClicked, setIsClicked] = useState(true);
  const [time, setTime] = useState("");
  const [alcool, setAlcol] = useState(0);

  const scrollRef = useRef(null);

  const checkAlcol = () => {
    setIsClicked(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 100);
    
    //Bottiglia birra
    const newCountBottleBeer = countBottleBeer * 0.331 * 0.05;
    const gramAlcBottleBeer = newCountBottleBeer * 789;
    const timeBottleBeer = gramAlcBottleBeer / 8;
    //Media birra
    const newCountBeer = countBeer * 0.501 * 0.07;
    const gramAlcBeer = newCountBeer * 789;
    const timeBeer = gramAlcBeer / 8;
    //Calice vino
    const newCountWine = countWine * 0.251 * 0.15;
    const gramAlcWine = newCountWine * 789;
    const timeWine = gramAlcWine / 8;
    //Bicchiere amaro
    const newCountAmaro = countAmaro * 0.081 * 0.35;
    const gramAlcAmaro = newCountAmaro * 789;
    const timeAmaro = gramAlcAmaro / 8;
    //Bicchiere liquore
    const newCountLiquore = countLiquore * 0.081 * 0.5;
    const gramAlcLiquore = newCountLiquore * 789;
    const timeLiquore = gramAlcLiquore / 8;
    //Cocktail
    const newCountCocktails = countCocktail * 0.201 * 0.375;
    const gramAlcCocktail = newCountCocktails * 789;
    const timeCocktail = gramAlcCocktail / 8;

    // Calcola le ore e i minuti
    const totTime =
      timeBottleBeer +
      timeBeer +
      timeAmaro +
      timeLiquore +
      timeWine +
      timeCocktail;
    const hours = Math.floor(totTime);
    const minutes = Math.round((totTime - hours) * 60);
    const finalTime = `${hours} ora e ${minutes} minuti`;
    setTime(finalTime);

    const totGramAlc = (
      gramAlcBottleBeer +
      gramAlcBeer +
      gramAlcWine +
      gramAlcAmaro +
      gramAlcLiquore +
      gramAlcCocktail
    ).toFixed(2);
    setAlcol(totGramAlc);
  };

  return (
    <div ref={scrollRef}>
      <Header />
      {isClicked ? (
        ""
      ) : (
        <>
          <div className="h-screen bg-[#454545] text-white p-12 text-center">
            <h2 className="text-3xl xl:text-4xl">
              Nel corpo hai
              <br /> <strong className="text-yellow-400">{alcool} g</strong>{" "}
            </h2>
            <h2 className="text-3xl xl:text-4xl">
              Tempo per smaltire
              <br /> <strong className="text-yellow-400">{time}</strong>{" "}
            </h2>
            <br />
            <br />
            <a
              href="/"
              className="text-[#454545] font-bold text-2xl md:text-3xl uppercase px-6 rounded-md bg-yellow-400 py-3"
            >
              Torna Indietro
            </a>
          </div>
        </>
      )}
      {isClicked && (
        <>
          <Banner />
          <main className="grid grid-cols-2 grid-flow-row gap-6 justify-items-center px-6 py-10 bg-yellow-400 xl:grid-cols-4">
            {/* Peso */}
            <div className="col-span-2 xl:col-span-4">
              <div className="grid grid-cols-4 justify-items-center items-center">
                <p className="text-2xl font-medium md:text-3xl">
                  {" "}
                  <strong>Peso:</strong>{" "}
                </p>
                <span className="text-2xl md:text-3xl">{countWeight} Kg</span>
                <button
                  className="text-yellow-300 bg-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countWeight > 0) {
                      setCountWeight((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <button
                  className="text-yellow-300 bg-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountWeight((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
              <br />
            </div>

            {/* 33 cl beer */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={bottleBeer}
                alt="beer"
                width={100}
                height={100}
                className="rotate-[-15deg] md:w-40"
              />
              <strong className="text-xl text-center md:text-2xl">
                33 cl <br /> Birra
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countBottleBeer > 0) {
                      setCountBottleBeer((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="md:text-2xl">{countBottleBeer}</span>
                <button
                  className="bg-yellow-300 text-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountBottleBeer((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* 50 cl beer */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={beer}
                alt="beer"
                width={100}
                height={100}
                className="rotate-[15deg] md:w-40"
              />
              <strong className="text-xl text-center md:text-2xl">
                0,5 l <br /> Birra
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countBeer > 0) {
                      setCountBeer((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="md:text-2xl">{countBeer}</span>
                <button
                  className="bg-yellow-300 text-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountBeer((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* 20 cl vino */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={wine}
                alt="beer"
                width={100}
                height={100}
                className="rotate-[15deg] md:w-40"
              />
              <strong className="text-xl text-center md:text-2xl">
                20 cl <br /> Vino
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countWine > 0) {
                      setCountWine((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="md:text-2xl">{countWine}</span>
                <button
                  className="bg-yellow-300 text-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountWine((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* 8 cl amaro */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={amaro}
                alt="beer"
                width={100}
                height={100}
                className="rotate-[-3deg] md:w-40"
              />
              <strong className="text-xl text-center md:text-2xl">
                8 cl <br /> Amaro
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countAmaro > 0) {
                      setCountAmaro((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="md:text-2xl">{countAmaro}</span>
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountAmaro((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* 8 cl liquore */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={liquore}
                alt="beer"
                width={100}
                height={100}
                className="rotate-[3deg] md:w-40"
              />
              <strong className="text-xl text-center md:text-2xl">
                8 cl <br /> Liquore
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countLiquore > 0) {
                      setCountLiquore((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="md:text-2xl">{countLiquore}</span>
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountLiquore((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/*  cocktails */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={cocktails}
                alt="beer"
                width={100}
                height={100}
                className="rotate-[2deg] md:w-40"
              />
              <strong className="text-xl text-center md:text-2xl">
                Cocktail
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    if (countCocktail > 0) {
                      setCountCocktail((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="md:text-2xl">{countCocktail}</span>
                <button
                  className="bg-yellow-300 text-[#454545]  md:text-2xl md:font-bold"
                  onClick={() => {
                    setCountCocktail((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-span-2 pt-3 xl:col-span-4">
              <button
                onClick={checkAlcol}
                className="bg-[#454545] text-yellow-300 font-bold text-2xl uppercase px-12 md:text-3xl md:py-4 py-3"
              >
                Calcola
              </button>
            </div>
          </main>
        </>
      )}
      <Footer isClicked={isClicked} />
    </div>
  );
}

export default App;
