import { Module } from '@nestjs/common';
import { ContainersController } from './containers.controller';
import { ContainersService } from './containers.service';

@Module({
  imports: [],
  controllers: [ContainersController],
  providers: [ContainersService],
})
export class ContainersModule {}
