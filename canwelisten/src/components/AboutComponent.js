import React from 'react';
import { Card, CardImg, CardText, CardBody} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderAbout({about}) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={about.image} alt={about.name} />
                <CardBody>
                    <CardText>{about.description}</CardText>
                </CardBody>
            </Card>     
        </div>
    );            
}

    
function AboutInfo(props){
    if(props.about){
        return ( 
            <div className="container">
                <div className="row">
                <div className="col">
                <Breadcrumb>
                            <BreadcrumbItem><Link to="/Directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.about.name}</BreadcrumbItem>
                        </Breadcrumb>
                    <h2>{props.about.name}</h2>
                    <hr />
                </div>
            </div>
                <div className="row">
                    <RenderAbout cabout={props.about} />
                    
                </div>
            </div>
        );
    }
    return <div />;
        
    }



export default AboutInfo;