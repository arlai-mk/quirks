import type { Chain, AssetLists } from '../types';

export const sgetestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'sgetestnet',
  chain_id: 'sge-network-3',
  pretty_name: 'SGE Testnet',
  status: 'live',
  network_type: 'testnet',
  website: 'sgenetwork.io',
  bech32_prefix: 'sge',
  daemon_name: 'usge',
  node_home: '$HOME/.sged',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'usge',
        fixed_min_gas_price: 0,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/sge-network/sge',
    recommended_version: 'v1.0.1',
    compatible_versions: ['v1.0.1'],
  },
  peers: {
    seeds: [
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:17756',
        provider: 'LavenderFive',
      },
      {
        id: '7c02373bd6cee62b5f3a59b5b9334f2288b3c0ef',
        address: 'rpc-t.sge.nodestake.top:666',
        provider: 'NodeStake',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:17756',
        provider: 'Polkachu',
      },
      {
        id: 'babc3f3f7804933265ec9c40ad94f4da8e9e0017',
        address: 'seed.rhinostake.com:17756',
        provider: 'Rhino',
      },
    ],
    persistent_peers: [
      {
        id: '51e4e7b04d2f669f5efa53e8d95891fa04e4c5b9',
        address: '206.125.33.62:26656',
        provider: 'Artifact',
      },
      {
        id: '59724f5c6232b1d10507e08b9a9f2ff14181a779',
        address: '51.195.61.9:20656',
        provider: 'KingsNode',
      },
      {
        id: '3819c7aebf9ec5f3694747ea3c061b91f555c590',
        address: '148.251.177.108:17756',
        provider: 'Polkachu',
      },
      {
        id: '58556b5fb572e20d41ce686149ab7b1646ad63a9',
        address: '65.108.15.170:26656',
        provider: 'ramuchi.tech',
      },
      {
        id: 'e2c5f2a902b7e6b8c006008e962ab4ddd70cdd78',
        address: 'sge.peers-t.stavr.tech:1146',
        provider: '🔥STAVR🔥',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.svg',
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.sgenetwork.io',
        provider: 'Sge Network',
      },
      {
        address: 'https://testnet-saage-rpc.lavenderfive.com/ ',
        provider: 'Lavender.Five',
      },
      {
        address: 'https://saage-testnet-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-t.sge.nodestake.top/',
        provider: 'Nodestake.top',
      },
      {
        address: 'http://sge.rpc.t.stavr.tech:1147',
        provider: '🔥STAVR🔥',
      },
    ],
    rest: [
      {
        address: 'https://api.testnet.sgenetwork.io',
        provider: 'Sge Network',
      },
      {
        address: 'https://api-t.sge.nodestake.top/',
        provider: 'Nodestake.top',
      },
      {
        address: 'https://saage-testnet-api.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://sge.api.t.stavr.tech',
        provider: '🔥STAVR🔥',
      },
    ],
  },
  explorers: [
    {
      kind: 'Sge BlockExplorer',
      url: 'https://blockexplorer.testnet.sgenetwork.io/',
      tx_page:
        'https://blockexplorer.testnet.sgenetwork.io/sge-network/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Sge-Testnet',
      tx_page: 'https://explorer.stavr.tech/Sge-Testnet/tx/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Sge-Testnet/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.svg',
    },
  ],
};

export const sgetestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'sgetestnet',
  assets: [
    {
      description:
        'The SGE token is primarily a governance token for the SGE Network blockchain.',
      denom_units: [
        {
          denom: 'usge',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'usge',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'usge',
      name: 'SGE Testnet',
      display: 'sge',
      symbol: 'SGE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sgetestnet/images/sge.png',
        },
      ],
    },
  ],
};
