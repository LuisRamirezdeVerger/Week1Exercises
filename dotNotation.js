// This is the comment line <3
/*
console.log(bar)
console.log(bar)
console.log(bar)
console.log(dash)
console.log(bar)
console.log(bar)
console.log(bar)
console.log(dash)
console.log(bar)
console.log(bar)
console.log(bar)



/*
console.log("    |    |     ");
console.log("    |    |     ");
console.log("    |    |     ");
console.log("----------------");
console.log("    |    |     ");
console.log("    |    |     ");
console.log("    |    |     ");
console.log("----------------");
console.log("    |    |     ");
console.log("    |    |     ");
console.log("    |    |     ");
*/


let bar = "    |    |     "
let dash = "----------------"


/*
for (let bar = 0; bar < 3; bar++) {
    console.log("    |    |     ");
  }
  for (let dash = 0; dash < 1; dash++) {
    console.log("----------------");
  }for (let bar = 0; bar < 3; bar++) {
    console.log("    |    |     ");
  }
  for (let dash = 0; dash < 1; dash++) {
    console.log("----------------");
  }for (let bar = 0; bar < 3; bar++) {
    console.log("    |    |     ");
  }
  */

  //Here we call the array and the strings
  let arr = ["   |   |   ", "-----------"];

  for (let i = 1; i <= 11; i++) {
    if( i % 4 == 0){
        console.log(arr[1]);
    }else{
        console.log(arr[0]);
    }
  }

  