
const textNode = document.querySelector('.opening-text');
const splitTextArray = textNode.innerText.split(" ");
console.log(splitTextArray);

let finalMarkup = "";

splitTextArray.forEach(buildMarkup);

function buildMarkup(text, index) {
	console.log(text,index);
	let spanText;

	(index === 2) ? 
		spanText = "<span>" + text + "</span><br />" : 
		spanText = "<span>" + text + "</span> ";

		console.log(spanText);

		return finalMarkup += spanText;
}

console.log(finalMarkup);

textNode.innerHTML = finalMarkup;

console.log(textNode);
