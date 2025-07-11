import Fastify from 'fastify';
import { userCountRoute } from '../src/routes/userCount';

// Mock MySQL pool query
jest.mock('../src/db', () => ({
    db: {
        query: jest.fn().mockResolvedValue([[{ total: 3 }]]),
    },
}));

describe('GET /api/usercount', () => {
    const fastify = Fastify();

    beforeAll(async () => {
        await fastify.register(userCountRoute);
        await fastify.ready();
    });

    afterAll(() => {
        fastify.close();
    });

    it('should return total user count', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/api/usercount',
        });

        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toEqual({ totalUsers: 3 });
    });
});
