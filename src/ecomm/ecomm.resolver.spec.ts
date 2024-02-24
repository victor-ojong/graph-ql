import { Test, TestingModule } from '@nestjs/testing';
import { EcommResolver } from './ecomm.resolver';
import { EcommService } from './ecomm.service';

describe('EcommResolver', () => {
  let resolver: EcommResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EcommResolver, EcommService],
    }).compile();

    resolver = module.get<EcommResolver>(EcommResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
