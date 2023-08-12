function calculate(){
     var s = document.getElementById("speed").value;
     var l = document.getElementById("CL").value;

     var w = l * 2000;

     var latency = w/s;
     
     document.getElementById("latency_value").innerHTML = latency;



};