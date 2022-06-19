import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link"

class BodyHeader extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render() {
        return <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Nav style={{flexDirection: "row"}}>
                        {renderNavLinkWithFaIcon("fa-linkedin-square", "https://linkedin.com/in/prsiavelis")}
                        {renderNavLinkWithFaIcon("fa-github-alt", "https://github.com/siavelis")}
                    </Nav>
                </Navbar.Brand>
            </Navbar>
        </div>
    }
}

const renderNavLinkWithFaIcon = (faClassName: string, href: string) =>
    <Nav.Link href={href} style={{paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>
        <i className={"fa " + faClassName} aria-hidden="true"/>
    </Nav.Link>;

export default BodyHeader