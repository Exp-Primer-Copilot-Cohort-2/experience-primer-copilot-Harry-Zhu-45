// Create web server
// Create a web server that listens for incoming requests and sends back responses. 
// The server will listen on port 3000 and respond with the following message: 
// "Hello, World!".

const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello, World!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log(`You have an error: ${err}`);
    }

    console.log(`Server is listening on ${port}`);
});

// Run the server using node comment.js and open your browser to http://localhost:3000/. 
// You should see "Hello, World!" in your browser window.
