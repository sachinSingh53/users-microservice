
import mongoose from 'mongoose'
import{winstonLogger} from '../../9-jobber-shared/src/logger.js';
import config from './config.js';

const log = winstonLogger('User Database Server','debug');

const databaseConnection = async ()=>{
    try {
        await mongoose.connect(`${config.DATABASE_URL}`);
        log.info('user-service is successfully connected to database');
    } catch (error) {
        log.log('error','UserService databaseConnection() error',error);
    }
}

export {databaseConnection};