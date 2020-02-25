import store from "../store.js";

// @ts-ignore
const _api = axios.create({
  baseURL: 'http://localhost:8080/api/bugs',
  timeout: 3000
})
class BugsService {

  getAll() {
    _api.get('')
      .then((res) => {
        let bugs = res.data;
        store.commit('bugs', bugs)
      })

  }
}

const service = new BugsService();
export default service;
