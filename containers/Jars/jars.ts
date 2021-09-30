import { PriceIds } from "../Prices";
import { NETWORK_NAMES } from "containers/config";

export const PICKLE_JARS = {
  psCRV: "0x68d14d66B2B0d6E157c06Dc8Fefa3D8ba0e66a89",
  prenBTCWBTC: "0x2E35392F4c36EBa7eCAFE4de34199b2373Af22ec",
  p3CRV: "0x1BB74b5DdC1f4fC91D6f9E7906cf68bc93538e33",
  psteCRV: "0x77c8a58d940a322aea02dbc8ee4a30350d4239ad",
  pSUSHIETHDAI: "0x55282da27a3a02ffe599f6d11314d239dac89135",
  pSUSHIETHUSDC: "0x8c2d16b7f6d3f989eb4878ecf13d695a7d504e43",
  pSUSHIETHUSDT: "0xa7a37ae5cb163a3147de83f15e15d8e5f94d6bce",
  pSUSHIETHWBTC: "0xde74b6c547bd574c3527316a2ee30cd8f6041525",
  pSUSHIETHYFI: "0x3261D9408604CC8607b687980D40135aFA26FfED",
  pSUSHIETHYVECRV: "0x5Eff6d166D66BacBC1BF52E2C54dD391AE6b1f48",
  pSUSHIETH: "0xECb520217DccC712448338B0BB9b08Ce75AD61AE",
  pSUSHIETHALCX: "0x9eb0aAd5Bb943D3b2F7603Deb772faa35f60aDF9",
  pUNIETHDAI: "0xCffA068F1E44D98D3753966eBd58D4CFe3BB5162",
  pUNIETHUSDC: "0x53Bf2E62fA20e2b4522f05de3597890Ec1b352C6",
  pUNIETHUSDT: "0x09FC573c502037B149ba87782ACC81cF093EC6ef",
  pUNIETHWBTC: "0xc80090AA05374d336875907372EE4ee636CBC562",
  pUNIMIRUST: "0x3bcd97dca7b1ced292687c97702725f37af01cac",
  pUNIMTSLAUST: "0xaFB2FE266c215B5aAe9c4a9DaDC325cC7a497230",
  pUNIMAAPLUST: "0xF303B35D5bCb4d9ED20fB122F5E268211dEc0EBd",
  pUNIMQQQUST: "0x7C8de3eE2244207A54b57f45286c9eE1465fee9f",
  pUNIMSLVUST: "0x1ed1fD33b62bEa268e527A622108fe0eE0104C07",
  pUNIMBABAUST: "0x1CF137F651D8f0A4009deD168B442ea2E870323A",
  pUNIFEITRIBE: "0xC1513C1b0B359Bc5aCF7b772100061217838768B",
  pUNIETHLUSD: "0x927e3bCBD329e89A8765B52950861482f0B227c4",
  pyvBOOSTETH: "0xCeD67a187b923F0E5ebcc77C7f2F7da20099e378",
  pDAI: "0x6949Bb624E8e8A90F87cD2058139fcd77D2F3F87",
  pySTETHCRV: "0x72e0317134a9a6fF0675938733343da96d3354e7",
  pyUSDC: "0xEB801AB73E9A2A482aA48CaCA13B1954028F4c94",
  pyLUSDCRV: "0x4fFe73Cf2EEf5E8C8E0E10160bCe440a029166D2",
  pyFRAXCRV: "0x729C6248f9B1Ce62B3d5e31D4eE7EE95cAB32dfD",
  pSUSHICVXETH: "0xDCfAE44244B3fABb5b351b01Dc9f050E589cF24F",
  pLQTY: "0x65B2532474f717D5A8ba38078B78106D56118bbb",
  pSADDLED4: "0xe6487033F5C8e2b4726AF54CA1449FEC18Bd1484",
  pMIM3CRV: "0x1Bf62aCb8603Ef7F3A0DFAF79b25202fe1FAEE06",
  pSPELLETH: "0xdB84a6A48881545E8595218b7a2A3c9bd28498aE",
  pMIMETH: "0x993f35FaF4AEA39e1dfF28f45098429E0c87126C",
  pFOXETH: "0xeb8174F94FDAcCB099422d9A816B8E17d5e393E3",
  pTRUETH: "0x1d92e1702D7054f74eAC3a9569AeB87FC93e101D",
  pyCRVIB: "0x4E9806345fb39FFebd70A01f177A675805019ba8",
  pRLYETH: "0x0989a227E7c50311f7De61e5e61F7c28Df8936f0",

  // Polygon Jars
  pCOMETHUSDCWETH: "0x9eD7e3590F2fB9EEE382dfC55c71F9d3DF12556c",
  pCOMETHPICKLEMUST: "0x7512105DBb4C0E0432844070a45B7EA0D83a23fD",
  pCOMETHMATICMUST: "0x91bcc0BBC2ecA760e3b8A79903CbA53483A7012C",
  pAAVEDAI: "0x0519848e57Ba0469AA5275283ec0712c91e20D8E",
  pAM3CRV: "0x261b5619d85B710f1c2570b65ee945975E2cC221",
  ppSUSHIETHUSDT: "0x80aB65b1525816Ffe4222607EDa73F86D211AC95",
  ppSUSHIMATICETH: "0xd438Ba7217240a378238AcE3f44EFaaaF8aaC75A",
  pQUICKmiMATICUSDC_old: "0xf12BB9dcD40201b5A110e11E38DcddF4d11E6f83",
  pQUICKmiMATICUSDC: "0x74dC9cdCa9a96Fd0B7900e6eb953d1EA8567c3Ce",
  pQUICKmiMATICQI: "0xd06a56c864C80e4cC76A2eF778183104BF0c848d",
  pIRON3USD: "0xE484Ed97E19F6B649E78db0F37D173C392F7A1D9",
  pDINOUSDC: "0xC8450922d18793AD97C401D65BaE8A83aE5353a8",
  pDINOWETH: "0x1cCDB8152Bb12aa34e5E7F6C9c7870cd6C45E37F",
  pQUICKMATICQI: "0xe5BD4954Bd6749a8E939043eEDCe4C62b41CC6D0",
  ppSUSHIPICKLEDAI: "0x1D35e4348826857eaFb22739d4e494C0337cb427",

  // OKEx Jars
  pCHERRYOKTCHE: "0xC3f393FB40F8Cc499C1fe7FA5781495dc6FAc9E9",
  pCHERRYUSDTCHE: "0xe75c8805f9970c7547255059A22d14001d3D7b94",
  pCHERRYETHKUSDT: "0x4a19C49Ee3233A2AE103487f3699D70573EC2371",
  pCHERRYOKTUSDT: "0x7072B80D4E259F26b82C2C4e53cDBFB71450195e",
  pBXHBXHUSDT: "0x09c22bdc438b69bcc190efa8f8e3417277e1dd4f",
  pBXHETHBTK: "0x2a956403816445553FdA5Cbfce2ac6c251454f6f",

  // Arbitrum Jars
  pSUSHIMIMETH: "0x94feade0d3d832e4a05d459ebea9350c6cdd3bca",
  pSUSHISPELLETH: "0x9Cae10143d7316dF417413C43b79Fb5b44Fa85e2",
  pMIM2CRV: "0x973b669ef8c1459f7cb685bf7d7bcd4150977504",
  pCRVTRICRYPTO: "0x8E93d85AFa9E6A092676912c3EB00f46C533a07C" 
};

export const JAR_DEPOSIT_TOKENS = {
  [NETWORK_NAMES.ETH]: {
    SUSHI_ETH_ALCX: "0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8",
    UNIV2_FEI_TRIBE: "0x9928e4046d7c6513326cCeA028cD3e7a91c7590A",
    UNIV2_MIR_UST: "0x87dA823B6fC8EB8575a235A824690fda94674c88",
    UNIV2_MTSLA_UST: "0x5233349957586A8207c52693A959483F9aeAA50C",
    UNIV2_MAAPL_UST: "0xB022e08aDc8bA2dE6bA4fECb59C6D502f66e953B",
    UNIV2_MQQQ_UST: "0x9E3B47B861B451879d43BBA404c35bdFb99F0a6c",
    UNIV2_MSLV_UST: "0x860425bE6ad1345DC7a3e287faCBF32B18bc4fAe",
    UNIV2_MBABA_UST: "0x676Ce85f66aDB8D7b8323AeEfe17087A3b8CB363",
    UNIV2_LUSD_ETH: "0xF20EF17b889b437C151eB5bA15A47bFc62bfF469",
    SUSHI_ETH_YVECRV: "0x10B47177E92Ef9D5C6059055d92DdF6290848991",
    SUSHI_ETH_YVBOOST: "0x9461173740D27311b176476FA27e94C681b1Ea6b",
    steCRV: "0x06325440D014e39736583c165C2963BA99fAf14E",
    SUSHI_ETH_DAI: "0xC3D03e4F041Fd4cD388c549Ee2A29a9E5075882f",
    SUSHI_ETH_USDC: "0x397FF1542f962076d0BFE58eA045FfA2d347ACa0",
    SUSHI_ETH_USDT: "0x06da0fd433C1A5d7a4faa01111c044910A184553",
    SUSHI_ETH_WBTC: "0xCEfF51756c56CeFFCA006cD410B03FFC46dd3a58",
    SUSHI_ETH_YFI: "0x088ee5007C98a9677165D78dD2109AE4a3D04d0C",
    SUSHI_ETH: "0x795065dCc9f64b5614C407a6EFDC400DA6221FB0",
    sCRV: "0xC25a3A3b969415c80451098fa907EC722572917F",
    renCRV: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
    "3CRV": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    UNIV2_ETH_DAI: "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
    UNIV2_ETH_USDC: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    UNIV2_ETH_USDT: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
    UNIV2_ETH_WBTC: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    lusdCRV: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    fraxCRV: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
    SUSHI_CVX_ETH: "0x05767d9EF41dC40689678fFca0608878fb3dE906",
    LQTY: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
    SADDLE_D4: "0xd48cf4d7fb0824cc8bae055df3092584d0a1726a",
    MIM_3CRV: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
    SPELL_ETH: "0xb5De0C3753b6E1B4dBA616Db82767F17513E6d4E",
    MIM_ETH: "0x07D5695a24904CC1B6e3bd57cC7780B90618e3c4",
    UNIV2_FOX_ETH: "0x470e8de2eBaef52014A47Cb5E6aF86884947F08c",
    SUSHI_TRU_ETH: "0xfCEAAf9792139BF714a694f868A215493461446D",
    ibCRV: "0x5282a4ef67d9c33135340fb3289cc1711c13638c",
    UNIV2_RLY_ETH: "0x27fD0857F0EF224097001E87e61026E39e1B04d1",
  },
  [NETWORK_NAMES.POLY]: {
    COMETH_USDC_WETH: "0x1Edb2D8f791D2a51D56979bf3A25673D6E783232",
    COMETH_PICKLE_MUST: "0xb0b5e3bd18eb1e316bcd0bba876570b3c1779c55",
    COMETH_MATIC_MUST: "0x80676b414a905de269d0ac593322af821b683b92",
    DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
    AM3CRV: "0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171",
    POLY_SUSHI_ETH_USDT: "0xc2755915a85c6f6c1c0f3a86ac8c058f11caa9c9",
    POLY_SUSHI_MATIC_ETH: "0xc4e595acdd7d12fec385e5da5d43160e8a0bac0e",
    QUICK_MIMATIC_USDC: "0x160532d2536175d65c03b97b0630a9802c274dad",
    QUICK_MIMATIC_QI: "0x7AfcF11F3e2f01e71B7Cc6b8B5e707E42e6Ea397",
    IRON_3USD: "0xb4d09ff3dA7f9e9A2BA029cb0A81A989fd7B8f17",
    POLY_SUSHI_DINO_USDC: "0x3324af8417844e70b81555A6D1568d78f4D4Bf1f",
    QUICK_DINO_WETH: "0x9f03309A588e33A239Bf49ed8D68b2D45C7A1F11",
    QUICK_MATIC_QI: "0x9A8b2601760814019B7E6eE0052E25f1C623D1E6",
    POLY_SUSHI_PICKLE_DAI: "0x57602582eb5e82a197bae4e8b6b80e39abfc94eb",
  },
  [NETWORK_NAMES.OKEX]: {
    CHERRY_OKT_CHE: "0x8E68C0216562BCEA5523b27ec6B9B6e1cCcBbf88",
    CHERRY_USDT_CHE: "0x089dedbFD12F2aD990c55A2F1061b8Ad986bFF88",
    CHERRY_ETHK_USDT: "0x407F7a2F61E5bAB199F7b9de0Ca330527175Da93",
    CHERRY_OKT_USDT: "0xF3098211d012fF5380A03D80f150Ac6E5753caA8",
    BXH_BXH_USDT: "0x04b2C23Ca7e29B71fd17655eb9Bd79953fA79faF",
    BXH_ETH_BTC: "0x3799Fb39b7fA01E23338C1C3d652FB1AB6E7D5BC",
  },
  [NETWORK_NAMES.ARB]: {
    SUSHI_MIM_ETH: "0xb6DD51D5425861C808Fd60827Ab6CFBfFE604959",
    SUSHI_SPELL_ETH: "0x8f93Eaae544e8f5EB077A1e09C1554067d9e2CA8",
    MIM_2CRV: "0x30dF229cefa463e991e29D42DB0bae2e122B2AC7",
    CRV_TRICRYPTO: "0x8e0B8c8BB9db49a46697F3a5Bb8A308e744821D2"
  },
};

export const DEPOSIT_TOKENS_NAME = {
  sCRV: "sCRV",
  renCRV: "renBTCCRV",
  "3CRV": "3poolCRV",
  steCRV: "steCRV (ETH-stETH)",
  UNIV2_ETH_DAI: "UNI DAI/ETH",
  UNIV2_ETH_USDC: "UNI USDC/ETH",
  UNIV2_ETH_USDT: "UNI USDT/ETH",
  UNIV2_ETH_WBTC: "UNI WBTC/ETH",
  UNIV2_MIR_UST: "UNI MIR/UST",
  UNIV2_MTSLA_UST: "UNI MTSLA/UST",
  UNIV2_MAAPL_UST: "UNI MAAPL/UST",
  UNIV2_MQQQ_UST: "UNI MQQQ/UST",
  UNIV2_MSLV_UST: "UNI MSLV/UST",
  UNIV2_MBABA_UST: "UNI MBABA/UST",
  UNIV2_FEI_TRIBE: "UNI FEI/TRIBE",
  UNIV2_LUSD_ETH: "UNI ETH/LUSD",
  UNIV2_FOX_ETH: "UNI FOX/ETH",
  SUSHI_ETH_DAI: "SLP DAI/ETH",
  SUSHI_ETH_USDC: "SLP USDC/ETH",
  SUSHI_ETH_USDT: "SLP USDT/ETH",
  SUSHI_ETH_WBTC: "SLP WBTC/ETH",
  SUSHI_ETH_YFI: "SLP YFI/ETH",
  SUSHI_ETH_YVECRV: "SLP YVECRV/ETH",
  SUSHI_ETH: "SLP SUSHI/ETH",
  SUSHI_ETH_YVBOOST: "SLP YVBOOST/ETH",
  SUSHI_ETH_ALCX: "SLP ALCX/ETH",
  SUSHI_TRU_ETH: "SLP TRU/ETH",
  USDC: "USDC",
  lusdCRV: "lusdCRV",
  fraxCRV: "fraxCRV",
  ibCRV: "ibCRV",
  SUSHI_CVX_ETH: "SLP CVX/ETH",
  LQTY: "LQTY",
  LUSD: "LUSD",
  SADDLE_D4: "SADDLE D4",
  MIM_3CRV: "Abracadabra MIM3CRV",
  SPELL_ETH: "Abracadabra SPELL/ETH",
  MIM_ETH: "Abracadabra MIM/ETH",
  UNIV2_RLY_ETH: "UNI RLY/ETH",

  // Polygon Jars
  COMETH_USDC_WETH: "COMETH USDC/WETH",
  COMETH_PICKLE_MUST: "COMETH PICKLE/MUST",
  COMETH_MATIC_MUST: "COMETH MATIC/MUST",
  DAI: "DAI",
  AM3CRV: "am3CRV",
  POLY_SUSHI_ETH_USDT: "SLP USDT/ETH",
  POLY_SUSHI_MATIC_ETH: "SLP MATIC/ETH",
  QUICK_MIMATIC_USDC: "QUICK MAI/USDC",
  QUICK_MIMATIC_QI: "QUICK MAI/QI",
  IRON_3USD: "IS3USD",
  POLY_SUSHI_DINO_USDC: "SLP DINO/USDC",
  QUICK_DINO_WETH: "QUICK DINO/WETH",
  QUICK_MATIC_QI: "QUICK QI/MATIC",
  POLY_SUSHI_PICKLE_DAI: "SLP PICKLE/DAI",

  // OKEx Jars
  CHERRY_OKT_CHE: "CHERRY OKT/CHE",
  CHERRY_USDT_CHE: "CHERRY USDT/CHE",
  CHERRY_ETHK_USDT: "CHERRY ETHK/USDT",
  CHERRY_OKT_USDT: "CHERRY OKT/USDT",
  BXH_BXH_USDT: "BXH: BXH/USDT",
  BXH_ETH_BTC: "BXH: ETHK/BTCK",

  // Arbitrum Jars
  SUSHI_MIM_ETH: "SLP MIM/ETH",
  SUSHI_SPELL_ETH: "SLP SPELL/ETH",
  MIM_2CRV: "Abracadabra MIM2CRV",
  CRV_TRICRYPTO: "Curve Tricrypto",
};

export const JAR_ACTIVE: Record<string, boolean> = {
  [DEPOSIT_TOKENS_NAME.sCRV]: false,
  [DEPOSIT_TOKENS_NAME.renCRV]: true,
  [DEPOSIT_TOKENS_NAME["3CRV"]]: true,
  [DEPOSIT_TOKENS_NAME.steCRV]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_DAI]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_USDC]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_USDT]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_ETH_WBTC]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_MTSLA_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MAAPL_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MQQQ_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MSLV_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MBABA_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_MIR_UST]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_FEI_TRIBE]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_LUSD_ETH]: false,
  [DEPOSIT_TOKENS_NAME.UNIV2_FOX_ETH]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_DAI]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_USDC]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_USDT]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_WBTC]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_YFI]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_YVECRV]: false,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_YVBOOST]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_ETH_ALCX]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_TRU_ETH]: true,
  [DEPOSIT_TOKENS_NAME.USDC]: true,
  [DEPOSIT_TOKENS_NAME.lusdCRV]: true,
  [DEPOSIT_TOKENS_NAME.fraxCRV]: true,
  [DEPOSIT_TOKENS_NAME.ibCRV]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_CVX_ETH]: true,
  [DEPOSIT_TOKENS_NAME.LUSD]: true,
  [DEPOSIT_TOKENS_NAME.LQTY]: true,
  [DEPOSIT_TOKENS_NAME.SADDLE_D4]: true,
  [DEPOSIT_TOKENS_NAME.MIM_3CRV]: true,
  [DEPOSIT_TOKENS_NAME.SPELL_ETH]: true,
  [DEPOSIT_TOKENS_NAME.MIM_ETH]: true,
  [DEPOSIT_TOKENS_NAME.UNIV2_RLY_ETH]: true,

  // Polygon Jars
  [DEPOSIT_TOKENS_NAME.COMETH_USDC_WETH]: true,
  [DEPOSIT_TOKENS_NAME.COMETH_PICKLE_MUST]: true,
  [DEPOSIT_TOKENS_NAME.COMETH_MATIC_MUST]: true,
  [DEPOSIT_TOKENS_NAME.DAI]: true,
  [DEPOSIT_TOKENS_NAME.AM3CRV]: true,
  [DEPOSIT_TOKENS_NAME.POLY_SUSHI_ETH_USDT]: true,
  [DEPOSIT_TOKENS_NAME.POLY_SUSHI_MATIC_ETH]: true,
  [DEPOSIT_TOKENS_NAME.QUICK_MIMATIC_USDC]: true,
  [DEPOSIT_TOKENS_NAME.QUICK_MIMATIC_QI]: true,
  [DEPOSIT_TOKENS_NAME.IRON_3USD]: true,
  [DEPOSIT_TOKENS_NAME.POLY_SUSHI_DINO_USDC]: true,
  [DEPOSIT_TOKENS_NAME.QUICK_DINO_WETH]: true,
  [DEPOSIT_TOKENS_NAME.QUICK_MATIC_QI]: true,
  [DEPOSIT_TOKENS_NAME.POLY_SUSHI_PICKLE_DAI]: true,

  // OKEx Jars
  [DEPOSIT_TOKENS_NAME.CHERRY_OKT_CHE]: true,
  [DEPOSIT_TOKENS_NAME.CHERRY_USDT_CHE]: true,
  [DEPOSIT_TOKENS_NAME.CHERRY_ETHK_USDT]: true,
  [DEPOSIT_TOKENS_NAME.CHERRY_OKT_USDT]: true,
  [DEPOSIT_TOKENS_NAME.BXH_BXH_USDT]: true,
  [DEPOSIT_TOKENS_NAME.BXH_ETH_BTC]: true,

  // Arbitrum Jars
  [DEPOSIT_TOKENS_NAME.SUSHI_MIM_ETH]: true,
  [DEPOSIT_TOKENS_NAME.SUSHI_SPELL_ETH]: true,
  [DEPOSIT_TOKENS_NAME.MIM_2CRV]: true,
  [DEPOSIT_TOKENS_NAME.CRV_TRICRYPTO]: true,
};

export const JAR_YEARN: Record<string, boolean> = {
  [DEPOSIT_TOKENS_NAME.USDC]: true,
  [DEPOSIT_TOKENS_NAME.lusdCRV]: true,
  [DEPOSIT_TOKENS_NAME.fraxCRV]: true,
  [DEPOSIT_TOKENS_NAME.ibCRV]: true,
};

export const DEPOSIT_TOKENS_LINK = {
  sCRV: "https://www.curve.fi/susdv2/deposit",
  renCRV: "https://www.curve.fi/ren/deposit",
  "3CRV": "https://www.curve.fi/3pool/deposit",
  steCRV: "https://www.curve.fi/steth/deposit",
  UNIV2_ETH_DAI:
    "https://app.uniswap.org/#/add/v2/0x6b175474e89094c44da98b954eedeac495271d0f/ETH",
  UNIV2_ETH_USDC:
    "https://app.uniswap.org/#/add/v2/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/ETH",
  UNIV2_ETH_USDT:
    "https://app.uniswap.org/#/add/v2/ETH/0xdac17f958d2ee523a2206206994597c13d831ec7",
  UNIV2_ETH_WBTC:
    "https://app.uniswap.org/#/add/v2/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/ETH",
  UNIV2_MIR_UST:
    "https://app.uniswap.org/#/add/v2/0x09a3ecafa817268f77be1283176b946c4ff2e608/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MTSLA_UST:
    "https://app.uniswap.org/#/add/v2/0x21cA39943E91d704678F5D00b6616650F066fD63/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MAAPL_UST:
    "https://app.uniswap.org/#/add/v2/0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MQQQ_UST:
    "https://app.uniswap.org/#/add/v2/0x13B02c8dE71680e71F0820c996E4bE43c2F57d15/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MSLV_UST:
    "https://app.uniswap.org/#/add/v2/0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_MBABA_UST:
    "https://app.uniswap.org/#/add/v2/0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72/0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
  UNIV2_FEI_TRIBE:
    "https://app.uniswap.org/#/add/v2/0x956f47f50a910163d8bf957cf5846d573e7f87ca/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
  UNIV2_LUSD_ETH:
    "https://app.uniswap.org/#/add/v2/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0/ETH",
  UNIV2_FOX_ETH:
    "https://app.uniswap.org/#/add/v2/0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d/ETH",
  SUSHI_MIC_USDT:
    "https://app.sushi.com/add/0x368B3a58B5f49392e5C9E4C998cb0bB966752E51/0xdAC17F958D2ee523a2206206994597C13D831ec7",
  SUSHI_MIS_USDT:
    "https://app.sushi.com/add/0x4b4D2e899658FB59b1D518b68fe836B100ee8958/0xdAC17F958D2ee523a2206206994597C13D831ec7",
  SUSHI_ETH_DAI:
    "https://app.sushi.com/add/0x6b175474e89094c44da98b954eedeac495271d0f/ETH",
  SUSHI_ETH_USDC:
    "https://app.sushi.com/add/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/ETH",
  SUSHI_ETH_USDT:
    "https://app.sushi.com/add/ETH/0xdac17f958d2ee523a2206206994597c13d831ec7",
  SUSHI_ETH_WBTC:
    "https://app.sushi.com/add/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/ETH",
  SUSHI_ETH_YFI:
    "https://app.sushi.com/add/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/ETH",
  SUSHI_ETH_YVECRV:
    "https://app.sushi.com/add/0xc5bddf9843308380375a611c18b50fb9341f502a/ETH",
  SUSHI_ETH_YVBOOST:
    "https://app.sushi.com/add/0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a/ETH",
  SUSHI_ETH:
    "https://app.sushi.com/add/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2/ETH",
  SUSHI_ETH_ALCX:
    "https://app.sushi.com/add/ETH/0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
  SUSHI_CVX_ETH:
    "https://app.sushi.com/add/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b/ETH",
  SUSHI_TRU_ETH:
    "https://app.sushi.com/add/0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784/ETH",
  USDC: "https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  lusdCRV: "https://curve.fi/lusd/deposit",
  fraxCRV: "https://curve.fi/frax/deposit",
  ibCRV: "https://curve.fi/ib/deposit",
  LQTY:
    "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
  SADDLE_D4: "https://saddle.exchange/#/pools/d4/deposit",
  MIM_3CRV: "https://curve.fi/mim/deposit",
  SPELL_ETH:
    "https://app.sushi.com/add/ETH/0x090185f2135308BaD17527004364eBcC2D37e5F6",
  MIM_ETH:
    "https://app.sushi.com/add/ETH/0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
  UNIV2_RLY_ETH:
    "https://app.uniswap.org/#/add/v2/ETH/0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b",

  // Polygon Jars
  COMETH_USDC_WETH:
    "https://swap.cometh.io/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  COMETH_PICKLE_MUST:
    "https://swap.cometh.io/#/add/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f/0x2b88ad57897a8b496595925f43048301c37615da",
  COMETH_MATIC_MUST:
    "https://swap.cometh.io/#/add/0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  DAI:
    "https://polygonscan.com/token/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063?a=0x5143e71982a2d5dc63a77f0a5611685cf13c5aaf",
  AM3CRV: "https://polygon.curve.fi/aave/deposit",
  POLY_SUSHI_ETH_USDT:
    "https://app.sushi.com/#/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  POLY_SUSHI_MATIC_ETH:
    "https://app.sushi.com/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
  QUICK_MIMATIC_USDC:
    "https://quickswap.exchange/#/add/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
  QUICK_MIMATIC_QI:
    "https://quickswap.exchange/#/add/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1/0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
  IRON_3USD: "https://app.iron.finance/swap/pools/is3usd/deposit",
  POLY_SUSHI_DINO_USDC:
    "https://app.sushi.com/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0xAa9654BECca45B5BDFA5ac646c939C62b527D394",
  QUICK_DINO_WETH:
    "https://quickswap.exchange/#/add/0xaa9654becca45b5bdfa5ac646c939c62b527d394/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
  QUICK_MATIC_QI:
    "https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x580A84C73811E1839F75d86d75d88cCa0c241fF4",
  POLY_SUSHI_PICKLE_DAI:
    "https://app.sushi.com/add/0x2b88aD57897A8b496595925F43048301C37615Da/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",

  // OKEx Jars
  CHERRY_OKT_CHE:
    "https://www.cherryswap.net/#/add/ETH/0x8179D97Eb6488860d816e3EcAFE694a4153F216c",
  CHERRY_USDT_CHE:
    "https://www.cherryswap.net/#/add/0x382bb369d343125bfb2117af9c149795c6c65c50/0x8179D97Eb6488860d816e3EcAFE694a4153F216c",
  CHERRY_ETHK_USDT:
    "https://www.cherryswap.net/#/add/0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C/0x382bb369d343125bfb2117af9c149795c6c65c50",
  CHERRY_OKT_USDT:
    "https://www.cherryswap.net/#/add/ETH/0x382bb369d343125bfb2117af9c149795c6c65c50",
  BXH_BXH_USDT:
    "https://okswap.bxh.com/#/add/0x145ad28a42bf334104610f7836d0945dffb6de63/0x382bb369d343125bfb2117af9c149795c6c65c50",
  BXH_ETH_BTC:
    "https://okswap.bxh.com/#/add/0xEF71CA2EE68F45B9Ad6F72fbdb33d707b872315C/0x54e4622DC504176b3BB432dCCAf504569699a7fF",

  // Arbitrum Jars
  SUSHI_MIM_ETH:
    "https://app.sushi.com/add/0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A/ETH",
  SUSHI_SPELL_ETH:
    "https://app.sushi.com/add/0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af/ETH",
  MIM_2CRV: "https://arbitrum.curve.fi/factory/0/deposit",
  CRV_TRICRYPTO: "https://arbitrum.curve.fi/tricrypto/deposit",
 };

export const DEPOSIT_TOKENS_JAR_NAMES = {
  sCRV: "pJar 0a",
  renCRV: "pJar 0b",
  "3CRV": "pJar 0c",
  steCRV: "pJar 0d",
  UNIV2_ETH_DAI: "pJar 0.69a",
  UNIV2_ETH_USDC: "pJar 0.69b",
  UNIV2_ETH_USDT: "pJar 0.69c",
  UNIV2_ETH_WBTC: "pJar 0.69d",
  SUSHI_MIC_USDT: "pJar 0.99g",
  SUSHI_MIS_USDT: "pJar 0.99h",
  UNIV2_MIR_UST: "pJar 0.99k",
  UNIV2_MTSLA_UST: "pJar 0.99l",
  UNIV2_MAAPL_UST: "pJar 0.99m",
  UNIV2_MQQQ_UST: "pJar 0.99n",
  UNIV2_MSLV_UST: "pJar 0.99o",
  UNIV2_MBABA_UST: "pJar 0.99p",
  UNIV2_FEI_TRIBE: "pJar 0.99r",
  UNIV2_LUSD_ETH: "pJar 0.99u",
  sCRV_OLD: "pJar 0 (old)",
  UNIV2_ETH_DAI_OLD: "pJar 0.69a (old)",
  UNIV2_ETH_USDC_OLD: "pJar 0.69b (old)",
  UNIV2_ETH_USDT_OLD: "pJar 0.69c (old)",
  SUSHI_ETH_DAI: "pJar 0.99a",
  SUSHI_ETH_USDC: "pJar 0.99b",
  SUSHI_ETH_USDT: "pJar 0.99c",
  SUSHI_ETH_WBTC: "pJar 0.99d",
  SUSHI_ETH_YFI: "pJar 0.99e",
  SUSHI_ETH_YVECRV: "pJar 0.99i",
  SUSHI_ETH_YVBOOST: "pJar 0.99y",
  SUSHI_ETH: "pJar 0.99q",
  SUSHI_ETH_ALCX: "pJar 0.99x",
  SUSHI_CVX_ETH: "pJar 0.99z",
  USDC: "pJar Y-1",
  lusdCRV: "pJar Y-2",
  fraxCRV: "pJar Y-3",
  ibCRV: "pJar Y-4",
  LQTY: "pJar 0.98l",
  SADDLE_D4: "pJar 0.99s",
  MIM_3CRV: "pJar 0.99m1",
  SPELL_ETH: "pJar 0.99m2",
  MIM_ETH: "pJar 0.99m3",
  UNIV2_FOX_ETH: "pJar 0.99f1",
  SUSHI_TRU_ETH: "pJar 0.99t",
  UNIV2_RLY_ETH: "pJar 0.99r1",

  // Polygon Jars
  COMETH_USDC_WETH: "polyJar 1a",
  COMETH_PICKLE_MUST: "polyJar 1b",
  COMETH_MATIC_MUST: "polyJar 1c",
  DAI: "polyJar 2a",
  AM3CRV: "polyJar 3a",
  POLY_SUSHI_ETH_USDT: "polyJar 4a",
  POLY_SUSHI_MATIC_ETH: "polyJar 4b",
  QUICK_MIMATIC_USDC: "polyJar 5a",
  QUICK_MIMATIC_QI: "polyJar 5b",
  QUICK_MATIC_QI: "polyJar 5c",
  IRON_3USD: "polyJar 6a",
  POLY_SUSHI_DINO_USDC: "polyJar 7a",
  QUICK_DINO_WETH: "polyJar 7b",
  QUICK_MATIC_QI: "polyJar 5c",
  POLY_SUSHI_PICKLE_DAI: "polyJar 4c",

  // OKEx Jars
  CHERRY_OKT_CHE: "okJar 1a",
  CHERRY_USDT_CHE: "okJar 1b",
  CHERRY_ETHK_USDT: "okJar 1c",
  CHERRY_OKT_USDT: "okJar 1d",
  BXH_BXH_USDT: "okJar 2a",
  BXH_ETH_BTC: "okJar 2b",

  // Arbitrum Jars
  SUSHI_MIM_ETH: "arbJar 1a",
  SUSHI_SPELL_ETH: "arbJar 1b",
  MIM_2CRV: "arbJar 1c",
  CRV_TRICRYPTO: "arbJar 2a",
};

export const STRATEGY_NAMES = {
  DAI: {
    COMPOUNDv1: "StrategyCompoundDaiV1",
    COMPOUNDv2: "StrategyCmpdDaiV2",
  },
};

const PRICE_IDS: Record<string, PriceIds> = {
  // Ethereum
  "0x6b175474e89094c44da98b954eedeac495271d0f": "dai",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "usdc",
  "0xdac17f958d2ee523a2206206994597c13d831ec7": "usdt",
  "0x57ab1ec28d129707052df4df418d58a2d46d5f51": "susd",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": "eth",
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "wbtc",
  "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e": "yfi",
  "0x3449fc1cd036255ba1eb19d65ff4ba2b8903a69a": "bac",
  "0x368b3a58b5f49392e5c9e4c998cb0bb966752e51": "mic",
  "0x4b4d2e899658fb59b1d518b68fe836b100ee8958": "mis",
  "0x5a98fcbea516cf06857215779fd812ca3bef1b32": "ldo",
  "0xc5bddf9843308380375a611c18b50fb9341f502a": "yvecrv",
  "0x106538cc16f938776c7c180186975bca23875287": "bas",
  "0x09a3ecafa817268f77be1283176b946c4ff2e608": "mir",
  "0xa47c8bf37f92abed4a126bda807a7b7498661acd": "ust",
  "0x21ca39943e91d704678f5d00b6616650f066fd63": "mtsla",
  "0xd36932143f6ebdedd872d5fb0651f4b72fd15a84": "maapl",
  "0x13b02c8de71680e71f0820c996e4be43c2f57d15": "mqqq",
  "0x9d1555d8cb3c846bb4f7d5b1b1080872c3166676": "mslv",
  "0x56aa298a19c93c6801fdde870fa63ef75cc0af72": "mbaba",
  "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2": "sushi",
  "0x956f47f50a910163d8bf957cf5846d573e7f87ca": "fei",
  "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b": "tribe",
  "0x5f98805a4e8be255a32880fdec7f6728c6568ba0": "lusd",
  "0x853d955acef822db058eb8505911ed77f175b99e": "frax",
  "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0": "fxs",
  "0xdbdb4d16eda451d0503b854cf79d55697f90c8df": "alcx",
  "0x92bf969865c80eda082fd5d8b4e28da4d58e1c3a": "luna",
  "0x9d409a0a012cfba9b15f6d4b36ac57a46966ab9a": "yvboost",
  "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b": "cvx",
  "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d": "lqty",
  "0x090185f2135308bad17527004364ebcc2d37e5f6": "spell",
  "0x99d8a9c45b2eca8864373a26d1459e3dff1e17f3": "mim",
  "0xc770eefad204b5180df6a14ee197d99d808ee52d": "fox",
  "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784": "tru",
  "0xf1f955016ecbcd7321c7266bccfb96c68ea5e49b": "rly",

  // Polygon
  "0x2791bca1f2de4661ed88a30c99a7a9449aa84174": "usdc",
  "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619": "eth",
  "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063": "dai",
  "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f": "must",
  "0x2b88ad57897a8b496595925f43048301c37615da": "pickle",
  "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270": "matic",
  "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a": "sushi",
  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f": "usdt",
  "0xa3fa99a148fa48d14ed51d610c367c61876997f1": "mimatic",
  "0x580a84c73811e1839f75d86d75d88cca0c241ff4": "qi",
  "0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef": "ice",
  "0xaa9654becca45b5bdfa5ac646c939c62b527d394": "dino",

  // OKEx
  "0x8179d97eb6488860d816e3ecafe694a4153f216c": "cherry",
  "0x8f8526dbfd6e38e3d8307702ca8469bae6c56c15": "wokt",
  "0x382bb369d343125bfb2117af9c149795c6c65c50": "usdt",
  "0x54e4622dc504176b3bb432dccaf504569699a7ff": "btck",
  "0xef71ca2ee68f45b9ad6f72fbdb33d707b872315c": "ethk",
  "0xc946daf81b08146b1c7a8da2a851ddf2b3eaaf85": "usdc",
  "0x145ad28a42bf334104610f7836d0945dffb6de63": "bxh",

  // Arbitrum
  "0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a": "mim",
  "0x82af49447d8a07e3bd95bd0d56f35241523fbab1": "eth",
  "0xd4d42f0b6def4ce0383636770ef773390d85c61a": "sushi",
  "0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af": "spell",
  "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "usdt",
  "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f": "wbtc",
};

export const getPriceId = (tokenAddress: string): PriceIds => {
  const l = tokenAddress.toLowerCase();

  if (PRICE_IDS[l]) return PRICE_IDS[l];
  throw new Error(`Unknown token address: ${tokenAddress}`);
};
