import { Router } from "express";
import { signup,Signin,signout } from "../controllers/authController.js";
const router=Router()

router.post('/signup',signup)
router.post('/signin',Signin)
router.get('/logout',signout)

export default router