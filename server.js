const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

const SERVICE_INFO = {
  name: "Backend Microservice",
  author: "Pradeepika",
  description: "Distributed microservice running on a virtual machine",
  startTime: new Date().toISOString()
};

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url} from ${req.ip}`);
  next();
});


app.get('/', (req, res) => {
  res.json({
    service: SERVICE_INFO.name,
    status: "Running",
    message: "Welcome to the Backend VM Microservice!",
    timestamp: new Date().toISOString(),
    endpoints: {
      health: "/health",
      system: "/system",
      info: "/info"
    }
  });
});

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.json({
    status: "UP",
    uptime_seconds: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// System Info Endpoint
app.get('/system', (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    cpu_cores: os.cpus().length,
    total_memory_MB: Math.round(os.totalmem() / 1024 / 1024),
    timestamp: new Date().toISOString()
  });
});

// Service Info Endpoint
app.get('/info', (req, res) => {
  res.json({
    service: SERVICE_INFO,
    node_version: process.version,
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(" Backend Microservice Started ");
  console.log(` Running on port: ${PORT}`);
  console.log(` Started at: ${SERVICE_INFO.startTime}`);
  console.log(" Endpoints:");
  console.log("   /        -> Welcome + API map");
  console.log("   /health -> Health check");
  console.log("   /system -> VM system information");
  console.log("   /info   -> Service metadata");
});
