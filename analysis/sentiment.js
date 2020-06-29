const afinnJson = require("../data/wordlists/afinn.json");

// tokenize input string and replace characters with regex
const tokenizeInput = (input) => {
  return input
    .toLowerCase()
    .replace(/\n/g, " ")
    .replace(/[.,\/#!?$%\^&\*;:{}=_`\"~()]/g, " ")
    .replace(/\s\s+/g, " ")
    .trim()
    .split(" ");
};

//bereken de negatieve waarde adhv. tokens uit afinn wordlist
function calcNegative(input) {
  var addPush = function (token, score) {
    hits -= score;
    words.push(token);
  };

  var tokens = tokenizeInput(input),
    hits = 0,
    words = [];

  tokens.forEach(function (token) {
    if (afinnJson.hasOwnProperty(token)) {
      if (afinnJson[token] < 0) {
        addPush(token, afinnJson[token]);
      }
    }
  });

  return {
    score: hits,
    comparative: hits / tokens.length,
    words: words,
  };
}

// Bereken de positieve waarde adhv. tokens uit afinn wordlist
function calcPositive(input) {
  var addPush = function (token, score) {
    hits += score;
    words.push(token);
  };

  var tokens = tokenizeInput(input),
    hits = 0,
    words = [];

  tokens.forEach(function (token) {
    if (afinnJson.hasOwnProperty(token)) {
      if (afinnJson[token] > 0) {
        addPush(token, afinnJson[token]);
      }
    }
  });

  return {
    score: hits,
    comparative: hits / tokens.length,
    words: words,
  };
}

const sent_analysis = (input) => {
  var negative = calcNegative(input);
  var positive = calcPositive(input);

  return {
    score: positive.score - negative.score,
    comparative: positive.comparative - negative.comparative,
    positive,
    negative,
  };
};

module.exports = sent_analysis;
