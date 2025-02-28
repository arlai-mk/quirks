import type { Chain, AssetList, Versions } from '../types';

export const mantrachaintestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'mantrachaintestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'MANTRA Hongbai Testnet',
  chain_id: 'mantra-hongbai-1',
  bech32_prefix: 'uom',
  daemon_name: 'mantrachaind',
  node_home: '$HOME/.mantrachain',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uom',
        fixed_min_gas_price: 0,
        low_gas_price: 0.001,
        average_gas_price: 0.002,
        high_gas_price: 0.003,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uom',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/MANTRA-Finance',
    recommended_version: '3.0.0',
    compatible_versions: ['3.0.0'],
    cosmos_sdk_version: '0.47.3',
    consensus: {
      type: 'cometbft',
      version: '0.37',
    },
    cosmwasm_version: '0.41',
    cosmwasm_enabled: true,
    versions: [
      {
        name: '1.0.0',
        recommended_version: '1.0.0',
        compatible_versions: ['1.0.0'],
        cosmos_sdk_version: '0.47.3',
        consensus: {
          type: 'cometbft',
          version: '0.37',
        },
        cosmwasm_version: '0.41',
        cosmwasm_enabled: true,
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: 'd6016af7cb20cf1905bd61468f6a61decb3fd7c0',
        address: 'seed.hongbai.mantrachain.io:26656',
        provider: 'MANTRACHAIN',
      },
    ],
    persistent_peers: [
      {
        id: 'da061f404690c5b6b19dd85d40fefde1fecf406c',
        address: '34.68.19.19:26656',
        provider: 'MANTRACHAIN',
      },
      {
        id: '20db08acbcac9b7114839e63539da2802b848982',
        address: '34.72.148.3:26656',
        provider: 'MANTRACHAIN',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
    ],
    rest: [
      {
        address: 'https://api.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.hongbai.mantrachain.io',
        provider: 'MANTRACHAIN',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
  },
  keywords: ['dex', 'testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
    },
  ],
};

export const mantrachaintestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'mantrachaintestnet',
  assets: [
    {
      description: 'The native token of MANTRA',
      denom_units: [
        {
          denom: 'uom',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'om',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uom',
      name: 'MANTRA Chain',
      display: 'om',
      symbol: 'OM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
      },
      coingecko_id: '',
      keywords: [
        'mantra',
        'staking',
        'delegating',
        'governance',
        'regulation',
        'defi',
      ],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/mantrachaintestnet/images/mantra.svg',
        },
      ],
    },
  ],
};
