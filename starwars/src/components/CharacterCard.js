import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, 
} from 'reactstrap';

const CharacterCard = props => {
    return (
        <div className="character-card">
            <Card>
                <CardImg top width="100%" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/07/14/star-wars-logo.png" alt="Star Wars Name" />
                <CardBody>
                <CardTitle>Name: {props.name}</CardTitle>
                <CardSubtitle>Gender: {props.gender}</CardSubtitle>
                <CardText>Height: {props.height}</CardText>
                </CardBody>
            </Card>
         </div>
    )
}

export default CharacterCard;