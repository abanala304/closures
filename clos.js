function add() {
    var a = 4;   /// local variable
    return a * a;
}
add();  /// o/p will be 16


////
var a = 4;  /// global variable
function add() {
    return a * a;
}
add();

////

var counter = 0;  /// global
function add() {
    return counter += 1;
}

add();
add();
add();


////
function add() {
    var counter = 0;   //// local vari
   return counter += 1;
}

add();
add();
add();

/////
function add() {
    var counter = 0;        //// parent function
    function plus() {counter += 1;}   //// chaild function
    plus();    
    return counter; 
}
 add();      //// O/p will be 1
 add();      /// o/p will be 1
 add();


 //////

 var add = (function () {  ///// The variable add is assigned the return value of a self-invoking function
    var counter = 0;     //// parent function
    return function () {return counter += 1;}
})();

add();   //// 1
add();  //// 2
add();  //// 3