import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";


// qui metto (url) perché dopo devo collegarlo al searchForm.js
const ShowDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url);


    // display drinks
    const section = await displayDrinks(data);
    if (section) {
        setDrink(section);
    }
};

export default ShowDrinks;