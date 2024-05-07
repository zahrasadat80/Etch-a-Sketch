const container = document.querySelector('.container');
const button = document.querySelector('button');
const range = document.querySelector('input');
let row;
let column;
let gridWidth = range.value;

function createGrid (gridWidth){
    container.innerHTML='';
    let cellSize = `${100 / gridWidth}%`;
    for (let i=1; i <=gridWidth ; i++){
        row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
      for (let j=1 ; j <=gridWidth ; j++){
        column = document.createElement('div');
        column.classList.add('column');
        column.style.width = cellSize;
        column.style.height = cellSize;
        row.appendChild(column);
        column.addEventListener('mouseover',function(){
            this.classList.add('click')
        })
     }
    }
}
range.addEventListener('input',function(){
    gridWidth = this.value;
    createGrid(gridWidth);
})



