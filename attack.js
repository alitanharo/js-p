class Unit {
    attack() {
      console.log("Attack!");
    }
  }
  
  //inherit this class from Unit
  class Gunner extends Unit {
  
      attack() {
          //complete the function
        super.attack();
        console.log("Using gun!");
  
          
          
    }
  }
  //inherit this class from Unit
  class Sniper extends Unit {
      attack(){
          //complete the function
        super.attack();
        console.log("Using sniper rifle!");
          
      }
  }
  
  let gunner = new Gunner();
  let sniper = new Sniper();
  
  //calls
  gunner.attack();
  sniper.attack();