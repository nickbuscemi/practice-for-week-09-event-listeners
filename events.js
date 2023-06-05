document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM has loaded");

    let redInput = document.getElementById('red-input');
    let addButton = document.getElementById('add-item');
    let listAdd = document.getElementById('list-add');
    let ul = document.querySelector('ul');
    let colorSelect = document.getElementById('color-select');
    let removeButton = document.getElementById('remove-listeners');

    let redInputListener = function() {
        if (this.value.toLowerCase() === 'red') {
            this.style.backgroundColor = 'red';
        } else {
            this.style.backgroundColor = '';
        }
    }; 

    let addItemListener = function(event) {
        event.preventDefault();
        let li = document.createElement('li');
        li.textContent = listAdd.value;
        ul.appendChild(li);
        listAdd.value = '';
    };

    let colorSelectListener = function() {
        this.parentElement.style.backgroundColor = this.value;
    };

    redInput.addEventListener('input', redInputListener); 
    addButton.addEventListener('click', addItemListener);
    colorSelect.addEventListener('input', colorSelectListener);

    removeButton.addEventListener('click', function() {
        redInput.removeEventListener('input', redInputListener);
        addButton.removeEventListener('click', addItemListener);
        colorSelect.removeEventListener('input', colorSelectListener);
    });
});
