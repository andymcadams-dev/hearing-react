import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({account}) {
    return (
                <div style={{border: '2px solid'}}>
                    <Card>
                        <Link to={`/directory/${account.id}`}>
                        <CardImg height="120" width="180" src={account.image} alt={account.name} />
                        <CardBody>
                            <CardTitle>{account.name}</CardTitle>
                        </CardBody>
                        </Link>
                    </Card>
                </div>
    )
}

//This creates the directory component - also controlling the size and layout of the cards
function Directory(props){
    const directory = props.account.map(account => {
        return (
            <Col md={2} style={{margin:"1em"}} key={account.id} >
                <RenderDirectoryItem account={account} />
            </Col>
        )
    });

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Account</BreadcrumbItem>
                    </Breadcrumb>
                    {/* Title of page*/}
                    <h2>Account</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
        
    );
}


export default Directory;