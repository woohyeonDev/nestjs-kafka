/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { R11Module } from './R11/R11.module';
import { A11Module } from './A11/A11.module';
@Module({
  imports: [R11Module,A11Module],
})
export class TelexModule {}
