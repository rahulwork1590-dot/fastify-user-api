import { FastifyInstance } from 'fastify';
import { db } from '../db';

export async function userCountRoute(fastify: FastifyInstance) {
    fastify.get('/api/usercount', async (request, reply) => {
        try {
            const [rows]: any = await db.query('SELECT COUNT(*) as total FROM user_list');
            return { totalUsers: rows[0].total };
        } catch (err) {
            console.error(err);
            reply.status(500).send({ error: 'Failed to fetch user count' });
        }
    });
}
