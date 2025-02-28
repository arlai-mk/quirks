import type { Chain, AssetList, Versions } from '../types';

export const seda: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'seda',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.seda.xyz/',
  pretty_name: 'SEDA',
  chain_id: 'seda-1',
  bech32_prefix: 'seda',
  daemon_name: 'sedad',
  node_home: '$HOME/.sedad',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'aseda',
        fixed_min_gas_price: 10000000000,
        low_gas_price: 10000000000,
        average_gas_price: 10000000000,
        high_gas_price: 14000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'aseda',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sedaprotocol/seda-chain',
    recommended_version: 'v0.1.1',
    compatible_versions: ['v0.1.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.1/sedad-amd64',
      'linux/arm64':
        'https://github.com/sedaprotocol/seda-chain/releases/download/v0.1.1/sedad-arm64',
    },
    cosmos_sdk_version: 'v0.50.5',
    consensus: {
      type: 'cometbft',
      version: 'v0.38.6',
    },
    ibc_go_version: 'v8.2.0',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/sedaprotocol/seda-networks/main/mainnet/genesis.json',
    },
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
  },
  description:
    'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
  peers: {
    seeds: [
      {
        id: '31f54fbcf445a9d9286426be59a17a811dd63f84',
        address: '18.133.231.208:26656',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:25856',
        provider: 'Polkachu',
      },
      {
        id: 'cec848e7d4c5a7ae305b27cda133d213435c110f',
        address: 'seed-seda.ibs.team:16679',
        provider: 'Inter Blockchain Services',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'seda.rpc.kjnodes.com:17359',
        provider: 'kjnodes',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:25856',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'cec848e7d4c5a7ae305b27cda133d213435c110f',
        address: 'seed-seda.ibs.team:16679',
        provider: 'Inter Blockchain Services',
      },
    ],
    persistent_peers: [
      {
        id: '31f54fbcf445a9d9286426be59a17a811dd63f84',
        address: '18.133.231.208:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.mainnet.seda.xyz/',
        provider: 'SEDA',
      },
      {
        address: 'https://seda-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://seda.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://seda-rpc.synergynodes.com/',
        provider: 'Synergy Nodes',
      },
      {
        address: 'https://seda-rpc.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://seda-rpc.kleomedes.network/',
        provider: 'Kleomedes',
      },
      {
        address: 'https://seda-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://lcd.mainnet.seda.xyz/',
        provider: 'SEDA',
      },
      {
        address: 'https://seda-api.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://seda.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://seda-api.synergynodes.com/',
        provider: 'Synergy Nodes',
      },
      {
        address: 'https://seda-api.lavenderfive.com/',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://seda-api.kleomedes.network/',
        provider: 'Kleomedes',
      },
      {
        address: 'https://seda-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    grpc: [
      {
        address: 'seda-grpc.polkachu.com:25890',
        provider: 'Polkachu',
      },
      {
        address: 'https://seda-grpc.synergynodes.com/',
        provider: 'Synergy Nodes',
      },
      {
        address: 'seda.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'https://seda-grpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
  },
  explorers: [
    {
      kind: 'sedaexplorer',
      url: 'https://explorer.seda.xyz/',
      tx_page: 'https://explorer.seda.xyz/txs/${txHash}',
      account_page: 'https://explorer.seda.xyz/account/${accountAddress}',
    },
    {
      kind: 'explorers.guru',
      url: 'https://seda.explorers.guru',
      tx_page: 'https://seda.explorers.guru/transaction/${txHash}',
      account_page: 'https://seda.explorers.guru/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
    },
  ],
};

export const sedaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'seda',
  assets: [
    {
      description: 'The native token of SEDA Chain.',
      extended_description:
        'SEDA is a standard for modular data transport and querying. Any data type, for all networks.',
      denom_units: [
        {
          denom: 'aseda',
          exponent: 0,
        },
        {
          denom: 'seda',
          exponent: 18,
        },
      ],
      base: 'aseda',
      name: 'Seda',
      display: 'seda',
      symbol: 'SEDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
      },
      coingecko_id: 'seda-2',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/seda/images/seda.svg',
        },
      ],
      socials: {
        website: 'https://www.seda.xyz/',
        twitter: 'https://twitter.com/sedaprotocol',
      },
    },
  ],
};
