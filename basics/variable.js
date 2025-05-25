const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

`
#Notes for quick revision
🔹 1. Declaration Keywords
Keyword	    Scope	    Hoisting	         Re-declare	      Re-assign	    Use Case
var	        Function	✅ Yes	            ✅ Yes	        ✅ Yes	    Legacy code (avoid in modern JS)
let	        Block	    ✅ Yes (in TDZ*)	    ❌ No	        ✅ Yes	    Mutable block-scoped variables
const	    Block	    ✅ Yes (in TDZ*)	    ❌ No	        ❌ No	    Constants (cannot reassign)

*TDZ = Temporal Dead Zone – accessing before declaration throws ReferenceError.

🔹 2. Key Concepts
✅ Scope
var → Function scope
let, const → Block scope ({ ... })

✅ Hoisting
All are hoisted
var is initialized as undefined
let and const are not initialized → using before declaration = ReferenceError

✅ Re-declaration & Re-assignment
var a = 10;
var a = 20;    // ✅ allowed

let b = 30;
// let b = 40; // ❌ SyntaxError

const c = 50;
// c = 60;     // ❌ TypeError

🔹 3. Naming Rules
✅ Can start with: letter, _, or $
❌ Cannot start with: number
✅ Case-sensitive: data ≠ Data
❌ Cannot use reserved words: class, function, let, etc.

🔹 4. Best Practices
✅ Prefer let for mutable values
✅ Use const for fixed references or constants
❌ Avoid var in modern development
✅ Always declare variables before use

🔹 5. Example
function testVar() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ✅ 10 (function scoped)
  // console.log(y); ❌ ReferenceError
  // console.log(z); ❌ ReferenceError
}
testVar();
`