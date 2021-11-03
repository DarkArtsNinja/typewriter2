
const transpose = function(matrix) {
  const newArr = [];
  // const element = matrix[i]

  const arraySize = matrix.length;
  for (let f = 0; f < arraySize ; f++) {
    newArr.push([]);
  }


  for (let i = 0; i < matrix.length; i++) {

    for (let j = 0; j < matrix[i].length; j++) {
    newArr[j].push(matrix[i][j])      
    }
  }
  
  return newArr;

}

// const transpos = function(matrix) {
//  const newArr = [];
//  const row = matrix.length
//  for()
//  const column = matrix[0].length
//  for (let j = 0; j < column; j++) {
//   for (let i = 0; i < row; i++) {
//     newArr.push([j][i]);
//     let newArr = matrix[i][j];              
//         }   
//     }
//  return newArr;
// };



// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]));

// console.log('----')

// printMatrix(transpose([
//   [1, 2, 3, 4, 5, 6, 7]
// ]));
