/*
 *	soChange 1.6.2 - simple object change with jQuery
 *	made by bujichong 2011-10-10
 *	作者：不羁虫  2011-10-10
 * http://www.bujichong.com/
 *E-mail:bujichong@163.com
 */
!function(a){a.fn.extend({soChange:function(b){function j(){f!=g&&(b.thumbObj&&a(b.thumbObj).removeClass(b.thumbNowClass).eq(g).addClass(b.thumbNowClass),b.slideTime<=0?(c.eq(f).hide(),c.eq(g).show()):("fade"==b.changeType&&(c.eq(f).fadeOut(b.slideTime),c.eq(g).fadeIn(b.slideTime)),"slide"==b.changeType&&(c.eq(f).slideUp(b.slideTime),c.eq(g).slideDown(b.slideTime))),b.callback&&b.callback(f,g),f=g),b.alwaysback&&b.alwaysback(f,g)}function k(){g=(f+1)%e,j()}var c,d,e,f,g,h,i;b=a.extend({thumbObj:null,btnPrev:null,btnNext:null,changeType:"fade",thumbNowClass:"now",thumbOverEvent:!0,slideTime:1e3,autoChange:!0,clickFalse:!0,overStop:!0,changeTime:5e3,startIndex:0,delayTime:300,callback:function(){},alwaysback:function(){}},b||{}),c=a(this),e=c.size(),f=b.startIndex,c.hide().eq(f).show(),b.thumbObj&&(d=a(b.thumbObj),d.removeClass(b.thumbNowClass).eq(f).addClass(b.thumbNowClass),d.click(function(){return g=d.index(a(this)),j(),b.clickFalse?!1:void 0}),b.thumbOverEvent&&d.hover(function(){g=d.index(a(this)),i=setTimeout(j,b.delayTime)},function(){clearTimeout(i)})),b.btnNext&&a(b.btnNext).click(function(){return c.queue().length<1&&k(),!1}),b.btnPrev&&a(b.btnPrev).click(function(){return c.queue().length<1&&(g=(f+e-1)%e,j()),!1}),b.autoChange&&(h=setInterval(k,b.changeTime),b.overStop&&c.hover(function(){clearInterval(h)},function(){h=setInterval(k,b.changeTime)}))}})}(jQuery);
