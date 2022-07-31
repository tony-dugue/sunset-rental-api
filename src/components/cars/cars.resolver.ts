import { Query, Resolver } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  cars() {
    return 'Hello and welcome to Yourcar shop!';
  }
}
