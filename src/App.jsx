import React, { useState } from "react";
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
  const [time,setTime] = useState("");
  const [alcool,setAlcol] = useState(0);


  const checkAlcol = () => {
    setIsClicked(false);
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
    const newCountLiquore = countLiquore * 0.081 * 0.50;
    const gramAlcLiquore = newCountLiquore * 789;
    const timeLiquore = gramAlcLiquore / 8;
    //Cocktail
    const newCountCocktails = countCocktail * 0.201 * 0.375;
    const gramAlcCocktail = newCountCocktails * 789;
    const timeCocktail = gramAlcCocktail / 8;
 
    // Calcola le ore e i minuti
    const totTime = timeBottleBeer + timeBeer + timeAmaro + timeLiquore + timeWine + timeCocktail;   
    const hours = Math.floor(totTime);
    const minutes = Math.round((totTime - hours) * 60);
    const finalTime = `${hours} ora e ${minutes} minuti`;
    setTime(finalTime);

    const totGramAlc = (gramAlcBottleBeer + gramAlcBeer + gramAlcWine + gramAlcAmaro + gramAlcLiquore + gramAlcCocktail).toFixed(2);
    setAlcol(totGramAlc);
}

  return (
    <>
      <Header />
      {isClicked ? "":
      (
        <>
        <div className="h-screen bg-[#454545] text-white p-12 text-center">
          <h2 className="text-3xl">Nel corpo hai<br/> <strong>{alcool} g</strong> </h2>
          <h2 className="text-3xl">Tempo per smaltire<br/> <strong>{time}</strong> </h2>
          <br/>
          <br/>
          <a href="/" className="text-[#454545] font-bold text-2xl uppercase px-6 rounded-md bg-yellow-400 py-3">Torna Indietro</a>
        </div>
        </>
        )}
      {isClicked && (
        <>
          <Banner />
          <main className="grid grid-cols-2 grid-flow-row gap-6 justify-items-center px-6 py-10 bg-yellow-400">
            {/* Peso */}
            <div className="col-span-2">
              <div className="grid grid-cols-4 justify-items-center items-center">
                <p className="text-xl font-medium">
                  {" "}
                  <strong>Weight:</strong>{" "}
                </p>
                <span>{countWeight} Kg</span>
                <button
                  className="text-yellow-300 bg-[#454545] border"
                  onClick={() => {
                    if (countWeight > 0) {
                      setCountWeight((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <button
                  className="text-yellow-300 bg-[#454545]"
                  onClick={() => {
                    setCountWeight((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
              <br/>
            </div>

            {/* 33 cl beer */}
            <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
              <img
                src={bottleBeer}
                alt="beer"
                width={100}
                className="rotate-[-15deg]"
              />
              <strong className="text-xl text-center">
                33 cl <br /> beer
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] border"
                  onClick={() => {
                    if (countBottleBeer > 0) {
                      setCountBottleBeer((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{countBottleBeer}</span>
                <button
                  className="bg-yellow-300 text-[#454545]"
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
                className="rotate-[15deg]"
              />
              <strong className="text-xl text-center">
                0,5 l <br /> beer
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] border"
                  onClick={() => {
                    if (countBeer > 0) {
                      setCountBeer((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{countBeer}</span>
                <button
                  className="bg-yellow-300 text-[#454545]"
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
                className="rotate-[15deg]"
              />
              <strong className="text-xl text-center">
                20 cl <br /> wine
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] border"
                  onClick={() => {
                    if (countWine > 0) {
                      setCountWine((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{countWine}</span>
                <button
                  className="bg-yellow-300 text-[#454545]"
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
              <img src={amaro} alt="beer" width={100} />
              <strong className="text-xl text-center">
                8 cl <br /> amaro
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] border"
                  onClick={() => {
                    if (countAmaro > 0) {
                      setCountAmaro((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{countAmaro}</span>
                <button
                  className="bg-yellow-300 text-[#454545]"
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
              <img src={liquore} alt="beer" width={100} />
              <strong className="text-xl text-center">
                8 cl <br /> Liquor
              </strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] border"
                  onClick={() => {
                    if (countLiquore > 0) {
                      setCountLiquore((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{countLiquore}</span>
                <button
                  className="bg-yellow-300 text-[#454545]"
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
              <img src={cocktails} alt="beer" width={100} />
              <strong className="text-xl text-center">Cocktail</strong>
              <div className="grid grid-cols-3 justify-items-center items-center">
                <button
                  className="bg-yellow-300 text-[#454545] border"
                  onClick={() => {
                    if (countCocktail > 0) {
                      setCountCocktail((prevCount) => prevCount - 1);
                    }
                  }}
                >
                  -
                </button>
                <span>{countCocktail}</span>
                <button
                  className="bg-yellow-300 text-[#454545]"
                  onClick={() => {
                    setCountCocktail((prevCount) => prevCount + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-span-2 pt-3">
              <button onClick={checkAlcol} className="bg-[#454545] text-yellow-300 font-bold text-2xl uppercase px-12 py-3">
                Calcola
              </button>
            </div>
          </main>
        </>
      )}
      <Footer isClicked={isClicked}/>
    </>
  );
}

export default App;
