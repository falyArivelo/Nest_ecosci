import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Le type de votre base de données (postgres pour PostgreSQL)
      host: 'localhost', // L'adresse de votre base de données
      port: 5432, // Le port de votre base de données PostgreSQL par défaut est 5432
      username: 'postgres', // Le nom d'utilisateur de votre base de données
      password: 'root', // Le mot de passe de votre base de données
      database: 'ecosci', // Le nom de votre base de données
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
