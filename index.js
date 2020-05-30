
var page = document.querySelector('.page');
// 事件代理
page.onclick = function (e) {
  var target = e.target || e.srcElement; // IE下有srcElement，没target
  // 判断类名是否是 num
  if (target.className === 'num') {
    // 把 cur 替换成 num
    page.querySelector('.cur').className = 'num';
    // 把点击的替换成 cur
    target.className = 'cur';
  }
  // 下一页
  if (target.className === 'next') {
    page.querySelector('.cur').nextElementSibling.className = 'cur';
    page.querySelector('.cur').className = 'num';
  }
  // 上一页
  if (target.className === 'prev') {
    // 下一页点击按钮就可以切换cur，上一页就不行？？？
    // page.querySelector('.cur').previousElementSibling.className = 'cur';
    // page.querySelector('.cur').className = 'num';

    // console.log(page.children, 111);

    for(var i = 0; i < page.children.length; i++){
      if( page.children[i].className == 'cur'){
        page.children[i - 1].className = 'cur'
        page.children[i].className = 'num'
      }
    }
    
  }
}