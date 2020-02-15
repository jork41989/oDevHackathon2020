class Reuse {
  constructor(board){
    this.board = board
    this.cost = 1000
    this.count = 0
  }


  displayMFGCost() {
    let total = this.cost
    let costy = document.getElementById("buymfc")
    costy.innerHTML = `Cost: ${total}`
  }

  displayMFGCount() {
    let county = document.getElementById("mfcCount")
    county.innerHTML = this.count
  }

  buyReuse(){
    let button = document.getElementById("buymfc")
    button.addEventListener("click", () => {
      if (this.board.recyclePoints >= this.cost) {
        this.board.recyclePoints -= this.cost;
        this.count += 1;
        this.cost = (this.cost * 1.1).toFixed(2);
        this.displayMFGCost();
        this.displayMFGCount();
        this.board.pointCal();
      }
      if (this.count === 1) {
        this.reusePS();
      }
    })
  }


  reusePS(){
    if (this.count >= 1) {
      setInterval(() => {

        if (this.board.lbsReuse  <= (this.count * 2) && this.board.lbsReuse !=0) {
          this.board.sold += this.pCount * 2
          this.board.lbsReuse = 0
          this.board.recyclePoints += this.count * 2
          this.board.displayReuseLbs()
          this.board.pointCal()
        } else if (this.board.lbsReuse === 0){
          clearInterval(this)
        }else {
          this.board.sold+= this.count * 2
          this.board.lbsReuse -= this.count * 2
          this.board.recyclePoints += this.count * 2
          this.board.displayReuseLbs()
          this.board.pointCal()
        }
      }, 1000)
    }
  }

  start(){
    this.displayMFGCost();
    this.buyReuse();
  }

}

module.exports = Reuse;