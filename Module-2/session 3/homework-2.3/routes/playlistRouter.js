import express from "express";

import {
    allplaylist,
    createPlaylist,
    addSongToPlaylist
} from "../controllers/rest/restPlaylist.js";

const router = express.Router();

router.get("/", allplaylist);
router.post("/", createPlaylist);
router.post("/:idPlaylist/:id", addSongToPlaylist);

export default router;