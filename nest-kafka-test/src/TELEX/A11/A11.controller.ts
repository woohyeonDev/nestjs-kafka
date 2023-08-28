import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { A11Service } from './A11.service';

@Controller('TELEX')
@ApiTags('TELEX')
export class A11Controller {
  constructor(private readonly A11Service: A11Service) {}

  @Get('/A11/:MS_NO')
  @ApiOperation({
    summary: '매출 데이터 보내기',
    description: '매출 데이터를 보낼껍니다.',
  })
  @ApiCreatedResponse({
    description: '매출 데이터를 보낼껍니다.',
  })
  async getGoodsData(@Param('MS_NO') msNo: string): Promise<string> {
    return `${msNo}의 매출 데이터`;
  }
}
