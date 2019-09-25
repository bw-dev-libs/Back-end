const request = require('supertest'); //import supertest library

const server = require('./server'); //import server

//'describe' organizes the way the output is displayed
describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            //return a GET request to the '/' endpoint on the server
            return request(server)
                .get('/')
                .then(res => {
                    //assert that we get an http status code of 200 when passing valid creds
                    expect(res.status).toBe(200);
                });
        });
        //'done' is another way of telling jest to wait for a server response before running test
        it('returns JSON', done => {
            request(server)
                .get('/')
                .then(res => {
                    expect(res.type).toBe('text/html');
                    done();
                });
        });
    });
});
