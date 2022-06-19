import React from "react";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

class Page extends React.PureComponent {

    render() {
        const {children} = this.props;
        return <div className="bg-light">
            <NavigationBar/>
            {children}
            <Footer/>
        </div>
    }
}

export default Page