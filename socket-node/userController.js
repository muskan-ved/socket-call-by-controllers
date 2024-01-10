const userData = require("./user.json");

exports.Get_User = async (req, res) => {
  const socketPassing = req.app.get("setter");

  socketPassing.on("connected", (socket) => {
    console.log("a user socket connected");
  });

  const data = await userData;
  res.status(200).send(data);
};
