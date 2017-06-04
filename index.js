var button_content = document.querySelector('h1');
button_content.addEventListener('click', updateName);

function updateName() {
    var name = prompt('Enter a new header');
    button_content.textContext = name;
}