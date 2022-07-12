import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

export const NavigationBar = ({isDark, darkModeToggleComponent}) => {

    const variant = isDark ? 'dark' : 'light';
    return <Navbar
        expand='lg'
        bg={variant}
        variant={variant}
    >
        <Container>
            <Navbar.Brand>
                <Nav
                    style={{flexDirection: 'row'}}
                >
                    {renderNavLink('/', <Navbar.Brand>prsiavelis</Navbar.Brand>)}
                    {renderNavLinkWithFaIcon('https://linkedin.com/in/prsiavelis', 'fa-linkedin-square')}
                    {renderNavLinkWithFaIcon('https://github.com/siavelis', 'fa-github-alt')}
                </Nav>
            </Navbar.Brand>
            <Navbar.Text>
                {darkModeToggleComponent}
            </Navbar.Text>
        </Container>
    </Navbar>
}

const renderNavLink = (href, children) =>
    <Nav.Link
        href={href}
        style={{
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem'
        }}>
        {children}
    </Nav.Link>;
const renderNavLinkWithFaIcon = (href, faClassName) => renderNavLink(
    href,
    <i className={'fa fa-lg ' + faClassName} aria-hidden='true'/>
);

export default NavigationBar