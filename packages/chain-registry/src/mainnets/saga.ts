import type { Chain, AssetList, Versions } from '../types';

export const saga: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'saga',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.saga.xyz/',
  pretty_name: 'Saga',
  chain_id: 'ssc-1',
  bech32_prefix: 'saga',
  daemon_name: 'sscd',
  node_home: '$HOME/.ssc',
  key_algos: ['secp256k1'],
  slip44: 118,
  staking: {
    staking_tokens: [
      {
        denom: 'usaga',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  fees: {
    fee_tokens: [
      {
        denom: 'usaga',
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sagaxyz/ssc',
    genesis: {
      name: 'v0.1.5',
      genesis_url:
        'https://raw.githubusercontent.com/sagaxyz/mainnet/main/genesis/genesis.json',
    },
    recommended_version: 'v0.1.5',
    compatible_versions: ['v0.1.5'],
    cosmos_sdk_version: 'osmosis-labs/cosmos-sdk v0.47.5',
    consensus: {
      type: 'cometbft',
      version: 'osmosis-labs/cometbft v0.37.2',
    },
    cosmwasm_enabled: false,
    ibc_go_version: 'v7.3.1',
    ics_enabled: ['ics20-1'],
    go_version: '1.21',
  },
  peers: {
    seeds: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'saga-mainnet-seed.autostake.com:27426',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    persistent_peers: [
      {
        id: '9e22163e2bf159883557ea36d1025ca3468f0d71',
        address: '211.216.47.211:26656',
        provider: '',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'saga-mainnet-peer.autostake.com:27426',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'saga.rpc.kjnodes.com:17659',
        provider: 'kjnodes',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-saga.keplr.app',
        provider: 'chainapsis',
      },
      {
        address: 'https://saga-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://saga-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc.saga.nodestake.org',
        provider: 'NodeStake',
      },
      {
        address: 'https://saga.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://rpc.saga.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    rest: [
      {
        address: 'https://saga-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://saga-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://api.saga.nodestake.org',
        provider: 'NodeStake',
      },
      {
        address: 'https://saga.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://lcd.saga.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    grpc: [
      {
        address: 'saga-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'saga-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc.saga.nodestake.org:443',
        provider: 'NodeStake',
      },
      {
        address: 'saga.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'grpc.saga.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
  },
  description:
    'Saga is a Layer 1 protocol that allows developers to automatically spin up VM-agnostic, parallelized and interoperable dedicated chains, or “Chainlets,” that provide applications with infinite horizontal scalability. Each Chainlet is a replica of the Saga Mainnet, with the same validator set and security model.\n\nSaga’s mission is to enable the next 1000 chains in gaming and entertainment as part of the growing Saga Multiverse. ',
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/saga',
      tx_page: 'https://www.mintscan.io/saga/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/saga/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/saga',
      tx_page: 'https://ezstaking.app/saga/txs/${txHash}',
      account_page: 'https://ezstaking.app/saga/account/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.org/saga',
      tx_page: 'https://explorer.nodestake.org/saga/tx/${txHash}',
      account_page:
        'https://explorer.nodestake.org/saga/account/${accountAddress}',
    },
  ],
  keywords: [],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
    },
  ],
};

export const sagaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'saga',
  assets: [
    {
      description: 'The native staking and governance token of Saga.',
      extended_description:
        'Saga is a Layer 1 protocol that allows developers to automatically spin up VM-agnostic, parallelized and interoperable dedicated chains, or “Chainlets,” that provide applications with infinite horizontal scalability. Each Chainlet is a replica of the Saga Mainnet, with the same validator set and security model.\n\nSaga’s mission is to enable the next 1000 chains in gaming and entertainment as part of the growing Saga Multiverse.',
      denom_units: [
        {
          denom: 'usaga',
          exponent: 0,
        },
        {
          denom: 'saga',
          exponent: 6,
        },
      ],
      base: 'usaga',
      name: 'Saga',
      display: 'saga',
      symbol: 'SAGA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
      },
      coingecko_id: 'saga-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga.svg',
          theme: {
            primary_color_hex: '#000000',
            dark_mode: false,
          },
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/saga/images/saga_white.svg',
          theme: {
            primary_color_hex: '#FFFFFF',
            dark_mode: true,
          },
        },
      ],
      socials: {
        website: 'https://www.saga.xyz/',
        twitter: 'https://twitter.com/Sagaxyz__',
      },
    },
  ],
};
