import express from "express";

const app = express();
// use the env var port or 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express server running on port: ${PORT}`);
});
