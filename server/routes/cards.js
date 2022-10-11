var express = require("express");
const { findCardsByQueries } = require("pokemon-tcg-sdk-typescript/dist/sdk");
var router = express.Router();

const buildQuery = (queries) => {
  const { name, subtypes, types } = queries;
  let query = ``;

  if (name) {
    query += `name:"${name}"`;
  }

  if (subtypes) {
    const subQuery = subtypes.map((s) => `subtypes:"${s}"`);
    query += ` (${subQuery.join(" OR ")})`;
  }

  if (types) {
    const typeQuery = types.map((s) => `types:"${s}"`);
    query += ` (${typeQuery.join(" OR ")})`;
  }
  return query;
};

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    const query = buildQuery(req.query);
    const resp = await findCardsByQueries({
      q: query,
    });
    res.json({ msg: `Page results`, results: resp });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
