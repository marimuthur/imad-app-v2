        //counter code
var counter=0;
var button = document.getElementById("counter");
button.onclick=function(){
    
    //create a XML req
       var request= new XMLHttpRequest();
    
    //capture the response and store it in a variable
       request.onreadystatechange = function() {
           
         if(request.readyState===XMLHttpRequest.DONE) {
             if(request.status===200){
                 var counter=request.responseText;
                 var span = document.getElementById("count");
                 span.innerHTML = counter.toString();
             }
         }  
       };
    
    //Making the request
       request.open('GET','http://marimuthur.imad.hasura-app.io/counter',true);
       request.send(null);
};
