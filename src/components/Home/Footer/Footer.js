import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <section className="container">
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">
                                Marriage Media <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the code. Marriage Media focuses on providing the most efficient code or snippets as the code wants to besimple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                            </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="/">Marriage</a>
                                </li>
                                <li>
                                    <a href="/">Event Management</a>
                                </li>
                                <li>
                                    <a href="/">Decoration</a>
                                </li>
                                <li>
                                    <a href="/">Photography</a>
                                </li>
                                <li>
                                    <a href="/">Event Design</a>
                                </li>
                                <li>
                                    <a href="/">Find Event</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">Service</a>
                                </li>
                                <li>
                                    <a href="/">Review</a>
                                </li>
                                <li>
                                    <a href="/">Dash Board</a>
                                </li>
                                <li>
                                    <a href="/">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-6 col-xs-12">
                            <p class="copyright-text">
                                Copyright &copy; 2021 All Rights Reserved by <a href="/">Bibaho</a>.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
