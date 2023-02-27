
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { Module } from '@nestjs/common';
import { AdressesModule } from './adresses/adresses.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    PersonsModule,
    AdressesModule,
  ],
  providers: [AppService],
})
export class AppModule {}