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

import { checkAlcol } from "./utils/functions";

function App() {
  const [isClicked, setIsClicked] = useState(true);
  const [time, setTime] = useState("");
  const [alcool, setAlcol] = useState(0);
  const [pesoAlc, setPesoAlc] = useState(0);

  const [dati, setDati] = useState({
    countWeight: 60,
    countBottleBeer: 0,
    countBeer: 0,
    countWine: 0,
    countAmaro: 0,
    countLiquore: 0,
    countCocktail: 0,
  });

  const scrollRef = useRef(null);

  useEffect(() => {
    if (dati.countWeight < 50) {
      setPesoAlc(8);
    } else if (dati.countWeight > 55 && dati.countWeight <= 60) {
      setPesoAlc(9);
    } else if (dati.countWeight > 60 && dati.countWeight <= 65) {
      setPesoAlc(10);
    } else if (dati.countWeight > 65 && dati.countWeight <= 70) {
      setPesoAlc(11);
    } else if (dati.countWeight > 70 && dati.countWeight <= 75) {
      setPesoAlc(12);
    } else if (dati.countWeight > 75 && dati.countWeight <= 80) {
      setPesoAlc(13);
    } else if (dati.countWeight > 80 && dati.countWeight <= 85) {
      setPesoAlc(14);
    } else if (dati.countWeight > 85 && dati.countWeight <= 90) {
      setPesoAlc(15);
    } else if (dati.countWeight > 90 && dati.countWeight <= 95) {
      setPesoAlc(16);
    } else {
      setPesoAlc(17);
    }
  }, [dati.countWeight]);

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
                  <strong>Peso:</strong>
                </p>
                <span className="text-2xl md:text-3xl">
                  {dati.countWeight} Kg
                </span>
                <button
                  className="text-yellow-300 bg-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    if (dati.countWeight > 0) {
                      setDati((prevDati) => ({
                        ...prevDati,
                        countWeight: prevDati.countWeight - 1,
                      }));
                    }
                  }}
                >
                  -
                </button>
                <button
                  className="text-yellow-300 bg-[#454545] md:text-2xl md:font-bold"
                  onClick={() => {
                    if (dati.countWeight < 200) {
                      setDati((prevDati) => ({
                        ...prevDati,
                        countWeight: prevDati.countWeight + 1,
                      }));
                    }
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
                if (dati.countBottleBeer > 0) {
                  setDati((prevDati) => ({
                    ...prevDati,
                    countBottleBeer: prevDati.countBottleBeer - 1,
                  }));
                }
              }}
              span={dati.countBottleBeer}
              buttonPlus={() => {
                setDati((prevDati) => ({
                  ...prevDati,
                  countBottleBeer: prevDati.countBottleBeer + 1,
                }));
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
                if (dati.countBeer > 0) {
                  setDati((prevDati) => ({
                    ...prevDati,
                    countBeer: prevDati.countBeer - 1,
                  }));
                }
              }}
              span={dati.countBeer}
              buttonPlus={() => {
                setDati((prevDati) => ({
                  ...prevDati,
                  countBeer: prevDati.countBeer + 1,
                }));
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
                if (dati.countWine > 0) {
                  setDati((prevDati) => ({
                    ...prevDati,
                    countWine: prevDati.countWine - 1,
                  }));
                }
              }}
              span={dati.countWine}
              buttonPlus={() => {
                setDati((prevDati) => ({
                  ...prevDati,
                  countWine: prevDati.countWine + 1,
                }));
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
                if (dati.countAmaro > 0) {
                  setDati((prevDati) => ({
                    ...prevDati,
                    countAmaro: prevDati.countAmaro - 1,
                  }));
                }
              }}
              span={dati.countAmaro}
              buttonPlus={() => {
                setDati((prevDati) => ({
                  ...prevDati,
                  countAmaro: prevDati.countAmaro + 1,
                }));
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
                if (dati.countLiquore > 0) {
                  setDati((prevDati) => ({
                    ...prevDati,
                    countLiquore: prevDati.countLiquore - 1,
                  }));
                }
              }}
              span={dati.countLiquore}
              buttonPlus={() => {
                setDati((prevDati) => ({
                  ...prevDati,
                  countLiquore: prevDati.countLiquore + 1,
                }));
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
                if (dati.countCocktail > 0) {
                  setDati((prevDati) => ({
                    ...prevDati,
                    countCocktail: prevDati.countCocktail - 1,
                  }));
                }
              }}
              span={dati.countCocktail}
              buttonPlus={() => {
                setDati((prevDati) => ({
                  ...prevDati,
                  countCocktail: prevDati.countCocktail + 1,
                }));
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
                onClick={() =>
                  checkAlcol(setIsClicked, setTime, setAlcol, dati, pesoAlc)
                }
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
