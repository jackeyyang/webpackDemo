<template>
<div>
    <div class="leftside-header">
        <div class="logo">
            <a href="index.html" class="on-click">
                <img alt="logo" src="static/header-logo.png" />
            </a>
        </div>
        <div id="menu-toggle" class="visible-xs toggle-left-sidebar" data-toggle-class="left-sidebar-open" data-target="html">
            <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
        </div>
    </div>
    <div class="rightside-header">
        <div class="header-middle"><input type="button" @click="setLang('zh-TW')" value="选择语言"></div>
        <div class="header-section" id="search-headerbox">
            <input type="text" name="search" id="search" placeholder="Search...">
            <i class="fa fa-search search" id="search-icon" aria-hidden="true"></i>
            <div class="header-separator"></div>
        </div>
        <div class="header-section hidden-xs" id="notice-headerbox">
            <div class="notice" id="checklist-notice">
                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                <div class="dropdown-box basic">
                    <div class="drop-header">
                        <h3><i class="fa fa-check-square-o" aria-hidden="true"></i> To-Do List</h3>
                    </div>
                    <div class="drop-content">
                        <div class="widget-list list-to-do">
                            <ul>
                                <li>
                                    <div class="checkbox-custom checkbox-primary">
                                        <input type="checkbox" id="check-s1" value="option1">
                                        <label for="check-s1">Accusantium eveniet ipsam neque</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-primary">
                                        <input type="checkbox" id="check-s2" value="option1" checked>
                                        <label for="check-s2">Lorem ipsum dolor sit</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-primary">
                                        <input type="checkbox" id="check-s3" value="option1">
                                        <label for="check-s3">Dolor eligendi in ipsum sapiente</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-primary">
                                        <input type="checkbox" id="check-s4" value="option1">
                                        <label for="check-s4">Natus recusandae vel</label>
                                    </div>
                                </li>
                                <li>
                                    <div class="checkbox-custom checkbox-primary">
                                        <input type="checkbox" id="check-s5" value="option1">
                                        <label for="check-s5">Adipisci amet officia tempore ut</label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="drop-footer">
                        <a>See all Items</a>
                    </div>
                </div>
            </div>
            <div class="notice" id="messages-notice">
                <i class="fa fa-comments-o" aria-hidden="true"></i>
                <span><i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
                <div class="dropdown-box basic">
                    <div class="drop-header ">
                        <h3><i class="fa fa-comments-o" aria-hidden="true"></i> Messages</h3>
                        <span class="number">120</span>
                    </div>
                    <div class="drop-content">
                        <div class="widget-list list-left-element">
                            <ul>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><img alt="John Doe" src="static/avatar_1.jpg" /></div>
                                        <div class="text">
                                            <span class="title">John Doe</span>
                                            <span class="subtitle">Lorem ipsum dolor sit.</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><img alt="Alice Smith" src="static/avatar_2.jpg" /></div>
                                        <div class="text">
                                            <span class="title">Alice Smith</span>
                                            <span class="subtitle">Deserunt, mollitia?</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><img alt="Klaus Wolf" src="static/avatar_3.jpg" /></div>
                                        <div class="text">
                                            <span class="title">Klaus Wolf</span>
                                            <span class="subtitle">Consectetur adipisicing elit.</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><img alt="Sun Li" src="static/avatar_4.jpg" /></div>
                                        <div class="text">
                                            <span class="title">Sun Li</span>
                                            <span class="subtitle">Tenetur tempora?</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><img alt="Sonia Valera" src="static/avatar_5.jpg" /></div>
                                        <div class="text">
                                            <span class="title">Sonia Valera</span>
                                            <span class="subtitle">Similique ad maxime.</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="drop-footer">
                        <a>See all messages</a>
                    </div>
                </div>
            </div>
            <div class="notice" id="alerts-notice">
                <i class="fa fa-bell-o" aria-hidden="true"></i>
                <span>4</span>
                <div class="dropdown-box basic">
                    <div class="drop-header">
                        <h3><i class="fa fa-bell-o" aria-hidden="true"></i> Notifications</h3>
                        <span class="number">4</span>
                    </div>
                    <div class="drop-content">
                        <div class="widget-list list-left-element list-sm">
                            <ul>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><i class="fa fa-warning color-warning"></i></div>
                                        <div class="text">
                                            <span class="title">8 Bugs</span>
                                            <span class="subtitle">reported today</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><i class="fa fa-flag color-danger"></i></div>
                                        <div class="text">
                                            <span class="title">Error</span>
                                            <span class="subtitle">sevidor C down</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><i class="fa fa-cog color-dark"></i></div>
                                        <div class="text">
                                            <span class="title">New Configuration</span>
                                            <span class="subtitle"></span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><i class="fa fa-tasks color-success"></i></div>
                                        <div class="text">
                                            <span class="title">14 Task</span>
                                            <span class="subtitle">completed</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="left-element"><i class="fa fa-envelope color-primary"></i></div>
                                        <div class="text">
                                            <span class="title">21 Menssage</span>
                                            <span class="subtitle"> (see more)</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="drop-footer">
                        <a>See all notifications</a>
                    </div>
                </div>
            </div>
            <div class="header-separator"></div>
        </div>
        <div class="header-section" id="user-headerbox">
            <div class="user-header-wrap">
                <div class="user-photo">
                    <img src="static/user-avatar.jpg" alt="Jane Doe" />
                </div>
                <div class="user-info">
                    <span class="user-name">Jane Doe</span>
                    <span class="user-profile">Admin</span>
                </div>
                <i class="fa fa-plus icon-open" aria-hidden="true"></i>
                <i class="fa fa-minus icon-close" aria-hidden="true"></i>
            </div>
            <div class="user-options dropdown-box">
                <div class="drop-content basic">
                    <ul>
                        <li> <a href="pages_user-profile.html"><i class="fa fa-user" aria-hidden="true"></i> Profile</a></li>
                        <li> <a href="pages_lock-screen.html"><i class="fa fa-lock" aria-hidden="true"></i> Lock Screen</a></li>
                        <li><a href="#"><i class="fa fa-cog" aria-hidden="true"></i> Configurations</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header-separator"></div>
        <div class="header-section">
            <a href="pages_sign-in.html"><i class="fa fa-sign-out log-out" aria-hidden="true"></i></a>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations, mapState} from 'vuex'

export default {
	name: 'vx-navbar',
    created () {
        this.setLanguage(localStorage.language || 'zh-CN')
    },
    methods: {
        ...mapMutations(['setLanguage']),
        setLang: function (argument) {
            localStorage.language = argument;            
            this.setLanguage(argument);
            // return store.state.lang = argument;
        }
    }
}
</script>

<style lang="scss">

</style>