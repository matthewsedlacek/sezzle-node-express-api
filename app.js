const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const socketPort = 8000;
const db = require("./queries");
const { emit } = require("process");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

// parses requests for fetch
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

app.get("/messages", db.getMessages);
app.post("/messages", db.createMessage);

// sends out the 10 most recent messages from recent to old
const emitMostRecentMessges = () => {
  db.getSocketMessages()
    .then((result) => io.emit("chat message", result))
    .catch(console.log);
};

// connects, creates message, and emits top 10 messages
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("chat message", (msg) => {
    db.createSocketMessage(JSON.parse(msg))
      .then((_) => {
        emitMostRecentMessges();
      })
      .catch((err) => io.emit(err));
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(socketPort, () => {
  console.log(`listening on *:${socketPort}`);
});
