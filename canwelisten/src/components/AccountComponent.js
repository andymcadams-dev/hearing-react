import React from 'react';
import { Card, CardImg, CardText, CardBody} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({ACCOUNT}) {
  return (
      <React.Fragment>
      <Card>
          <CardImg src={ACCOUNT[0].image} alt={ACCOUNT[0].name} />
              <CardBody>
                  <CardTitle>{ACCOUNT[0].name}</CardTitle>
                  <CardText>{ACCOUNT[0].description}</CardText>
              </CardBody>
      </Card>
      <Card>
          <CardImg src={ACCOUNT[1].image} alt={ACCOUNT[1].name} />
              <CardBody>
                  <CardTitle>{ACCOUNT[1].name}</CardTitle>
                  <CardText>{ACCOUNT[1].description}</CardText>
              </CardBody>
      </Card>
      <Card>
  <CardImg src={ACCOUNT[2].image} alt={ACCOUNT[2].name} />
          <CardBody>
              <CardTitle>{ACCOUNT[2].name}</CardTitle>
              <CardText>{ACCOUNT[2].description}</CardText>
          </CardBody>
  </Card>
</React.Fragment>
); 
}
// function RenderAccount({account}) {
//     return (
//         <div className="col-md-5 m-1">
//             <Card>
//                 <CardImg top src={account.image} alt={account.name} />
//                 <CardBody>
//                     <CardText>{account.description}</CardText>
//                 </CardBody>
//             </Card>     
//         </div>
//     );            
// }
// function AccountInfo(props){
//     if(props.account){
//         return ( 
//             <div className="container">
//               <div className="row">
//                 <div className="col">
//                   <Breadcrumb>
//                     <BreadcrumbItem><Link to="/Directory">Directory</Link></BreadcrumbItem>
//                     <BreadcrumbItem active>{props.account.name}</BreadcrumbItem>
//                   </Breadcrumb>
//                   <h2>{props.account.name}</h2>
//                   <hr />
//                 </div>
//             </div>
//             <div className="row">
//               <RenderAccount account={props.account} />
//             </div>
//           </div>
//         );
//     }
//     return <div />;   
//   }



// export default AccountInfo;