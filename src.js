function rot13(str) { // LBH QVQ VG!
  var a   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var arr = str.split('');
  var off = 13;
  var tmp = '';
  var rlLtr, rlOff;
  
  for(var i in arr){
    rlOff = a.indexOf(arr[i]);
    rlLtr = rlOff<off ? rlOff+off : rlOff-off;
    a.indexOf(arr[i])<0 ? tmp += arr[i] : tmp += a[rlLtr];
  }
  return tmp;
}

// Change the inputs below to test
console.log(rot13("SERR YBIR?"));