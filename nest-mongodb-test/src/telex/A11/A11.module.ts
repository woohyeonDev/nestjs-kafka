import { Module } from '@nestjs/common';
import { A11Controller } from './A11.controller';
import { A11Service } from './A11.service';

@Module({
  controllers: [A11Controller],
  providers: [A11Service],
})
export class A11Module {}
