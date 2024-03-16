import express from 'express';
import {postJob, getAllJobs} from "../controllers/jobController.js";
import { isAuthorized } from '../middlewares/auth.js';

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post",isAuthorized, postJob);

export default router;