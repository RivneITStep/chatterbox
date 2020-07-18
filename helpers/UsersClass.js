class Users {
  constructor() {
    this.users = [];
  }

  AddUserData(id, name, room) {
    let users = { id, name, groupName };
    this.users.push(users);
    return users;
  }

  GetUsersList(groupName) {
    var users = this.users.filter((user) => user.groupName === group);

    var namesArray = users.map((user) => {
      return user.name;
    });

    return namesArray;
  }

  GetUser(id) {
    var getUser = this.users.filter((userId) => {
      return userId.id === id;
    })[0];
    return getUser;
  }
}

module.exports = { Users };
