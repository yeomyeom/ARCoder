function getQRCode(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:7685/qr", true);
    xhttp.send();
    xhttp.onload = function(){
        console.log(xhttp.response)
        if(xhttp.status >= 200 && xhttp.status <300){
            let res = JSON.parse(xhttp.response);
            document.getElementById("ARCode").src = res.img
        }else{
            document.getElementById("ARCode").src = "/public/img/ERROR.jpg"
        }
    }
}

