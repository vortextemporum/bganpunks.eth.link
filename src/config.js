export const CONTRACT_ADDRESS="0x9126B817CCca682BeaA9f4EaE734948EE1166Af1"

export const CONTRACT_ABI = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"contractURIPrefix","type":"string"},{"internalType":"string","name":"tokenURIPrefix","type":"string"},{"internalType":"address","name":"signer","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"symbol","type":"string"}],"name":"Create","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"SignerRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"contractURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isSigner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceSigner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"contractURIPrefix","type":"string"}],"name":"setContractURIPrefix","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"tokenURIPrefix","type":"string"}],"name":"setTokenURIPrefix","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"toString","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenURIPrefix","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

export const PUNKS_JSON_GEN1 = [{"name":"GΞNΞSIS BGANPUNK #00","image":"https://ipfs.rarible.com/ipfs/QmaNa9fQwmtu6dKAKzwm2knpvGyLwr3NZJf5DmyRbFgB2p","tokenid":"5389"},{"name":"BGANPUNK #01","image":"https://ipfs.rarible.com/ipfs/QmUheQabszWxSthEfnkoN2r3ynxtaEuLx4dg2QTKTodtLY","tokenid":"10001"},{"name":"BGANPUNK #02","image":"https://ipfs.rarible.com/ipfs/Qmd3gtQacgAyBMA3H913JRsynjSwAbSjz6gxFwkKouRXq4","tokenid":"10003"},{"name":"BGANPUNK #03","image":"https://ipfs.rarible.com/ipfs/QmTcRiTg8ZrodQAEkeQSKM93QyYSpupWhrwz9fgTPpVh4L","tokenid":"10004"},{"name":"BGANPUNK #04","image":"https://ipfs.rarible.com/ipfs/Qmf6UhjrjtopshtCPGwTfsLNCrRDCUNYmQGhfs5WE9qDSt","tokenid":"10005"},{"name":"BGANCCCYYYBBBOOORRRGGGANTIPUNK #05","image":"https://ipfs.rarible.com/ipfs/QmcggjiSdpGyvsbiGCcErsyog7tkj5gD4e9hD8YNLmiHY1","tokenid":"10006"},{"name":"BGANPUNK #06","image":"https://ipfs.rarible.com/ipfs/QmTJLDtGYSyaXHZqou8XcNbBdK7yr9hzihbAfDzs9EdEBJ","tokenid":"10007"},{"name":"BGANPUNK #07","image":"https://ipfs.rarible.com/ipfs/QmYAL1oeHUXkQrz3dS19jsaPuAQbwkZaKYCNQxvhCjsN94","tokenid":"10008"},{"name":"BGANPUNK #08","image":"https://ipfs.rarible.com/ipfs/QmRffppBDyEH3HQMhsu2xwbM1ynWkcpt1rafx4oZ4aKD21","tokenid":"10009"},{"name":"♔ THE CHESS HUSTLER ♚ - BGANPUNK #09","image":"https://ipfs.rarible.com/ipfs/QmS9SV27dsTzPQu7XvnfReB8D1mdQhtcpcpMnD2x8Bm3B2","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10012","tokenid":"10012"},{"name":" R3S3RV3D BGANPUNK #10","image":"https://ipfs.rarible.com/ipfs/QmNrrxctTqeA5WTnb3UT9BYS913Usg2TBexmTvu5ZJ9kNs","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10013","tokenid":"10013"}]
export const PUNKS_JSON_GEN2 = [{"name":"CØLØRED B·G·A·N CRYPTOPUNK[S] GENESIS #00 - #69","image":"https://ipfs.rarible.com/ipfs/Qmf4B3qJh3mxkmM2d21WtbpgaHEBocJFBMZydXfjB4DCQC","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10015","tokenid":"10015"},{"name":"#70 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmThaVh692Ej8pgC8ktBk4gf6MSKHJL1AVf8yqkaBR5Jrc","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10016","tokenid":"10016"},{"name":"#71 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmRTw68wuDVSCvoyypN4VSn7mJhkk3uuLrrE54oBCrtjFv","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10017","tokenid":"10017"},{"name":"#72 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmUzV5niHWnQUkzN5FP5nbLtXLa9jNxzbpMQ9YpLULBfC6","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10018","tokenid":"10018"},{"name":"#73 - CØLØRMØSHED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmNM2mUixefnPWbaebojL4MgZgGnJq8v3xuNkiLSpypoej","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10019","tokenid":"10019"},{"name":"#74 - DØØMED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmaCpsfBLHB3yUNSYVmTek2JUwrfC8xuh4rrdCGDdyAFvm","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10020","tokenid":"10020"},{"name":"#75 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmYVWPRbcM4YGhSB5aEN5PAFnu8oJ1wCD25UXDNDy7M9LD","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10021","tokenid":"10021"},{"name":"#76 - CØLØRMØSHED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmfSysi32h7PnSw3DtaMuPULGFpxBTDsSrfwhxNZHSSd8V","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10022","tokenid":"10022"},{"name":"#77 - HANGØVΞR B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmS9VvvzET69BRj8iRzLoTcQ6jyeVrb6X7Y6AyM1Ys1ddX","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10023","tokenid":"10023"},{"name":"#78 -  LEMØNHA-Z-Z-Z-Y B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmaPSvU2wbc45xj4wGxygd2njJ3WTtXWkprYexsM4KBN3V","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10024","tokenid":"10024"},{"name":"CYBERPUNK #2077 ","image":"https://ipfs.rarible.com/ipfs/QmaUjjkjCfRreWCZw1p8UTGnM5QZ79qV2PCiFW2yfyqNgh","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10026","tokenid":"10026"},{"name":"#79 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmbcKGy76WM5P4Uvehkirg2fydT1WMTQj2kzQjx4CGpsRL","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10031","tokenid":"10031"},{"name":"#80 - ㄖ卂丂丨丂 B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmY8U5feCTohZPjjSACZ7tJnUp293N6S3dNbbrpLMvQZqH","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10032","tokenid":"10032"},{"name":"#81 - R҉A҉D҉I҉O҉A҉C҉T҉I҉V҉E҉ B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/Qmf1JXfMSLgJ8c49pXmkPoWBhrwXUMPYieH9SHq7CFCWMj","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10033","tokenid":"10033"},{"name":"#82 - ░▄▀▀░▀▄▀░▄▀▀░█▒░░▄▀▄▒█▀▄░▄▀▀ B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmUseyADVve7M57nD5G8RMnHEkwLvy8weQhrWme1MER6hv","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10034","tokenid":"10034"},{"name":"#83 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmNUw94GRoxP3MqqmvD2rS5Vo7zUHD1bALN914v9GJwnJq","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10035","tokenid":"10035"},{"name":"#84 - MİNİMİNİ B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmZ2KXGESbEnpJRcqApkUqBEGtohpDDhwCnnNpM8B7Yo67","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10036","tokenid":"10036"},{"name":"#85 - CØLØ(🆁🅴🅳)ΞYΞS B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/Qmctqug192zs4jmVtfju3vhLYRv2eCL3kWnBnELgxH55SS","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10037","tokenid":"10037"},{"name":"#86 - DUALNECK B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmYCBw4VCW6R12PqsGtYKsd6rE3UW27u62FzoEAYj1wDwp","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10038","tokenid":"10038"},{"name":"#87 - 💄 B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmSc4fLQt3KatGi6vFQdjWMdDZG1RtTVUbpbMaBikAF7ib","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10039","tokenid":"10039"},{"name":"#88 - ƧΛFΛЯΛЯI B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmeyWrXuPbEDzgQjQCzgPeMJVmy8Cy8mFhF2aey4wMLEkC","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10040","tokenid":"10040"},{"name":"#89 - ☾REÄMყ B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmSBiFtCjtNfPQbvJ5VZErP1xmaQT9Juj2EjxCSdmo8azu","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10041","tokenid":"10041"},{"name":"#90 - B·G·A·N·G·A·N·G PØLICE REPØRT","image":"https://ipfs.rarible.com/ipfs/QmRc1BDYFpi4Gz4PyR6rYHyBzct41CBgzvaBauUi2AyMEU","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10043","tokenid":"10043"},{"name":"#91 - ＳＵＰＥＲＳＴＡＲ B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/Qmb7KPoepfXomzKWZt9131P4b8pEqSW7qzApjYExCjEXzp","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10045","tokenid":"10045"},{"name":"#92 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmYApDk3dsjLxZZjxo3mSsTLNujPoGHyXUDjusiNztCKuo","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10046","tokenid":"10046"},{"name":"#93 - 𝕍𝕀𝕂𝕀ℕ𝔾·𝔸·ℕ 🅲🆁🆈🅿🆃Ø🅿🆄🅽🅺","image":"https://ipfs.rarible.com/ipfs/QmWxRSdLTpdw57HaAAdwtkwpkxSsbCX7pDKHUGqr3PvRjV","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10047","tokenid":"10047"},{"name":"#94 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmWuru8BTjWx2ywEvyiKgbLzi1pdaT7qAJ7BgtvF5cmUAn","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10048","tokenid":"10048"},{"name":"#95 - BØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmNkpJZ5CV1zEmkm2QZYchbx9Z4fWNBAGREYZD7ejJrFy7","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10049","tokenid":"10049"},{"name":"#96 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmNpHxG9qHFN4WkGTRLFTvwHJuFoEpn8aRyYv3VnXYGpjM","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10050","tokenid":"10050"},{"name":"#97 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmPcFpSCFyMtTv92dNCzGvk5vS65WHRXrpJMPoSYpRkXGu","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10051","tokenid":"10051"},{"name":"#98 - MØRPH1NG B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmbYJamX8hc4FfWQyVhzpS2s9aTjgQ2dqEL9mEMWC44ahe","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10053","tokenid":"10053"},{"name":" #99 - DØUBLELUNG B·G·A·N CRYPTOPUNK","image":"https://ipfs.rarible.com/ipfs/QmbdvtqXzctgogFnVtY4aVksoGeBXWnvRkezr6eXzQ3BAR","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10054","tokenid":"10054"},{"name":"#100 - 乃乇尺ҜᎶ卂几卩ㄩ几Ҝ","image":"https://ipfs.rarible.com/ipfs/QmSfKAxFwJQLYYwoobtjK8chiRDP6ES36QDii53kSfzUXi","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10055","tokenid":"10055"}]
export const DOOMED_DEGENS = [{'name': 'DØØMΞD DΞGΞN #01/30', 'image': 'https://ipfs.rarible.com/ipfs/QmaBZzBNyRJ39Y5mXgEUVp9EfoPBgiZyASfNiRaGXAWBzZ/image.png', 'tokenid': '10056'}, {'name': 'DØØMΞD DΞGΞN #02/30', 'image': 'https://ipfs.rarible.com/ipfs/Qmc7K3zmytBP6AhuyM4jDWk8D4jV45eUVgaxNB7X7o3uV2/image.png', 'tokenid': '10057'}, {'name': 'DØØMΞD DΞGΞN #03/30', 'image': 'https://ipfs.rarible.com/ipfs/QmezZB97BWvkRKdE5esWJSt59PtTa3oyAm5fbkbWyGVcAV/image.png', 'tokenid': '10058'}, {'name': 'DØØMΞD DΞGΞN #04/30', 'image': 'https://ipfs.rarible.com/ipfs/QmXFuQrLp9d4eeqxhfJ2A3rERrnUVunh5oLBHTghbL5c6z/image.png', 'tokenid': '10059'}, {'name': 'DØØMΞD DΞGΞN #05/30', 'image': 'https://ipfs.rarible.com/ipfs/QmczgTqP1BeesJnz9Q4fy7Umx6VmUbPV9HQ2t4r2nvUU1L/image.png', 'tokenid': '10061'}, {'name': 'DØØMΞD DΞGΞN #06/30', 'image': 'https://ipfs.rarible.com/ipfs/QmcS6TQnmtWZupfqQ3UuP8WCrvf4z6aYYBqcBf1YgGoCr7/image.png', 'tokenid': '10062'}, {'name': 'DØØMΞD DΞGΞN #07/30', 'image': 'https://ipfs.rarible.com/ipfs/QmUKmjzhucJxUU4kz7LruHoKUkNV8q5dptc9Xw4nZ5bYTJ/image.png', 'tokenid': '10063'}, {'name': 'DØØMΞD DΞGΞN #08/30', 'image': 'https://ipfs.rarible.com/ipfs/QmQXkTayKSou9XumimqriSAm3fXQHQWpDN1rcm4y9SBNVn/image.png', 'tokenid': '10064'}, {'name': 'DØØMΞD DΞGΞN #09/30', 'image': 'https://ipfs.rarible.com/ipfs/QmVTLbNoCXF5eKj2HXE7TFxtnE63JPwLacNLdRbPvFg6Cr/image.png', 'tokenid': '10067'}, {'name': 'DØØMΞD DΞGΞN #10/30', 'image': 'https://ipfs.rarible.com/ipfs/QmdefpQqJDqNt8YvGbxRKm93jWVHgZfhxkAoapuL2u2BCC/image.png', 'tokenid': '10068'}, {'name': 'DØØMΞD DΞGΞN #11/30', 'image': 'https://ipfs.rarible.com/ipfs/QmXzJWcqxWETQVfEk5vmt7ux3MU1hjwqgc5ZDxYvD5KnWa/image.png', 'tokenid': '10070'}, {'name': 'DØØMΞD DΞGΞN #12/30', 'image': 'https://ipfs.rarible.com/ipfs/QmWyYuKHBs6efTbxKAnKU3HGUZ6zoqkewQchdLmDdRxUir/image.png', 'tokenid': '10076'}, {'name': 'DØØMΞD DΞGΞN #13/30', 'image': 'https://ipfs.rarible.com/ipfs/QmXobFWCSwZohkoxjvke71KQERFSUQb2t9Stus8y5wzU8P/image.png', 'tokenid': '10077'}, {'name': 'DØØMΞD DΞGΞN #14/30', 'image': 'https://ipfs.rarible.com/ipfs/QmPj5385K8Y6jWV7231o4yXvtTKdgBsG6FX4tUKuFwRsyy/image.png', 'tokenid': '10078'}, {'name': 'DØØMΞD DΞGΞN #15/30', 'image': 'https://ipfs.rarible.com/ipfs/QmYUx84B7WHTMMxYn1Dg7AzekW28pkurEzmUSqWoC6DxJL/image.png', 'tokenid': '10075'}, {'name': 'DØØMΞD DΞGΞN #16/30', 'image': 'https://ipfs.rarible.com/ipfs/QmYofPZNTYSGfYgZj3CVDzkgC6yD6LLxVBojBroZSo3BFX/image.png', 'tokenid': '10079'}, {'name': 'DØØMΞD DΞGΞN #17/30', 'image': 'https://ipfs.rarible.com/ipfs/QmZUDsLtKHcZTHtZJno56UkPn7dzw433j6XyuNWgbvFoBA/image.png', 'tokenid': '10080'}, {'name': 'DØØMΞD DΞGΞN #18/30', 'image': 'https://ipfs.rarible.com/ipfs/Qma876845zU58CAKseFAQZQ1ATDDMN9kuk27s1azzLbabA/image.png', 'tokenid': '10081'}, {'name': 'DØØMΞD DΞGΞN #19/30', 'image': 'https://ipfs.rarible.com/ipfs/Qmbin3TSqrahfY7HNHbgb4v1PSWFW2DWcDz6JiiBfamugW/image.png', 'tokenid': '10083'}, {'name': 'DØØMΞD DΞGΞN #20/30', 'image': 'https://ipfs.rarible.com/ipfs/QmQjrPUDbK8oaHosWbz7NLxAhZwHtHtBMtpxEm5qCXCczZ/image.png', 'tokenid': '10084'}, {'name': 'DØØMΞD DΞGΞN #21/30', 'image': 'https://ipfs.rarible.com/ipfs/QmWb2vkBmygWUjaFjwXsrHFyhgbwxTeJP4TejbVp6W2ZRc/image.png', 'tokenid': '10085'}, {'name': 'DØØMΞD DΞGΞN #22/30', 'image': 'https://ipfs.rarible.com/ipfs/QmNppcjMWmc73Y6p6iC5mzQjXPzYRg8jxxsxbHD5tF4TFD/image.png', 'tokenid': '10086'}, {'name': 'DØØMΞD DΞGΞN #23/30', 'image': 'https://ipfs.rarible.com/ipfs/QmPQKkz3W5fuPEmt6VgwbyScMwv9bxViz7aaghC1WZRCs4/image.png', 'tokenid': '10087'}, {'name': 'DØØMΞD DΞGΞN #24/30', 'image': 'https://ipfs.rarible.com/ipfs/QmT5threvBpJkY5cW9YdsnH6otPKvmcYY63Kbhxb2yFRRQ/image.png', 'tokenid': '10088'}, {'name': 'DØØMΞD DΞGΞN #25/30', 'image': 'https://ipfs.rarible.com/ipfs/QmauCrs8V2cW5ZhyTSCtaj3mJTVSrPv9Z8pSdm9fRXFcMr/image.png', 'tokenid': '10089'}, {'name': 'DØØMΞD DΞGΞN #26/30', 'image': 'https://ipfs.rarible.com/ipfs/QmaDyLa76cCaU7u6NnQBRfnpb5a2nHnYuaP9SYUNyAzUuq/image.png', 'tokenid': '10090'}, {'name': 'DØØMΞD DΞGΞN #27/30', 'image': 'https://ipfs.rarible.com/ipfs/QmQD6yuE6ryWWCq7yipGNcMCpi1MhXyJ6vBeQkFrALnJ8Q/image.png', 'tokenid': '10091'}, {'name': ' DØØMΞD DΞGΞN #28/30', 'image': 'https://ipfs.rarible.com/ipfs/QmSq1FodTb1uULDqo48Z2B9NBJyyxLQ1ngn8vZNStiUbaf/image.png', 'tokenid': '10093'},  {'name': 'DØØMΞD DΞGΞN #29/30', 'image': 'https://ipfs.rarible.com/ipfs/QmRoMK4XrNRoQdfriFHSybZxWYfpbTi6HfmLsWksU7pCoq/image.png', 'tokenid': '10094'}, {'name': 'DØØMΞD DΞGΞN #30/30', 'image': 'https://ipfs.rarible.com/ipfs/QmPBLouX4M9wvvok3dRv6hmH4fwQW74DqgLgDMUeUiWfi8/image.png', 'tokenid': '10095'}]