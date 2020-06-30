const analyse = require("./sentiment");

const analyseAllWords = (dataset) => {
  let allWords = "";
  dataset.map((tweet) => {
    allWords += tweet.text || tweet.Tweet;
  });
  
  return { ...analyse(allWords), amountOfWords: allWords.split(" ").length };
};

const analyseTweets = (dataset) => {
  const totalResult = {
    score: 0,
    comparative: 0,
    amountOfTweets: 0,
    positive: {
      score: 0,
      comparative: 0,
      words: [],
    },
    negative: {
      score: 0,
      comparative: 0,
      words: [],
    },
  };

  dataset.map((tweet) => {
    const result = analyse(tweet.text || tweet.Tweet);

    // Scores
    totalResult.score += result.score;
    totalResult.negative.score += result.negative.score;
    totalResult.positive.score += result.positive.score;

    totalResult.amountOfTweets++;
    totalResult.comparative += result.comparative;
  });

  // Comparative over all tweets
  totalResult.comparative =
    totalResult.comparative / totalResult.amountOfTweets;

  return totalResult;
};

module.exports = {
  analyseTweets,
  analyseAllWords,
};
