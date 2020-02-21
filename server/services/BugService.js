import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id){
    return await _repository.findById(id);
  }

  async create(rawData){
    return await _repository.create(rawData);
  }

  async update(id, update){
    
    let bug = await _repository.findById(id);
    
    if(bug.closed != true){
      return await _repository.findByIdAndUpdate(id, update, {new: true});
    }else{
      let data = "This bug has been closed."
      return data;
    }
  }

  async closeBug(id){
    let update = {closed: true}
    return await _repository.findByIdAndUpdate(id, update, {new: true});
  }
}

const bugService = new BugService();
export default bugService;
