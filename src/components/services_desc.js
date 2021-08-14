import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class ServicesDesc extends Component{
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
            <Container fluid className={"bg-light-brw align-items-center d-flex p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100">                    
                    <Col xs={12} lg={6} className="minh-50vh bg-services-desc"></Col>
                    <Col xs={12} lg={6} className="minh-25vh d-flex align-items-center py-lg-5">
                        <div className="p-5 text-start text-shadow">
                            <h1 className="display-6 text-white fw-bold text-uppercase">
                                Treks
                            </h1>
                            <p className="text-white">
                                Simple journeys through mountain valleys, without climbing, no 
                                additional equipment required, no special preparations needed. 
                                Just take your standard bag and go. Adviced for beginners.
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ServicesDesc;