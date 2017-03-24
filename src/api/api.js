/**
 * Created by Nealyang on 17/3/24.
 */
import Express from 'express'
import config from '../config'
import controllers from './controllers'


const port  = config.apiPort;
const app = new Express();

controllers(app);

app.listen(port, (error) => {
    if (error) {
        console.error(error);
    } else {
        console.info('==> 🌎  API Listening on port %s. ', port);
    }
});
