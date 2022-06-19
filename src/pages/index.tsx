import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import NavigationBar from "../components/NavigationBar"
import Avatar from "../components/Avatar";
import Page from "../components/Page";

// todo: add theme changer ...


// layout component
// method for generating navbar
// method for generating footer


function IndexPage() {
    return <Page>
        <div className="bg-info text-white">
            <div className='p-5'>
                <Row>
                    <Avatar/>
                    <Col xs={12} sm={6} md={8} lg={{span: 6}}>
                        <h6>Hello, my name is</h6>
                        <h5 className="mt-0 display-4 font-weight-bold">Panagiotis Riccardo Siavelis</h5>
                        <h5>
                            I am a full stack developer.
                            I like undertaking challenging tasks that mostly require out of the box approaches.
                            I also love to build high quality modular solutions to enhance expandability and
                            maintainability.
                        </h5>
                    </Col>
                </Row>
            </div>
        </div>
        <div className="pt-3">
            <Container>
                <h3 className="font-weight-bold text-center mb-3">Skills Overview</h3>
                <div className="section-intro mx-auto text-center mb-5 text-secondary">
                    I have more than 6 years experience developing software solutions for clients all over the world.
                    I like effortful problems, whatever the programming language.
                    Below is a quick overview of my main technical skill sets and tools I use.
                </div>

                <Row>
                    <Col md={{span: 6}} sm={6}>
                        {skillsCard("Backend", [
                            ".NET, .NET Core, NancyFx (MVC)",
                            "Java, Kotlin, Spring Framework",
                            "MongoDB, MySQL, InfluxDB, ElasticSearch",
                            "MQTT, RabbitMQ, Kafka",
                        ])}
                    </Col>
                    <Col md={{span: 6}} sm={6}>
                        {skillsCard("Frontend", [
                            "NodeJS",
                            "WebSockets",
                            "ReactJS",
                            "Redux",
                        ])}
                    </Col>

                    <Col md={{span: 6, offset: 3}} sm={{span: 6, offset: 3}}>
                        {skillsCard("Programming languages", [
                            "C#",
                            "Java",
                            "Python",
                            "TypeScript/JavaScript"
                        ])}
                    </Col>
                </Row>
            </Container>
        </div>
    </Page>
}

const skillsCard = (header: string, skills: string[]) =>
    <div className="bg-white shadow-sm py-4 px-5 mb-2">
        <h4 className="text-center">{header}</h4>
        <ul className="skills-list list-unstyled text-secondary">
            {skills.map((skill, key) =>
                <li key={key} className="mb-2">
                    <i className="fa fa-check mr-2 text-primary"/> {skill}
                </li>
            )}
        </ul>
    </div>


export default IndexPage