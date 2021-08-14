import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class HomeTop extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill border-dark-yellow text-dark-yellow">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"bg-home align-items-center d-flex p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 py-5 bg-home-cover">                    
                    <Col xs={12} lg={6} className="mx-auto p-0 py-5 minh-50vh d-flex align-items-center">
                        <div className="p-5 text-start">
                            <h1 className="display-4 text-orange fw-bold text-uppercase text-shadow">
                                It's Time
                            </h1>
                            <h1 className="display-6 text-orange fw-bold text-uppercase text-shadow">
                                For Hiking
                            </h1>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} lg={6}></Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeTop;