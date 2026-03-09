import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import tagRoutes from "./routes/tagRoutes.js";
import mongoose from "mongoose";
import historyRoutes from "./routes/history.js"

const app = express()

mongoose.connect(process.env.MONGODB)
  .then(() =>{
      console.log("MongoDB Connected");
    }
  ).catch((err)=>{
    console.log("MongoDB Connection Failed", err);
  })

const port = process.env.PORT || 5000
 
app.use(cors())
app.use(express.json());

app.use("/", tagRoutes);
app.use("/generate-tags", historyRoutes);

app.get("/", (req, res) => {
  res.send("server running")
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})