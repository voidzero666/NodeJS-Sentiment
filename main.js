const analyse = require("./analysis/sentiment");

const appleData = require("./data/tweets/apple_tweets.json");
const elonData = require("./data/tweets/elonmusk_tweets.json");
const trumpData = require("./data/tweets/trump_tweets.json");

let appleTweets = "";
let trumpTweets = "";
let elonTweets = "";

appleData.map((tweet) => {
  appleTweets += tweet.text;
})

trumpData.map((tweet) => {
  trumpTweets += tweet.Tweet;
});

elonData.map((tweet) => {
  elonTweets += tweet.text;
});

var result = analyse(appleTweets);
console.dir(result);
