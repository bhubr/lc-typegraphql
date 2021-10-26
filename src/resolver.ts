import { Query, Resolver } from 'type-graphql';
import Wilder from './types/Wilder';
import WilderModel from './models/Wilder';

@Resolver(Wilder)
export default class WilderResolver {

  @Query(returns => [Wilder])
  // eslint-disable-next-line class-methods-use-this
  async allWilders() {
    const wilders = await WilderModel.find();
    return wilders;
  }
}