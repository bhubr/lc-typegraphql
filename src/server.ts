import 'reflect-metadata';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import WilderResolver from './resolver';

async function startup() {
  try {
    await mongoose
    .connect('mongodb://127.0.0.1:27017/wilderdb', {
      autoIndex: true,
    })
    console.log('Connected to database');
    // .then(() => console.log('Connected to database')) // eslint-disable-line no-console
    // .catch((err) => console.log(err)); // eslint-disable-line no-console

    const schema = await buildSchema({
      resolvers: [WilderResolver]
    });

    const server = new ApolloServer({
      schema,
      // playground: true,
    });

    const port = process.env.PORT || 4000;
    const { url } = await server.listen(port);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Could not start server because of error: ${err.message}`);
    } else {
      console.error(err);
    }
  }
}

startup();
