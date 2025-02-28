import type { Chain, AssetList, Versions } from '../types';

export const sentinel: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sentinel',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://sentinel.co/',
  pretty_name: 'Sentinel',
  chain_id: 'sentinelhub-2',
  bech32_prefix: 'sent',
  daemon_name: 'sentinelhub',
  node_home: '$HOME/.sentinelhub',
  slip44: 118,
  key_algos: ['secp256k1'],
  fees: {
    fee_tokens: [
      {
        denom: 'udvpn',
        low_gas_price: 0.1,
        average_gas_price: 0.25,
        high_gas_price: 0.4,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'udvpn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sentinel-official/hub',
    recommended_version: 'v0.11.3',
    compatible_versions: ['v0.11.2', 'v0.11.1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/sentinel-official/networks/main/sentinelhub-2/genesis.zip',
    },
    versions: [
      {
        name: 'upgrade-1',
        recommended_version: 'v0.7.0',
        compatible_versions: ['v0.7.0'],
      },
      {
        name: 'upgrade-2',
        recommended_version: 'v0.8.3',
        compatible_versions: ['v0.8.3'],
      },
      {
        name: 'upgrade-3',
        recommended_version: 'v0.9.3',
        compatible_versions: ['v0.9.3'],
      },
      {
        name: 'upgrade-4',
        recommended_version: 'v0.10.1',
        compatible_versions: ['v0.10.1'],
      },
      {
        name: 'v11',
        recommended_version: 'v0.11.3',
        compatible_versions: ['v0.11.2', 'v0.11.1'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
  },
  description:
    'The Sentinel ecosystem is a global network of autonomous dVPN applications that enable private and censorship resistant internet access.',
  peers: {
    seeds: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sentinel-mainnet-seed.autostake.com:26706',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'b46d8fea2e951ba21594c047c8746ab6dc315cea',
        address: 'p2p-pve01.roomit.xyz:16604',
        provider: 'RoomIT',
      },
      {
        id: 'e8b2ebbd5e90bd89cb89160dd040fda7d04984a4',
        address: 'seeds.badgerbite.io:26656',
        provider: 'BadgerBite',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:17256',
        provider: 'WhisperNode 🤐',
      },
    ],
    persistent_peers: [
      {
        id: '9174af5f16f74660cccf49f893d243949af45f7f',
        address: '54.177.29.46:26656',
      },
      {
        id: 'a77f6a094578dad899e2f40e0626b4c6d4705311',
        address: '3.36.165.232:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'sentinel-mainnet-peer.autostake.com:26706',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '01cf083bf6e4667c4c1d2bb9454a2e06d6d5e415',
        address: '85.237.193.117:26656',
      },
      {
        id: '13a32c4a2bdd78d4017bedb60b1d61a8558b7a88',
        address: '85.10.211.82:36656',
      },
      {
        id: '233592737772cf4e8aca29623cb54d53e978bf84',
        address: '51.159.185.51:26656',
      },
      {
        id: '2a426a8a0070a6830bad32b96cd3da1b7b6a2faa',
        address: '65.108.11.250:29656',
      },
      {
        id: '36b67a90b368716bb9ce3e47f5198816405c4de3',
        address: '195.201.63.87:46666',
      },
      {
        id: '4398bd773ac885b7365de3604eb487be10c54563',
        address: '95.214.55.227:26706',
      },
      {
        id: '440d002ecaaf99a53ff551e1add65b60319ae1b3',
        address: '131.153.175.94:30656',
      },
      {
        id: '442e7d3d100a91ed2d16c15879b36a8beef7faca',
        address: '89.58.26.9:26656',
      },
      {
        id: '44a6007450d5b8292c19e193ab53f5ad9861b60b',
        address: '46.20.245.42:26656',
      },
      {
        id: '45ed1c0498e1ba7894e1362d533583b8c0fa1ae7',
        address: '136.243.67.189:23956',
      },
      {
        id: '464d1b0650ee82c975e1e7f40ae737f4f688ae32',
        address: '178.154.212.189:26656',
      },
      {
        id: '471518432477e31ea348af246c0b54095d41352c',
        address: '169.155.47.161:26656',
      },
      {
        id: '4c011a64e66a38df4139ad2af5e8fe0798d00624',
        address: '65.109.97.249:23956',
      },
      {
        id: '4e1c2471efb89239fb04a4b75f9f87177fd91d00',
        address: '169.155.171.37:26656',
      },
      {
        id: '5ace0e57784e34930360bf6cc00dd5265278f708',
        address: '65.108.238.166:23956',
      },
      {
        id: '662ccbd8c9885ddff6800a707da3dc6b0c4ed49d',
        address: '15.235.115.148:10001',
      },
      {
        id: '6f32a2ed276e66d27d0b3e3de8010fc755a26825',
        address: '35.196.143.233:26656',
      },
      {
        id: '89757803f40da51678451735445ad40d5b15e059',
        address: '169.155.169.176:26656',
      },
      {
        id: '8b505a3c417852b0fb00b4e82a7c10d76501ff66',
        address: 'pve5.badgerbite.io:56656',
      },
      {
        id: '9026bf3d313ef789e614f10eba8c6fcdde2e8768',
        address: '54.176.220.6:26656',
      },
      {
        id: 'a07b6a5332a51bc18177ab27567bcbffd49da88d',
        address: '35.237.231.212:26656',
      },
      {
        id: 'a0b098de62c3f2f1fd62c4db50c716f734a9153b',
        address: '146.190.53.167:30543',
      },
      {
        id: 'abc27c91439681b1e7fa4b08b54ebbcc42855973',
        address: '65.108.195.12:26656',
      },
      {
        id: 'b212d5740b2e11e54f56b072dc13b6134650cfb5',
        address: '169.155.45.136:26656',
      },
      {
        id: 'c124ce0b508e8b9ed1c5b6957f362225659b5343',
        address: '134.65.192.134:26656',
      },
      {
        id: 'e1b058e5cfa2b836ddaa496b10911da62dcf182e',
        address: '169.155.168.109:26656',
      },
      {
        id: 'e1be5e84e6f76bdc4d24d2f39830b6f50857e684',
        address: '78.107.253.133:33656',
      },
      {
        id: 'e407ce1485c5c5abe86d4c4b04f21bc04c321edc',
        address: '89.58.31.128:36656',
      },
      {
        id: 'e726816f42831689eab9378d5d577f1d06d25716',
        address: '169.155.170.219:26656',
      },
      {
        id: 'e7b825983d15eef809e929b44b2085dcec9d27b6',
        address: '51.68.44.219:26556',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: '95.214.55.198:26706',
      },
      {
        id: 'f6e4a9bd29b8629dc93b813ec784114ca604dff8',
        address: '65.108.238.219:23956',
      },
      {
        id: 'f7111587af92ebe3c57c6080d68755dd74e13a3b',
        address: '104.196.120.61:26656',
      },
      {
        id: '73ef1c0f9bc77fd925decf7fa41f22a35b5dc76d',
        address: 'sentinel.declab.pro:26630',
      },
      {
        id: '637077d431f618181597706810a65c826524fd74',
        address: 'sentinel.rpc.nodeshub.online:23956',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-sentinel.busurnode.com',
        provider: 'Busurnode',
      },
      {
        address: 'https://rpc-sentinel-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://rpc-sentinel.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc.sentinel.chaintools.tech/',
        provider: 'ChainTools',
      },
      {
        address: 'https://rpc.sentinel.quokkastake.io',
        provider: '🐹 Quokka Stake',
      },
      {
        address: 'https://rpc.dvpn.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://sentinel-rpc.badgerbite.io/',
        provider: 'BadgerBite',
      },
      {
        address: 'https://sentinel-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://sentinel-rpc.validatornode.com/',
        provider: 'ValidatorNode',
      },
      {
        address: 'https://rpc.trinityvalidator.com',
        provider: 'Trinity Validator',
      },
      {
        address: 'https://rpc.sentinelgrowthdao.com',
        provider: 'Sentinel Growth DAO',
      },
      {
        address: 'https://public.stakewolle.com/cosmos/sentinel/rpc',
        provider: 'Stakewolle',
      },
      {
        address: 'http://163.197.193.2:26657',
        provider: 'Tesla Full Node',
      },
      {
        address: 'https://sentinel.declab.pro:26628',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://sentinel.rpc.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    rest: [
      {
        address: 'https://api-sentinel.busurnode.com',
        provider: 'Busurnode',
      },
      {
        address: 'https://api-sentinel-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://lcd-sentinel.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://api.sentinel.quokkastake.io',
        provider: '🐹 Quokka Stake',
      },
      {
        address: 'https://api.dvpn.roomit.xyz',
        provider: 'RoomIT',
      },
      {
        address: 'https://sentinel-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://sentinel-api.validatornode.com',
        provider: 'ValidatorNode',
      },
      {
        address: 'https://api.trinityvalidator.com',
        provider: 'Trinity Validator',
      },
      {
        address: 'https://api.sentinelgrowthdao.com',
        provider: 'Sentinel Growth DAO',
      },
      {
        address: 'https://public.stakewolle.com/cosmos/sentinel/rest',
        provider: 'Stakewolle',
      },
      {
        address: 'http://163.197.193.2:26657',
        provider: 'Tesla Full Node',
      },
      {
        address: 'https://sentinel.declab.pro:443',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://sentinel.api.nodeshub.online:443',
        provider: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      },
    ],
    grpc: [
      {
        address: 'grpc-sentinel-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'sentinel.grpcui.chaintools.host:443',
        provider: 'ChainTools',
      },
      {
        address: 'sentinel-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc.dvpn.roomit.xyz:8443',
        provider: 'RoomIT',
      },
      {
        address: 'sentinel-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://sentinel.declab.pro:9019',
        provider: 'Decloud Nodes Lab',
      },
      {
        address: 'https://sentinel.grpc.nodeshub.online',
        provider: 'Nodes Hub',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/sentinel',
      tx_page: 'https://www.mintscan.io/sentinel/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/sentinel/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/sentinel',
      tx_page: 'https://ezstaking.app/sentinel/txs/${txHash}',
      account_page: 'https://ezstaking.app/sentinel/account/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/sentinel',
      tx_page: 'https://atomscan.com/sentinel/transactions/${txHash}',
      account_page: 'https://atomscan.com/sentinel/accounts/${accountAddress}',
    },
    {
      kind: 'RoomIT',
      url: 'https://explorer.tendermint.roomit.xyz/sentinel-mainnet',
      tx_page:
        'https://explorer.tendermint.roomit.xyz/sentinel-mainnet/transactions/${txHash}',
      account_page:
        'https://explorer.tendermint.roomit.xyz/sentinel-mainnet/accounts/${accountAddress}',
    },
    {
      kind: 'ValidatorNode',
      url: 'https://explorer.validatornode.com/sentinel',
      tx_page: 'https://explorer.validatornode.com/sentinel/tx/${txHash}',
    },
    {
      kind: 'Decloud Nodes Lab',
      url: 'https://explorer.declab.pro/Sentinel',
      tx_page: 'https://explorer.declab.pro/Sentinel/tx/${txHash}',
    },
    {
      kind: 'Nodes Hub 🛡️ 100% Slash Protected 🛡️ | Restake ✅',
      url: 'https://explorer.nodeshub.online/sentinel/',
      tx_page: 'https://explorer.nodeshub.online/sentinel/tx/${txHash}',
      account_page:
        'https://explorer.nodeshub.online/sentinel/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
    },
  ],
};

export const sentinelAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'sentinel',
  assets: [
    {
      description: 'DVPN is the native token of the Sentinel Hub.',
      denom_units: [
        {
          denom: 'udvpn',
          exponent: 0,
        },
        {
          denom: 'dvpn',
          exponent: 6,
        },
      ],
      base: 'udvpn',
      name: 'Sentinel',
      display: 'dvpn',
      symbol: 'DVPN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
      },
      coingecko_id: 'sentinel',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/images/dvpn.svg',
        },
      ],
      socials: {
        website: 'https://www.sentinel.co/',
        twitter: 'https://twitter.com/SentinelVPN',
      },
    },
  ],
};
