const container = document.querySelector('.container');
const button = document.querySelector('button');
const range = document.querySelector('input');
let row;
let column;
let gridWidth = range.value;

function createGrid (gridWidth){
    container.innerHTML='';
    for (let i=1; i <=gridWidth ; i++){
        row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
      for (let j=1 ; j <=gridWidth ; j++){
        column = document.createElement('div');
        column.classList.add('column');
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




// let squaresCount = null;
// button.addEventListener('click',function(){
//    squaresCount = Number(prompt('how many squares do you want per side? '));
//    if (squaresCount =! null){
//     container.innerHTML='';
//     for (let i=1; i <=squaresCount ; i++){
//         row = document.createElement('div');
//         row.classList.add('row');
//         container.appendChild(row);
//       for (let j=1 ; j <=squaresCount ; j++){
//         column = document.createElement('div');
//         column.classList.add('column');
//         row.appendChild(column);
//      }
//     }
    
//    }
// })
