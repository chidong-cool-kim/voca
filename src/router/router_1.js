const express = require("express")
const router_goods = express.Router()
const router_main = express.Router()
const {main} = require("./router_2")

router_main.route("/")
 .get(main.get)
 .put(main.put)
 .post(main.post)
 .delete(main.delete)

module.exports = {router_main}
