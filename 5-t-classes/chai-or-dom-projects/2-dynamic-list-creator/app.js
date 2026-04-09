const addBtn = document.getElementById('addBtn');
const input = document.getElementById('itemInput');
const ul = document.getElementById('list');

addBtn.addEventListener('click', () => {
  if (input.value.trim() === '') {
    alert('Please enter an item.');
    return;
  }

  // Create new list item and delete button
  const li = document.createElement('li');
  const deleteBtn = document.createElement('button');
  const text = document.createElement('span');

  // Set text content
  text.textContent = input.value;
  deleteBtn.textContent = 'Delete';

  // Add class for styling
  deleteBtn.classList.add('delete');

  // Append delete button to list item and list item to the unordered list
  ul.appendChild(li);
  li.appendChild(text);
  li.appendChild(deleteBtn);

  // Add event listener to delete button
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  // Adding edit functionality after clicking double click on list item
  li.addEventListener('dblclick', (e) => {
    const newValue = prompt('Edit item:', text.textContent);

    if (newValue && newValue.trim() !== '') {
      text.textContent = newValue;
    }
  });

  // Clear input field after adding item
  input.value = '';
});
