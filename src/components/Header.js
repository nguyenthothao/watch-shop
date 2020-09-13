import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
        <div class="header-area">
            <div class="main-header header-sticky">
                <div class="container-fluid">
                    <div class="menu-wrapper">

                        <div class="logo">
                            <a href="/">
                            <img src="/resources/img/logo_wshop.png" alt=""/></a>
                        </div>

                        <div class="main-menu d-none d-lg-block">
                            <nav>                                                
                                <ul id="navigation">  
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">shop</a></li>
                                    <li><a href="/">about</a></li>
                                    <li class="hot"><a href="/">Latest</a>
                                        <ul class="submenu">
                                            <li><a href="/"> Product list</a></li>
                                            <li><a href="/"> Product Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Blog</a>
                                        <ul class="submenu">
                                            <li><a href="/">Blog</a></li>
                                            <li><a href="/">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Pages</a>
                                        <ul class="submenu">
                                            <li><a href="/">Login</a></li>
                                            <li><a href="/">Cart</a></li>
                                            <li><a href="/">Element</a></li>
                                            <li><a href="/">Confirmation</a></li>
                                            <li><a href="/">Product Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="header-right">
                            <nav>
                                <ul id="navigation">
                                
                                    <li>
                                        <div class="nav-search search-switch">
                                            <span class="flaticon-search"></span>
                                        </div>
                                    </li>
                                    <li><a href="/"><span class="flaticon-shopping-cart"></span></a> </li>
                                
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="mobile_menu d-block d-lg-none"></div>
                    </div>
                </div>
            </div>
        </div>
   );
}
}
export default Header;
