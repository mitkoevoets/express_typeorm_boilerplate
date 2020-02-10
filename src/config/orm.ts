import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  synchronize: true,
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [
    "src/entities/*{.ts,.js}"
  ],
  migrations: [
    "src/migrations/*.{.ts,.js}"
  ],
  subscribers: [
    "src/subscribers/*.{.ts,.js}"
  ],
  cli: {
    "entitiesDir": "src/entities",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscribers"
  }
};

export default config;
