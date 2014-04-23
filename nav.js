//temp nav js
var t = document.getElementById('trigger'),
	m = document.getElementById('main'),
	m2 = document.getElementById('main2'),
	ico = document.getElementById('icn'),
	open = false;

t.addEventListener('mousedown', function() {
	if (!open) {
		m.className = m.className + ' move-main';
		m2.className = m2.className + ' move';
		t.className = t.className + ' move-main';
		ico.className = 'fa fa-arrow-circle-o-right fa-2x';
		open = true;
	} else {
		m.className = 'site';
		m2.className = 'nav';
		t.className = '';
		ico.className = 'fa fa-arrow-circle-o-left fa-2x';
		open = false;
	}
}, false);

m.addEventListener('mousemove', function() {
	if (open) {
		m.className = 'site';
		m2.className = 'nav';
		t.className = '';
		ico.className = 'fa fa-arrow-circle-o-left fa-2x';
		open = false;
	}
}, false);

setTimeout(function indx() {
	if (m.textContent.length <= 17) {
		m.className = m.className + ' move-main';
		m2.className = m2.className + ' move';
		t.className = t.className + ' move-main';
		ico.className = 'fa fa-arrow-circle-o-right fa-2x';
		open = true;
	}
},500);