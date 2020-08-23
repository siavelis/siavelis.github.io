import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link"

interface HeadProps {
    pathname: string;
}

class BodyHeader extends React.Component<HeadProps> {
    constructor(props) {
        super(props);
        this.state = {expanded: false};
    }

    render() {
        const {pathname} = this.props;
        return <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Nav style={{flexDirection: "row"}}>
                        {renderNavLinkWithFaIcon("fa-linkedin-square", "https://linkedin.com/in/prsiavelis")}
                        {renderNavLinkWithFaIcon("fa-github-alt", "https://github.com/siavelis")}
                    </Nav>
                </Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="responsive-navbar-nav"/>*/}
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav" >
                    {/*<Nav>*/}
                    {/*    {renderLinkNavLink("About", pathname, "/")}*/}
                    {/*    {renderLinkNavLink("Resume", pathname, "/resume")}*/}
                    {/*    {renderLinkNavLink("Contact", pathname, "/contact")}*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Navbar>
        </div>
    }
}

const renderLinkNavLink = (link: string, activeHref: string, href: string) =>
    <Link href={href} passHref={true}>
        <Nav.Link active={activeHref == href}>{link}</Nav.Link>
    </Link>;

const renderNavLinkWithFaIcon = (faClassName: string, href: string) =>
    <Nav.Link href={href} style={{paddingLeft: "0.5rem", paddingRight: "0.5rem"}}>
        <i className={"fa " + faClassName} aria-hidden="true"/>
    </Nav.Link>;

export default BodyHeader