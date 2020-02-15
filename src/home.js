class Home{
  constructor(board){
    this.board = board
    this.truckCount = 0;
    this.truckCost = 1;
  }

  displayTruckCost(){
    let cst = document.getElementById("buyTruck")
    cst.innerHTML = `Cost: ${this.truckCost}`
  }
  displayTruckCount(){
    let cnt = document.getElementById("truckCount")
    cnt.innerHTML = this.truckCount
  }

  buyTruck(){
    let truckButton = document.getElementById("buyTruck")
    truckButton.addEventListener("click", () => {
      if (this.board.recyclePoints >= this.truckCost) {
        this.board.recyclePoints -= this.truckCost;
        this.truckCount += 1;
        this.truckCost = (this.truckCost * 1.1).toFixed(2);
        this.displayTruckCost();
        this.displayTruckCount();
        this.board.pointCal();
      }
      if(this.truckCount === 1){
        this.truckPS();
        let img = document.getElementById("truck")
        img.classList.add("movement")
      }
    })
    
  }

  

  truckPS(){
    if (this.truckCount >= 1){
      setInterval(() => {

        if (this.board.lbsHome <= (this.truckCount * 2)){
          this.board.lbsSort += this.board.lbsHome
          this.board.lbsHome = 0
          this.board.recyclePoints = (this.board.recyclePoints + (this.truckCount * 2));
          this.board.renderHomeToSort();
          clearInterval()
        } else {
          this.board.lbsHome -= (this.truckCount * 2)
          this.board.lbsSort += (this.truckCount * 2)
          this.board.recyclePoints = (this.board.recyclePoints + (this.truckCount * 2));
          this.board.renderHomeToSort();
        }
      }, 1000)
    }
  }

  start(){
    this.displayTruckCost()
    this.buyTruck()
  }
}

module.exports = Home;