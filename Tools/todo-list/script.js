const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('Please enter something');   
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}

document.getElementById('list-container').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
});

// ... (existing code)

// Function to create delete button and append it to the task
function createDeleteButton() {
    const deleteButton = document.createElement('i');
    deleteButton.className = 'fas fa-trash-alt delete-btn';
    deleteButton.style.display = 'none';
    return deleteButton;
}

// Function to handle task deletion
function deleteTask(task) {
    task.remove();
}

// Add delete buttons and functionality
listContainer.addEventListener('mouseover', function (e) {
    if (e.target.tagName === 'LI') {
        const deleteButton = createDeleteButton();
        e.target.appendChild(deleteButton);

        // Show delete button only when the mouse is over the task
        deleteButton.style.display = 'inline-block';

        // Mouseout listener for the task to remove the delete button
        e.target.addEventListener('mouseout', function (event) {
            if (event.relatedTarget !== deleteButton) {
                deleteButton.style.display = 'none';
                e.target.removeChild(deleteButton);
            }
        });

        deleteButton.addEventListener('mouseout', function (event) {
            deleteButton.style.display = 'none';
            e.target.removeChild(deleteButton);
        });
    }
});
listContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-btn')) {
        const task = e.target.parentElement;
        deleteTask(task);
    }
});

// listContainer.addEventListener('mouseout', function (e) {
//     if (e.target.classList.contains('delete-btn')) {
//         // Hide delete button only if the mouse is not over the delete button itself
//         e.target.style.display = 'none';
//     }
// });

// listContainer.addEventListener('click', function (e) {
//     if (e.target.classList.contains('delete-btn')) {
//         const task = e.target.parentElement;
//         deleteTask(task);
//     }
// });

// Modify addTask function to include delete buttons for new tasks
function addTask() {
    if (inputBox.value === '') {
        alert('Please enter something');
    } else {
        const li = document.createElement('li');
        li.innerHTML = inputBox.value;
        const deleteButton = createDeleteButton();
        li.appendChild(deleteButton);
        listContainer.appendChild(li);
        inputBox.value = ''; // Clear input after adding task
    }
}
