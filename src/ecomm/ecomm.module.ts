import { Module } from '@nestjs/common';
import { EcommService } from './ecomm.service';
import { EcommResolver } from './ecomm.resolver';

@Module({
  providers: [EcommResolver, EcommService],
})
export class EcommModule {}
