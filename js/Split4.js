var Byid=function(id){
	return document.getElementById(id);
}

var backward1=Byid('backward1'),forward1=Byid('forward1'),refresh1=Byid('refresh1'),search1=Byid('search1'),view1=Byid('view1'),
	backward2=Byid('backward2'),forward2=Byid('forward2'),refresh2=Byid('refresh2'),search2=Byid('search2'),view2=Byid('view2'),
	backward3=Byid('backward3'),forward3=Byid('forward3'),refresh3=Byid('refresh3'),search3=Byid('search3'),view3=Byid('view3'),
	backward4=Byid('backward4'),forward4=Byid('forward4'),refresh4=Byid('refresh4'),search4=Byid('search4'),view4=Byid('view4');

//Webview 1

function backwardView1(){
	view1.goBack();
}

function forwardView1(){
	view1.goForward();
}

function refreshView1(){
	view1.reload();
}

function urlSearch1(event){
	if (event.keyCode === 13) {
        search1.blur();
        let val = search1.value;
		view1.loadURL('https://www.google.co.in/search?q='+val);
	}
}

function updateURLsearch1(){
	search1.value=view1.src;
	document.querySelector('#backward1').disabled=!view1.canGoBack();
	document.querySelector('#forward1').disabled=!view1.canGoForward();
}

backward1.addEventListener('click', backwardView1);
forward1.addEventListener('click', forwardView1);
refresh1.addEventListener('click', refreshView1);
search1.addEventListener('keydown',urlSearch1);
view1.addEventListener('did-finish-load', updateURLsearch1);

//Webview 2

function backwardView2(){
	view2.goBack();
}

function forwardView2(){
	view2.goForward();
}

function refreshView2(){
	view2.reload();
}

function urlSearch2(event){
	if (event.keyCode === 13) {
        search2.blur();
        let val = search2.value;
		view2.loadURL('https://www.google.co.in/search?q='+val);
	}
}

function updateURLsearch2(){
	search2.value=view2.src;
	document.querySelector('#backward2').disabled=!view2.canGoBack();
	document.querySelector('#forward2').disabled=!view2.canGoForward();
}

backward2.addEventListener('click', backwardView2);
forward2.addEventListener('click', forwardView2);
refresh2.addEventListener('click', refreshView2);
search2.addEventListener('keydown',urlSearch2);
view2.addEventListener('did-finish-load', updateURLsearch2);

//Webview 3

function backwardView3(){
	view3.goBack();
}

function forwardView3(){
	view3.goForward();
}

function refreshView3(){
	view3.reload();
}

function urlSearch3(event){
	if (event.keyCode === 13) {
        search3.blur();
        let val = search3.value;
		view3.loadURL('https://www.google.co.in/search?q='+val);
	}
}

function updateURLsearch3(){
	search3.value=view3.src;
	document.querySelector('#backward3').disabled=!view3.canGoBack();
	document.querySelector('#forward3').disabled=!view3.canGoForward();
}

backward3.addEventListener('click', backwardView3);
forward3.addEventListener('click', forwardView3);
refresh3.addEventListener('click', refreshView3);
search3.addEventListener('keydown',urlSearch3);
view3.addEventListener('did-finish-load', updateURLsearch3);

//Webview 4

function backwardView4(){
	view4.goBack();
}

function forwardView4(){
	view4.goForward();
}

function refreshView4(){
	view4.reload();
}

function urlSearch4(event){
	if (event.keyCode === 13) {
        search4.blur();
        let val = search4.value;
		view4.loadURL('https://www.google.co.in/search?q='+val);
	}
}

function updateURLsearch4(){
	search4.value=view4.src;
	document.querySelector('#backward4').disabled=!view4.canGoBack();
	document.querySelector('#forward4').disabled=!view4.canGoForward();
}

backward4.addEventListener('click', backwardView4);
forward4.addEventListener('click', forwardView4);
refresh4.addEventListener('click', refreshView4);
search4.addEventListener('keydown',urlSearch4);
view4.addEventListener('did-finish-load', updateURLsearch4);