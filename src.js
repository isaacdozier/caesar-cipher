function rot13(str) {
  var a   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var arr = str.split('');
  var off = 13, tmp = '', rlLtr, rlOff;
  
  for(var i in arr){
    rlOff = a.indexOf(arr[i]);
    rlLtr = rlOff<off ? rlOff+off : rlOff-off;
    a.indexOf(arr[i])<0 ? tmp += arr[i] : tmp += a[rlLtr];
  }
  return tmp;
}