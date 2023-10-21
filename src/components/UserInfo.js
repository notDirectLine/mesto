export class UserInfo {
  constructor({profileUsername, profileJob}) {
    this._name = document.querySelector(profileUsername)
    this._job = document.querySelector(profileJob)
  }
  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._job.textContent,
    }
  }
  setUserInfo(name, job) {
    this._name.textContent = name
    this._job.textContent = job
  }
}
 
