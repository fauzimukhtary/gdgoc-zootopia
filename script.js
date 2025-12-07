"use strict";

const judy = "Judy Hopps";
const nick = "Nick Wilde";
const judyDist = 20;
const nickDist = 15;

console.log("\n=== ZOOTOPIA POLICE DEPARTMENT ===");
console.log("\nJarak lari per hari:");
console.log(`${judy}: ${judyDist} km`);
console.log(`${nick}: ${nickDist} km`);

for (let i = 1; i <= 5; i++) {
  console.log(`\nHari ${i}`);
  console.log(`- ${judy} lari ${judyDist} km`);
  console.log(`- ${nick} lari ${nickDist} km`);
}

console.log("\n=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(`${judy}: ${judyDist * 5} km`);
console.log(`${nick}: ${nickDist * 5} km\n`);
