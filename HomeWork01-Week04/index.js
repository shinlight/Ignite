let userName = "Igor";

function showMessage() {
    let message = 'Hello, ' + userName;
    alert(message);
  }

function anotherFunction() {
    
}

  function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
  }