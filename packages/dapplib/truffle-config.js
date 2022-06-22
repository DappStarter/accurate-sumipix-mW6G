require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind huge hope entire bottom vague'; 
let testAccounts = [
"0x82d5bc9076b676840cb64617994c6cebe1b45b60764f830c18122e1620fb957a",
"0x111bc327b23e0d2c042af6087524d9352708c5bf5ea61d5177df5791fbeef279",
"0xb0009c67e3f700b3bf712e3036a79e0ae2a5f4668e637651be20badc36135368",
"0x410243abdbbf2a0c1af655cd0b165aa299989c68871edc6b882fb615a188f4a1",
"0x9ebca1c8bee273e450cfada0c524b5f58f6da5cb74ef9ae97a43bd340a587188",
"0x8e9df46c105816a7120b193009ddad41499ebcc8fe7074da8f95905a04fc3657",
"0x7faac199ae748233773d17b567a4bcc48f96ee2ad2f410210d7c51938d838742",
"0xc578bcd4a62b55293b24c2918417ed53046f6af3d7ab7be9d569e0b02c459825",
"0x5c93397b2991ba90b0a877de28ef03f10e739d7868b6f0b650f28164b9fa627b",
"0x61a9536504ec4e188d57b9a0a095e9afe007f974e3f159dd3acd81873d667da4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

