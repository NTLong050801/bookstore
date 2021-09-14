// function login(){
//     document.getElementById('dk').style.display='block'
//    document.getElementById('dn').style.display='none'
// }
// function signup () {
// document.getElementById('dk').style.display='none'
// document.getElementById('dn').style.display='block'}
// function quenmk (){
    
//    var name =   prompt ('Nhập gmail của bạn : ')
    
//     if ( name.length > 10)
//     {
//         alert ('Mật khẩu đã được gửi đến gmail của bạn')
//     }
//     else 
//     {
//         alert ('Tài khoản không hợp lệ' )    
        
//     }
// }

// var tille = document.getElementsByClassName()
// function copyanh (){
//     document.getElementsByClassName(image).style = document.getElementsByClassName(sachform).style
// }
// var giatri = parseInt(document.getElementsByClassName("giatri").value)
// function btntru(){
//    giatri = giatri -1;
//    return giatri;
// }
// function btncong (){
//     giatri = giatri +1;
// }




var modal = document.getElementById("myModal");
	
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("closeimg")[0];

span.onclick = function() { 
  modal.style.display = "none";
}


var minus = document.getElementById('minus');
var add = document.getElementById('add');
var gt = document.getElementById('gt');
var a = 0;
minus.onclick = () => {
    if (gt.innerText != '0'){
        gt.innerText = a --;
    }
    else 
    {
        gt.innerText = '0';
    }
}
add.onclick = () => {
    gt.innerText = a++;
}