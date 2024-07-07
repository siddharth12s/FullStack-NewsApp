const axios = require("axios");
const Articles = require("../models/articlesModel");
const dotenv = require("dotenv").config();

params = {
  country: "in",
  pageSize: 100,
  apiKey: process.env.NEWSAPI_KEY,
};

let data;

async function main(category) {
  const url = `https://newsapi.org/v2/top-headlines?country=${params.country}&category=${category}&pageSize=${params.pageSize}&apiKey=${params.apiKey}`;
  data = await axios.get(url, { params });
  let res = data;
  const art = res.data.articles;

  for (let i = 0; i < art.length; i++) {
    const title = art[i]["title"];

    const check = await Articles.findOne({ title: title });
    if (check) {
      continue;
    } else {
      const post = new Articles({
        source: art[i]["source"],
        author: art[i]["author"],
        title: art[i]["title"],
        descripton: art[i]["description"],
        url: art[i]["url"],
        urlToImage: art[i]["urlToImage"],
        newsGenre: category,
        publishedAt: art[i]["publishedAt"],
        content: art[i]["content"],
      });

      post.save((err) => {
        if (err) console.log(err);
      });
    }
  }
}

const getArticles = async (req, res) => {
  const path = req.path;
  let conpath;
  if (path === "/") {
    conpath = "general";
  } else {
    conpath = path.substring(1, path.length);
  }
  await main(conpath);

  const skip = req.query.skip ? Number(req.query.skip) : 0;
  const DEFAULT_LIMIT = 12;

  try {
    await Articles.deleteMany({ newsGenre: { $ne: conpath } });
    const results = await Articles.find().skip(skip).limit(DEFAULT_LIMIT);
    const count = await Articles.countDocuments();
    res.status(200).json({ size: count, results: results });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getArticles };
