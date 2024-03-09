import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

/* Images */
import beer from "./assets/beer.png";
import bottleBeer from "./assets/bottle-beer.png";
import wine from "./assets/wine.png";
import amaro from "./assets/amaro2.png";
import liquore from "./assets/liquore.png"
import cocktails from "./assets/cocktails.png"
import Footer from "./components/Footer";

function App() {
  const [countBeer, setCountBeer] = useState(0);
  const [countBottleBeer, setCountBottleBeer] = useState(0);
  const [countWine, setCountWine] = useState(0);
  const [countAmaro, setCountAmaro] = useState(0);
  const [countLiquore, setCountLiquore] = useState(0);
  const [countCocktail, setCountCocktail] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <main className="grid grid-cols-2 grid-flow-row gap-6 justify-items-center px-6 py-10 bg-yellow-300">
        {/* 33 cl beer */}
        <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
          <img src={bottleBeer} alt="beer" width={100} className="rotate-[-15deg]"/>
          <strong className="text-xl text-center">33 cl <br/> beer</strong>
          <div className="grid grid-cols-3 justify-items-center items-center">
            <button className="bg-yellow-300 text-[#454545] border" onClick={()=>{if (countBottleBeer > 0) {setCountBottleBeer(prevCount => prevCount - 1);}}}>-</button>
            <span>{countBottleBeer}</span>
            <button className="bg-yellow-300 text-[#454545]" onClick={()=>{setCountBottleBeer(prevCount => prevCount + 1);}}>+</button>
          </div>
        </div>
        {/* 50 cl beer */}
        <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
          <img src={beer} alt="beer" width={100} className="rotate-[15deg]"/>
          <strong className="text-xl text-center">0,5 l <br/> beer</strong>
          <div className="grid grid-cols-3 justify-items-center items-center">
            <button className="bg-yellow-300 text-[#454545] border" onClick={()=>{if (countBeer > 0) {setCountBeer(prevCount => prevCount - 1);}}}>-</button>
            <span>{countBeer}</span>
            <button className="bg-yellow-300 text-[#454545]" onClick={()=>{setCountBeer(prevCount => prevCount + 1);}}>+</button>
          </div>
        </div>
        {/* 20 cl vino */}
        <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
          <img src={wine} alt="beer" width={100} className="rotate-[15deg]"/>
          <strong className="text-xl text-center">20 cl <br/> wine</strong>
          <div className="grid grid-cols-3 justify-items-center items-center">
            <button className="bg-yellow-300 text-[#454545] border" onClick={()=>{if (countWine > 0) {setCountWine(prevCount => prevCount - 1);}}}>-</button>
            <span>{countWine}</span>
            <button className="bg-yellow-300 text-[#454545]" onClick={()=>{setCountWine(prevCount => prevCount + 1);}}>+</button>
          </div>
        </div>
        {/* 8 cl amaro */}
        <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
          <img src={amaro} alt="beer" width={100}/>
          <strong className="text-xl text-center">8 cl <br/> amaro</strong>
          <div className="grid grid-cols-3 justify-items-center items-center">
            <button className="bg-yellow-300 text-[#454545] border" onClick={()=>{if (countAmaro > 0) {setCountAmaro(prevCount => prevCount - 1);}}}>-</button>
            <span>{countAmaro}</span>
            <button className="bg-yellow-300 text-[#454545]" onClick={()=>{setCountAmaro(prevCount => prevCount + 1);}}>+</button>
          </div>
        </div>
        {/* 8 cl liquore */}
        <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
          <img src={liquore} alt="beer" width={100}/>
          <strong className="text-xl text-center">8 cl <br/> Liquor</strong>
          <div className="grid grid-cols-3 justify-items-center items-center">
            <button className="bg-yellow-300 text-[#454545] border" onClick={()=>{if (countLiquore > 0) {setCountLiquore(prevCount => prevCount - 1);}}}>-</button>
            <span>{countLiquore}</span>
            <button className="bg-yellow-300 text-[#454545]" onClick={()=>{setCountLiquore(prevCount => prevCount + 1);}}>+</button>
          </div>
        </div>
        {/*  cocktails */}
        <div className="flex flex-col justify-center items-center bg-[whitesmoke] pt-3 pr-3 rounded-md shadow-md">
          <img src={cocktails} alt="beer" width={100}/>
          <strong className="text-xl text-center">Cocktail</strong>
          <div className="grid grid-cols-3 justify-items-center items-center">
            <button className="bg-yellow-300 text-[#454545] border" onClick={()=>{if (countCocktail > 0) {setCountCocktail(prevCount => prevCount - 1);}}}>-</button>
            <span>{countCocktail}</span>
            <button className="bg-yellow-300 text-[#454545]" onClick={()=>{setCountCocktail(prevCount => prevCount + 1);}}>+</button>
          </div>
        </div>
        <div className="col-span-2 pt-3">
          <button className="bg-[#454545] text-yellow-300 font-bold text-2xl uppercase px-12 py-3">Calcola</button>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default App;
