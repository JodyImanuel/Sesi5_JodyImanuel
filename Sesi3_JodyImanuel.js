// Contoh Case : 
// *
// ** 
// ***
// ****

// For Loop 
for (let i = 1; i <= 4; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) {
    baris += "*";
  }
  console.log(baris);
}

const length = 10;
console.log("=".repeat(length));

// While Loop
let i = 1;
while (i <= 4) {
  let baris = "";
  let j = 1;
  while (j <= i) {
    baris += "*";
    j++;
  }
  console.log(baris);
  i++;
}
