const http = require('http')

const { readFileSync } = require('fs')

const homePage = readFileSync('./index.html')
const hangmenLg = readFileSync('./js/hangmen.js')
const hangmenImg = readFileSync('./image/0.jpg')
const hangmenImg1 = readFileSync('./image/1.jpg')
const hangmenImg2 = readFileSync('./image/2.jpg')
const hangmenImg3 = readFileSync('./image/3.jpg')
const hangmenImg4 = readFileSync('./image/4.jpg')
const hangmenImg5 = readFileSync('./image/5.jpg')
const hangmenImg6 = readFileSync('./image/6.jpg')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end()
    }
    else if (req.url === '/js/hangmen.js') {
        res.writeHead(200, { 'content-type': 'text/javascript' })
        res.write(hangmenLg)
        res.end()
    }
    else if (req.url === '/image/0.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg)
        res.end()
    } else if (req.url === '/image/1.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg1)
        res.end()
    } else if (req.url === '/image/2.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg2)
        res.end()
    } else if (req.url === '/image/3.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg3)
        res.end()
    } else if (req.url === '/image/4.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg4)
        res.end()
    } else if (req.url === '/image/5.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg5)
        res.end()
    } else if (req.url === '/image/6.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' })
        res.write(hangmenImg6)
        res.end()
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})
server.listen(5000, () => {
    console.log('strat listening!')
})