/* eslint-disable class-methods-use-this */
import { Query, Mutation, Arg, Resolver } from 'type-graphql';

// TypeGraphQL types
import Wilder from './types/Wilder';
import WilderInput from './types/WilderInput';
// Mongoose model
import WilderModel from './models/Wilder';

@Resolver(Wilder)
export default class WilderResolver {

  @Query(returns => [Wilder])
  async allWilders() {
    const wilders = await WilderModel.find();
    return wilders;
  }

  @Mutation(returns => Wilder)
  async createWilder(
    @Arg('wilderData') wilderData: WilderInput,
  ) {
    const newWilder = new WilderModel(wilderData);
    await newWilder.save();
    return newWilder;
  }
}