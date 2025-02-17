import { Module } from '@nestjs/common';
import { AuthModule } from './Modules/auth/auth.module';
import { UsersModule } from './Modules/users/users.module';
import { TareasModule } from './Modules/tasks/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/dbtasks'),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TareasModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dbtasks'),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
