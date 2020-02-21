import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NoteService {

  async getAll(){
    return await _repository.find({})
  }

  async getNotesByBugId(bug){
    return await _repository.find({bug: bug})
  }

  async create(rawData){
    return await _repository.create(rawData);
  }

  async deleteNote(id){
    return await _repository.findByIdAndDelete({_id: id})
  }
}

const noteService = new NoteService();
export default noteService;
