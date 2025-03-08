// Task 2 - Adding Employee Cards Dynamically
function createEmployeeCard(name, position) {
    const card = document.createElement('div');
    card.classList.add('employee-card');

    const heading = document.createElement('h2');
    heading.textContent = name;
    card.appendChild(heading);

    const paragraph = document.createElement('p');
    paragraph.textContent = position;
    card.appendChild(paragraph);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');
    removeButton.addEventListener('click', function(event) {

        event.stopPropagation();
        event.remove();
    });
    card.appendChild(removeButton);

    document.getElementById('employeeContainer').appendChild(card);
}

// Task 3 - Converting NodeLists to Arrays for Bulk Updates
function highlightEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');

    const cardArray = Array.from(cards);

    cardArray.forEach(card => {
        card.computedStyleMap.backgroundColor = 'lightblue';
        card.computedStyleMap.border = '2px solid blue';
    });
}

// Task 4 - Implementing Removal of Employee Cards with Event Bubbling
document.getElementById('employeeContainer').addEventListener('click', function(event) {
    console.log('Card clicked: ', event.target);
    if (event.target !== event.currentTarget) {
        console.log('Inside an employee card');
    }
});

// Task 5 - Inline Editing of Employee Details
function enableInclineEditing(card) {
    const name = card.querySelector('h2');
    const position = card.querySelector('p');

    const nameInput = document.createElement('input');
    nameInput.value = position.textContent;

    const positionInput = document.createElement('input');
    positionInput.value = position.textContent;

    name.replaceWith(nameInput);
    position.replaceWith(positionInput);

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', function() {

        nameInput.replaceWith(name);
        positionInput.replaceWith(position);

        name.textContent = nameInput.value;
        position.textContent = positionInput.value;
    });

    card.appendChild(saveButton);
}

document.getElementById('employeeContainer').addEventListener('dblclick', function(event) {
    const card = event.target.closest('.employee-card');
    if (card) {
        enableInclineEditing(card);
    }
});
