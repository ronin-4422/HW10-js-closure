console.log("----------#3")
function sum(a) {
  return function(b) {
    return a + b; 
  };
}

console.log(sum(1)(2)); 

console.log("----------#4")
for (let i = 0; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}
