const { Keyring } = require('@polkadot/api');
const { cryptoWaitReady, mnemonicGenerate } = require('@polkadot/util-crypto');

const main = async () => {
    await cryptoWaitReady();

    const keyring = new Keyring({ type: 'sr25519' });

    console.log('SS58 Address, Mnemonics');

    for (let i = 0; i < 100; i++) {
        const mnemonics = mnemonicGenerate();
        const newAccount = await keyring.addFromUri(mnemonics);

        console.log(`${newAccount.address}, ${mnemonics}`);
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    });