import express from "express";
import { invoices } from "./routes/invoices";

const app = express();
app.use(express.json());
app.use("/invoices", invoices);

app.listen(4000, () => {
  console.log("ledgerline listening on 4000");
});
