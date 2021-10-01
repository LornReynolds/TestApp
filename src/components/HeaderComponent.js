import React, {Component} from 'react';
import spawarLogo from "./../images/SPAWAR_Logo.png"

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {
    }

    render = () => {
        return (
            <nav className="navbar navbar-expand-md">
                {/* Top Left logo
                <a className="navbar-brand" href="#"><img className="d-block" src="https://www.public.navy.mil/NAVWAR/NIWC-pacific/publishingImages/Default_Site_Logo.png" alt="" width="50" height="50"></a> */}
                <a className="navbar-brand" href="/home">
                    <img className="d-block" src={spawarLogo} alt="" width="50" height="50"/>
                </a>

                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/survey">Survey Page</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/metrics-dashboard">Metrics Dashboard</a>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
export default HeaderComponent;