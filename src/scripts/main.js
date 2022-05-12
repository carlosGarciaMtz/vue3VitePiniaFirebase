function isInArray(value, array) {
	return array.indexOf(value) > -1;
}

function is_filled(elem){
	if(elem.value !== ''){
		elem.parentElement.classList.add("filled");
	} else {
		elem.parentElement.classList.remove("filled");
	}
}

function featuredTabClick(event) {
	event.preventDefault();
	let activeTab = document.querySelector('.featured-tab-content--active');
	let activeControl = document.querySelector('.featured-tab-control--active');
  
	// deactivate existing active tab and panel 
	activeTab.classList.remove('featured-tab-content--active');
	activeControl.classList.remove('featured-tab-control--active');
  
	// activate new tab and panel
	event.target.classList.add('featured-tab-control--active');
	document.getElementById(event.target.href.split('#')[1]).classList.add('featured-tab-content--active');
}

function roundedTabClick(event) {
	event.preventDefault();
	let activeTab = document.querySelector('.rounded-tab-content--active');
	let activeControl = document.querySelector('.rounded-tab-control--active');
	const loadedSelected = document.querySelector('.rounded-tab-control-selected');
	const roundedTabsHolder = document.querySelector('.rounded-tab-controls__holder');
  
	// deactivate existing active tab and panel 
	activeTab.classList.remove('rounded-tab-content--active');
	activeControl.classList.remove('rounded-tab-control--active');
	loadedSelected.innerText = '';
  
	// activate new tab and panel
	event.target.classList.add('rounded-tab-control--active');
	document.getElementById(event.target.href.split('#')[1]).classList.add('rounded-tab-content--active');
	loadedSelected.innerText = event.target.innerText;
	roundedTabsHolder.classList.remove('tabs--opened');
}

function addonTabClick(event) {
	event.preventDefault();
	let activeTab = document.querySelector('.addon-tab-content--active');
	let activeControl = document.querySelector('.addon-tab-control--active');
  
	// deactivate existing active tab and panel 
	activeTab.classList.remove('addon-tab-content--active');
	activeControl.classList.remove('addon-tab-control--active');
  
	// activate new tab and panel
	event.target.classList.add('addon-tab-control--active');
	document.getElementById(event.target.href.split('#')[1]).classList.add('addon-tab-content--active');
}

function paymentTabClick(event) {
	event.preventDefault();
	let activeTab = document.querySelector('.payment-tab-content--active');
	let activeControl = document.querySelector('.payment-tab-control--active');
  
	// deactivate existing active tab and panel 
	activeTab.classList.remove('payment-tab-content--active');
	activeControl.classList.remove('payment-tab-control--active');
  
	// activate new tab and panel
	event.target.classList.add('payment-tab-control--active');
	document.getElementById(event.target.href.split('#')[1]).classList.add('payment-tab-content--active');
}

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		/* Begin Input Function */
		const inputs = document.querySelectorAll('.ctrl-holder input, .ctrl-holder textarea');
		if(inputs){
			inputs.forEach(input => {
				is_filled(input);
	
				input.addEventListener('focus', (event) => {
					event.target.parentElement.classList.add("focused");
					is_filled(event.target);
				});
				  
				input.addEventListener('blur', (event) => {
					event.target.parentElement.classList.remove("focused");
					is_filled(event.target);
				});
			});
		}		

		/* Begin Featured Tabs Function */
		const featuredTabControls = document.querySelectorAll('.featured-tab-control');
		featuredTabControls.forEach(featuredTabControl => {
			featuredTabControl.addEventListener('click', featuredTabClick, false);
		})
		/* End Featured Tabs Function */

		/* Begin Rounded Tabs Function */
		const roundedTabControls = document.querySelectorAll('.rounded-tab-control');
		roundedTabControls.forEach(roundedTabControl => {
			roundedTabControl.addEventListener('click', roundedTabClick, false);
		})

		setTimeout(function(){
			const loadedSelectedVal = document.querySelector('.rounded-tab-control--active');
			if(loadedSelectedVal){
				document.querySelector('.rounded-tab-control-selected').innerText = loadedSelectedVal.innerText;
			}
		}, 10);

		const roundedTabsSelector = document.querySelector('.rounded-tab-control-selector');
		if(roundedTabsSelector){
			roundedTabsSelector.addEventListener("click", (e) => {
				e.preventDefault();
				roundedTabsSelector.parentElement.classList.toggle("tabs--opened");
			});
		}
		/* End Rounded Tabs Function */

		/* Begin Panel Clickable Function */
		const panelClickable = document.querySelectorAll('.panel--clickable');
		if(panelClickable){
			panelClickable.forEach(singlePanel => {
				singlePanel.addEventListener("click", (e) => {
					for (i = 0; i < panelClickable.length; ++i) {
						panelClickable[i].classList.remove('panel--expanded');
					}
					e.currentTarget.classList.add('panel--expanded');
				}, true);
			})
		}
		/* End Panel Clickable Function */

		/* Begin Accordion Function */
		const accordionTitle = document.querySelectorAll('.accordion-title');
		if(accordionTitle){
			accordionTitle.forEach(singleAccordion => {
				singleAccordion.addEventListener("click", (e) => {
					for (i = 0; i < accordionTitle.length; ++i) {
						accordionTitle[i].parentElement.classList.remove('accordion--active');
					}
					e.preventDefault();
					e.stopPropagation();
					e.currentTarget.parentElement.classList.add('accordion--active');
				}, true);
			})
		}
		/* End Accordion Function */

		/* Begin Addon Tabs Function */
		const addonTabControls = document.querySelectorAll('.addon-tab-control');
		addonTabControls.forEach(addonTabControl => {
			addonTabControl.addEventListener('click', addonTabClick, false);
		})
		/* End Addon Tabs Function */

		/* Begin Payment Tabs Function */
		const paymentTabControls = document.querySelectorAll('.payment-tab-control');
		paymentTabControls.forEach(paymentTabControl => {
			paymentTabControl.addEventListener('click', paymentTabClick, false);
		})
		/* End Payment Tabs Function */

		MicroModal.init({
			onShow: modal => console.info(`${modal.id} is shown`), // [1]
			onClose: modal => console.info(`${modal.id} is hidden`), // [2]
			openTrigger: 'data-custom-open', // [3]
			closeTrigger: 'data-micromodal-close', // [4]
			openClass: 'is-open', // [5]
			disableScroll: true, // [6]
			disableFocus: true, // [7]
			awaitOpenAnimation: false, // [8]
			awaitCloseAnimation: false, // [9]
			debugMode: true // [10]
		  });
	}
}

/*$(function() {
	$('input.only-numbers').on('input',function(e){
		var $this = $(this);
		var inputValue = this.value;
		var allowedChars = '0123456789'.split('');
		for (var i = 0; i < inputValue.length; i++) {
			if(!(isInArray(inputValue[i], allowedChars))){
				inputValue = inputValue.substring(0, i) + '' + inputValue.substring(i + 1);
				$this.val(inputValue);
			}
		}
	});

	/*var resizeTimer_1;
	$(window).resize(function() {
		clearTimeout(resizeTimer_1);
		resizeTimer_1 = setTimeout(function() {
			
		}, 300);
	});

});*/