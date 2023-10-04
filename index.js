var myDocument = "CV - Lê Hưng.docx";
getFileExtentsion(myDocument)

function getFileExtentsion () {
    return myDocument.split('.').pop();
}
// write this one the screen
document.write(myDocument);
console.log(myDocument.split('.').pop());
