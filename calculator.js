/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
function calculatorModule(x) {
  //Private variables
  var memory = 0;
  var total = 0;

  //Public
  return {
    load: function(x){
      total = x;
      return total;
    },
    getTotal: function(){
      return total;
    },
    add: function(x){
      return total += x;
    },
    subtract: function(x){
      return total -= x;
    },
    multiply: function(x){
      return total *= x;
    },
    divide: function(x){
      return total /= x;
    },
    recallMemory: function(){
      return memory;
    },
    saveMemory: function(){
      memory = total;
    }
  }
}







  /**
   * Stores the value of `total` to `memory`
   */


  /**
   * Clear the value stored at `memory`
   */

  /**
   * Validation
   */

