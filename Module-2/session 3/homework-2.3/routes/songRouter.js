import express from "express";

import { playByID, allSongs, createSong } from "../controllers/rest/restSongs.js";

const router = express.Router();

router.get("/", allSongs);
router.get("/play/:id", playByID);
router.post("/", createSong);

export default router;
