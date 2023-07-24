//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(espressoTemp, espressoBlend, espressoRoast, espressoSize) {
      this.temp = espressoTemp
      this.blend = espressoBlend
      this.roast = espressoRoast
      this.size = espressoSize
    }
    
    start() {
      console.log('beep boop Initiating');
    }
    
    stop() {
      console.log('beep boop Terminating');
    }
    
    idle() {
      console.log('beep boop Standby');
    }
  }
  
  let espressoMachine1 = new EspressoMachine('212', 'African', 'fire', 'xxl');
  