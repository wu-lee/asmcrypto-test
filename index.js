const asmCrypto = require('asmcrypto.js');

function trycatch(cb) {
    try { return cb() } catch (e) { console.error("failed: " + e.message) };
}


const array = new Uint32Array(10);


trycatch(() => asmCrypto.random.getValues(array)); // getValues is not a function

trycatch(() => asmCrypto.getRandomValues(array)); // No strong PRNG available

asmCrypto.random.skipSystemRNGWarning = true;

trycatch(() => asmCrypto.getRandomValues(array)); // No strong PRNG available

asmCrypto.random.allowWeak = true;

trycatch(() => asmCrypto.getRandomValues(array)); // Succeeds, but still prints the warning

