module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "ivrylobs.xyz"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "rsiakku_blogs"),
        username: env("DATABASE_USERNAME", "rsiakku"),
        password: env("DATABASE_PASSWORD", "z:vjFJqyL)>vB78_"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
