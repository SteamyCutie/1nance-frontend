const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const NBToken = await hre.ethers.getContractFactory("NBToken");
    const nbToken = await NBToken.deploy();
    await nbToken.deployed();
    console.log("NBToken contract deployed to:", nbToken.address);

    const NBICO = await hre.ethers.getContractFactory("NBICO");
    const nbICO = await NBICO.deploy(nbToken.address);
    await nbICO.deployed();
    console.log("NBICO contract deployed to:", nbICO.address);
    let config = `  
    export const NBTokenAddress = "${nbToken.address}"
    export const NBICOAddress = "${nbICO.address}"    
    `;
    let data = JSON.stringify(config);
    fs.writeFileSync("./src/config.js", JSON.parse(data));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
