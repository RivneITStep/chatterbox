$(document).ready(function () {
  let socket = io();
  let groupName = $("#groupName").val();
  let sender = $("#sender").val();

  socket.on("connect", function () {
    console.log("Client connected");
    let params = {
      groupName: groupName,
      name: sender,
    };
    socket.emit("join", params, function () {
      console.log("User has joined to channel");
    });
  });

  socket.on("newMessage", function (data) {
    console.log(data);
  });

  $("#messages-form").on("submit", function (e) {
    e.preventDefault();
    let msg = $("#msg").val();
    socket.emit(
      "createMessage",
      {
        text: msg,
        groupName: groupName,
        sender: sender,
      },
      function () {
        $("#msg").val("");
      }
    );
  });
});
