module.exports = function (io, Users) {
  let users = [];
  io.on("connection", (socket) => {
    console.log("New User connected");

    socket.on("join", (params, callback) => {
      socket.join(params.groupName);
      users.push(params.name);
      users.push(params.groupName);
      users.push(socket.id);

      callback();
    });

    socket.on("createMessage", (message, callback) => {
      console.log(message);
      io.to(message.groupName).emit("newMessage", {
        text: message.text,
        groupName: message.groupName,
        from: message.sender,
      });
      callback();
    });
  });
};
