function getQRCode(){
    var xhttp = new XMLHttpRequest();
    var id = document.getElementById("id").value.toUpperCase();
    var passwd = document.getElementById("pw").value;
    var data = {"id": id, "pw": passwd, "encrypt": id + '^&' + passwd};
    xhttp.open("POST", "http://192.168.0.6:7685/qr", true);
    xhttp.open("POST", "http://yeomhome.iptime.org:7685/qr", true);

    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify(data));

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

