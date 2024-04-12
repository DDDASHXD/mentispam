const axios = require('axios');
const {sleep, getStatus, rand} = require('./utils');

// ---- Testurl ----
// https://www.menti.com/core/audience/reactions/oifwx29vqwws/publish
// -----------------

// get command line args
const args = process.argv.slice(2);

// find an argument that starts with https://
const urlIndex = args.findIndex(arg => arg.startsWith('https://'));
if (urlIndex == -1) {
  console.error('No URL provided');
  process.exit(1);
}
const userTimeout = args.indexOf('-t') + 1;
const userColor = args.indexOf('-c') + 1;
const userRepeat = args.indexOf('-r') + 1;
const userVoteKey = args.indexOf('-v') + 1;
if (userVoteKey == 0) {
  console.error('No vote key provided');
  process.exit(1);
}
const userAmount = args.indexOf('-a') + 1;
const userEmoji = args.indexOf('-e') + 1;

// Set defaults
const url = args[urlIndex];
let timeout = parseInt(args[userTimeout]) || 50;
let color = parseInt(args[userColor]) || null;
let repeat = parseInt(args[userRepeat]) || 500;
let voteKey = args[userVoteKey];
let amount = parseInt(args[userAmount]) || 3;
let emoji = args[userEmoji] || 'thumbsup';

(async () => {

  for (let i = 0; i < repeat; i++) {
    if (!userColor) {
      color = rand();
    }

    try {
      const res = await axios.post("https://www.menti.com/core/audience/reactions/wi7k691ju28c/publish", {
        emoji: "thumbsup",
        color: `theme-fill-color-${color}`,
        vote_key: "al5nm2x85d4r",
        amount: 3,
      });
      console.log(`Request: ${i} - Status: '${getStatus(res.status)}' - Color: theme-fill-color-${color}`)
    } catch (e) {
      console.error("Too many requests! Probably...");
    }
    await sleep(timeout)
  }
})();