function opentrang(evt, opentrang) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content-right-bottom");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    document.getElementById(opentrang).style.display = "grid";
    evt.currentTarget.className += " active";
  }