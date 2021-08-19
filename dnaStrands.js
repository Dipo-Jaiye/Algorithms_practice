function DNAStrand(dna){
    //your code here
    return dna.replace(/./g, m => {
      switch(m){
          case "A": return "T";
          case "T": return "A";
          case "C": return "G";
          case "G": return "C";
      }
    })
  }