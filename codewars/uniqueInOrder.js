const uniqueInOrder = (iterable) => {
    //your code here - remember iterable can be a string or an array
    let stack = [];
    let unique = [];
    stack.push(iterable[0]);
    unique.push(iterable[0]);
    for(let i = 1; i < iterable.length; i++){
        if(iterable[i] == stack[0]) continue;
        stack.pop();
        stack.push(iterable[i]);
        unique.push(iterable[i]);
    }
    console.log(unique);
  }

  uniqueInOrder('AAAABBBCCDAABBB');