/*
* @Author: jacky.yang
* @Date:   2017-08-24 09:42:25
* @Last Modified by:   jacky.yang
* @Last Modified time: 2017-08-25 16:44:46
*/

'use strict'

// 如果没有引入jquery
if (typeof jQuery === "undefined") {
  throw new Error("Please requires jQuery");
}

$.AdminLTE = {};

$.AdminLTE.options = {
	controlSidebarOptions: {
		//Which button should trigger the open/close event
	    toggleBtnSelector: "[data-toggle='control-sidebar']",
	    //The sidebar selector
	    selector: ".control-sidebar",
	    //Enable slide over content
	    slide: true
	}
};

$(function(){
	_init();
	$.AdminLTE.layout.activate();
});


function _init(){
	$.AdminLTE.layout = {
		activate: function(){
			var _this = this;
			_this.fix();
			$('body, html, .wrapper').css('height', 'auto');
			$(window, ".wrapper").resize(function () {
				_this.fix();
			});
		},
		fix: function () {
	      	// Remove overflow from .wrapper if layout-boxed exists
	      	$(".layout-boxed > .wrapper").css('overflow', 'hidden');
	      	//Get window height and the wrapper height
	      	var footer_height = $('.main-footer').outerHeight() || 0;
	      	var neg = $('.main-header').outerHeight() + footer_height;
	      	var window_height = $(window).height();
	      	var sidebar_height = $(".sidebar").height() || 0;
	      	//Set the min-height of the content and sidebar based on the
	      	//the height of the document.
	      	if ($("body").hasClass("fixed")) {
	        	$(".content-wrapper, .right-side").css('min-height', window_height - footer_height);
	      	} else {

		        var postSetWidth;
		        if (window_height >= sidebar_height) {
		          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
		          postSetWidth = window_height - neg;
		        } else {
		          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
		          postSetWidth = sidebar_height;
		        }

		        //Fix for the control sidebar height
		        var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
		        if (typeof controlSidebar !== "undefined") {
		          if (controlSidebar.height() > postSetWidth)
		            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
		        }

	      }
	    }
	};
}