`🔧 Memory Management in JavaScript
JavaScript uses automatic memory management, primarily through garbage collection using the mark-and-sweep algorithm. 
Memory is allocated, used, and then freed when it's no longer needed.


🧠 Memory Types: Stack vs Heap:-

📌 Stack Memory (Primitive/Static Allocation):
Stores primitive values (e.g., number, string, boolean) and function call contexts.
Works in LIFO (Last In, First Out) order.
Fast to access and manage.
Automatically freed once the function execution is complete.

Example:
let x = 10; // Stored in stack


📌 Heap Memory (Dynamic Allocation):
Used for objects, arrays, and functions.
Memory is allocated dynamically.
Slower than stack due to complex structure.
Managed by the garbage collector.

Example:
let obj = { name: "John" }; // Stored in heap

In the above example, the reference to the object obj is stored in the stack, but the actual object is in the heap.


🔄 JavaScript Memory Lifecycle
Allocate – Memory is allocated when variables, functions, and objects are created.
Use – The allocated memory is used during execution.
Release – JavaScript's garbage collector frees unused memory (unreachable references).


🧹 Garbage Collection: Mark-and-Sweep
Mark: It "marks" all reachable objects starting from roots like window.
Sweep: Unmarked (unreachable) objects are deleted from memory.

Example of unreachable memory:
let a = { b: 1 };
a = null; // Now the object is unreachable and eligible for garbage collection


⚠️ Common Memory Leaks
Global variables: Unintentionally declared variables live throughout app lifecycle.
Closures: Retain references to variables even after function execution.
Detached DOM elements: Removed from DOM but still referenced in JS.
Uncleared timers/listeners: setInterval, setTimeout, or event listeners not removed.


✅ Best Practices
Use let and const instead of var to avoid unintended globals.
Nullify large objects when no longer needed: obj = null;
Use removeEventListener and clearInterval properly.
Use Chrome DevTools to analyze memory usage and detect leaks.`