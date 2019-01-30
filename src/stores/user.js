import {observable, action} from 'mobx';
import cookie from 'react-cookies';
import axios from 'axios';

class UserStore {
  @observable
  isLogin = false;

  @observable
  user = null;

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

  @action
  getUserData() {
    return new Promise((resolve, reject) => {
      const jwt = cookie.load('JWT');

      if (this.isLogin) {
        if (jwt) {
          axios.get('/users', {
            headers: {
              Authorization: `Bearer ${jwt}`
            }
          }).then(res => {
            this.isLogin = true;
            this.user = res.data;
            resolve(res);
          }).catch(err => {
            reject(err)
          })
        } else {
          reject("Token is not exists");
        }
      }
    })
  }

}

export default UserStore;
