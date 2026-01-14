const express = require("express");
const app = express();

app.get("/greetings/:username", (req, res) => {
  res.send(`What a delight it is to see you once more, ${req.params.username}`);
});
//====================================================
app.get("/roll/:number", (req, res) => {
  const max = Number(req.params.number);
  if (isNaN(max)) {
    return res.send("You must specify a number.");
  }
  const roll = Math.floor(Math.random() * (max + 1));

  res.send(`You rolled a ${roll}`);
});
//===========================================

app.get("/collectibles/:index"),
  (req, res) => {
    const collectibles = [
      { name: "shiny ball", price: 5.95 },
      { name: "autographed picture of a dog", price: 10 },
      { name: "vintage 1970s yogurt SOLD AS-IS", price: 0.99 },
    ];
    const idx = req.params.index;
    if (idx >= collectibles.length || idx < 0) {
      res.send("This item is not yet in stock. Check back soon!");
    }
  };

//=================================================

app.get("/shoes", (req, res) => {
  const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" },
  ];
  const minPrice = +req.query["min-price"];
  const maxPrice = +req.query["max-price"];
  const shoeType = req.query["type"];
  let filteredShoes = [...shoes];
  if (minPrice) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price >= minPrice);
  }
  console.log(filteredShoes);
  if (maxPrice) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.price <= maxPrice);
  }
  console.log(filteredShoes);
  if (shoeType) {
    filteredShoes = filteredShoes.filter((shoe) => shoe.type === shoeType);
  }
  console.log(filteredShoes);
  res.send(filteredShoes);
});


app.listen(3000, () => {
  console.clear();
  console.log("Listening on PORT 3000.");
});
