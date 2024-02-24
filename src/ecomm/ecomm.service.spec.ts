import { Test, TestingModule } from '@nestjs/testing';
import { EcommService } from './ecomm.service';

describe('EcommService', () => {
  let service: EcommService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcommService],
    }).compile();

    service = module.get<EcommService>(EcommService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
