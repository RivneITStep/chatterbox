$(document).ready(function () {
  let socket = io();
  socket.on("connect", function () {
    console.log("Client connected");
  });

  $("#messages-form").on("submit", function (e) {
    e.preventDefault();
    let msg = $("#msg").val();
    socket.emit("createMessage", {
      text: msg,
    });
  });
});
