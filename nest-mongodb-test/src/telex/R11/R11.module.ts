import { Module } from '@nestjs/common';
import { R11Controller } from './R11.controller';
import { R11Service } from './R11.service';

@Module({
  controllers: [R11Controller],
  providers: [R11Service],
})
export class R11Module {}
