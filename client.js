const net = require("net");

const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you ded cuz you idled");
    conn.write("Name: YLC")
  });

  conn.on("Connect", () => {
  console.log("Successfully connected to game server");//send msg to client
  conn.write("Name: CEL");//send a msg to server
  });
  return conn;
};

connect();


module.exports = { connect };