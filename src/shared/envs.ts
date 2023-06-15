const envs = {
  VITE_BASE_URL: import.meta.env.VITE_BASE_URL,
} as const;

// normally would use t3 env, no need for now
if (!envs.VITE_BASE_URL) {
  throw new Error('VITE_BASE_URL is not defined');
}

export { envs };
