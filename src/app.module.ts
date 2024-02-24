import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsModule } from './pets/pets.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pets/pets.entity';
import { BookingsModule } from './bookings/bookings.module';
import { EcommModule } from './ecomm/ecomm.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    PetsModule,

    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Pet],
      synchronize: true,
    }),

    BookingsModule,

    EcommModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
