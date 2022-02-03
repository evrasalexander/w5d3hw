
//number 1
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
  
    for(var i = min; i <= max; i++){
      temp += i;
    }
    return temp;
  }
    sumAll([1, 4]);

//number 7
function myReplace(str, before, after) {
    var index = str.indexOf(before);

    if(str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
    } else {
      after = after.charAt(0).toLowerCase() + after.slice(1)
    }
    str = str.replace(before, after);
    return str;
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

  //number 19
  const [first, second] = Object.values(arguments);

  if(typeof first !== 'number'){
    return undefined;
  }
  const addSecond = (second) => typeof second === 'number' ? first + second : undefined;

  if(second !== undefined){
    return addSecond
  }


addTogether(2,3);
