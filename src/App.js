import React from 'react';
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Home from "./components/Home/HomeComponent";
import Survey from "./components/Survey/SurveyComponent";
import Contact from "./components/Contact/ContactComponent";
import MetricsDashboard from "./components/MetricsDashboard/MetricsDashboardComponent";
import Privacy from "./components/Privacy/PrivacyComponent";
import Terms from "./components/Terms/TermsComponent";
import Support from "./components/Support/SupportComponent";


function App() {
    return (
    <div>
        <Header/>
        <Router>
            <Switch>
                <Route component={Survey} path={["/survey"]}/>
                <Route component={Contact} path={["/contact"]}/>
                <Route component={MetricsDashboard} path={["/metrics-dashboard"]}/>
                <Route component={Privacy} path={["/privacy"]}/>
                <Route component={Terms} path={["/terms"]}/>
                <Route component={Support} path={["/support"]}/>
                <Route component={Home} path={["/home","/"]}/>
            </Switch>
        </Router>
        <Footer/>
    </div>
    )
}
export default App;