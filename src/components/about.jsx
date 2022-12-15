import React from 'react'
import Navbarx from './navbar';
import Card from 'react-bootstrap/Card';

function About(){
    return (
        <div className="about">
            <Navbarx />
            <Card className='m-5'>
                <Card.Body>
                <Card.Title><h1>About Us</h1></Card.Title>
                <Card.Text className='pt-3' style={{fontSize:"1.5em"}}>
                    Arichuvadi is an idea implemented to help people who do not know Tamil learn the language without adding pressure by using courses. It also serves as a translator while helping people learn the language. <br />
                    It was built using ReactJS as the frontend framework with NodeJS and couple of APIs in the backend. 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-5'>
                <Card.Body>
                <Card.Header as="h1">Team</Card.Header>
                <Card.Text style={{fontSize:"1.5em"}} className='pt-3'>
                    Dr Chellatamilan T - Mentor <br />
                    Jatin Manoj Athiottil - Backend and API Development<br />
                    Pavan K - Frontend Development
                </Card.Text>
                </Card.Body>
            </Card>
    </div>
    )
}

export default About;