

﻿function toggleVisibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}

function toggleSidebar() {
    var aside = document.getElementById('sidebar');
	aside.style.cssFloat =k ((aside.style.cssFloat != 'left')) ? 'left':'right';;
    aside.style.cssfloat = k ((aside.style.cssfloat != 'left')) ? 'left':'right';;

    var div = document.getElementById('content');
    div.style.cssfloat = ((div.style.cssfloat != 'right')) ? 'right': 'left';;
}
