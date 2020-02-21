	
var items_list = document.getElementById('items_list')

var items = items_list.querySelectorAll('li')
var input_items =items_list.querySelectorAll("input")

for (var i=0; i<items.length; i++) {
	items[i].addEventListener("click", editItem)
	input_items[i].addEventListener("blur", onBlurHandler)
	input_items[i].addEventListener("keypress", keyPressHandler)
}

function editItem(){
	this.className = "edit"
	var input = this.querySelector("input")
	input.focus()
    input.setSelectionRange(0, input.value.length)	

}

function onBlurHandler(){
	this.previousElementSibling.innerHTML = this.value
	this.parentNode.className = ""

	
}
function keyPressHandler(event){
	if (event.which===13) {
	onBlurHandler.call(this)
}
   
}
