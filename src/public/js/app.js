function getQRCode(){
    var xhttp = new XMLHttpRequest();
    var id = document.getElementById("id").value;
    var passwd = document.getElementById("pw").value;
    var data = {"id": id, "pw": passwd, "encrypt": id + '#' + passwd};
    xhttp.open("POST", "http://localhost:7685/qr", true);
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

