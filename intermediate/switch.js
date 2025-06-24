function getLetter(s) {
    let letter;
    let firstChar = s.charAt(0).toLowerCase();
    // Write your code here
    switch (true) {
        case new Set(['a', 'e', 'i', 'o', 'u']).has(firstChar):
          letter = 'A';
          break;
        case new Set(['b', 'c', 'd', 'f', 'g']).has(firstChar):
          letter = 'B';
          break;
        case new Set(['h', 'j', 'k', 'l', 'm']).has(firstChar):
          letter = 'C';
          break;
        case new Set(['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']).has(firstChar):
          letter = 'D';
          break;
    }
    return letter;
}


let string = "adfgt";
let result  = getLetter(string);
console.log(result);