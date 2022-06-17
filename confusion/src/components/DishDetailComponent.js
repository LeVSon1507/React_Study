import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
    if (dish == null) {
        return <div></div>;
    }
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({ comments }) {
    if (comments == null) {
        return <div></div>;
    }
    const showcmnts = comments.map((cmnt) => {
        return (
            <li key={cmnt.id}>
                <p>{cmnt.comment}</p>
                <p>
                    --{cmnt.author}, &nbsp;
                    {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                    }).format(new Date(cmnt.date))}
                </p>
            </li>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">{showcmnts}</ul>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );
    }
};

export default DishDetail;

// import React from 'react';
// import {Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText} from 'reactstrap';

//     function renderDish({dish}) {

//         if (dish != null) {
//                         return (
//                             <div className='col-12 col-md-5 m-1'>
//                                 <Card>
//                                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                                     <CardBody>
//                                         <CardTitle> {dish.name}</CardTitle>
//                                         <CardText> {dish.description} </CardText>
//                                     </CardBody>
//                                 </Card>
//                             </div>
//                         );
//                     }
//                     else {
//                         return (
//                             <div></div>
//                         );
//                     }

//     }

//     function renderComments({comments}) {

//         if (comments == null) {
//                         return (<div></div>)
//                     }
//                     const cmnts = comments.map(comments => {
//                         return (
//                             <li key={comments.id}>
//                                 <p>{comments.comment}</p>
//                                 <p>-- {comments.author},
//                                 &nbsp;
//                                 {new Intl.DateTimeFormat('en-US', {
//                                     year: 'numeric',
//                                     month: 'long',
//                                     day: '2-digit'
//                                 }).format(new Date(comments.date))}
//                                 </p>
//                             </li>
//                         )
//                     })
//                     return (
//                         <div className='col-12 col-md-5 m-1'>
//                             <h4> Comments </h4>
//                             <ul className='list-unstyled'>
//                                 {cmnts}
//                             </ul>

//                         </div>
//                     )

//     }

//     const  DishDetail = (props) => {
//         if(props.dish != null){
//             return(
//             <div className='container'>
//              <div className='row'>
//                  <renderDish dish={props.dish} />
//                  <renderComments comments={props.dish.comments} />
//              </div>
//             </div>
//             )
//         }
//     }

// export default DishDetail;

// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

// class DishDetail extends Component{
//     constructor(props) {
//         super(props);

//         console.log(props);

//         this.state = {
//             selectedDishDetail: this.props.dsdetail
//         };
//     }

//     componentDidMount(){
//         console.log('DishDetail Component componentDidMount invoked')
//     }

//     componentDidUpdate(){
//         console.log('DishDetail Component componentDidUpdate invoked')
//     }

//     renderDish(dish) {

//         if (dish != null) {
//             return (
//                 <div className='col-12 col-md-5 m-1'>
//                     <Card>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle> {dish.name}</CardTitle>
//                             <CardText> {dish.description} </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }

//     renderComments(comments){
//         if (comments == null) {
//             return (<div></div>)
//         }
//         const cmnts = comments.map(comment => {
//             return (
//                 <li key={comment.id}>
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: '2-digit'
//                     }).format(new Date(comment.date))}
//                     </p>
//                 </li>
//             )
//         })
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h4> Comments </h4>
//                 <ul className='list-unstyled'>
//                     {cmnts}
//                 </ul>

//             </div>
//         )
//     }

//     render(){

//         console.log('DishDetail Component render invoked')

//         const dish = this.props.dish

//         console.log(dish);

//         if (dish == null) {
//             return (<div></div>);
//         }

//         const dishItem = this.renderDish(dish);
//         const dishComment = this.renderComments(dish.comments);

//         return (
//             <div className='row'>
//                 {dishItem}
//                 {dishComment}
//             </div>
//         )
//     }

// }

// export default DishDetail;
