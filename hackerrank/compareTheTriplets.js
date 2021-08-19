function compareTheTriplets(a,b){
    let result = [0,0];
    a.forEach((v,i) => {
        return v != b[i] ? ((v > b[i]) ? ++result[0] : ++result[1] ) : null; 
    });
    return result;
}

console.log(compareTheTriplets([17,28,30],[99,16,8]));