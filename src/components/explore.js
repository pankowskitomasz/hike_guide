import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class Explore extends Component{
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
            <Container fluid className={"bg-explore align-items-center d-flex p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 py-5 bg-home-cover">                    
                    <Col xs={12} lg={8}></Col>
                    <Col xs={12} lg={4} className="mx-auto p-0 py-5 minh-50vh d-flex align-items-center text-end">
                        <div className="p-5 ms-auto">
                            <h1 className="display-6 text-orange fw-bold text-uppercase text-shadow">
                                Explore
                            </h1>
                            <h1 className="lead text-light fw-bold text-uppercase text-shadow">
                                Leave limits behind
                            </h1>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Explore;