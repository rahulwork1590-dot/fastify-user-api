import Fastify from 'fastify';
import { userCountRoute } from './routes/userCount';

const app = Fastify();

app.register(userCountRoute);

app.listen({ port: 6776 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
