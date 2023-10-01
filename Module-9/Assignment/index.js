const app = require("./app"); // Import your Express app from app.js

const PORT = process.env.RUNNING_PORT || 8080; // Use the PORT from config.env, or default to 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
