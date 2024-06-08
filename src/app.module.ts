import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoadorModule } from './doador/doador.module';

@Module({
  imports: [DoadorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
