import React from 'react';
import { ACCOUNT } from '../shared/account';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function Home(props) {
    console.log(props)
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard ACCOUNT={ACCOUNT} />
                </div>
            </div>
        </div>
    )
}

export default Home;