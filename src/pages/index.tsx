import {Badge, Col, Container, Row} from 'react-bootstrap';
import React from 'react';
import Avatar from '../components/Avatar';
import jsonResumeData from '../data/json_stub.json';
import {format} from 'date-fns';

const IndexPage = ({
                       resume: {
                           basics,
                           education,
                           languages,
                           skills,
                           work
                       }
                   }) => {

    return <Container>
        <Row>
            <Col sm={6} md={5}>
                <div style={{textAlign: 'center'}}>
                    <Avatar/>
                </div>
            </Col>
            <Col>
                <h2>{basics.name}</h2>
                <h4>{basics.label}</h4>

            </Col>
        </Row>
        <Row>
            <Col sm={6} md={5}>

                <h2>Summary</h2>
                {basics.summary}

                <h2>Contact</h2>
                <div>
                    <a href={'mailto:' + basics.email}>{basics.email}</a>
                </div>
                <div>
                    <a href={'tel:' + basics.phone}>{basics.phone}</a>
                </div>
                <div>
                    <a href={basics.url}>{basics.url}</a>
                </div>

                <h2>Skills</h2>
                {sortByStringProperty(skills, 'name')
                    .map(({name}, i) => (
                        <span key={'skill-' + i}>
                        <Badge bg='primary'>{name}</Badge>
                            {' '}
                    </span>
                    ))}

                <h2>Languages</h2>
                {sortByStringProperty(languages, 'language')
                    .map(({language, fluency}, i) => (
                        <span key={'lang-' + i}>
                        <Badge bg='primary'>{language}{': '}{fluency}</Badge>
                            {' '}
                    </span>
                    ))}

                <h2>Education</h2>
                {education
                    .map((ed, i) => (
                        <div key={'education-' + i}>
                            <Row>
                                <Col>
                                    <b>{ed.institution}</b>
                                </Col>
                                <Col style={{textAlign: 'right'}}>
                                    <b>
                                        {formatYear(ed.startDate)}
                                        {' - '}
                                        {formatYearOrNow(ed.endDate)}
                                    </b>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <em>
                                        {ed.area}
                                    </em>
                                </Col>
                            </Row>
                        </div>
                    ))
                }
            </Col>
            <Col>

                <h2>Work experience</h2>
                {work.map(({name, position, url, startDate, endDate, summary}, i) => (
                    <div key={'work-' + i}>
                        <Row>
                            <Col sm={6} md={8}>
                                <b>
                                    {position} @ <a href={url}>{name}</a>
                                </b>
                            </Col>
                            <Col style={{textAlign: 'right'}}>
                                <b>
                                    <b>
                                        {formatYear(startDate)}
                                        {' - '}
                                        {formatYearOrNow(endDate)}
                                    </b>
                                </b>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom: '1rem'}}>
                            <div dangerouslySetInnerHTML={{
                                __html: (summary || '').replaceAll("\n", "<br/>")
                            }}/>
                        </Row>
                    </div>
                ))}


            </Col>
        </Row>

    </Container>
}


export function getStaticProps() {

    return {
        props: {
            resume: jsonResumeData,
        },
    }

}

const sortByStringProperty = (array, property) => {
    return array.sort((x, y) => x[property].localeCompare(y[property]))
}

const formatYear = (date) => {
    return format(new Date(date), 'yyyy');
}
const formatYearOrNow = (date) => date == '' ?
    'now'
    : formatYear(date);

export default IndexPage
