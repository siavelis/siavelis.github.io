import React from "react";
import {Nav, Navbar} from "react-bootstrap";

class NavigationBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render() {
        return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>
                <Nav style={{flexDirection: "row"}}>
                    {renderNavLink("/", <span>prsiavelis</span>)}
                    {renderNavLinkWithFaIcon("https://linkedin.com/in/prsiavelis", "fa-linkedin-square")}
                    {renderNavLinkWithFaIcon("https://github.com/siavelis", "fa-github-alt")}
                </Nav>
            </Navbar.Brand>
        </Navbar>
    }
}

const renderNavLink = (href, children) =>
    <Nav.Link href={href} style={{paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>
        {children}
    </Nav.Link>;
const renderNavLinkWithFaIcon = (href, faClassName) => renderNavLink(
    href,
    <i className={"fa fa-lg " + faClassName} aria-hidden="true"/>
);

export default NavigationBar