const tweets = require("./analysis/tweets");
const analyse = require("./analysis/sentiment");

const appleData = require("./data/tweets/apple_tweets.json");
const elonData = require("./data/tweets/elonmusk_tweets.json");
const trumpData = require("./data/tweets/trump_tweets.json");

// console.dir(tweets.analyseTweets(appleData));
// console.dir(tweets.analyseAllWords(appleData));

// Bad Examples //

// 1.  It's a funny le meme but it returns a score of -2 because of the word inquisition.
console.dir(analyse("Nobody expects the Spanish Inquisition #AAPL"));

// 2.  I don't think an exploding Iphone is THAT positive.
console.dir(analyse("My old iPhone exploded for no good reason @apple what the heck??? http://t.co/z0SDrKsbwT"));

// 3.  Obviously negative, but the wordlist won't contain slang.
console.dir(analyse("my computer sux @apple fix it"));

// Right examples

// 1.  Obviously negative.
console.dir(analyse("ive literally gone through 5 iPhone 5 cords in a little over a year @apple fix this you all suck"));

// 2.  Way more negative.
console.dir(analyse("@Apple get your shit together I hate you"));

// 3.  Def positive, but the hashtag confused drags it down a little. Either way mostly positive.
console.dir(analyse("Opening a new non-Apple device reminds what an amazing job @Apple does with out-of-box-experience. #Pono #Arrived #Confused"));