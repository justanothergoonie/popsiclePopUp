# popsiclePopUp
popsiclePopUp is a pop up notification API with built in options for the user to customize. 

# User Options
 <ul>
    <li> Custom Message
    <li> Style Presets
    <li> Dismiss Button
    <li> Autodismiss After A Set Time
    <li> Progress Bar
</ul>

# How To Use
download the popsiclePopUpPublic file and put this script tag `<script src="popsicle.js"></script>` in your HTML and then go to the Javascript and call the following function and fill out your options 
<ol>
	<li>`popsicle({
	<li>message: '', //if no message is provided a preset message 'No Message Provided' will be put in its place
	<li>autoDismiss: , // set in milli second so 3seconds === '3000' 
	<li>type: '', //can be changed to 'All good' or 'danger' 
	<li>progressBar:, // if you would like a progress bar put 'true' or if not 'false' 
	<li>closeButton:, // if you would like a progress bar put 'true' or if not 'false' 
	<li>})`
</ol>
