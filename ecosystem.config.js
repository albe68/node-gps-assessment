module.exports = {
  apps: [
    {
      name: "server_express",
      script: "src/express.js", // Entry point of application
      instances: "1", // Run as many instances as the available CPU cores
      autorestart: true, // Restart the application if it crashes
      watch: true, // Disable file watching (change to true for live changes)
      max_memory_restart: "1G", // Restart the application if memory usage exceeds 1GB
      env: {
        NODE_ENV: "production", // Set the environment to production
      },
      env_production: {
        NODE_ENV: "production", // Additional environment variables for production
      },
    },
  ],
};
