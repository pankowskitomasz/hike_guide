import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class Review extends Component{
    render(){
        return(          
            <Container fluid className="bg-review minh-50vh d-flex align-items-center p-5 bg-white">     
                <Row className="mx-0 w-100 opacity-9">
                    <Col xs={12} md={11} xl={10} className="mx-auto">
                        <Row>
                            <Col xs={10} lg={4} className="p-3 text-center mx-auto">                                                             
                                <blockquote className="blockquote text-dark">
                                    I'm an inexperienced rock climber. Crosby spent some time with me on 
                                    basics at a rock wall before doing the "real deal" on granite for the 
                                    first time. Safety was his primary focus. What a great teacher!
                                    <footer className="blockquote-footer mt-3 fw-bold">
                                        Eric McRory
                                    </footer>
                                </blockquote> 
                            </Col>
                            <Col xs={10} lg={4} className="p-3 text-center mx-auto">                                
                                <blockquote className="blockquote text-dark">
                                    These guys are awesome! I just completed a weekend of mountaineering 
                                    courses with Ross, Ben and Brian. These guys are consummate professionals 
                                    as one would expect of certified mountain guides, but they were also 
                                    super fun!
                                    <footer className="blockquote-footer mt-3 fw-bold">
                                        Dugan Selkirk
                                    </footer>
                                </blockquote>                                
                            </Col>
                            <Col xs={10} lg={4} className="p-3 text-center mx-auto">                                                             
                                <blockquote className="blockquote text-dark">
                                    "I had a great time with these Mountain Guides. I've taken two rock 
                                    climbing courses with them so far. The instructor was excellent and 
                                    I plan to take a third course!"
                                    <footer className="blockquote-footer mt-3 fw-bold">
                                        Colin Ley
                                    </footer>
                                </blockquote> 
                            </Col>
                            <Col xs={12} className="text-center text-orange my-4">
                                <h5 className="lead fw-bold text-uppercase">
                                    Our motto
                                </h5>
                                <p className="text-dark w-75 mx-auto lead fst-italic">
                                    <q>
                                        Fun is fun when it's safe, keep safe keep fun
                                    </q>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Review;