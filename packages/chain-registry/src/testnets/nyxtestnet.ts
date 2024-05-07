import type { Chain, AssetList, Versions } from '../types';

export const nyxtestnet: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'nyxtestnet',
  status: 'live',
  network_type: 'testnet',
  website: 'https://nymtech.net/',
  pretty_name: 'Nym',
  chain_id: 'sandbox',
  bech32_prefix: 'n',
  daemon_name: 'nyxd',
  node_home: '$HOME/.nyxd',
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'unym',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
      {
        denom: 'unyx',
        fixed_min_gas_price: 0.025,
        low_gas_price: 0.025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'unyx',
      },
    ],
    lock_duration: {
      time: '432000s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/nymtech/nyxd',
    recommended_version: 'v0.43.0',
    compatible_versions: ['v0.43.0'],
    binaries: {
      'linux/amd64': 'https://github.com/nymtech/nyxd/releases/tag/v0.43.0',
    },
    genesis: {
      genesis_url: 'https://rpc.sandbox.nymtech.net/genesis',
    },
    cosmwasm_enabled: true,
    versions: [
      {
        name: 'v0.43.0',
        tag: 'v0.43.0',
        height: 1933203,
        recommended_version: 'v0.43.0',
        compatible_versions: ['v0.43.0'],
        cosmwasm_enabled: true,
        binaries: {
          'linux/amd64': 'https://github.com/nymtech/nyxd/releases/tag/v0.43.0',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg',
  },
  peers: {
    seeds: [
      {
        id: '245a4b3cf7d56697067705d519b6feddef46a3cb',
        address: '3.255.31.244:26656',
      },
    ],
    persistent_peers: [
      {
        id: '26f7782aff699457c8e6dd9a845e5054c9b0707e',
        address: '3.72.19.120:26656',
      },
      {
        id: '82df98b4aeb7175ef60f38ef4d0c02f6317657bf',
        address: '54.78.98.91:26656',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.sandbox.nymtech.net',
        provider: 'Nym',
      },
    ],
    rest: [
      {
        address: 'https://api.sandbox.nymtech.net',
        provider: 'Nym',
      },
    ],
    grpc: [
      {
        address: 'grpc.sandbox.nymtech.net:443',
        provider: 'Nym',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://sandbox-blocks.nymtech.net/sandbox',
      tx_page: 'https://sandbox-blocks.nymtech.net/sandbox/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg',
      theme: {
        dark_mode: false,
        circle: true,
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.svg',
      theme: {
        dark_mode: true,
        circle: true,
      },
    },
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
    },
  ],
};

export const nyxtestnetAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'nyxtestnet',
  assets: [
    {
      description:
        "NYX Token (NYX) is the Nym Network's native staking and governance token.",
      denom_units: [
        {
          denom: 'unyx',
          exponent: 0,
        },
        {
          denom: 'nyx',
          exponent: 6,
        },
      ],
      base: 'unyx',
      name: 'NYX',
      display: 'nyx',
      symbol: 'NYX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nyx.png',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nyx.png',
        },
      ],
    },
    {
      description:
        "NYM Token (NYM) is the Nym Network's native utility token, used as the primary means to incentivize mixnet node operators.",
      denom_units: [
        {
          denom: 'unym',
          exponent: 0,
        },
        {
          denom: 'nym',
          exponent: 6,
        },
      ],
      base: 'unym',
      name: 'NYM',
      display: 'nym',
      symbol: 'NYM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg',
      },
      coingecko_id: '',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_light.svg',
          theme: {
            dark_mode: false,
            circle: true,
          },
        },
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nyxtestnet/images/nym_token_dark.svg',
          theme: {
            dark_mode: true,
            circle: true,
          },
        },
      ],
    },
  ],
};
