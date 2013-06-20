$(document).ready(function() {
	imgPlay();
	weibo_gb();
});
$(window).resize(function(){
 	wsTcBox();
});
//-----微博广播字数限制
function weibo_gb(){
	var txt01, txt02, txt03, txt04, neirong, str1, str2, str3, str4, start_length, end_length, reg, str;
	//neirong = '这男主角居然，女主角，结果，真！看看不怀孕，还能抽大奖！你懂的！http://t.cn/abcdeg';
	start_length = $('.tr').find('b').html();
	//reg = /[^\x00-\xff]/gm;
	//str = neirong.replace(reg,'aa');//
	$('.weibo_txt01').keydown(function (){
		if($('.weibo_txt01').val().length > 10) return false;
		zimu();	
	});
	$('.weibo_txt02').keydown(function (){
		if($('.weibo_txt02').val().length > 10) return false;
		zimu();	
	});
	$('.weibo_txt03').keydown(function (){
		if($('.weibo_txt03').val().length > 10) return false;
		zimu();	
	});
	$('.weibo_txt04').keydown(function (){
		if($('.weibo_txt04').val().length > 10) return false;
		zimu();	
	});
	function zimu(){
		txt01 = $('.weibo_txt01').val();
		txt02 = $('.weibo_txt02').val();
		txt03 = $('.weibo_txt03').val();
		txt04 = $('.weibo_txt04').val();
		str1 = txt01.length;
		str2 = txt02.length;
		str3 = txt03.length;
		str4 = txt04.length;
		end_length = start_length - parseInt(parseInt(str1) + parseInt(str2) + parseInt(str3) + parseInt(str4));
		if(end_length < 0){
			$('.tr').find('b').html('0');
			//alert('你输入的文字超过了，请停止输入！');
		}
		else{
			$('.tr').find('b').html(end_length);
		}
	}
	
	//alert(txt01+':'+txt02+':'+txt03+':'+txt04);
}
/*function weibo_gb(){
	var txt01_arr, txt02_arr, txt03_arr, txt04_arr = new Array;
	var txt01, txt02, txt03, txt04;
	var txt01_arr = ['居然这么像我', '很牛的样子', '说要送iPhone'];
	var txt02_arr = ['也不错', '完全是个女神', '说咬送普吉岛豪华双人游'];
	var txt03_arr = ['是神马', '还不错', '我信了'];
	var txt04_arr = ['居然这么像我', '赞', '相自己看'];
	
	if($('.weibo_txt01').val() == ''){
		var rand = Math.floor(Math.random()*3);
		txt01 = txt01_arr[rand];
	}
	else{
		txt01 = $('.weibo_txt01').val();
	}
	if($('.weibo_txt02').val() == ''){
		var rand = Math.floor(Math.random()*3);
		txt02 = txt02_arr[rand];
	}
	else{
		txt02 = $('.weibo_txt02').val();
	}
	if($('.weibo_txt03').val() == ''){
		var rand = Math.floor(Math.random()*3);
		txt03 = txt03_arr[rand];
	}
	else{
		txt03 = $('.weibo_txt03').val();
	}
	if($('.weibo_txt04').val() == ''){
		var rand = Math.floor(Math.random()*3);
		txt04 = txt04_arr[rand];
	}
	else{
		txt04 = $('.weibo_txt04').val();
	}
	var neirong = '这男主角居然'+txt01+'，女主角'+txt02+'，结果'+txt03+'，真'+txt04+'！@xx@xx@xx，看看不怀孕，还能抽大奖！你懂的！http://t.cn/abcdeg';
	$('.weibo_text').val(neirong);
}*/
//-----查看我的礼包
function open_wdlb_box(){
	wsTcBox();
	$('.ws_tc').css({'display':'block'});
	$('#ws_cklb').css({'display':'block'});
}
function ws_cklb_close(){
	$('.ws_tc').css({'display':'none'});
	$('#ws_cklb').css({'display':'none'});
}
//-----特权礼包ws_tqlb
function open_tqlb_box(){
	wsTcBox();
	$('.ws_tc').css({'display':'block'});
	$('#ws_tqlb').css({'display':'block'});
}
function ws_tqlb_close(){
	$('.ws_tc').css({'display':'none'});
	$('#ws_tqlb').css({'display':'none'});
}
//-----特权礼包详情
function open_tqlb_xq_box(){
	wsTcBox();
	$('.ws_tc').css({'display':'block'});
	$('#ws_tqlb_xq').css({'display':'block'});
}
function ws_tqlb_xq_close(){
	$('.ws_tc').css({'display':'none'});
	$('#ws_tqlb_xq').css({'display':'none'});
}
//-----会员礼包
function open_hyhhlb_box(huiyuan){
	wsTcBox();
	$('.ws_tc').css({'display':'block'});
	$('#ws_hyhhlb').css({'display':'block'});
	//var huiyuan = true;//如果已经开通了QQ
	if(huiyuan != 1){//如果不是会员
		$('#ws_hyhhlb').css({'height':200});
		$('.ws_hy_zc').css({'display':'block'});
		$('.ws_hyhhlb_m').css({'display':'none'});
	}
	else{
		$('#ws_hyhhlb').css({'height':418});
		$('.ws_hy_zc').css({'display':'none'});
		$('.ws_hyhhlb_m').css({'display':'block'});
	}
}
function ws_hyhhlb_close(){
	$('.ws_tc').css({'display':'none'});
	$('#ws_hyhhlb').css({'display':'none'});
}
//-----会员礼包详情
function open_hyhhlb_xq_box(){
	wsTcBox();
	$('.ws_tc').css({'display':'block'});
	$('#ws_hyhhlb_xq').css({'display':'block'});
	var huiyuan = true;//如果已经开通了QQ
	if(!huiyuan){//如果不是会员
		$('.ws_hy_zc').css({'display':'block'});
		$('.ws_hyhhlb_m').css({'display':'none'});
	}
	else{
		$('.ws_hy_zc').css({'display':'none'});
		$('.ws_hyhhlb_m').css({'display':'block'});
	}
}
function ws_hyhhlb_xq_close(){
	$('.ws_tc').css({'display':'none'});
	$('#ws_hyhhlb_xq').css({'display':'none'});
	$('.ws_hy_zc').css({'display':'none'});
	$('.ws_hyhhlb_m').css({'display':'none'});
}
//-----我的奖品
function opne_ws_wdjp(){
	wsTcBox();
	$('.ws_tc').css({'display':'block'});
	$('#ws_wdjp').css({'display':'block'});
}
function ws_wdjp_close(){
	$('.ws_tc').css({'display':'none'});
	$('#ws_wdjp').css({'display':'none'});
}
//-----特权礼包复制
function fuzhi_tqlb(){
	if(window.clipboardData){
    	window.clipboardData.setData("Text",$('.ws_tc_tqlb_txt').val());
		alert('复制成功！');
	}
	else{
		alert('您的浏览器不支持此功能，请用Ctrl+C复制！');
	}
}
//-----会员礼包复制
function fuzhi_hylb(){
	if(window.clipboardData){
    	window.clipboardData.setData("Text",$('.ws_tc_hylb_txt').val());
		alert('复制成功！');
	}
	else{
		alert('您的浏览器不支持此功能，请用Ctrl+C复制！');
	}
}
//-----你的礼包兑换券复制
function fuzhi_ndlbthq(){
	if(window.clipboardData){
    	window.clipboardData.setData("Text",$('.ws_tc_dhm_txt').val());
		alert('复制成功！');
	}
	else{
		alert('您的浏览器不支持此功能，请用Ctrl+C复制！');
	}
}
//-----你的礼包兑换券复制2
function fuzhi_ndlbthq2(){
	if(window.clipboardData){
    	window.clipboardData.setData("Text",$('.ws_tc_dhm2_txt').val());
		alert('复制成功！');
	}
	else{
		alert('您的浏览器不支持此功能，请用Ctrl+C复制！');
	}
}


function wsTcBox(){
	var doc_w, doc_h, window_w, window_h;
	doc_w = parseInt($(document).width());
	doc_h = parseInt($(document).height());
	window_w = parseInt($(window).width());
	window_h = parseInt($(window).height());
	if(window_w < 1000){
		window_w = 1000;
	}
	//alert(doc_w+':'+doc_h+':'+window_w+':'+window_h);
	$('.ws_tc').css({'width':window_w, 'height':doc_h});
	$('.ws_tc_bg').css({'width':window_w, 'height':doc_h});
}
// jp_num中奖设置：0是QQ红钻，1是普吉岛双人豪华团，2,4,6是谢谢参与，3是QQ黄钻，5是iPhone5，7是iPad4
function ws_cj(jp_num){
	//---------------------------抽奖------------------------
	//$('#ws_cj_btn').unbind('click',ws_cj);
	$('#ws_cj_btn').find('img').eq(0).css({'display':'none'});
	$('#ws_cj_btn').find('img').eq(1).css({'display':'block'});
	var ws_jp_li = $('.ws_cj_box').find('li');
	var jp_timer = null;
	var jp_this = 0;
	var speed = 100;	
	speed = 100 - parseInt(jp_num) * 20;
	
	function jpPlay(){
		ws_jp_li.find('.ws_cj_img').css({'display':'block'});
		ws_jp_li.find('.ws_cj_pic').css({'display':'none'});
		ws_jp_li.eq(jp_this).find('.ws_cj_img').css({'display':'none'});
		ws_jp_li.eq(jp_this).find('.ws_cj_pic').css({'display':'block'});
		jp_this++;
		if(jp_this > 7){
			jp_this = 0;
		}
		speed = speed + 20;
		if(speed >= 1080){
			clearInterval(jp_timer);
			//$('#ws_cj_btn').bind('click',ws_cj);
			$('#ws_cj_btn').find('img').eq(0).css({'display':'block'});
			$('#ws_cj_btn').find('img').eq(1).css({'display':'none'});
		}
	}
		
	jp_timer = setInterval(jpPlay,100);
}
function wsMingdan(){
	//---------------------------中奖名单滚动------------------------
	var md_div, md_ul, md_li, md_html, md_timer, md_this, md_len;
	md_div = $('.zhongjiang_list');
	md_ul = md_div.find('ul').eq(0);
	md_li = md_div.find('li');
	md_this = 0;
	md_html = md_ul.html();
	md_len = md_li.length;
	
	if(md_len > 4){
		md_ul.html(md_html + md_html);
		md_li = md_div.find('li');
		md_len = md_li.length;
		var hh = 20 * Math.ceil(md_len/2);
		md_ul.css({'top':0, 'height':hh});
		
		clearInterval(md_timer);
		md_ul.hover(
			function (){clearInterval(timer);},
			function (){md_timer = setInterval(mdPlay,3000);}
		);
		function mdPlay(){
			if(parseInt(md_ul.css('top')) <= -hh/2){
				md_this = 0;
				md_ul.css('top',0);
			}
			md_this++;
			md_ul.animate({'top':-20 * md_this});
			
		}
		
		md_timer = setInterval(mdPlay,3000);
	}
}
function imgPlay(){
	//---------------------------底部图片切换------------------------
	var imgplaybtn, imgplaybtnLi, imgplay, imgplayLi, imgTimer, _Imgthis, len, len2;
	imgplaybtn = $('#imgplaybtn');
	imgplaybtnLi = imgplaybtn.find('li');
	imgplay = $('#imgplay');
	imgplayLi = imgplay.find('li');
	imgTimer = null;
	_Imgthis = 0;
	len = imgplayLi.length;
	len2 = imgplaybtnLi.length;
	
	//判断有几张大图，然后添加几个切换然后
	if(imgplayLi.length == '0'){
		imgplay.html('图片暂缺！');	
	}
	else if(len2 == '0' || len != '0'){
		var lenCha = parseInt(len - len2);
		for(i=0; i<lenCha; i++){
			$("<li>"+parseInt(i+1)+"</li>").appendTo(imgplaybtn);
		}
	}
	imgplaybtnLi = imgplaybtn.find('li');
	len2 = imgplaybtnLi.length;
	imgplaybtnLi.eq(0).attr('id','active');
	imgplayLi.css('display','none');
	imgplayLi.eq(0).css('display','block');

	clearInterval(imgTimer);
	imgplaybtnLi.click(
		function(){
			clearInterval(imgTimer);
			imgTimer=setInterval(ImgPlayAuto,3000);
			_Imgthis = $(this).index();
			BnImgPlay(_Imgthis);
		}
	);
	function ImgPlayAuto(){
		_Imgthis++;
		if(_Imgthis > imgplaybtnLi.length-1){
			_Imgthis=0;
		}
		BnImgPlay(_Imgthis);
	}
	function BnImgPlay(_Imgthis){
		if(imgplaybtnLi.eq(_Imgthis).attr('id') == 'active'){
			return;
		}
		else{
			imgplaybtnLi.attr('id','');
			imgplayLi.fadeOut(500);
			imgplaybtnLi.eq(_Imgthis).attr('id','active');
			imgplayLi.eq(_Imgthis).fadeIn(500);
		}
	}
	imgTimer=setInterval(ImgPlayAuto,3000);
	
}