import {Badge, Col, Container, Row} from 'react-bootstrap';
import Head from 'next/head';
import React from 'react';
import Avatar from '../components/Avatar';
import jsonResumeData from '../data/json_stub.json';
import {format, isValid} from 'date-fns';

const SKILL_CATEGORY_ORDER = ['Languages', 'Frameworks', 'Data & Messaging', 'Infrastructure', 'Architecture'];

const IndexPage = ({
                       resume: {
                           basics,
                           education,
                           languages,
                           skills,
                           work,
                           certificates,
                       }
                   }) => {

    const groupedSkills = groupSkillsByCategory(skills);

    return <>
        <Head>
            <title>{`${basics.name} — ${basics.label}`}</title>
            <meta name="description" content={basics.summary}/>
            <meta property="og:title" content={`${basics.name} — ${basics.label}`}/>
            <meta property="og:description" content={basics.summary}/>
            <meta property="og:type" content="profile"/>
        </Head>
        <Container>
            {/* Hero Section */}
            <Row className="hero">
                <Col xs={12} md={4} className="hero-photo">
                    <Avatar/>
                </Col>
                <Col xs={12} md={8}>
                    <h1 className="hero-name">{basics.name}</h1>
                    <div className="hero-label">{basics.label}</div>
                    <div className="hero-location">
                        <i className="fa fa-map-marker" aria-hidden="true"/>{' '}
                        {basics.location?.address || 'Greece'}
                    </div>
                    <div className="contact-links">
                        {basics.email && (
                            <a href={'mailto:' + basics.email}>
                                <i className="fa fa-envelope" aria-hidden="true"/> {basics.email}
                            </a>
                        )}
                    </div>
                    <div className="hero-summary">{basics.summary}</div>
                </Col>
            </Row>

            {/* Main Content: two-column on desktop */}
            <Row>
                {/* Left Column — Skills, Education, Languages */}
                <Col xs={12} md={4} className="sidebar-section">
                    <h2>Skills</h2>
                    {SKILL_CATEGORY_ORDER
                        .filter(category => groupedSkills[category]?.length > 0)
                        .map(category => (
                            <div key={category} className="skill-category">
                                <div className="skill-category-label">{category}</div>
                                {groupedSkills[category].map(({name}, i) => (
                                    <Badge key={`${category}-${i}`} bg="primary">{name}</Badge>
                                ))}
                            </div>
                        ))}

                    <h2>Education</h2>
                    {education.map((ed, i) => (
                        <div key={`education-${i}`} className="edu-entry">
                            <div className="edu-header">
                                <span className="edu-institution">{ed.institution}</span>
                                <span className="edu-dates">
                                    {formatYear(ed.startDate)} — {formatYearOrNow(ed.endDate)}
                                </span>
                            </div>
                            <div className="edu-degree">
                                {ed.studyType}{ed.area ? ` — ${ed.area}` : ''}
                            </div>
                        </div>
                    ))}

                    <h2>Languages</h2>
                    {sortByStringProperty(languages, 'language').map(({language, fluency}, i) => (
                        <div key={`lang-${i}`} className="language-entry">
                            <span className="language-name">{language}</span>{' '}
                            <span className="language-fluency">· {fluency}</span>
                        </div>
                    ))}

                    {certificates?.length > 0 && (
                        <>
                            <h2>Certifications</h2>
                            {certificates.map((cert, i) => (
                                <div key={`cert-${i}`} className="cert-entry">
                                    <div className="cert-name">{cert.name}</div>
                                    <span className="cert-issuer">{cert.issuer}</span>
                                    {cert.url && (
                                        <>
                                            {' · '}
                                            <a href={cert.url} target="_blank" rel="noopener noreferrer">
                                                Verify
                                            </a>
                                        </>
                                    )}
                                </div>
                            ))}
                        </>
                    )}
                </Col>

                {/* Right Column — Work Experience */}
                <Col xs={12} md={8}>
                    <h2>Work Experience</h2>
                    {work.map(({name, position, url, startDate, endDate, summary, location}, i) => (
                        <div key={`work-${i}`} className="work-entry">
                            <div className="work-header">
                                <div>
                                    <span className="work-position">{position}</span>
                                    <span className="work-company">
                                        {' @ '}
                                        {url ? <a href={url}>{name}</a> : name}
                                    </span>
                                </div>
                                <span className="work-dates">
                                    {formatYear(startDate)} — {formatYearOrNow(endDate)}
                                </span>
                            </div>
                            {location && <div className="work-location">{location}</div>}
                            <div className="work-summary">
                                {renderSummary(summary)}
                            </div>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    </>;
};

export function getStaticProps() {
    return {
        props: {
            resume: jsonResumeData,
        },
    };
}

function groupSkillsByCategory(skills): Record<string, { name: string }[]> {
    const groups: Record<string, { name: string }[]> = {};
    for (const skill of skills) {
        const cat = skill.category || 'Other';
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push({name: skill.name});
    }
    return groups;
}

function renderSummary(summary: string | null) {
    if (!summary) return null;

    if (summary.startsWith('TODO:')) {
        return <span className="todo-placeholder">{summary}</span>;
    }

    const lines = summary
        .split('\n')
        .map(l => l.trim())
        .filter(l => l.length > 0);

    const hasBullets = lines.every(l => l.startsWith('-'));
    if (hasBullets) {
        return (
            <ul>
                {lines.map((line, i) => (
                    <li key={i}>{line.replace(/^- /, '')}</li>
                ))}
            </ul>
        );
    }

    return <p>{summary}</p>;
}

const sortByStringProperty = (array, property) => {
    return array.sort((x, y) => x[property].localeCompare(y[property]));
};

const formatYear = (date) => {
    if (!date) return '';
    const parsedDate = new Date(date);
    if (!isValid(parsedDate)) return '';
    return format(parsedDate, 'yyyy');
};

const formatYearOrNow = (date) => !date ? 'now' : formatYear(date);

export default IndexPage;
