// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};



const pAequorFactory = (num, array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate () {
      this.dna = this.dna.map(base => {
        let newBase = '';
        do {
          newBase = returnRandBase();
        } while(base === newBase) 
          return newBase;
      });
    },
    compareDNA(other) {
      let identical = 0;
      for(let i =0; i < this.dna.lengthl; i++) {
          if(this.dna[i] === other.dna[i]) {
            identical++;
          }
      }
      let percentage = identical / this.dna.length * 100;
      console.log(`Specimen ${this.specimenNum} and ${other.specimenNum} have ${percentage}% DNA in common`);
    },

    willLikelySurvive() {
      let survival = 0;
      this.dna.forEach(base => {
        if (base === 'C' || base === 'G') {
          survival++
        }
        
      })
      if ((survival / this.dna.length * 100) >= 60) {
        return true;
      }
      else {
        return false;
      }
    }


  }
}

let sample = [];

let x = 0;
while (sample.length < 30) {
  let temp = pAequorFactory(x, mockUpStrand())
  if(temp.willLikelySurvive() == true) {
    sample.push(temp)
    x++
  }
}



console.log(sample)
