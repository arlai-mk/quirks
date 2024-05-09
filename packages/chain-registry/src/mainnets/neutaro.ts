import type { Chain, AssetList, Versions } from '../types';

export const neutaro: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'neutaro',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://neutaro.com/',
  pretty_name: 'Neutaro',
  chain_id: 'Neutaro-1',
  bech32_prefix: 'neutaro',
  daemon_name: 'neutaro',
  node_home: '$HOME/.Neutaro',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uneutaro',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0,
        high_gas_price: 0.035,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uneutaro',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/Neutaro/Neutaro',
    recommended_version: 'v1.0.0',
    compatible_versions: ['v1.0.0'],
    genesis: {
      genesis_url: 'http://154.26.153.186/genesis.json',
    },
    versions: [
      {
        name: 'Neutaro1',
        recommended_version: 'v1.0.0',
        compatible_versions: ['v1.0.0'],
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
  },
  description:
    'The Blockchain that is Pioneering Ethical Standards, Values, and Transparency in cross chain Blockchain Technology to drive innovation',
  peers: {
    seeds: [
      {
        id: '2fd06277f46e845ca73df8f81caf68e6579bbe32',
        address: '86.48.20.122:26656',
        provider: 'Neutaro',
      },
    ],
    persistent_peers: [
      {
        id: 'fabdabd6c438f0ac45a5bb62702fd4ce0b84e876',
        address: '38.242.255.37:26656',
        provider: 'Arvy',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc2.neutaro.tech:443',
        provider: 'Neutaro',
      },
      {
        address: 'https://rpc-neutaro.blockval.io',
        provider: 'Blockval',
      },
    ],
    rest: [
      {
        address: 'https://api2.neutaro.tech:443',
        provider: 'Neutaro',
      },
      {
        address: 'https://api-neutaro.blockval.io',
        provider: 'Blockval',
      },
    ],
    grpc: [
      {
        address: 'https://grpc2.neutaro.tech:443',
        provider: 'Neutaro',
      },
      {
        address: 'https://grpc-neutaro.blockval.io',
        provider: 'Blockval',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorer.neutaro.tech/Neutaro',
      tx_page: 'https://explorer.neutaro.tech/Neutaro/tx/${txHash}',
      account_page:
        'https://explorer.neutaro.tech/Neutaro/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
    },
  ],
};

export const neutaroAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutaro',
  assets: [
    {
      description: 'The native token of Neutaro',
      denom_units: [
        {
          denom: 'uneutaro',
          exponent: 0,
        },
        {
          denom: 'neutaro',
          exponent: 6,
        },
      ],
      base: 'uneutaro',
      name: 'Neutaro',
      display: 'neutaro',
      symbol: 'NTMPI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
      },
      coingecko_id: 'neutaro',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutaro/images/neutaro.svg',
        },
      ],
    },
  ],
};
