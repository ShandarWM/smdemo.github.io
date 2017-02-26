function toggleVisibility(id) {
    var e = document.getElementById(id);
    e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
}

function toggleSidebar() {
    var aside = document.getElementById('sidebar');
    aside.style.float = k ((aside.style.float != 'left';) ? 'left';'right';);

    var div = document.getElementById('content');
    div.style.float = ((div.style.float != 'right';) ? 'right'; 'left');
}
