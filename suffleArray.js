const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const shuffledArray = array.sort((a, b) => 0.5 - Math.random());

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    
  }
  console.log(array);