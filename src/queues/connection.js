import config from '../config.js';
import amqp from 'amqplib';
import { winstonLogger } from '../../../9-jobber-shared/src/logger.js';

const log = winstonLogger('UserQueueConnection', 'debug');

async function createConnection() {
    try {
        const connection = await amqp.connect(`${config.RABBITMQ_ENDPOINT}`);
        const channel = await connection.createChannel();
        log.info('UserServer connected to queues seccessfully');
        closeChannel(channel, connection);
        return channel;
        
    } catch (error) {
        log.log('error','UserService createConnection() error',error);
    }
}

function closeChannel(channel, connection) {
    process.once('SIGINT', async () => {
        await channel.close();
        await connection.close();
    })
}

export { createConnection };
