Element.prototype.visible = function(partial,position,factor) {
	var $t        = this,
	$w            = window,
	height        = $w.innerHeight,
	delta         = height*factor,
	viewTop       = $w.scrollY,
	viewBottom    = viewTop + height,
	_top          = $t.offsetTop,
	_bottom       = _top + $t.clientHeight,
	compareTop    = partial === true ? _bottom : _top,
	compareBottom = partial === true ? _top : _bottom;
  	// console.log((viewTop+delta),(viewBottom - delta));
	console.log(position,viewTop+delta,viewBottom-delta,_top,_bottom,compareTop,compareBottom,delta);
	if(position === "off-center"){
		return ((compareBottom <= viewBottom-delta) && (compareTop >= viewTop+delta));
	}else if(position === "center"){
		return ((compareBottom <= viewBottom-delta && compareBottom >= viewTop+delta)
			&& (compareTop >= viewTop+delta && compareTop <= viewBottom-delta));
	}

};

window.addEventListener('scroll',function(event) {
	document.querySelectorAll(".projects").forEach(function(project) {
	if (project.visible(true,"center",0.15)) {
		project.classList.remove("come-0x-1x");
		project.classList.remove("come-2x-1x");
		project.classList.remove("go-out");
		project.classList.add("come-2x");
	}else if (project.visible(true,"off-center",0.06)) {
		if(project.classList[1] === "come-2x"){
			project.classList.remove("come-0x-1x");
			project.classList.add("come-2x-1x");
		}else if(project.classList[1] === "go-out"){
			project.classList.remove("come-1x-2x");
			project.classList.add("come-0x-1x");
		}
		project.classList.remove("come-2x");
		project.classList.remove("go-out");
	}else{
		project.classList.add("go-out");
		project.classList.remove("come-0x-1x");
		project.classList.remove("come-2x-1x");
  	}
	});

});