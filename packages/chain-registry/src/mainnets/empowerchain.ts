import type { Chain, AssetLists } from '../types';

export const empowerchain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'empowerchain',
  chain_id: 'empowerchain-1',
  pretty_name: 'EmpowerChain',
  status: 'live',
  network_type: 'mainnet',
  bech32_prefix: 'empower',
  daemon_name: 'empowerd',
  node_home: '$HOME/.empowerchain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'umpwr',
        fixed_min_gas_price: 0,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.03,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'umpwr',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/EmpowerPlastic/empowerchain',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url:
        'https://github.com/EmpowerPlastic/empowerchain/raw/main/mainnet/empowerchain-1/genesis.tar.gz',
    },
    versions: [
      {
        name: 'v1.0.0',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'f2ed98cf518b501b6d1c10c4a16d0dfbc4a9cc98',
        address: 'tenderseed.ccvalidators.com:27001',
      },
      {
        id: 'e16668ddd526f4e114ebb6c4714f0c18c0add8f8',
        address: 'empower-seed.zenscape.one:26656',
      },
      {
        id: '6740fa259552a628266a85de8c2a3dee7702b8f9',
        address: 'empower-mainnet-seed.itrocket.net:14656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'empowerchain-mainnet-seed.autostake.com:27326',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'a1427b456513ab70967a2a5c618d347bc89e8848',
        address: 'seed.empowerchain.io:26656',
      },
      {
        id: 'd2362ebcdd562500ac8c4cfa2214a89ad811033c',
        address: 'seeds.whispernode.com:17456',
        provider: 'WhisperNode🤐',
      },
      {
        id: '9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152',
        address: 'empowerchain.seed.mzonder.com:12156',
        provider: 'MZONDER',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'empowerchain-mainnet-peer.autostake.com:27326',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '178718a993161cc20f9d0de2bbef9a3aec5c1d3d',
        address: 'rpc.empower.indonode.net:52656',
        provider: 'Indonode',
      },
      {
        id: '192d6c396fe0f9da1b1b700aab8bdd1ce6a49490',
        address: 'empw-m.peers.stavr.tech:22056',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'a5ce71892959a23ed941cb0167f28959b6694ea3',
        address: 'rpc-empower.vinjan.xyz:24656',
        provider: 'vinjan',
      },
      {
        id: '60b046f36fe485fb40cb8ece99e14244141de3cc',
        address: 'mainnet-empower.konsortech.xyz:27656',
        provider: 'KonsorTech',
      },
      {
        id: 'f7eb23352efa7aba7ba9aa56fe034ede139deab3',
        address: 'empower.peer.stakevillage.net:16856',
        provider: 'Stake Village',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-empowerchain.ecostake.com:443',
        provider: 'ecostake',
      },
      {
        address: 'https://empowerchain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://empower.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'http://empw.rpc.m.stavr.tech:22057',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-empower.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://rpc-empowerchain.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'https://empower-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://rpc-empower.vinjan.xyz:443',
        provider: 'vinjan',
      },
      {
        address: 'https://rpc.empower.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://mainnet-empower-rpc.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://empower.rpc.stakevillage.net:443',
        provider: 'Stake Village',
      },
    ],
    rest: [
      {
        address: 'https://rest-empowerchain.ecostake.com:443',
        provider: 'ecostake',
      },
      {
        address: 'https://empowerchain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://empower.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://empw.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://empower-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://lcd-empower.whispernode.com:443',
        provider: 'WhisperNode🤐',
      },
      {
        address: 'https://api-empower.vinjan.xyz:443',
        provider: 'vinjan',
      },
      {
        address: 'https://api.empower.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://mainnet-empower-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://empower.api.stakevillage.net',
        provider: 'Stake Village',
      },
    ],
    grpc: [
      {
        address: 'empowerchain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://empower.grpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'empower-grpc.w3coins.io:17390',
        provider: 'w3coins',
      },
      {
        address: 'grpc-empowerchain.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'http://empw.grpc.m.stavr.tech:9141',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'grpc-empower.vinjan.xyz',
        provider: 'vinjan',
      },
      {
        address: 'https://grpc.empower.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'empower.grpc.stakevillage.net:16890',
        provider: 'Stake Village',
      },
    ],
  },
  explorers: [
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Empower-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Empower-Mainnet/txs/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Empower-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/empower',
      tx_page: 'https://explorer.nodestake.top/empower/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.top/empower/account/{$accountAddress}',
    },
    {
      kind: 'Stake Village',
      url: 'https://exp.stakevillage.net/empower',
      tx_page: 'https://exp.stakevillage.net/empower/tx/${txHash}',
      account_page:
        'https://exp.stakevillage.net/empower/account/${accountAddress}',
    },
  ],
};

export const empowerchainAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'empowerchain',
  assets: [
    {
      description: 'The native staking and governance token of Empower.',
      denom_units: [
        {
          denom: 'umpwr',
          exponent: 0,
        },
        {
          denom: 'mpwr',
          exponent: 6,
        },
      ],
      base: 'umpwr',
      name: 'MPWR',
      display: 'mpwr',
      symbol: 'MPWR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/empowerchain/images/mpwr.svg',
        },
      ],
    },
  ],
};
