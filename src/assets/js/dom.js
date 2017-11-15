export function hasClass(el,classname){
	let reg = new RegExp('(^|\\s)' + classname + '(\\s|$)')
	return reg.test(el.className)
}

export function addClass(el,classname){	
	if(hasClass(el,classname)){
		return 
	}
	let newClass = el.className.split(' ')
	newClass.push(classname)
	el.className = newClass.join(' ')
}

export function removeClass(el,classname){	
	if(!hasClass(el,classname)){
		return 
	}
	let newClass = el.className.split(' ')
	newClass.pop(classname)
	el.className = newClass.join(' ')
}
