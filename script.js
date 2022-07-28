
const daysE1 = document.getElementById("days")
const hoursE1 = document.getElementById("hours")
const minsE1 = document.getElementById("mins")
const secondsE1 =  document.getElementById("seconds")


const newYears = "1 Jan 2022"
function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date(newYears);
    


    const totalSeconds = (newYearDate - currentDate)/1000;

    const days = Math.floor(1- (totalSeconds / 3600 / 24));
    const hours = Math.floor(1-(totalSeconds / 3600)) % 24;
    const mins = Math.floor(1-(totalSeconds/ 60)) % 60 ;
    const  seconds = Math.floor(1-(totalSeconds)) % 60;

    
daysE1.innerHTML = days;
hoursE1.innerHTML = hours;
minsE1.innerHTML = mins;
secondsE1.innerHTML = seconds;
    
    
}
//initial call
countdown()
setInterval(countdown,1000);


// (function () {
//     const second = 1000,
//           minute = second * 60,
//           hour = minute * 60,
//           day = hour * 24;
  
//     //I'm adding this section so I don't have to keep updating this pen every year :-)
//     //remove this if you don't need it
//     let today = new Date(),
//         dd = String(today.getDate()).padStart(2, "0"),
//         mm = String(today.getMonth() + 1).padStart(2, "0"),
//         yyyy = today.getFullYear(),
//         nextYear = yyyy +1 ,
//         dayMonth = "01/01/",
//         birthday = dayMonth + yyyy;
    
//     today = mm + "/" + dd + "/" + yyyy;
//     if (today > birthday) {
//       birthday = dayMonth + nextYear;
//     }
//     //end
    
//     const countDown = new Date(birthday).getTime(),
//         x = setInterval(function() {    
  
//           const now = new Date().getTime(),
//                 distance = countDown - now;
  
//           document.getElementById("days").innerText = Math.floor(distance / (day)),
//             document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//             document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//             document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
//           //do something later when date is reached
//           if (distance < 0) {
//             document.getElementById("headline").innerText = "It's my birthday!";
//             document.getElementById("countdown").style.display = "none";
//             document.getElementById("content").style.display = "block";
//             clearInterval(x);
//           }
//           //seconds
//         }, 0)
//     }());












