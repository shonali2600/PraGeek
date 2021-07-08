import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Navbar() {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <ul class="main-navigation">
                        <li>
                            <Link to='/engg' className="nav-links" >
                                Engineering
                            </Link>
                            <ul>
                                <li>
                                    <Link to='/engg/cs' className="nav-links" >
                                        Computer Science
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to='/engg/cs/dsa' className="nav-links" >
                                                DSA
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/engg/cs/webdev' className="nav-links" >
                                                Web Dev
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to='/mngmt' className="nav-links" >
                            Management
                            </Link>
                            <ul>
                                <li>
                                    <Link to='/mngmt/marketing' className="nav-links" >
                                        Marketing
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to='/mngmt/marketing/dummy1' className="nav-links" >
                                                Lorem Ipsum11
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/mngmt/lo/dummy2' className="nav-links" >
                                                Lorem Ipsum12
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/mngmt/hotel' className="nav-links" >
                                        Hotel
                                    </Link>
                                    <ul>
                                        <li>
                                            <Link to='/mngmt/hotel/dummy12' className="nav-links" >
                                                Lorem Ipsum21
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/mngmt/hotel/dummy22' className="nav-links" >
                                                Lorem Ipsum22
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{ width: "100%" }}>
                <form style={{ align: "center", width: "50%", paddingTop: "5vh", paddingLeft: "2vh" }} class="example">
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
        </>
    );
}

export default Navbar;
