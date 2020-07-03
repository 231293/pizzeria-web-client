// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.

export const environment = {
  production: true,
  hmr: false,
  version: '1.0.0',
  serverUrl: 'https://localhost:44357/api',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US']
};
