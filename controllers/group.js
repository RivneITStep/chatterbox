module.exports = function () {
  return {
    SetRouting: function (router) {
      router.get("/group/:name", this.groupPage);

      // router.get("/logout", this.logout);
    },
    groupPage: function (req, res) {
      // console.log("req => ", req);
      console.log("req.user => ", req.user);
      const name = req.params.name;
      res.render("groupchat", {
        title: "Chatterbox Group",
        user: req.user,
        groupName: name,
      });
    },
  };
};
