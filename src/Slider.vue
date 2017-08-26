<template>
	<aside id="slider" class="main-slidebar">
		<div class="sidebar left-sidebar">
            <div class="left-sidebar-header">
                <div class="left-sidebar-title">Navigation</div>
                <div class="left-sidebar-toggle c-hamburger c-hamburger--htla hidden-xs" data-toggle-class="left-sidebar-collapsed" data-target="html">
                    <span></span>
                </div>
            </div>
            <div id="left-nav" class="nano">
                <div class="nano-content">
                    <nav>
                        <ul class="nav" id="main-nav">
                            <li class="active-item"><a href="index.html"><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></a></li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-cubes" aria-hidden="true"></i><span>UI Elements</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="ui-elements_panels.html">Panels</a></li>
                                    <li><a href="ui-elements_accordions.html">Accordions</a></li>
                                    <li><a href="ui-elements_tabs.html">Tabs</a></li>
                                    <li><a href="ui-elements_buttons.html">Buttons</a></li>
                                    <li><a href="ui-elements_typography.html">Typography</a></li>
                                    <li><a href="ui-elements_alerts.html">Alerts</a></li>
                                    <li><a href="ui-elements_modals.html">Modals</a></li>
                                    <li class="has-child-item close-item">
                                        <a>Notifications</a>
                                        <ul class="nav child-nav level-2 ">
                                            <li><a href="ui-elements_notifications-pnotify.html">PNotify</a></li>
                                            <li><a href="ui-elements_notifications-toastr.html">Toastr</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="ui-elements_animations-appear.html">Animations</a></li>
                                </ul>
                            </li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-pie-chart" aria-hidden="true"></i><span>Charts</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="charts_chart-js.html">CharJS</a></li>
                                    <li><a href="charts_morris.html">Morris</a></li>
                                </ul>
                            </li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-columns" aria-hidden="true"></i><span>Forms</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="forms_layouts.html">Layouts</a></li>
                                    <li><a href="forms_elements.html">Elements</a></li>
                                    <li><a href="forms_advanced.html">Advanced</a></li>
                                    <li><a href="forms_validation.html">Validation</a></li>
                                </ul>
                            </li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-table" aria-hidden="true"></i><span>Tables</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="tables_basic.html">Basic</a></li>
                                    <li><a href="tables_data-tables.html">DataTable</a></li>
                                    <li><a href="tables_responsive.html">Responsive</a></li>
                                </ul>
                            </li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-files-o" aria-hidden="true"></i><span>Pages</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="pages_sign-in.html">Sign in</a></li>
                                    <li><a href="pages_lock-screen.html">Lock screen</a></li>
                                    <li><a href="pages_forgot-password.html">Forgot password</a></li>
                                    <li class="has-child-item close-item">
                                        <a>Error pages</a>
                                        <ul class="nav child-nav level-2 ">
                                            <li><a href="pages_error-404-content.html">Error 404 content</a></li>
                                            <li><a href="pages_error-404.html">Error 404 page</a></li>
                                            <li><a href="pages_error-500.html">Error 500</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="pages_faq.html">FAQ</a></li>
                                    <li><a href="pages_user-profile.html">User profile</a></li>
                                </ul>
                            </li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-paper-plane" aria-hidden="true"></i><span>Widgets</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="widgets_boxes.html">Boxes</a></li>
                                    <li><a href="widgets_lists.html">Lists</a></li>
                                    <li><a href="widgets_posts.html">Posts</a></li>
                                    <li><a href="widgets_timelines.html">Timelines</a></li>
                                </ul>
                            </li>
                            <li class="has-child-item close-item">
                                <a><i class="fa fa-magic" aria-hidden="true"></i><span>Helpers</span></a>
                                <ul class="nav child-nav level-1">
                                    <li><a href="helpers_background-border.html">Background & Border</a></li>
                                    <li><a href="helpers_margin-padding.html">Margin & Padding</a></li>
                                </ul>
                            </li>
                            <li class=" has-child-item close-item">
                                <a>
                                    <i class="fa fa-sitemap" aria-hidden="true"></i>
                                    <span>Menu levels</span>
                                </a>
                                <ul class="nav child-nav level-1">
                                    <li><a>First Item</a></li>
                                    <li class="has-child-item close-item">
                                        <a>Second Item</a>
                                        <ul class="nav child-nav level-2 ">
                                            <li><a href="#">Option 1</a></li>
                                            <li><a href="#">Option 2</a></li>
                                            <li class="has-child-item close-item">
                                                <a>Option 3</a>
                                                <ul class="nav child-nav level-3 ">
                                                    <li><a href="#">Item 1</a></li>
                                                    <li><a href="#">Item 2</a></li>
                                                    <li><a href="#">Item 3</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a>Third Item</a></li>
                                    <li class="has-child-item close-item">
                                        <a>Fourth Item</a>
                                        <ul class="nav child-nav level-2 ">
                                            <li><a href="#">Option 1</a></li>
                                            <li><a href="#">Option 2</a></li>
                                            <li class="has-child-item close-item">
                                                <a>Option 3</a>
                                                <ul class="nav child-nav level-3 ">
                                                    <li><a href="#">Item 1</a></li>
                                                    <li><a href="#">Item 2</a></li>
                                                    <li><a href="#">Item 3</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
	</aside>
</template>

<script>
	export default {
		name: 'vx-slider'
	}
</script>

<style lang="scss">
	#slider{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		padding-top: 50px;
		width: 230px;
		min-height: 100%;
	}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* LEFT SIDEBAR*/
/*================================================*/
.left-sidebar {
  background: #222d32;
  color: #ffffff;
  -webkit-transition-property: width;
  -moz-transition-property: width;
  transition-property: width;
  -webkit-transition-duration: 0.25s;
  -moz-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  -webkit-transition-delay: 0;
  -moz-transition-delay: 0;
  transition-delay: 0;
}
.left-sidebar .nano {
  background: #222d32;
}
.left-sidebar .left-sidebar-header {
  position: relative;
  height: 40px;
  background: #222d32;
}
.left-sidebar .left-sidebar-header .left-sidebar-title {
  padding: 10px;
  font-size: 10px;
  color: #006ac3;
  font-weight: bold;
  height: 40px;
  margin-right: 60px;
  -webkit-transition-property: margin;
  -moz-transition-property: margin;
  transition-property: margin;
  -webkit-transition-duration: 0.25s;
  -moz-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-out;
  -moz-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.left-sidebar .left-sidebar-header .left-sidebar-toggle {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 40px;
  background-color: #000000;
  text-align: center;
  cursor: pointer;
}
.left-sidebar .left-sidebar-header .left-sidebar-toggle i {
  font-size: 20px;
  line-height: 40px;
}
.left-sidebar .left-sidebar-header .left-sidebar-toggle i:hover {
  color: #cccccc;
}

@media only screen and (max-width: 768px) {
  .left-sidebar .left-sidebar-header {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  html.left-sidebar-collapsed .left-sidebar-title {
    opacity: 0;
  }
}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* LEFT SIDEBAR NAVIGATION*/
/*================================================*/
ul#main-nav {
  margin-right: 4px;
}
ul#main-nav > li {
  border-bottom: 1px solid #2a2a2a;
}
ul#main-nav > li.active-item > a {
  box-shadow: 2px -1px 0 #006ac3 inset !important;
  border-bottom-left-radius: 5px;
  background: #131313;
  color: #ffffff !important;
}
ul#main-nav > li.open-item > a {
  box-shadow: 0px -1px 0 #006ac3 inset;
  border-bottom-left-radius: 5px;
}
ul#main-nav > li.open-item > a > i {
  color: #006ac3;
}
ul#main-nav li a {
  padding: 12px 20px;
  font-size: 13px;
  color: #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
ul#main-nav li a:hover, ul#main-nav li a:focus {
  background: #131313;
}
ul#main-nav li a > i {
  font-size: 18px;
  margin-right: 10px;
  text-align: center;
  vertical-align: middle;
}
ul#main-nav li span {
  vertical-align: middle;
}
ul#main-nav li.has-child-item {
  position: relative;
}
ul#main-nav li.has-child-item > a:after {
  font-family: 'FontAwesome';
  font-size: 10px;
  font-size: 0.76923rem;
  content: '\f067';
  color: #ffffff;
  position: absolute;
  padding: 14px;
  right: 0;
  top: 0;
}
ul#main-nav li.has-child-item.open-item > ul.child-nav {
  display: block;
}
ul#main-nav li.has-child-item.open-item > a:after {
  content: '\f068';
}
ul#main-nav ul.child-nav {
  border-radius: 5px;
  display: none;
}
ul#main-nav ul.child-nav.level-1 {
  background: #161616;
  box-shadow: 0px -5px 5px -3px rgba(0, 0, 0, 0.6) inset;
}
ul#main-nav ul.child-nav.level-1 li a {
  padding: 10px 50px;
}
ul#main-nav ul.child-nav.level-1 li a:hover, ul#main-nav ul.child-nav.level-1 li a:focus {
  background: #0c0c0c;
}
ul#main-nav ul.child-nav.level-2 {
  background: #0e0e0e;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4) inset;
}
ul#main-nav ul.child-nav.level-2 li a {
  padding: 8px 70px;
}
ul#main-nav ul.child-nav.level-3 {
  background: #070707;
  box-shadow: 0px 0px 0px 5px #000 inset;
}
ul#main-nav ul.child-nav.level-3 li a {
  padding: 6px 90px;
}

@media only screen and (min-width: 768px) {
  html.left-sidebar-collapsed .left-sidebar #main-nav > li.open-item > a {
    box-shadow: none;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav > li > a {
    overflow: hidden;
    text-overflow: clip;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav > li > a span {
    visibility: hidden;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav li.has-child-item a:after {
    display: none;
  }
  html.left-sidebar-collapsed .left-sidebar #main-nav li.has-child-item ul.child-nav {
    display: none;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover {
    width: 230px;
    min-height: 100vh;
    background: rgba(32, 32, 32, 0.1);
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover .nano-content {
    background: rgba(32, 32, 32, 0.9);
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav > li.open-item > a {
    box-shadow: 0px -1px 0 #004E90 inset;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav > li > a {
    overflow: visible;
    text-overflow: initial;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav > li > a span {
    visibility: visible;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav li.has-child-item a:after {
    display: block;
  }
  html.left-sidebar-collapsed .left-sidebar .nano:hover #main-nav li.has-child-item.open-item > ul.child-nav {
    display: block;
  }
}
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
/* LEFT SIDEBAR SUBNAVIGATION */
/*================================================*/
ul#main-nav ul.child-nav li a:before {
  position: absolute;
  content: "";
  left: 28px;
  top: 0px;
  bottom: 0px;
  border-left: 1px solid #2f2f2f;
}
ul#main-nav ul.child-nav li:hover > a:before {
  border-color: #006ac3;
}
ul#main-nav ul.child-nav li.active-item > a:before {
  border-color: #004E90 !important;
}
ul#main-nav ul.child-nav li.open-item:before {
  position: absolute;
  content: "";
  left: 28px;
  top: 42px;
  bottom: 0px;
  border-top: 1px solid #006ac3;
  width: 23px;
}
ul#main-nav ul.child-nav li.open-item > a:before {
  border-color: #006ac3;
}
ul#main-nav ul.child-nav li.has-child-item > a:after {
  padding: 10px;
}
ul#main-nav ul.child-nav li .level-2 li.open-item:before {
  left: 50px;
  top: 38px;
  width: 21px;
}
ul#main-nav ul.child-nav li .level-2 li a:before {
  left: 50px;
}
ul#main-nav ul.child-nav li .level-2 li.has-child-item > a:after {
  padding: 8px;
}
ul#main-nav ul.child-nav li .level-3 li a:before {
  left: 70px;
}
</style>