import React, {Component} from 'react';
import {useImage} from 'react-image';

class FooterComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {
    }

    render = () => {
        return (
            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2021 50E20</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="/privacy">Privacy</a></li>
                    <li className="list-inline-item"><a href="/terms">Terms</a></li>
                    <li className="list-inline-item"><a href="/support">Support</a></li>
                </ul>
            </footer>
        )
    }
}
export default FooterComponent;