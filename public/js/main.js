const submitbtn=document.querySelector('#submitbtn');
const day=document.querySelector('#day');
const currdate=document.querySelector('#date');
const show_city_name=document.querySelector('#city_name');
const temp=document.querySelector('#temp1');
const temp_status=document.querySelector('#temp_status');
const main_layer=document.querySelector('.middle_layer');
let statusdecide=(status)=>{
    if (status=='Clear'){
        temp_status.innerHTML='<i class="fa-solid fa-sun" style="color: #f1c40f;"></i>';
    }else if(status=='Clouds'){
        temp_status.innerHTML='<i class="fa-solid fa-cloud"></i>';
    }else if(status=='Rain'){
        temp_status.innerHTML='<i class="fa-solid fa-raindrops" style="color: #3498db;"></i>';
    }else {
        temp_status.innerHTML='<i class="fa-solid fa-sun" style="color: #f1c40f;"></i>';
    }
}
const arr=['Sunday','Tuesday','Wendsday','Thursday','Friday','Saturday'];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
let d=new Date();
let today=arr[d.getDay()];
let month=months[d.getMonth()];
let date=d.getDate();
day.textContent=`${today}`;
currdate.textContent=`${month} ${date}`;

let data;


let showinfo=async(event)=>{
    
    event.preventDefault();
let city='';
let cityname=document.querySelector('#cityname');
city=cityname.value;
if(city===''){
    main_layer.classList.add('data_hide');
    main_layer.classList.remove('visible');
    show_city_name.textContent=`please enter valid city name`;
}
else{
    
try{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=ad5fa1b47519c350783f9f8d9373c9a4`;
    console.log('hiiiiiiiiiii');
data=await fetch(url);
let jsondata=await data.json();
let arrdata=[jsondata];

let tempval=arrdata[0].main.temp;
let tval=parseFloat(tempval);
console.log(typeof tval);
let val=tval.toPrecision(4);

val-=273.15;
val=val.toPrecision(4);

show_city_name.textContent=`${arrdata[0].name}, ${arrdata[0].sys.country}`
temp.textContent=`${val}`;

let status=arrdata[0].weather[0].main;
statusdecide(status);
main_layer.classList.add('visible');
}catch(err){
    console.log(err);
    main_layer.classList.add('data_hide');
    main_layer.classList.remove('visible');
}}
// let objdata=JSON.parse(data);
// let arrdata=[objdata];
// show_city_name.textContent=arrdata[0].name;
// temp.textContent=arrdata[0].main.temp;

}
submitbtn.addEventListener('click',showinfo);