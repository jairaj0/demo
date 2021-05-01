const metamask = document.querySelector('.metamask')


let web3;
let user;
let ethereum=window.ethereum

const metaMaskWeb3 = async () => {
    if (ethereum && ethereum.isMetaMask) {
        try {
            web3 = new Web3(ethereum);
            const _chainId = await window.ethereum.request({method: 'eth_chainId'});
            if (parseInt(_chainId, 16) !== 1) {
                return alert("Connect wallet to a main network");
            }

            const _accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            user = web3.utils.toChecksumAddress(_accounts[0]);
        } catch (error) {
            console.log(error.message);
            // return error.message;
        }
    } else {
        return alert("Non-Ethereum browser detected. You should consider trying Metamask");
    }
}


const connectMetaMask = async () => {
    await metaMaskWeb3();
};

ethereum.on('disconnect', (code, reason) => {
    console.log(`Ethereum Provider connection closed: ${reason}. Code: ${code}`);
});


ethereum.on('accountsChanged', (accounts) => {
    console.log("accountsChanged");
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
});

ethereum.on('chainChanged', (chainId) => {
    console.log("chainChanged");
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    window.location.reload();
});

// window.addEventListener('DOMContentLoaded', () => {
    
// })


metamask.addEventListener('click', async () => {
    await connectMetaMask();
    model.style.display = "none";
    model_close_bg.style.display = "none";
    body.style.overflow = "auto";
    console.log(user);
})
