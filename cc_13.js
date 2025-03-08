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

