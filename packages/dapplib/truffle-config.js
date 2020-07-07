require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name radar misery assume include cloth equal giggle'; 
let testAccounts = [
"0x0bcb02490b2cb4b5d3c7a4da08acb6f1ba45f9baf6d5e3b354be266c3c98b16c",
"0x9b446b00960d969bcc5365ef093e818106856a62a17982bc1c21d29520e03df1",
"0x06e505071eff06240c7c9329cccf7283a0f577764d270827de3da32ef7ec058a",
"0x2691cd471254c519947db5a657ee74ada8390d927406d1042d7702847917fda7",
"0x82f21b6a437dce400220587ee463b036094870fb8e2a5b678535c68270da35d4",
"0xa6200ad7b4c2cd356b8c3d546b3d5fd233c410b1387b400edd2d7f43f0f98847",
"0x1b49f2492e386561829849b7f53db194a3a0818e175f36cd910c20bfe5e5a597",
"0xcb02ec5951fa2a3021f3fddf3b598ffe9491b7dd821488859e66f1a723b4ea73",
"0x6a68110b90a2955ef2ee6bb8ea32b38536e927c4b66fd78e9e9679032afcb671",
"0xa411ac3dc400dbbdede1e1577166dcc30fc51b6178b46bc91e40df233b0c585f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
