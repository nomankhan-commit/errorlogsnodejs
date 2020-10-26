var fs = require('fs');

var d = new Date();
var year = d.getFullYear()
var monthsArray = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
var month = monthsArray[d.getMonth()];
var day = d.getDate();
var min = d.getMinutes();
var folder = './public/logs/';
var fileName = 'errorsLogs_' + year + '-' + month + '-' + day ;
var extension = '.json';
var paath = folder + fileName + extension;
 var f ={fo:folder};

function fileWriter(statuss, statusMessages, shortMessage, types, origions,file_name,req_method,detailMessage) {
  var errorFormate = {
    status: statuss,
    statusMessage: statusMessages,
    shortMessage: shortMessage,
    type: types,
    origion: origions,
    req_method:req_method,
    file_name:file_name,
    detailMessage: detailMessage,
    time: new Date()
  }

  var exist = fs.existsSync(paath);
  console.log('status', exist)
  if (exist == false) {
    var ob1 = [errorFormate]
    var jsonString = JSON.stringify(ob1)
    fs.writeFileSync(paath, jsonString);
    //res.json('append 2');
    console.log('append 2')
  }

  if (exist == true) {
    var buff = fs.readFileSync(paath);
    var jsonView = JSON.parse(buff);
    var toSting = JSON.stringify(jsonView);
    var spl1 = toSting.split(']');
    var st = JSON.stringify(errorFormate);
    var data = spl1 + st + "]";
    fs.writeFileSync(paath, data);
    //res.json('append 1');
    console.log('append 1')
  }

}

module.exports = {
  fileWriter,
  f
};