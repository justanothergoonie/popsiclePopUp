
let popsicle = function(userOptions) {

	let defaultOptions = {
		message: 'No message spceified',
		closeButton: true,
		autoDismiss: 3000,
		progressBar: true,
	}

	let options = {...defaultOptions, ...userOptions}//new hottness
	// let options = Object.assaign(defaultOptions, userOptions) // old way

	let newPopsicle = document.createElement('div')
	newPopsicle.style.minWidth = '250px'
	// newPopsicle.style.minHeight = '75px'
	newPopsicle.style.backgroundColor = ''
	newPopsicle.style.position= 'fixed'
	newPopsicle.style.top= '20px'
	newPopsicle.style.left= '20px'
	newPopsicle.style.padding= '25px'
	newPopsicle.style.boxShadow= '3px 9px 8px 0px rgba(0,0,0,0.5)'
	newPopsicle.style.radius= '5px'
	document.body.appendChild(newPopsicle)
	newPopsicle.innerHTML = options.message

	if (options.closeButton){
		let closeButton = document.createElement('div')
		newPopsicle.appendChild(closeButton)
		closeButton.innerHTML = 'x'
		closeButton.style.minWidth = '10px'
		closeButton.style.minHeight = '10px'
		closeButton.style.backgroundColor = 'red'
		closeButton.style.position = 'absolute'
		closeButton.style.right = '8px'
		closeButton.style.top = '10px'

		closeButton.addEventListener('click',function(){
			newPopsicle.remove()
		})
	}
	
	if 	(options.type === 'Danger') {
		newPopsicle.style.borderLeft = 'solid red 5px'
		newPopsicle.style.color = 'white'
		newPopsicle.style.backgroundImage= 'url(dist/img/giphy.gif)'
		newPopsicle.style.backgroundSize= 'contain' // or contain
	} else if (options.type === 'All good') {
		newPopsicle.style.borderLeft = 'solid #66ff00 5px'
		newPopsicle.style.color = 'white'
		newPopsicle.style.backgroundImage= 'url(dist/img/A-okay.gif)'
		newPopsicle.style.backgroundSize= 'contain'
	} else if (options.type === 'Warning') {
		newPopsicle.style.borderLeft = 'solid yellow 5px'
		newPopsicle.style.color ='white'
		newPopsicle.style.backgroundImage= 'url(dist/img/warning.gif)'
		newPopsicle.style.backgroundSize= 'contain'
	} else if (options.type === 'Its Fucked') {
		newPopsicle.style.borderLeft = 'solid black 5px'
		newPopsicle.style.color ='white'
		newPopsicle.style.backgroundImage= 'url(dist/img/death.gif)'
		newPopsicle.style.backgroundSize= 'contain'
	} 

	if (options.autoDismiss) {
		if (options.progressBar){
			let progressBar = document.createElement('div')
			newPopsicle.appendChild(progressBar)
			progressBar.style.position = 'absolute'
			progressBar.style.bottom = 0
			progressBar.style.left = 0
			progressBar.style.height = '6px'
			progressBar.style.backgroundColor = 'rgba(255,255,255,0.5)'
			progressBar.style.transition = (options.autoDismiss)/1000 + 's'
			progressBar.style.width = '100%'
			setTimeout(function(){
				progressBar.style.width = '0%'
			}, 10)
		}
		setTimeout(function() {
			document.body.removeChild(newPopsicle)
		}, options.autoDismiss)
	}
}

