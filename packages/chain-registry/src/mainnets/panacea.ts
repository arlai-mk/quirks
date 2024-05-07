import type { Chain, AssetList, Versions } from '../types';

export const panacea: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'panacea',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://medibloc.com/en/',
  pretty_name: 'Medibloc',
  chain_id: 'panacea-3',
  bech32_prefix: 'panacea',
  daemon_name: 'panacead',
  node_home: '$HOME/.panacead',
  key_algos: ['secp256k1'],
  slip44: 371,
  fees: {
    fee_tokens: [
      {
        denom: 'umed',
        fixed_min_gas_price: 5,
        low_gas_price: 5,
        average_gas_price: 7,
        high_gas_price: 9,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'umed',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/medibloc/panacea-core',
    recommended_version: 'v2.0.6',
    compatible_versions: ['v2.0.5'],
    binaries: {},
    genesis: {
      genesis_url:
        'https://github.com/medibloc/panacea-mainnet/raw/master/panacea-3/genesis.json',
    },
    versions: [
      {
        name: 'v2.0.6',
        recommended_version: 'v2.0.6',
        compatible_versions: ['v2.0.5'],
        binaries: {},
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
  },
  peers: {
    seeds: [
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '395aead00e99f828e4af92531dcd8c8da1255a8f',
        address: '3.36.50.133:26656',
        provider: 'medibloc',
      },
      {
        id: 'c238f279c970764d6893ae44bdf5c949dc22b009',
        address: '13.114.44.199:26656',
        provider: 'medibloc',
      },
      {
        id: '00c57e36559b49ce7d29fa4920b5132584994368',
        address: '52.77.227.241:26656',
        provider: 'medibloc',
      },
      {
        id: '5cd589ab0f34dbeb07cb0e156741838b2c7d3737',
        address: '148.251.235.130:16656',
        provider: 'Staketab',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.gopanacea.org',
        provider: 'medibloc',
      },
      {
        address: 'https://panacea-rpc.staketab.org:443',
        provider: 'Staketab',
      },
    ],
    rest: [
      {
        address: 'https://api.gopanacea.org',
        provider: 'medibloc',
      },
      {
        address: 'https://panacea-rest.staketab.org',
        provider: 'Staketab',
      },
    ],
    grpc: [
      {
        address: 'services.staketab.com:9400',
        provider: 'Staketab',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/medibloc',
      tx_page: 'https://www.mintscan.io/medibloc/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/medibloc/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://explorer.gopanacea.org',
      tx_page: 'https://explorer.gopanacea.org/transactions/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
    },
  ],
};

export const panaceaAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'panacea',
  assets: [
    {
      description:
        'Panacea is a public blockchain launched by MediBloc, which is the key infrastructure for reinventing the patient-centered healthcare data ecosystem',
      denom_units: [
        {
          denom: 'umed',
          exponent: 0,
        },
        {
          denom: 'med',
          exponent: 6,
        },
      ],
      base: 'umed',
      name: 'MediBloc',
      display: 'med',
      symbol: 'MED',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
      },
      coingecko_id: 'medibloc',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/panacea/images/med.svg',
        },
      ],
    },
  ],
};
