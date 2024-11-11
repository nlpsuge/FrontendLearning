// moduleA.js
import Singleton from './singleton.mjs';

// Use the singleton instance
Singleton.addData('Data from module A');
console.log(Singleton.data); // Should include 'Data from module A'
