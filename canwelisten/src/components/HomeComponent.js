import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({about}) {
    return (
        <Card>
            <CardImg src={about.image} alt={about.name} />
            <CardBody>
                <CardTitle>{about.name}</CardTitle>
                <CardText>{about.description}</CardText>
            </CardBody>
        </Card>
    )
}
function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.about} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.account} />
                </div>
                <div className="col-md m-1">
                <RenderCard item={props.sitemap} />
                </div>
            </div>
        </div>
    )
}

export default Home;