const Home = require('./home')

class Board{
  constructor(gamediv){
    this.gameDiv = gamediv
    this.recyclePoints = 0;
    this.lbsHome = 12000000;
    this.lbsSort = 0;
    this.lbsProcess = 0;
    this.lbsReuse = 0;
    this.sold = 0
  }

  pointCal(){
    let points = document.getElementById("currency_count")
    points.innerHTML = this.recyclePoints
  }

  resetPoints(){
    this.recyclePoints = 1
    this.pointCal()
  }

  displaySortLbs(){
    let pSort = document.getElementById("storePoundCount")
    pSort.innerHTML = this.lbsSort
  }

  displayHomeLbs() {
    let pnd = document.getElementById("homePoundCount")
    pnd.innerHTML = this.lbsHome
  }
  displayProcLbs() {
    let pnd = document.getElementById("processPoundCount")
    pnd.innerHTML = this.lbsProcess
  }
  displayReuseLbs() {
    let pnd = document.getElementById("mfcPoundCount")
    pnd.innerHTML = this.lbsReuse
  }


  renderHomeToSort(){
    this.displaySortLbs();
    this.displayHomeLbs();
    this.pointCal();
  }

  renderSortToProc(){
    this.displaySortLbs();
    this.displayProcLbs();
    this.pointCal();
  }

  renderProcToMfg(){
    this.displayProcLbs();
    this.displayReuseLbs();
    this.pointCal();
  }

  start(){
    const Homev = new Home(this)
    Homev.start()
    this.resetPoints()
    this.displayHomeLbs();
  }

  
}

module.exports = Board;