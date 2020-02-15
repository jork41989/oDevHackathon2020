const Home = require('./home')
const Sort = require('./sort')
const Process = require('./process')

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
    points.innerHTML = this.recyclePoints.toFixed(2)
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
    Homev.start();
    SortN.start();
    Pros.start();
    this.resetPoints();
    this.displayHomeLbs();
  }

  
}

module.exports = Board;