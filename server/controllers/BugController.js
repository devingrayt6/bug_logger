import express from "express";
import bugService from "../services/BugService";
import noteService from '../services/NoteService';

export default class BugController {
  constructor() {
    this.router = express
      .Router()
      //NOTE each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getNotesByBugId)
      .post("", this.create)
      .put('/:id', this.update)
      .delete('/:id', this.closeBug)
      .delete('/:id/notes/:id', this.deleteNote)

  }

  async getAll(req, res, next) {
    try {
      let data = await bugService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next){
    try {
      let data = await bugService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBugId(req, res, next){
    try {
      let data = await noteService.getNotesByBugId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next){
    try {
      let data = await bugService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next){
    let data = await bugService.update(req.params.id, req.body);
    return res.send(data);
  }

  async closeBug(req, res, next){
    let data = await bugService.closeBug(req.params.id);
    return res.send('Note has been deleted');
  }

  async deleteNote(req, res, next){
    let data = await noteService.deleteNote(req.params.id);
    return res.send(data);
  }
}
