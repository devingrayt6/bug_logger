import express from "express";
import noteService from "../services/NoteService";

export default class NoteController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.deleteNote)
  }

  async getAll(req, res, next){
    let data = await noteService.getAll();
    return res.send(data)
  }

  async create(req, res, next){
    let data = await noteService.create(req.body);
    return res.send(data);
  }

  async deleteNote(req, res, next){
    let data = await noteService.deleteNote(req.params.id);
    return res.send(data);
  }
}
