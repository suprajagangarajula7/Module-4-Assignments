const express = require("express");
const os = require("os");
const dns = require("dns");

const readFileData = require("./read");

const app = express();
const PORT = 3000;


app.get("/test", (req, res) => {
  res.send("Test route is working!");
});


app.get("/readfile", async (req, res) => {
  try {
    const data = await readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});


app.get("/systemdetails", (req, res) => {
  const cpus = os.cpus();

  res.json({
    platform: os.platform(),
    totalMemory: (os.totalmem() / 1024 ** 3).toFixed(2) + " GB",
    freeMemory: (os.freemem() / 1024 ** 3).toFixed(2) + " GB",
    cpuModel: cpus[0].model,
    cpuCores: cpus.length 
  });
});

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      res.status(500).send("DNS lookup failed");
    } else {
      res.json({
        hostname: "masaischool.com",
        addresses 
      });
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
