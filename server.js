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
git ad
//=================================================

app.get("shoes", (req, res) => {});

app.listen(3000, () => {
  console.clear();
  console.log("Listening on PORT 3000.");
});
