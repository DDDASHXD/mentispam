// {"emoji":"heart1","color":"theme-fill-color-0","vote_key":"al3dddw2ui46","amount":1}
const axios = require('axios');

const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
} 

const getStatus = (status) => {
  switch (status) {
    case 201:
      return '201 - Success';
    default: 
      return status;
  }
}

const run = async () => {

  for (let i = 0; i < 500; i++) {
    const rand = Math.floor(Math.random() * 7);
    try {
      const res = await axios.post('https://www.menti.com/core/audience/reactions/oifwx29vqwws/publish', {
        emoji: 'thumbsup',
        color: `theme-fill-color-${rand}`,
        vote_key: 'al3dddw2ui46',
        amount: 3,
      });
      console.log(`sent ${i} votes. Status: ${getStatus(res.status)}. Color: theme-fill-color-${rand}`)
    } catch (e) {
      console.error("Too many requests! Probably...");
    }
    await sleep(50)
  }
}

// const run = async () => {

//   for (let i = 0; i < 500; i++) {
//     const rand = Math.floor(Math.random() * 7);
//     try {
//       const res = await axios.post('https://www.menti.com/core/votes/ipz44ynri8oh', {"vote":"447597553","type":"choices"});
//       console.log(`sent ${i} votes. Status: ${getStatus(res.status)}. Color: theme-fill-color-${rand}`)
//     } catch (e) {
//       console.error(e);
//     }
//     await sleep(80)
//   }
// }

run();