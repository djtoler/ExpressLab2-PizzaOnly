import express from "express";
import cors from "cors";
import path from "path";

import home from "./routes/home";
import review from "./routes/review"
import reviewCon from "./routes/reviewCon"
import byopizza from "./routes/byoPizza";
import byoPizzaCon from "./routes/byoPizzaCon";




const app = express();

app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "hbs");
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", home);
app.use("/review", review);
app.use("/reviewCon", reviewCon);
app.use("/byopizza", byopizza);
app.use("/byoPizzaCon", byoPizzaCon);


const port = 5050;

app.listen(port, () => {
  console.log("Listening On PORT: " + port);
});
