module.exports = {
  apps: [
    {
      name: 'green',
      cwd: './next-app-green',
      script: 'npm',
      args: 'run start -- --port 3000',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    },
    {
      name: 'blue',
      cwd: './next-app-blue',
      script: 'npm',
      args: 'run start -- --port 3001',
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
