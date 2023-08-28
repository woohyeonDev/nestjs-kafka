import { Controller, Get, Param } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { R11Service } from './R11.service';

@Controller('TELEX')
@ApiTags('TELEX')
export class R11Controller {
  constructor(private readonly R11Service: R11Service) {}

  @Get('/R11/:MS_NO')
  @ApiOperation({
    summary: '상품 데이터 받기',
    description: '매장별 상품 데이터를 받아옵니다.',
  })
  @ApiCreatedResponse({
    description: '매장별 상품 데이터 입니다.',
  })
  async getGoodsData(@Param('MS_NO') msNo: string): Promise<string> {
    return `${msNo}의 상품 데이터`;
  }
}
