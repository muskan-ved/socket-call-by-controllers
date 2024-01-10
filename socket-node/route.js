const express = require("express");
const { Get_User } = require("./userController");

const router = express.Router();

// function getSocketIO(io){
//     console.log(io,"iooooo")
//     // return io;
// }

router.route("/users").get(Get_User);

module.exports = router;
// module.exports = {router,getSocketIO};