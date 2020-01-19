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


`popsicle({

     message: '', //if no message is provided a preset message 'No Message Provided' will be put in its place

     autoDismiss: , // set in milli second so 3seconds === '3000' 

     type: '', //can be changed to 'All good' or 'danger' 

     progressBar:, // if you would like a progress bar put 'true' or if not 'false' 

     closeButton:, // if you would like a progress bar put 'true' or if not 'false' 

})`


# Code 

`
let popsicle = function(userOptions) {     //sets up the function popsicle

	let defaultOptions = {                     // sets the default options for the popsicle so that if no options are chosen it still get styled
 
		message: 'No message spceified',           
		closeButton: true,                         
		autoDismiss: 3000,
		progressBar: true,
	}

	let options = {...defaultOptions, ...userOptions}
	

	let newPopsicle = document.createElement('div')   //creates the popsicle pop up itself
 
	newPopsicle.style.minWidth = '250px'              // if you would like a wider or less wide pop up change this
 
	newPopsicle.style.backgroundColor = 'white'       // change to any color youd like 
 
	newPopsicle.style.position= 'fixed'               // this makes it so even if you scroll the popsicle will stay in place
 
	newPopsicle.style.top= '20px'                     // determines how many pixles from the top popsicle will be
 
	newPopsicle.style.left= '20px'                    // determines how many pixles from the left popsicle will be if desired change to style.right to make it on the right side of the screen
                                                    
	newPopsicle.style.padding= '25px'                 // dont mess with this
 
	newPopsicle.style.boxShadow= '3px 9px 8px 0px rgba(0,0,0,0.5)' //dont mess with this
 
	newPopsicle.style.radius= '5px'                   // dont mess with this
 
	document.body.appendChild(newPopsicle)            // applies the popsicle to the body without having to add a div in HTML
 
	newPopsicle.innerHTML = options.message           // applies your message to the popsicle. dont mess with this

	if (options.closeButton){                         // if statement to set the styles of closeButton if you chose to have one
 
		let closeButton = document.createElement('div')  // creates the close button as a div
  
		newPopsicle.appendChild(closeButton)             // attaches the closeButton div to the popsicle 
  
		closeButton.innerHTML = 'x'                      // sets the close button as an 'x'
  
		closeButton.style.minWidth = '10px'              // sets height of the close button
  
		closeButton.style.minHeight = '10px'             // sets width of close button
  
		closeButton.style.backgroundColor = 'red'        // sets the background color of the button
  
		closeButton.style.position = 'absolute'          // makes it so the button stays on the popsicle as you scroll
  
		closeButton.style.right = '8px'                  // sets it so the close button is 8 pixles from the right of the inside    of the button 
  
		closeButton.style.top = '10px'                   // sets it so the close button is 10 pixles from the top of the inside     of the button 

		closeButton.addEventListener('click',function(){ // this makes the closeButton actually closeable on click 
			newPopsicle.remove()
		})
	}
	
	if 	(options.type === 'Danger') {                    // this sets up what it should look like if you have your option set to danger
 
		newPopsicle.style.borderLeft = 'solid red 5px'      // sets the style, color, and size of the status indicator 
  
	} else if (options.type === 'All good') {            // this sets up what it should look like if you have your option set to All good
 
		newPopsicle.style.borderLeft = 'solid #66ff00 5px'  // sets the style, color, and size of the status indicator
	}

	if (options.autoDismiss) {                           // if statement to set up auto.Dismiss if you choose to have it
 
		if (options.progressBar){                           // if statement to style a progress bar if you choose to have it, will   only work if you chose to have an autoDismiss
  
			let progressBar = document.createElement('div')    // creates a div in HTML for the progress bar
   
			newPopsicle.appendChild(progressBar)               // appends the progress bar to the popsicle 
   
			progressBar.style.position = 'absolute'            // makes it so the bar stays on the popsicle as you scroll
   
			progressBar.style.bottom = 0                       // dont mess with this
   
			progressBar.style.left = 0                         // dont mess with this
   
			progressBar.style.height = '6px'                   // sets the height of the bar to 6pixles
   
			progressBar.style.backgroundColor = '#ccc'         // makes the bar gray, set to your preferred color
   
			progressBar.style.transition = (options.autoDismiss)/1000 + 's'   // makes it so the progress bar reads how many            milliseconds you have chosen under auto dismiss, divides it by 1000 and adds 's'to the end so CSS can read it as seconds,so (3000)/1000 + 's'=3s transtion, dont mess with this
   
			progressBar.style.width = '100%'                   // makes it so the bar is the width of the popsicle
   
			setTimeout(function(){                             // sets up the function so that it will auto dismiss, dont mess with it
				progressBar.style.width = '0%'
			}, 10)
		}
		setTimeout(function() {
			document.body.removeChild(newPopsicle)             // makes it so after the bar hits zero popsicle is removed from the page
		}, options.autoDismiss)
	}
}
`
# How to Call popsicle Example
`
popsicle({                // calls popsicle with object with the options you have 

	message: 'Hello World',  // sets the message to "Hello World"
 
	autoDismiss: 10000,      // sets the autoDismiss to 10 seconds
 
	type: 'All good',        // sets the type to "All good" so a green right border is displayed
 
	progressBar:true,        // set it so that there is a progress bar
 
	closeButton: false,      // sets it so that there isnt a close button
})
`
