// menu.js
// Menu utama dari kalkulator

const readline = require('readline');
const rumus = require('./rumus');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log("\n=== KalkulatorKu ===");
    console.log("1. Pertambahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("5. Keluar");
}

function Calculation() {
    showMenu();
    rl.question("Pilih operasi (1-5): ", (choice) => {
        if (choice === '5') {
            console.log("Terima kasih telah menggunakan kalkulator sederhana ini!");
            rl.close();
            return;
        }

        rl.question("Masukkan angka pertama: ", (num1) => {
            console.log("=======================")
            rl.question("Masukkan angka kedua: ", (num2) => {
                console.log("=======================")
                const a = parseFloat(num1);
                const b = parseFloat(num2);
                let hasil;

                switch (choice) {
                    case '1':
                        hasil = rumus.tambah(a, b);
                        break;
                    case '2':
                        hasil = rumus.kurang(a, b);
                        break;
                    case '3':
                        hasil = rumus.kali(a, b);
                        break;
                    case '4':
                        hasil = rumus.bagi(a, b);
                        break;
                    default:
                        console.log("Menu yang anda pilih tidak valid.");
                        askOperation();
                        return;
                }

                console.log(`Hasil: ${hasil}`);
                Calculation();
            });
        });
    });
}

Calculation();
