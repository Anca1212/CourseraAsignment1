
import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay,
    CardText, CardBody, CardTitle,
    Breadcrumb, BreadcrumbItem, Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col, Label
} from 'reactstrap'


class DishDetail extends Component {


    RenderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    {/*<CardImg width="100%" src={dish.image} alt={dish.name}/>*/}
                    <CardImg src={this.props.dish.image} alt={this.props.dish.name}/>
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }


    RenderComments(comments) {

        if (comments != null) {

            let list = comments.map((comments) => {

                return (
                    <li key={comments.id}>
                        <div>
                            <p>{comments.comment}</p>
                            <p>--{comments.author},
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comments.date)))}</p>
                        </div>
                    </li>

                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>

                </div>
            );
        } else {
            return (<div></div>);
        }

    };

    // const DishDetail = (props) => {
    //     if (props.isLoading) {
    //         return (
    //             <div className="container">
    //                 <div className="row">
    //                     <menu></menu>
    //                 </div>
    //             </div>
    //         );
    //
    render(){
        if(this.props.dish != null) {
            return (

                <div className="row">
                    {this.RenderDish(this.props.dish)}
                    {this.RenderComments(this.props.dish.comments)}
                </div>
            );
        }

        // } else if (props.dish != null) {
        //     return (
        //         <div className="container">
        //             <div className="row">
        //
        //                 <div className="col-12">
        //                     <h3>{props.dish.name}</h3>
        //                     <hr/>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <RenderDish dish={props.dish}/>
        //                 <RenderComments
        //                     comments={props.comments}
        //                     addComment={props.addComment}
        //                     dishId={props.dish.id}
        //                 />
        //             </div>
        //         </div>
        //     )
        else {
            return (
                <div></div>
            )
        }
    }
}
export default DishDetail

