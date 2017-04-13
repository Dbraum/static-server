var express = require('express');
var app = express();
var proxy = require('http-proxy-middleware');
var serveIndex = require('serve-index')
app.use(express.static(__dirname));


app.use('/', serveIndex('.', {'icons': true}))


// proxy
//具体配置查看 https://github.com/chimurai/http-proxy-middleware
app.use('/infinitus-moa-store', proxy({target: 'http://192.168.14.168:8080', changeOrigin: true}));


app.listen(3000, function () {
  console.log('app listening on port 3000!')
})