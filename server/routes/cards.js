var express = require("express");
var router = express.Router();

const API_KEY = process.env.API_KEY;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const { name } = req.query;
  try {
    const fetchCard = await fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:${name}&page=1`,
      {
        headers: { "X-Api-Key": API_KEY },
      }
    );
    const resp = await fetchCard.json();
    res.json({ msg: `Page of ${name} results`, results: resp.data });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
