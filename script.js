

function expand() { 
    var elem = document.getElementById("bkc-button");
    if(document.getElementById('bkc-info').style.display=='none') { 
        document.getElementById('bkc-info').style.display='block'; 
        elem.value = "Less Details";

    }else{
        document.getElementById('bkc-info').style.display = 'none';
        elem.value = "More Details";  
    } 
}
