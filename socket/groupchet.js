module.exports = function (io, Users) {
  io.on("connection", (socket) => {
    console.log("New User connected");

    socket.on("join", (params, callback) => {
      socket.join(params.groupName);
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
