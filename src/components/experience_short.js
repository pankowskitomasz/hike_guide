import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class ExperienceShort extends Component{
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
            <Container fluid className={"bg-experience-short align-items-center d-flex p-0 pt-5 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 my-5 py-3">                    
                    <Col xs={12} md={8} lg={7} xl={6} className="minh-50vh d-flex align-items-center py-5 mx-auto">
                        <div className="p-5 text-center text-shadow">
                            <h1 className="display-6 text-white fw-bold text-uppercase">
                                Mountain Hiking
                            </h1>
                            <p className="text-white">
                                Hiking sometimes involves bushwhacking and is sometimes referred to as 
                                such. This specifically refers to difficult walking through dense forest, 
                                undergrowth, or bushes where forward progress requires pushing vegetation 
                                aside. In extreme cases of bushwhacking, where the vegetation is so dense 
                                that human passage is impeded.                                 
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default ExperienceShort;