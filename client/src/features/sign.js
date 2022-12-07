import { URL_NONCE, URL_VERIFY } from '../features/api';
import { SiweMessage } from 'siwe';
import { ethers } from 'ethers';
import { EthrDID } from 'ethr-did';


const sign = async (texte) => {
    const connectWallet = async () => {
        await provider.send('eth_requestAccounts', [])
            .catch(() => console.log('user rejected request'));
    }

    const domain = window.location.host;
    const origin = window.location.origin;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const createSiweMessage = async (address, statement) => {
        const res = await fetch(URL_NONCE, {
            credentials: 'include',
        });
        const message = new SiweMessage({
            domain,
            address,
            statement,
            uri: origin,
            version: '1',
            chainId: '1',
            nonce: await res.text()
        });
        return message.prepareMessage();
    }

    let message = null;
    let signature = null;
    let identifier = null;

    const signInWithEthereum = async () => {
        identifier = await signer.getAddress()
        message = await createSiweMessage(
            identifier,
            texte
        );

        console.log(message);
        signature = await signer.signMessage(message);
        console.log("signature: ", signature);
    }

    const sendForVerification = async () => {
        console.log(JSON.stringify({ message, signature }))
        const res = await fetch(URL_VERIFY, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, signature }),
        });
        console.log("outcome:", await res.text());
    }

    await connectWallet();
    await signInWithEthereum();
    await sendForVerification();
    const ethrDid = new EthrDID({ identifier, provider, chainNameOrId: 'mainnet' });

    return (ethrDid)
}

export default sign;