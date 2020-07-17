$(document).ready(function () {
  let socket = io();
  let groupName = $("#groupName").val();

  socket.on("connect", function () {
    console.log("Client connected");
    let params = {
      groupName: groupName,
    };
    socket.emit("join", params, function () {
      console.log("User has joined to channel");
    });
  });

  socket.on("newMessage", function (data) {
    console.log(data.text);
    console.log(data.groupName);
  });

  $("#messages-form").on("submit", function (e) {
    e.preventDefault();
    let msg = $("#msg").val();
    socket.emit(
      "createMessage",
      {
        text: msg,
        groupName: groupName,
      },
      function () {
        $("#msg").val("");
      }
    );
  });
});
