class Process {
  constructor(board){
    this.board = board
    this.pCount = 0
    this.cost = 100
  }

  displayProsCost() {
    let total = this.cost
    let cost = document.getElementById("buyPross")
    cost.innerHTML = `Cost: ${total}`
  }

  displayProsCount() {
    let count = document.getElementById("processCount")
    count.innerHTML = this.pCount
  }

  buyPros() {
    let prosbutton = document.getElementById("buyPross")
    prosbutton.addEventListener("click", () => {
      if (this.board.recyclePoints >= this.cost) {
        this.board.recyclePoints -= this.cost;
        this.pCount += 1;
        this.cost = (this.cost * 1.1).toFixed(2);
        this.displayProsCost();
        this.displayProsCount();
        this.board.pointCal();
      }
      if (this.pCount === 1) {
        this.prosPS();
      }
    })
  }

  prosPS() {
  if (this.pCount >= 1) {
    setInterval(() => {
      if (this.board.lbsProcess <= (this.pCount * 2) && this.board.lbsProcess != 0) {
        this.board.lbsReuse += this.pCount * 2
        this.board.lbsProcess = 0
        this.board.recyclePoints += this.pCount * 2
        this.board.renderProcToMfg()
      } else if (this.board.lbsProcess === 0 && this.board.lbsSort === 0){
        clearInterval(this)
      }else {
        this.board.lbsReuse += this.pCount * 2
        this.board.lbsProcess -= this.pCount * 2
        this.board.recyclePoints += this.pCount * 2
        this.board.renderProcToMfg()
      }
    }, 1000)
    }
  }

  start(){
    this.displayProsCost();
    this.buyPros();
  }
}

module.exports = Process;