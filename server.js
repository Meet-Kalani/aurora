import app from "./app.js";

const requiredEnvVars = ["PORT", "NODE_ENV"];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }
}

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The server is running at ${port}`);
});
