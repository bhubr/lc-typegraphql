/* eslint-disable class-methods-use-this */
import { Query, Mutation, Arg, Resolver } from 'type-graphql';
import Wilder from './types/Wilder';
import WilderModel from './models/Wilder';

@Resolver(Wilder)
export default class WilderResolver {

  @Query(returns => [Wilder])
  async allWilders() {
    const wilders = await WilderModel.find();
    return wilders;
  }

  @Mutation(returns => Wilder)
  async createWilder(@Arg('name') name: string) {
    const newWilder = new WilderModel({ name });
    await newWilder.save();
    return newWilder;
  }
}