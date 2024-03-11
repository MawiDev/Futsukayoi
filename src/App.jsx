import React, { useEffect, useRef, useState } from "react";
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
import Cards from "./components/Cards";

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
  const [pesoAlc, setPesoAlc] = useState(0);

  const scrollRef = useRef(null);

  useEffect(() => {
    if (countWeight < 50) {
      setPesoAlc(8);
    } else if (countWeight > 55 && countWeight <= 60) {
      setPesoAlc(9);
    } else if (countWeight > 60 && countWeight <= 65) {
      setPesoAlc(10);
    } else if (countWeight > 65 && countWeight <= 70) {
      setPesoAlc(11);
    } else if (countWeight > 70 && countWeight <= 75) {
      setPesoAlc(12);
    } else if (countWeight > 75 && countWeight <= 80) {
      setPesoAlc(13);
    } else if (countWeight > 80 && countWeight <= 85) {
      setPesoAlc(14);
    } else if (countWeight > 85 && countWeight <= 90) {
      setPesoAlc(15);
    } else if (countWeight > 90 && countWeight <= 95) {
      setPesoAlc(16);
    } else {
      setPesoAlc(17);
    }
  }, [countWeight]);

  const checkAlcol = () => {
    setIsClicked(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    //Bottiglia birra
    const newCountBottleBeer = countBottleBeer * 0.33 * 0.05;
    const gramAlcBottleBeer = newCountBottleBeer * 789;
    const timeBottleBeer = gramAlcBottleBeer / pesoAlc;
    //Media birra
    const newCountBeer = countBeer * 0.501 * 0.07;
    const gramAlcBeer = newCountBeer * 789;
    const timeBeer = gramAlcBeer / pesoAlc;
    //Calice vino
    const newCountWine = countWine * 0.251 * 0.15;
    const gramAlcWine = newCountWine * 789;
    const timeWine = gramAlcWine / pesoAlc;
    //Bicchiere amaro
    const newCountAmaro = countAmaro * 0.081 * 0.35;
    const gramAlcAmaro = newCountAmaro * 789;
    const timeAmaro = gramAlcAmaro / pesoAlc;
    //Bicchiere liquore
    const newCountLiquore = countLiquore * 0.081 * 0.5;
    const gramAlcLiquore = newCountLiquore * 789;
    const timeLiquore = gramAlcLiquore / pesoAlc;
    //Cocktail
    const newCountCocktails = countCocktail * 0.201 * 0.375;
    const gramAlcCocktail = newCountCocktails * 789;
    const timeCocktail = gramAlcCocktail / pesoAlc;

    // Calcola le ore e i minuti
    const totTime =
      timeBottleBeer +
      timeBeer +
      timeAmaro +
      timeLiquore +
      timeWine +
      timeCocktail +
      4;
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
            <Cards
              buttonMin={() => {
                if (countBottleBeer > 0) {
                  setCountBottleBeer((prevCount) => prevCount - 1);
                }
              }}
              span={countBottleBeer}
              buttonPlus={() => {
                setCountBottleBeer((prevCount) => prevCount + 1);
              }}
            >
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
            </Cards>

            {/* 50 cl beer */}
            <Cards
              buttonMin={() => {
                if (countBeer > 0) {
                  setCountBeer((prevCount) => prevCount - 1);
                }
              }}
              span={countBeer}
              buttonPlus={() => {
                setCountBeer((prevCount) => prevCount + 1);
              }}
            >
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
            </Cards>

            {/* 20 cl vino */}
            <Cards
              buttonMin={() => {
                if (countWine > 0) {
                  setCountWine((prevCount) => prevCount - 1);
                }
              }}
              span={countWine}
              buttonPlus={() => {
                setCountWine((prevCount) => prevCount + 1);
              }}
            >
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
            </Cards>

            {/* 8 cl amaro */}
            <Cards
              buttonMin={() => {
                if (countAmaro > 0) {
                  setCountAmaro((prevCount) => prevCount - 1);
                }
              }}
              span={countAmaro}
              buttonPlus={() => {
                setCountAmaro((prevCount) => prevCount + 1);
              }}
            >
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
            </Cards>

            {/* 8 cl liquore */}
            <Cards
              buttonMin={() => {
                if (countLiquore > 0) {
                  setCountLiquore((prevCount) => prevCount - 1);
                }
              }}
              span={countLiquore}
              buttonPlus={() => {
                setCountLiquore((prevCount) => prevCount + 1);
              }}
            >
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
            </Cards>

            {/*  cocktails */}
            <Cards
              buttonMin={() => {
                if (countCocktail > 0) {
                  setCountCocktail((prevCount) => prevCount - 1);
                }
              }}
              span={countCocktail}
              buttonPlus={() => {
                setCountCocktail((prevCount) => prevCount + 1);
              }}
            >
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
            </Cards>

            {/* Button Calcola */}
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
      ) : (
        <>
          <div className="h-screen bg-[#454545] text-white p-12 text-center">
            <h2 className="text-3xl xl:text-4xl">
              Nel corpo hai
              <br />{" "}
              <strong className="text-yellow-400">
                {alcool} g di alcol
              </strong>{" "}
            </h2>
            <h2 className="text-3xl xl:text-4xl">
              Tempo per smaltire
              <br /> <strong className="text-yellow-400">{time}</strong>{" "}
            </h2>
            <br />
            <h2 className="text-3xl xl:text-4xl">Bevi tanta Acqua</h2>
            <p className="text-lg md:text-xl md:leading-8">
              {" "}
              L'alcol non idrata i tessuti che quindi si restringono causando
              pressione interna e, di conseguenza, mal di testa. Basta pensare
              che 10 grammi di alcol fanno produrre circa 100 ml di urina.
            </p>
            <br />
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
      <Footer isClicked={isClicked} />
    </div>
  );
}

export default App;
