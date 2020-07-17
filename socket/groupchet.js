module.exports = function (io, Users) {
  io.on("connection", (socket) => {
    console.log("New User connected");
    socket.on("createMessage", (message) => {
      console.log(message);
    });
  });
};
