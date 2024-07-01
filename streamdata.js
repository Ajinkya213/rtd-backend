const axios = require('axios');
const EventEmitter = require('eventemitter3');
const { Data } = require('./db');


class StreamService extends EventEmitter {
    constructor(url) {
        super();
        this.url = url;
        this.startStream();
    }

    async startStream() {
        try {
            const response = await axios({
                method: 'get',
                url: this.url,
                responseType: 'stream',
                headers: {
                    'Connection': 'keep-alive',
                    'Cache-Control': 'no-cache'
                }
            });

            response.data.on('data', async (chunk) => {
                const data = JSON.parse(chunk.toString());
                console.log(`Received data: ${data.time}, ${data.speed}`);

                try {
                    await Data.create({
                      time: data.time,
                      speed: data.speed,
                    });
                  } catch (error) {
                    console.error('Error saving data:', error);
                  }
                  

                this.emit('data', data);
            });

            response.data.on('end', () => {
                console.log('Stream ended.');
                this.emit('end');
            });

            response.data.on('error', (error) => {
                console.error(`Stream error: ${error}`);
                this.reconnect();
                this.emit('error', error);
            });

        } catch (error) {
            console.error("Failure to establish connection");
            console.error(`Request error: ${error}\n`);
            this.reconnect();
            this.emit('error', error);
        }
    }

    reconnect() {
        console.error('Attempting to reconnect.');
        setTimeout(() => this.startStream(), 1000);
    }
}

module.exports = StreamService;
