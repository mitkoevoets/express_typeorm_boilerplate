import * as XLSX from 'xlsx';

var fs = require('fs');
var tempfile = require('tempfile');

// const cb = (workbook: WorkBook) => {
//
// };

export function parse_excel(stream: any/*:ReadStream*/, cb: any/*:(wb:Workbook)=>void*/)/*:void*/{
  var fname = tempfile('.sheetjs');
  console.log(fname);
  var ostream = fs.createWriteStream(fname);
  stream.pipe(ostream);
  ostream.on('finish', function() {
    var workbook = XLSX.readFile(fname);
    fs.unlinkSync(fname);

    /* DO SOMETHING WITH workbook IN THE CALLBACK */
    cb(workbook);
  });
}
