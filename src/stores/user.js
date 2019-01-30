import {observable, action} from 'mobx';
import cookie from 'react-cookies';
import axios from 'axios';

class UserStore {
  @observable
  isLogin = false;

  @action
  login(username, password) {
    return new Promise((resolve, reject) => {
      axios.post(`/auth`, {username, password}).then(res => {
        cookie.save('JWT', res.data.access, {path: '/'});
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

  @action
  register(username, password, name, grade, cls, number) {
    return new Promise((resolve, reject) => {
      axios.post('/users', {
        username,
        password,
        name,
        grade,
        cls,
        number
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  }

  @action
  logout() {
    return new Promise((resolve) => {
      cookie.remove('JWT', {path: '/'});
      this.isLogin = false;
      resolve();
    })
  }

}

export default UserStore;
