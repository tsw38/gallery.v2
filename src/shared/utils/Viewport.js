export const isTopInViewport = (element) => {
	if(!global.window) return;
	if(!element) return;
	
	const elemRect = element.getBoundingClientRect();
	const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
	const topOfElemInViewport = elemRect.top < window.innerHeight && elemRect.top > 0;
	return topOfElemInViewport;
};