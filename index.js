
var page = document.querySelector('.page');
// 事件代理
page.onclick = function (e) {
  var target = e.target || e.srcElement;
  // 判断类名是否是 num
  if (target.className === 'num') {
    // 把 cur 替换成 num
    document.querySelector('.page .cur').className = 'num';
    // 把点击的替换成 cur
    target.className = 'cur';
  }
}