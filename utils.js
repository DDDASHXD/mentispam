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

const rand = () => Math.floor(Math.random() * 7);

module.exports = {sleep, getStatus, rand}