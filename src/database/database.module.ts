import { DataSource, getConnectionOptions } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(
          await getConnectionOptions(
            process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
          ),
        ),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(private dataSource: DataSource) {
    if (dataSource.isInitialized) console.log('DB Connected Successfully!');
  }
}
