import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class StoryDesc extends Component{
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
                                Our Story
                            </h1>
                            <p className="text-white">
                                Since 2012 Hike Guide has specialized in mind-blowing mountain adventures 
                                both locally and beyond.  From our backyard in Squamish &amp; Whistler, 
                                BC to peaks throughout Japan and Europe, our experiences are founded upon 
                                the assurance that our guests receive the pinnacle of quality.  Care is 
                                dedicated to each unique goal and need from start to finish.  We take 
                                great pride in teaming our guests with the best guides in the industry, 
                                all of whom are specifically chosen to facilitate their task at the 
                                highest level of performance.
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default StoryDesc;