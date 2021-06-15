//변수

var date = new Date();
var hours = date.getHours();

if(hours < 12){

    document.write('오전입니다.');
}
if(12 >= hours){

    document.write('오후입니다.');
}
"