import express from 'express'
import { getManga } from '../controller/manga.controller.js'

const router = express.Router()

router.get('/',getManga)

export default router