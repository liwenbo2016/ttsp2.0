(function (doc, win) {
	var docEl = doc.documentElement, //取得文档的根节点
	// 判断窗口有没有orientationchange这个方法，有就赋值给一个变量，没有就返回resize方法。
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function () {
					var clientWidth = docEl.clientWidth; //获得的是屏幕可视区域的宽
					if (!clientWidth) return;
					docEl.style.fontSize = 100 * (clientWidth /1920) + 'px';
			};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);





