function calculateAlcoholTime(dati, pesoAlc) {
    const timeBottleBeer = dati.countBottleBeer * 0.33 * 0.05 * 789 / pesoAlc;
    const timeBeer = dati.countBeer * 0.501 * 0.07 * 789 / pesoAlc;
    const timeWine = dati.countWine * 0.251 * 0.15 * 789 / pesoAlc;
    const timeAmaro = dati.countAmaro * 0.081 * 0.35 * 789 / pesoAlc;
    const timeLiquore = dati.countLiquore * 0.081 * 0.5 * 789 / pesoAlc;
    const timeCocktail = dati.countCocktail * 0.201 * 0.375 * 789 / pesoAlc;
    return timeBottleBeer + timeBeer + timeWine + timeAmaro + timeLiquore + timeCocktail + 4;
  }
  
function calculateAlcoholQuantity(dati) {
    const gramAlcBottleBeer = dati.countBottleBeer * 0.33 * 0.05 * 789;
    const gramAlcBeer = dati.countBeer * 0.501 * 0.07 * 789;
    const gramAlcWine = dati.countWine * 0.251 * 0.15 * 789;
    const gramAlcAmaro = dati.countAmaro * 0.081 * 0.35 * 789;
    const gramAlcLiquore = dati.countLiquore * 0.081 * 0.5 * 789;
    const gramAlcCocktail = dati.countCocktail * 0.201 * 0.375 * 789;
    return (gramAlcBottleBeer + gramAlcBeer + gramAlcWine + gramAlcAmaro + gramAlcLiquore + gramAlcCocktail).toFixed(2);
  }
  
export function checkAlcol(setIsClicked, setTime, setAlcol, dati, pesoAlc) {
    setIsClicked(false);
  
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  
    const totTime = calculateAlcoholTime(dati, pesoAlc);
    const hours = Math.floor(totTime);
    const minutes = Math.round((totTime - hours) * 60);
    const finalTime = `${hours} ora e ${minutes} minuti`;
    setTime(finalTime);
  
    const totGramAlc = calculateAlcoholQuantity(dati);
    setAlcol(totGramAlc);
}
