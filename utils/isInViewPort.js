export const isInViewPort = (element) => {
	let rect = element.getBoundingClientRect();
	return rect.top <= window.innerHeight && rect.bottom >= 0;
};
