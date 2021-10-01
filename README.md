# Changes
	### Change SPAWAR logos to NIWCPAC logos
	
	./src/components/Home/HomeComponent.js
		Line 2 
			- import spawarLogo from "../../images/SPAWAR_Logo.png"
			+ import niwcLogo from "../../images/NIWCPAC_Logo.png"
		Line 26
			- <img className="d-block mx-auto mb-4" src={spawarLogo} alt="" width="152" height="152"/>
			+ <img className="d-block mx-auto mb-4" src={niwcLogo} alt="" width="152" height="152"/>
			
	./src/components/HeaderComponents.js
		Line 2
			- import spawarLogo from "../../images/SPAWAR_Logo.png"
			+ import niwcLogo from "../../images/NIWCPAC_Logo.png"
		Line 21
			- <img className="d-block" src={spawarLogo} alt="" width="50" height="50"/>
			+ <img className="d-block" src={niwcLogo} alt="" width="50" height="50"/>
	
	
	### Add Contact Tab in header
	
	./src/components/HeaderComponents.js
		Line 39-41
			+ <li className="nav-item">
			+ <a className="nav-link" href="/contact">Contact</a>
			+ </li>
	
	### Add Training Focus Area field
	
	./src/components/Home/HomeComponent.js
		Line 82-92
			+
			+ <div className="row">
			+ 	 <div className="col-md-2"></div>
			+	 <div className="col-md-4 mb-1">
			+	     <label for="TrainingNumber">Training Focus Area<small className="text-muted">(Required)</small></label>
			+		 <input type="text-danger" className="form-control" name="TrainingNumber" placeholder="" required/>
			+		 <div className="invalid-feedback">
			+		     Training Focus Area is required.
			+		 </div>
			+	 </div>
			+ </div>
	
	### Change description text from SPAWAR to NIWC-PAC
	
	./src/components/Home/HomeComponent.js
		Line 27-28
			- <h2>50E20 SPAWAR Training Feedback Form</h2>
			- <p className="lead">Welcome to SPAWAR Training Feedback Form Screen. Please fill out all blanks to complete feedback. Thank you.</p>
			+ <h2>50E20 NIWCPAC Training Feedback Form</h2>
			- <p className="lead">Welcome to NIWC-Pacific Training Feedback Form Screen. Please fill out all blanks to complete feedback. Thank you.</p>
			
	