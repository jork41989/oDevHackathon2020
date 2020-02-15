const Home = require('./home')
const Sort = require('./sort')
const Process = require('./process')
const Reuse = require('./reuse')

class Board{
  constructor(gamediv){
    this.gameDiv = gamediv
    this.recyclePoints = 1;
    this.lbsHome = 12000000;
    this.lbsSort = 0;
    this.lbsProcess = 0;
    this.lbsReuse = 0;
    this.sold = 0
  }

  pointCal(){
    let points = document.getElementById("currency_count")
    points.innerHTML = this.recyclePoints.toFixed(2)
      this.endCheck();
    
  }

  resetPoints(){
    this.recyclePoints = 1
    this.pointCal()
  }

  displaySortLbs(){
    let pSort = document.getElementById("storePoundCount")
    pSort.innerHTML = this.lbsSort.toFixed(2)
  }

  displayHomeLbs() {
    let pnd = document.getElementById("homePoundCount")
    pnd.innerHTML = this.lbsHome.toFixed(2)
  }
  displayProcLbs() {
    let pnd = document.getElementById("processPoundCount")
    pnd.innerHTML = this.lbsProcess.toFixed(2)
  }
  displayReuseLbs() {
    let pnd = document.getElementById("mfcPoundCount")
    pnd.innerHTML = this.lbsReuse.toFixed(2)
  }

  endCheck(){
    let totals = this.lbsReuse + this.lbsSort + this.lbsProcess + this.lbsHome

    if (totals === 0){
      console.log("you did it!!!!!!!!", totals)
      let mode = document.getElementById("modal")
      mode.classList.remove("hidden")
    }

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
    const SortN = new Sort(this)
    const Pros = new Process(this)
    const Reuses = new Reuse(this)
    Reuses.start();
    Homev.start();
    SortN.start();
    Pros.start();
    this.resetPoints();
    this.displayHomeLbs();
  }

  
}

module.exports = Board;