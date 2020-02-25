import BugsService from "../Services/BugsService.js";
import Bug from '../Models/Bug.js';
import store from "../store.js";

//Private
function _draw() {
  let bugs = store.State.bugs;
  let bugsElem = document.getElementById('bugs-view');
  let template = '';
  bugs.forEach(b => {
    template += new Bug(b).Template
  })
  bugsElem.innerHTML = template;
}

//Public
export default class BugsController {
  constructor() {
    store.subscribe("bugs", _draw);
    this.getAll();
  }

  getAll() {
    BugsService.getAll();
  }
}
