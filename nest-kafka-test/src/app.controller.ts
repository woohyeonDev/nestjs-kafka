import { Controller, OnModuleInit } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { KafkaProducerService } from './app.service';

@Controller()
export class TutorialTopicConsumerController implements OnModuleInit {
  constructor(private readonly kafkaProducerService: KafkaProducerService) {}

  onModuleInit() {
    // 애플리케이션 초기화 시 Kafka 프로듀서와 연결합니다.
    this.kafkaProducerService.connect();
  }

  @MessagePattern('TutorialTopic')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    // message, context.getMessage() 동일하게 message 접근 가능
    const originalMessage = context.getMessage();
    const response = originalMessage.value;

    console.log('1', originalMessage.value);
    console.log('2', message);

    // 메시지 이외 context 정보
    console.log('3', context.getTopic());
    console.log('4', context.getArgs());
    console.log('5', context.getPartition());
    const topic = 'ErrorTopic';
    this.kafkaProducerService.connect();
    this.kafkaProducerService.produce(topic, 'Error!');
    this.kafkaProducerService.disconnect();
    return response;
  }
}

@Controller()
export class ErrorTopicConsumerController {
  @MessagePattern('ErrorTopic')
  readMessage(@Payload() message: any, @Ctx() context: KafkaContext) {
    // message, context.getMessage() 동일하게 message 접근 가능
    const originalMessage = context.getMessage();
    const response = originalMessage.value;

    console.log('1', originalMessage.value);
    console.log('2', message);

    // 메시지 이외 context 정보
    console.log('3', context.getTopic());
    console.log('4', context.getArgs());
    console.log('5', context.getPartition());
    return response;
  }
}
