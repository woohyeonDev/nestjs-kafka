import { Injectable } from '@nestjs/common';
import { Kafka, Producer, Admin } from 'kafkajs';

@Injectable()
export class KafkaProducerService {
  private producer: Producer;

  constructor() {
    this.producer = new Kafka({
      brokers: ['15.165.116.50:9092'],
    }).producer();
  }

  async connect(): Promise<void> {
    await this.producer.connect();
  }

  async produce(topic: string, message: any): Promise<void> {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }

  async disconnect(): Promise<void> {
    await this.producer.disconnect();
  }
}

@Injectable()
export class OffsetModificationService {
  private admin: Admin;

  constructor() {
    this.admin = new Kafka({
      clientId: 'nest-client',
      brokers: ['15.165.116.50:9092'],
    }).admin();
  }

  async connect(): Promise<void> {
    await this.admin.connect();
  }

  async resetOffset(groupId: string, topic: string): Promise<void> {
    await this.admin.resetOffsets({
      groupId,
      topic,
      earliest: true,
    });
  }

  async setOffset(
    groupId: string,
    topic: string,
    partition: number,
    offset: string,
  ): Promise<void> {
    await this.admin.setOffsets({
      groupId,
      topic,
      partitions: [{ partition, offset }],
    });
  }

  async disconnect(): Promise<void> {
    await this.admin.disconnect();
  }
}
