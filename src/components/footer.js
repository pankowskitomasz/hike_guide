import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            if(idx<4) return <li key={idx}>
                <Link to={item.path} className="fw-normal text-white text-decoration-none">
                    {item.name}
                </Link>
            </li>;
        });
        let userContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            if(idx>=4) return <li key={idx}>
                <Link to={item.path} className="text-white">
                    {item.name}
                </Link>
            </li>;
        });

        return(      
            <footer className="bg-footer pt-5 text-white">
                <Container fluid className="p-3 z-index-0 text-shadow">
                    <Row className="mx-0 w-100">
                        <Col xs={12} lg={4} className="text-center text-lg-start pb-3">
                            <h6 className="text-orange">About us</h6>
                            <p class="initialism small">
                                We are top mountain hiking guide company, with 16 years
                                of tradition. Thanks to our guides professionalism we 
                                never had any accident and we always care about our customers.
                            </p>
                        </Col>
                        <Col xs={12} sm={4} lg={2} className="text-center text-lg-end">
                            <h6 className="text-orange">User</h6>
                            <ul class="list-unstyled">
                                {userContent}
                            </ul>
                        </Col>
                        <Col xs={12} sm={4} lg={3} className="text-center text-lg-end">
                            <h6 className="text-orange">Menu</h6>
                            <ul className="list-unstyled">
                                {menuContent}
                            </ul>
                        </Col>
                        <Col xs={12} sm={4} lg={3} className="text-center text-lg-end">
                            <h6 className="text-orange">Social</h6>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="https://www.facebook.com">
                                        <span className="fa fa-facebook text-white"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.twitter.com">
                                        <span className="fa fa-twitter text-white"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com">
                                        <span className="fa fa-instagram text-white"></span>
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="mx-0 text-center w-100 border-top border-orange">
                        <Col xs={10} className="mx-auto">
                            <small className="my-0 text-white">
                                Copyright &copy; 2021-2022 Tomasz Pankowski. All rights reserved. 
                                <Link to={this.props.privacyLink.href} className="text-white text-decoration-none ms-1">
                                     {this.props.privacyLink.name}
                                </Link>
                            </small>
                        </Col>
                    </Row>
                </Container> 
            </footer> 
        );
    }
}

export default Footer;