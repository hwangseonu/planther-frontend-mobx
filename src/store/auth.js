import {observable, action} from 'mobx';

export default class AuthStore {
  @observable isLogin = false;

  @action
  login() {

  }

  @action
  register() {

  }

  @action
  logout() {

  }
}