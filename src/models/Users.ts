import User from './User';

class Users {
  storage: User[];

  constructor(users: User[] = []) {
    this.storage = users;
  }

  findUserIndexByUsername(username: string) {
    return this.storage.findIndex((u) => u.username === username);
  }

  hasUser(user: User) {
    return this.storage.some((u) => u.username === user.username);
  }

  addUser(user: User) {
    this.storage.push(user);
  }

  removeUserIfExists(user: User) {
    const foundUserIndex = this.storage.findIndex((u) => u.username === user.username);
    if (foundUserIndex >= 0) this.storage.splice(foundUserIndex, 1);
  }

  get users () {
    return this.storage;
  }

}

export default Users;