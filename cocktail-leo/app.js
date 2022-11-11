import presentDrinks from "./src/presentDrinks.js"
import './src/searchForm.js'
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';
// s=a è una query che ho aggiunto all?api per includere tutti i cocktail


window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(URL)
});