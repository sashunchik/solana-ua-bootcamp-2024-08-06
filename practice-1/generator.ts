import { Keypair } from "@solana/web3.js";

console.log('This program is generating keypair with public key you want')

let keypair;
let count = 0;
do {
    keypair = Keypair.generate();
    count++
    if (count % 1000 == 0){
        console.log(`this is ${count} try`)
    }
} while (!keyvalid(keypair.publicKey.toBase58()));
console.log(`✅ Generated! /n/n/n`);

console.log('Tried to find the public key that starts with "My"')
console.log(`this took ${count} tries`)
console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(typeof keypair.publicKey.toBase58())
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);

function keyvalid(key) {
    return key.startsWith('My');
}
