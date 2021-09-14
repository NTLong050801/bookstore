function clickquenmk (){
    document.getElementById('dangnhap').style.display='none';
    document.getElementById('quenmk').style.display='block';
    document.getElementById('dnsdt').style.display='none';
    document.getElementById('dangky').style.display='none';
}
function clickbacklogin (){
    document.getElementById('dangnhap').style.display='block';
    document.getElementById('quenmk').style.display='none';
    document.getElementById('dnsdt').style.display='none';
    document.getElementById('dangky').style.display='none';
}

function clickloginsms (){
    document.getElementById('dangnhap').style.display='none';
    document.getElementById('dnsdt').style.display='block';
    document.getElementById('quenmk').style.display='none';
    document.getElementById('dangky').style.display='none';
}

function clickdangky1 (){
    
    document.getElementById('dangky').style.display='block';
    document.getElementById('dangnhap').style.display='none';
}
var nametk = document.getElementbyId('textlogin').value;

 function tieptheo(){
    if ( nametk.value > 11)
    {
        alert ('Mật khẩu đã được gửi đến gmail của bạn')
    }
    else 
    {
        alert ('Tài khoản không hợp lệ' )    
        
    }
 }