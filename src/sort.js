class Sort{
  constructor(board){
    this.board = board
    this.sortCount = 0
    this.sortCost = 10
  }

  displaySortCost(){
    let total = this.sortCost
    let cost = document.getElementById("buySort")
    cost.innerHTML = `Cost: ${total}`
  }
  
  displaySortCount(){
    let count = document.getElementById("sortCount")
    count.innerHTML = this.sortCount
  }

  buySort() {
    let sortbutton = document.getElementById("buySort")
      sortbutton.addEventListener("click", () => {
        if (this.board.recyclePoints >= this.sortCost) {
          this.board.recyclePoints -= this.sortCost;
          this.sortCount += 1;
          this.sortCost = (this.sortCost * 1.1).toFixed(2);
          this.displaySortCost();
          this.displaySortCount();
          this.board.pointCal();
        }
        if (this.sortCount === 1) {
          this.sortPS();
        }
    })

    

  }


  sortPS() {
    if (this.sortCount >= 1) {
      setInterval(() => {

        if (this.board.lbsSort <= (this.sortCount * 2)) {
          this.board.lbsProcess += this.board.lbsSort
          this.board.lbsSort = 0
          this.board.recyclePoints = (this.board.recyclePoints + (this.sortCount * 2));
          this.board.renderSortToProc();
          clearInterval()

        } else {
          this.board.lbsSort -= (this.sortCount)
          this.board.lbsProcess = this.board.lbsProcess + (this.sortCount * .15)
          console.log(this.board.lbsProcess)
          this.board.recyclePoints = (this.board.recyclePoints + (this.sortCount * 2));
          this.board.renderSortToProc();
        }
      }, 1000)
    }
  }




  start(){
    this.displaySortCost();
    this.buySort();
  }
}

module.exports = Sort;