import React, {Component} from 'react';
import spawarLogo from "../../images/SPAWAR_Logo.png"

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
    }

    componentWillUnmount = () => {
    }

    handleSubmit = (e) => {
        for (var i = 0; i < 16; i++) {
            console.log(e.currentTarget[i.toString()].value);
        }
        console.log("Submitted!");
    }

    render = () => {
        return (
            <div className="container">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={spawarLogo} alt="" width="152" height="152"/>
                    <h2>50E20 SPAWAR Training Feedback Form</h2>
                    <p className="lead">Welcome to SPAWAR Training Feedback Form Screen. Please fill out all blanks to complete feedback. Thank you.</p>
                </div>

                <form action="" className="main-form needs-validation" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mb-1">
                            <label for="TrainingName">Name<small className="text-muted">(Required)</small></label>
                            <input type="text" className="form-control" name="TrainingName" placeholder="" required/>
                            <div className="invalid-feedback">
                            Name is required.
                            </div>
                        </div>
                        <div className="col-md-4 mb-1">
                            <label for="TrainingName">Department<small className="text-muted">(Required)</small></label>
                            <input type="text" className="form-control" name="TrainingName" placeholder="" required/>
                            <div className="invalid-feedback">
                            Department is required.
                            </div>
                        </div>
                    </div>

                    <div className="row text-ce">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mb-1">
                            <label for="TrainingNumber">Training Event Title<small className="text-muted">(Required)</small></label>
                            <input type="text-danger" className="form-control" name="TrainingNumber" placeholder="" required/>
                            <div className="invalid-feedback">
                                Training Event Title is required.
                            </div>
                        </div>
                        <div className="col-md-4 mb-1">
                            <label for="TrainingNumber">Training Event Class Days</label>
                            <input type="text-danger" className="form-control" name="TrainingNumber" placeholder=""/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mb-1">
                            <label for="TrainingNumber">Training Document Number<small className="text-muted">(Required)</small></label>
                            <input type="text-danger" className="form-control" name="TrainingNumber" placeholder="" required/>
                            <div className="invalid-feedback">
                            Training Document Number is required.
                            </div>
                        </div>
                        <div className="col-md-4 mb-1">
                            <label for="TrainingNumber">Vendor<small className="text-muted">(Required)</small></label>
                            <input type="text-danger" className="form-control" name="TrainingNumber" placeholder="" required/>
                            <div className="invalid-feedback">
                            Vendor is required.
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                    </div>

                    <hr className="mb-4"/>
                    <div>
                        <h4 className="text-center">REASONS FOR ATTENDING</h4>
                        <div className="row">
                            <div className="col-md-4 col-sm-2"></div>
                            <div className="col-md-4 col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios0" value="option0" required/>
                                <label className="form-check-label" for="exampleRadios0">
                                    My supervisor/manager wanted me to attend
                                </label>
                            </div>
                            </div>  
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-2"></div>
                            <div className="col-md-4 col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1"/>
                                <label className="form-check-label" for="exampleRadios1">
                                    Course is required for a professional certification
                                </label>
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-2"></div>
                            <div className="col-md-4 col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label className="form-check-label" for="exampleRadios2">
                                    I needed Continuous Learning Points
                                </label>
                            </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4 col-sm-2"></div>
                            <div className="col-md-4 col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3"/>
                                <label className="form-check-label" for="exampleRadios3">
                                    Course is required for my IDP/CDM or Career Plan
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mb-4"/>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mb-3">
                            <label for="fullname">What was the most valuable part of the course? <small className="text-muted">(Required)</small></label>
                            <input type="text" className="form-control" id="fullname" placeholder="" required=""/>
                            <div className="invalid-feedback">
                                Response is required
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="cc-number">How will you use what you learned in this course on your job? <small className="text-muted">(Required)</small></label>
                            <input type="text" className="form-control" id="CAC-number" placeholder="" required=""/>
                            <div className="invalid-feedback">
                                Response is required
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mb-3">
                            <label for="Date">What was the least valuable part of the course? <small className="text-muted">(Required)</small></label>
                            <input type="text" className="form-control" id="Date" placeholder="" required=""/>
                            <div className="invalid-feedback">
                                Response required.
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 form-group green-border-focus">
                            <label for="exampleFormControlTextarea5">Other NIWC Pacific Engineering courses you would like to see provided: <small className="text-muted">(Required)</small></label>
                            <textarea className="form-control" placeholder="Please provide feedback here..." id="exampleFormControlTextarea5" rows="2å" required></textarea>
                        </div>
                    </div>
            
                    <hr className="mb-4"/>
                    <div className="text-center">
                        <button className="col-md-5 mb-4 btn btn-primary btn-md" 
                            type="submit">
                                Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default HomeComponent;