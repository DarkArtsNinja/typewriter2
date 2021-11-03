const sentence = "hello there from lighthouse labs";

// const write_letter = (letter) => {

//   setTimeout(()=> {
//     process.stdout.write(letter);
    
//   }, 1000)
// }
let timer = 500;

console.log("\n");

for (const char of sentence) {

  setTimeout(()=> {


    process.stdout.write(char);
    
    
    
  }, timer)
  
  timer += 100;

}

console.log("\n");

