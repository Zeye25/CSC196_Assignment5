function showAlert() {
	document.getElementById("increaseButtonSize").style.fontSize = "24pt";
	alert("Hello, world!");
}

function changeStyles() {
	alert("Hello, world!");

	var textArea = document.getElementById("myText");
	var fancy = document.getElementById("fancy");
	var boring = document.getElementById("boring");

	if (fancy.checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (boring.checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function upperCaseLetters() {
    var textArea = document.getElementById("myText");
    var text = textArea.value;

    // Convert text to uppercase
    text = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    var sentences = text.split(". ");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
    }
    text = sentences.join(". ");

    // Update the text area value
    textArea.value = text;
}