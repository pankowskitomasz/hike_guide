import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class StoryExt extends Component{
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
                    <Col xs={12} lg={6} className="minh-25vh d-flex align-items-center py-lg-5 order-2 order-lg-1">
                        <div className="p-5 text-start text-shadow">
                            <h1 className="display-6 text-white fw-bold text-uppercase">
                                Origin
                            </h1>
                            <p className="text-white">
                                Hike Guide was designed and built upon a foundation of three core goals: 
                                to Recreate, Elevate and Actuate.  RECREATE (because if you’re not having 
                                fun it’s not worth doing), to ELEVATE guided experiences by developing 
                                new, higher-end adventures for skiers and climbers and to ACTUATE 
                                sustainable career opportunities for our community of Certified Guides to 
                                do what they love- share their passion with our guests.
                            </p>
                            {linking}
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="minh-50vh bg-services-ext order-1 order-lg-2"></Col>
                </Row>
            </Container>    
        );
    }
}

export default StoryExt;