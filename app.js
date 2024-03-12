// const jokes = document.querySelector("#jokes");
// const button = document.querySelector("button");

// const addNewJoke = async () => {
//   const jokeText = await getDadJoke();
//   const newLI = document.createElement("LI");
//   newLI.append(jokeText);
//   jokes.append(newLI);
// };

// const getDadJoke = async () => {
//   try {
//     const config = { headers: { Accept: "application/json" } };
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     return res.data.joke;
//   } catch (e) {
//     return "NO JOKES AVAILABLE! SORRY :(";
//   }
// };

// button.addEventListener("click", addNewJoke);


// jokes.addEventListener('click', function (e){
//     e.target.nodeNome === 'li' && e.target.remove();
// })




const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getDadJoke = async () => {
    try{
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }catch(e){
        return "NO JOKES AVAILABLE AT THE MOMENT SORRY :("
    }
};

button.addEventListener("click", addNewJoke);


jokes.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

