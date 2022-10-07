var express = require("express");
var router = express.Router();

const API_KEY = process.env.API_KEY;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const fetchCard = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=name:arceus&page=1",
    {
      headers: { "X-Api-Key": API_KEY },
    }
  );
  const data = await fetchCard.json();
  res.json({ msg: "respond with a resource", data });
});

module.exports = router;
