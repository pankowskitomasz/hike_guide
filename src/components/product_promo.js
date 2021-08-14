import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";
import Button from "../../node_modules/react-bootstrap/Button";
import {Link} from "react-router-dom";

class ProductPromo extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-light-brw text-light-brw">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(          
            <Container fluid className="bg-hike minh-50vh d-flex align-items-center p-5 bg-white">     
                <Row className="mx-0 w-100 opacity-9">
                    <Col xs={12} md={11} xl={10} className="mx-auto">
                        <Row>
                            <Col xs={12} className="text-center text-orange my-4">
                                <h3 className="display-4 fw-bold text-uppercase">
                                    Let's go
                                </h3>
                                <p className="text-muted w-75 mx-auto">
                                    Adventure is waiting for you! Check our offer for 
                                    mountain hikes.
                                </p>
                            </Col>
                            <Col xs={10} md={6} lg={4} className="minh-25vh p-3 text-start mx-auto">
                                <Card className="h-100 shadow">
                                    <Card.Img src="../img/hike/hike_1.jpg"/>
                                    <Card.Body className="text-white bg-light-brw text-shadow">
                                        <h4 className="fw-bold">
                                            Individual
                                        </h4>
                                        <p className="initialism border-top pt-2">
                                            Single? No problem! We have perfect offer for you, just 
                                            our guide, you and nature!
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={10} md={6} lg={4} className="minh-25vh p-3 text-start mx-auto">
                                <Card className="h-100 shadow">
                                    <Card.Img src="../img/hike/hike_2.jpg"/>
                                    <Card.Body className="text-white bg-light-brw text-shadow">
                                        <h4 className="fw-bold">
                                            Groups
                                        </h4>
                                        <p className="initialism border-top pt-2">
                                            Hiking with friends? We have something for your group, 
                                            best places to see and camp.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={10} md={6} lg={4} className="minh-25vh p-3 text-start mx-auto">
                                <Card className="h-100 shadow">
                                    <Card.Img src="../img/hike/hike_3.jpg"/>
                                    <Card.Body className="text-white bg-light-brw text-shadow">
                                        <h4 className="fw-bold">
                                            Adventure
                                        </h4>
                                        <p className="initialism border-top pt-2">
                                            Discover amazing places, reach further than ordinary 
                                            tourist.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} className="text-center">
                                {linking}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProductPromo;