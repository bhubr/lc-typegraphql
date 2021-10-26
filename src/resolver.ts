import Wilder from './types/Wilder';
import { Query, Resolver } from 'type-graphql';

@Resolver(Wilder)
export default class WilderResolver {

  @Query(returns => [Wilder])
  // eslint-disable-next-line class-methods-use-this
  allWilders() {
    return [];
  }
}