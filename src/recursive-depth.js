const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
    constructor() {
      this.arrDepth = 1;
      this.countElem = 0;
    }
    calculateDepth(arr) {
      for (let elemArr of arr) {
        if (Array.isArray(elemArr)) {
          this.arrDepth++;
          this.countElem = this.calculateDepth(elemArr);
        } 
      }
      this.countElem = Math.max(this.countElem, this.arrDepth);
      this.arrDepth = 1; 
  
      let depth = this.countElem;
      this.countElem = 0;
  
      return depth;
   }
}

module.exports = {
  DepthCalculator
};
