const container = document.querySelector('.container');
const button = document.querySelector('button');
let row;
let column;

for (let i=1; i <=16 ; i++){
    row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
  for (let j=1 ; j <=16 ; j++){
    column = document.createElement('div');
    column.classList.add('column');
    row.appendChild(column);
    column.addEventListener('mouseover',function(){
        this.classList.add('click')
    })
 }
}



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
