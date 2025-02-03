import http from "http";
import fs from "fs";
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const hostname = "127.0.0.1";
const port = 3000;

//MIDDLEWARE
app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded()); // to get the url from the form

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "base.html"));
});
app.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "service.html"));
});
app.get("/membership", (req, res) => {
  res.sendFile(path.join(__dirname, "membership.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/sigup", (req, res) => {
  res.sendFile(path.join(__dirname, "sigup.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});
app.post("/", (req, res) => {
  const { name, phone, email, comment } = req.body;
  let outputTowrite = `the name of the client is ${name}, phone no is ${phone}, email is ${email} and more about his response ${comment}`;
  fs.writeFileSync("output.txt", outputTowrite);
  const params = `Your form has been submitted successfully`;
  res.send("Your form has been successfully submitted");
});
// const home = fs.readFileSync("./base.html");
// const service = fs.readFileSync("./service.html");
// const membership = fs.readFileSync("./membership.html");
// const about = fs.readFileSync("./about.html");
// const contact = fs.readFileSync("./contact.html");

// const server = http.createServer((req, res) => {
//   var url = req.url;
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   if (url == "/") {
//     res.end(home);
//   } else if (url == "/about") {
//     res.end(about);
//   } else if (url == "/services") {
//     res.end(service);
//   } else if (url == "/contact") {
//     res.end(contact);
//   } else if (url == "/membership") {
//     res.end(membership);
//   } else {
//     req.statusCode = 404;
//     res.end("<h1>404 not found</h1>");
//   }
// });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
