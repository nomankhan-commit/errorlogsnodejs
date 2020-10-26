var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path')
var errorlog = require('express-errorlog');
var countFiles = require('count-files')
var fse = require('fs-extra')
const download = require('download');
var jsonexport = require('jsonexport');
var errWriter = require('./fileWrit');
const requestIp = require('request-ip');
const cors = require('cors');
var url = require('url');
var isip = require('isip');
var ip = require('ip');
var fetchUrl = require("fetch").fetchUrl;
const hostValidation = require('host-validation')
const si = require('systeminformation');
const os = require('os');
var winston = require('winston')
var morgan = require('morgan')
var Promise = require('Promise')
const myObject = {};
// var api_name=morgan('combined');

var filen_name = __filename.slice(__dirname.length + 1);

app.use(express.static('public'));
var accessLogStream = fs.createWriteStream('access.log', { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))
app.use(hostValidation({
  hosts: [
    'localhost:3000',
    'transmissito.com',
    /.*\.mydomain\.com$/],
  fail: (req, res, next) => {
    res.redirect('http://localhost:3000/home')
  }

}))

// console.log(a.f.fo)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(errorlog);
app.use(cors());

app.post('/funt', function (req, res) {
  try {
    var a = 5;
    console.log(k+a)
makk();

  } catch (e) {
   
    var er = e.stack;
    var msg =e.message
    var url = `http://localhost:3000${req.url}`
    errWriter.fileWriter('statuss', e.status, msg, 'types', url, filen_name, req.method, er);
    res.json('sorry, something went wrong!')
  }

})

app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/page/:file1', (req, res) => {
try{
  var par = { "file": req.params.file1 }
  const stats = fs.statSync('./public/logs/' + par.file);
  const fileSizeInBytes = stats.size;
  if (fileSizeInBytes == 0) return res.json('empty file');
  var buff = fs.readFileSync('./public/logs/' + par.file);
  var jsonView = JSON.parse(buff);
  var totalErrors = jsonView.length;
  var Bad_Request = jsonView.filter(d => d.status == 400).length;
  var Unauthorized = jsonView.filter(d => d.status == 401).length;
  var PaymentRequired = jsonView.filter(d => d.status == 402).length;
  var Forbidden = jsonView.filter(d => d.status == 403).length;
  var notfound = jsonView.filter(d => d.status == 404).length;
  var MethodNotAllowed = jsonView.filter(d => d.status == 405).length;
  var NotAcceptable = jsonView.filter(d => d.status == 406).length;
  var ProxyAuthenticationRequired = jsonView.filter(d => d.status == 407).length;
  var RequestTimeout = jsonView.filter(d => d.status == 408).length;
  var Conflict = jsonView.filter(d => d.status == 409).length;
  var Gone = jsonView.filter(d => d.status == 410).length;
  var LengthRequired = jsonView.filter(d => d.status == 411).length;

  var PreconditionFailed = jsonView.filter(d => d.status == 412).length;
  var PayloadTooLarge = jsonView.filter(d => d.status == 413).length;
  var URITooLong = jsonView.filter(d => d.status == 414).length;
  var UnsupportedMediaType = jsonView.filter(d => d.status == 415).length;
  var RangeNotSatisfiable = jsonView.filter(d => d.status == 416).length;
  var ExpectationFailed = jsonView.filter(d => d.status == 417).length;
  var ImATeapot = jsonView.filter(d => d.status == 418).length;

  var MisdirectedRequest = jsonView.filter(d => d.status == 421).length;

  var UnprocessableEntity = jsonView.filter(d => d.status == 422).length;
  var Locked = jsonView.filter(d => d.status == 423).length;
  var FailedDependency = jsonView.filter(d => d.status == 424).length;
  var UnorderedCollection = jsonView.filter(d => d.status == 425).length;
  var UpgradeRequired = jsonView.filter(d => d.status == 426).length;
  var PreconditionRequired = jsonView.filter(d => d.status == 428).length;
  var TooManyRequests = jsonView.filter(d => d.status == 429).length;
  var RequestHeaderFieldsTooLarge = jsonView.filter(d => d.status == 431).length;

  var per_of_400 = (Bad_Request / totalErrors) * 100;
  var per_of_401 = (Unauthorized / totalErrors) * 100;
  var per_of_402 = (PaymentRequired / totalErrors) * 100;
  var per_of_403 = (Forbidden / totalErrors) * 100;
  var per_of_404 = (notfound / totalErrors) * 100;
  var per_of_405 = (MethodNotAllowed / totalErrors) * 100;
  var per_of_406 = (NotAcceptable / totalErrors) * 100;
  var per_of_407 = (ProxyAuthenticationRequired / totalErrors) * 100;
  var per_of_408 = (RequestTimeout / totalErrors) * 100;
  var per_of_409 = (Conflict / totalErrors) * 100;
  var per_of_410 = (Gone / totalErrors) * 100;
  var per_of_411 = (LengthRequired / totalErrors) * 100;
  var per_of_412 = (PreconditionFailed / totalErrors) * 100;
  var per_of_413 = (PayloadTooLarge / totalErrors) * 100;
  var per_of_414 = (URITooLong / totalErrors) * 100;
  var per_of_415 = (UnsupportedMediaType / totalErrors) * 100;
  var per_of_416 = (RangeNotSatisfiable / totalErrors) * 100;
  var per_of_417 = (ExpectationFailed / totalErrors) * 100;
  var per_of_418 = (ImATeapot / totalErrors) * 100;
  var per_of_421 = (MisdirectedRequest / totalErrors) * 100;
  var per_of_422 = (UnprocessableEntity / totalErrors) * 100;
  var per_of_423 = (Locked / totalErrors) * 100;
  var per_of_424 = (FailedDependency / totalErrors) * 100;
  var per_of_425 = (UnorderedCollection / totalErrors) * 100;
  var per_of_426 = (UpgradeRequired / totalErrors) * 100;
  var per_of_428 = (PreconditionRequired / totalErrors) * 100;
  var per_of_429 = (TooManyRequests / totalErrors) * 100;
  var per_of_431 = (RequestHeaderFieldsTooLarge / totalErrors) * 100;


  var perArray = [per_of_400,
    per_of_401,
    per_of_402,
    per_of_403,
    per_of_404,
    per_of_405,
    per_of_406,
    per_of_407,
    per_of_408,
    per_of_409,
    per_of_410,
    per_of_411,
    per_of_412,
    per_of_413,
    per_of_414,
    per_of_415,
    per_of_416,
    per_of_417,
    per_of_418,
    per_of_421,
    per_of_422,
    per_of_423,
    per_of_424,
    per_of_425,
    per_of_426,
    per_of_428,
    per_of_429,
    per_of_431]



  res.render('index', { jsonView, perArray });
  }catch(e){
    var er = e.stack;
    var msg =e.message
    var url = `http://localhost:3000/${req.url}`
    errWriter.fileWriter('statuss', e.status, msg, 'types', url, filen_name, req.method, er);
    res.json('sorry, something went wrong!')
  }
})

app.get('/end', (req, res) => {

  // res.render('table', { items });
  res.end();
  // res.json('end end end');
})


app.get('/log/files', (req, res) => {
  try{
  fs.readdir(errWriter.f.fo, function (err, items) {
    var AllFiles = JSON.stringify(items);
    // console.log(AllFiles);
    for (var i = 0; i < items.length; i++) {
      // console.log(items[i]);
    }
    // res.render('report', { items });

    res.render('table', { items });

  })
 
}catch(e){
  var er = e.stack;
    var msg =e.message
    var url = `http://localhost:3000/${req.url}`
    errWriter.fileWriter('statuss', e.status, msg, 'types', url, filen_name, req.method, er);
    res.json('sorry, something went wrong!')
  }
})

app.get('/delete/file/:fileToDelete', (req, res) => {
  var ToDelete = { "file": req.params.fileToDelete }
  var deleteFilePath = './public/logs/' + ToDelete.file;
  fs.unlinkSync(deleteFilePath)

  // res.redirect('/log/files');
})



app.get('/download/file/:fileToDownload', (req, res, next) => {
  var toDownload = { "file": req.params.fileToDownload }
  var fil = toDownload.file;
  console.log('./public/logs/' + fil)


  download('http://localhost:3000/logs/' + fil, 'dist').then(() => {
    console.log('done!');
  });
})


// function about(req, res) {
//   console.log(os.platform())
//   console.log(os.arch())
//   console.log(`total memory in bytes : ${os.totalmem}`);
//   console.log(`total memory in bytes : ${os.freemem}`);
//   console.log(`uptime seconds: ${os.uptime}`);
//   console.log(`load: ${os.loadavg(0)}`);
//   console.log(`uptime seconds: ${os.uptime}`);
//   console.log(`the hostname of the operating system as a string. ${os.hostname}`)
//   console.log(`os.userInfo() ${os.userInfo()}`)

//   for (var i = 0; i < os.cpus().length; i++) {
//     var speed = os.cpus()[i].speed;
//     var user = os.cpus()[i].times.user;
//     var nice = os.cpus()[i].times.nice;
//     var sys = os.cpus()[i].times.sys;
//     var idle = os.cpus()[i].times.idle;
//     var irq = os.cpus()[i].times.irq;
//     console.log(`in MHz of cpu: ${speed}`)
//     console.log(`The number of milliseconds the CPU has spent in user mode: ${user}`)
//     console.log(`The number of milliseconds the CPU has spent in nice mode: ${nice}`)
//     console.log(`The number of milliseconds the CPU has spent in sys  mode: ${sys}`)
//     console.log(`The number of milliseconds the CPU has spent in idle mode: ${idle}`)
//     console.log(`The number of milliseconds the CPU has spent in irq  mode: ${irq}`)
//     console.log('.......................................................')
//   }

//   var a = os.cpus();
//   console.log(JSON.stringify())
//   // console.log( 'The number of milliseconds the CPU has spent in user mode: ', os.cpus())

// }




app.get('/testing', (req, res, next) => {

  rwebshot('google.com', 'google.png', function (err) {
    // screenshot now saved to google.png
  });

})








// about()
app.listen(3000, () => {
  console.log('server is started on port 3000');
}
)




