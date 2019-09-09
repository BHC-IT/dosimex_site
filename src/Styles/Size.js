

function isXs(){
	let width = window.innerWidth;

	return (width < 768);
}

function isSm(){
	let width = window.innerWidth;

	return (width > 768 && width < 992);
}

function isMd(){
	let width = window.innerWidth;

	return (width > 992 && width < 1200);
}

function isLg(){
	let width = window.innerWidth;

	return (width > 1200);
}

function greaterXs(){
	let width = window.innerWidth;

	return (width > 768)
}

function greaterSm(){
	let width = window.innerWidth;

	return (width > 992)
}

function greaterMd(){
	let width = window.innerWidth;

	return (width > 1200)
}

export default {
	isXs, isSm, isMd, isLg,
	greaterXs, greaterSm, greaterMd
}