const container = document.querySelector('.container');

for (let i=1; i <=16 ; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  for (let j=1 ; j <=16 ; j++){
    let column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column);
 }
}

