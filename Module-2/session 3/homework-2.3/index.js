import express from "express";

import songRouter from "./routes/songRouter.js";
import playlistRouter from "./routes/playlistRouter.js";

const app = express();

app.use(express.json());

app.use("/songs", songRouter);
app.use("/playlist", playlistRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "not found!",
    });
});


app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});
