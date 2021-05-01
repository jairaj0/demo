const walletconnect = document.querySelector('.walletconnect');
const WalletConnectProvider = window.WalletConnectProvider.default;
let web3;
let user;
let provider;
let infuraKey="3748d6095451480ea73577e11374efe4"
const walletConnectWeb3 = async () => { 
    try{
        // Create WalletConnect Provider
        provider = new WalletConnectProvider({
            infuraId: infuraKey,
            qrcodeModalOptions: {
              mobileLinks: [
                "rainbow",
                "metamask",
                "argent",
                "trust",
                "imtoken",
                "pillar",
              ],
            },
        });
        // Enable session (triggers QR Code modal)
        await provider.enable();
        // Create Web3 instance
        web3 = new Web3(provider);
        //  Get Accounts
    const accounts = await web3.eth.getAccounts();
    let _chainId = await web3.eth.getChainId();
    if (parseInt(_chainId, 16) !== 1){
        return alert("Connect wallet to a main network");
    }
    user = web3.utils.toChecksumAddress(accounts[0]);
    // Subscribe to accounts change
    provider.on("accountsChanged", async (accounts) => {
        console.log("accountsChanged");
        // console.log(accounts);
        await provider.disconnect();
    });

    // Subscribe to chainId change
    provider.on("chainChanged", async (chainId ) => {
        console.log("chainChanged");
        // console.log(chainId);
        await walletConnectWeb3();
    });

    // Subscribe to session disconnection
    provider.on("disconnect", (code, reason) => {
        console.log("disconnected");
        disconnected();
    });

    }catch(error){
        console.log("ERROR: Error: User closed modal");
    }
}

function disconnected() {
    return alert("disconnected");
}


const connectWalletConnect = async () => {
    await walletConnectWeb3();
};
walletconnect.addEventListener('click', async () => {
    console.log('walletconnect clicked');
    await connectWalletConnect();
    model.style.display = "none";
    model_close_bg.style.display = "none";
    body.style.overflow = "auto";
    console.log(user);
})
