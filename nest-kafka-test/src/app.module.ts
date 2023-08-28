import { Module } from '@nestjs/common';
import {
  TutorialTopicConsumerController,
  ErrorTopicConsumerController,
} from './app.controller';
import { KafkaProducerService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TelexModule } from './TELEX/TELEX.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'nest-kafka',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nest-client',
            brokers: ['15.165.116.50:9092'],
          },
          consumer: {
            groupId: 'nest-client-group',
          },
        },
      },
    ]),
    TelexModule,
  ],
  controllers: [TutorialTopicConsumerController, ErrorTopicConsumerController],
  providers: [KafkaProducerService],
})
export class AppModule {}
