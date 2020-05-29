module.exports = function () {
  return {
    SetRouting: function (router) {
      router.get("/group/:name", this.groupPage);
      // router.post("/group/:name", this.groupPostPage);

      // router.get("/logout", this.logout);
    },
    groupPage: function (req, res) {
      res.render("groupchat/group");
    },
  };
};
