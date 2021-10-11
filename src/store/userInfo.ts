import { action, computed, observable } from "mobx";

class UserStore {

  @observable public userInfo: object = {

  };

  @computed
  public get UserInfo() {
    return this.userInfo
  }

  @action.bound
  public setUserInfo(data) {
    this.userInfo = data;
  }

}

export default UserStore;
