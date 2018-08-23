var btns=document.getElementsByTagName('button');
var enter=document.getElementById('enter');
var show=document.getElementsByClassName('show')[0];
var delate=document.getElementById('delate');
var clean=document.getElementById('clean');

for(var i=2; i<btns.length;i++){
    btns[i].onclick=function(){
        show.innerHTML+=this.innerText;    
    }
}

enter.onclick=function(){
    show.innerHTML+='='+eval(show.innerHTML);
}

delate.onclick=function(){
    var a=show.innerHTML.length;
    show.innerHTML=show.innerHTML.substring(0,a-1);
}

clean.onclick=function(){
    show.innerHTML='';
}



function showTime(){
var time=document.getElementById('time'),
    year,date,day,month,hour,minute,second,dayName,today;

today=new Date();
year=today.getFullYear();
month=today.getMonth()+1;
date=today.getDate();
day=today.getDay();
hour=today.getHours();
minute=today.getMinutes();
second=today.getSeconds();
dayName=['日','一','二','三','四','五','六']

if(second<10){
    second='0'+second;
}

time.innerHTML=year+'年'+month+'月'+date+'日    星期'+dayName[day]+'<br/>'+hour+':'+minute+':'+second;
setTimeout(showTime,1000);
}
showTime();
