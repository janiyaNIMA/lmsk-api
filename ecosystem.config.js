module.exports = {
  apps: [
    {
      name: "lmsk-api",
      script: "main.py",
      // Use the absolute path to 'uv' if it's not in PM2's path
      interpreter: "uv",
      interpreter_args: "run",
      // Ensures the environment stays up-to-date with your lockfile
      env: {
        PYTHONUNBUFFERED: "1",
      },
    },
  ],
};
