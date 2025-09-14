import express from "express"
import { adminRoutes } from "./routes/adminRoutes";

const app = express()

app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/contest",contest);