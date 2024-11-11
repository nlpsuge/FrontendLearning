// singleton.js

class Singleton {
    constructor() {
      // Initialize your singleton instance.
      this.data = [];
    }
  
    // Implement methods and properties as needed.
    addData(value) {
      this.data.push(value);
    }
  }
  
  // Create a single instance of the Singleton class.
  // const instance = new Singleton();
  
  // Export the instance, so it can be shared across modules.
  // export default instance;

  // export default Singleton;
  export default singleton = new Singleton();
  