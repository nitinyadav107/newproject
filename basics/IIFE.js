//Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables 
//across different scopes. Scope pollution makes it difficult to keep track of our different variables and sets us up for
// potential accidents
//IIFE--->immediate invoke function expression
//; is used to finish the function
(function scope(){
    //named iife
    console.log("Data Base");
})();
(()=>{
    console.log("Data Base");
})();