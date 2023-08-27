import express from "express"

import {addUser,getusers} from "./../controllers/user-controller.js"
// import { getuser } from "../../services/user-api.js"
import { getuser } from "./../controllers/user-controller.js"

const router = express.Router()

router.post('/adduser', addUser)
router.get('/allusers',getusers)
router.get('/:email',getuser)

export default router