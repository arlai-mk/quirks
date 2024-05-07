import type { Chain, AssetList, Versions } from '../types';

export const quasartestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'quasartestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Quasar Testnet',
  chain_id: 'quasar-test-1',
  bech32_prefix: 'quasar',
  daemon_name: 'quasarnoded',
  node_home: '$HOME/.quasarnoded',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uqsr',
        fixed_min_gas_price: 0,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uqsr',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/quasar-finance/quasar',
    recommended_version: 'v1.0.1-rc-testnet',
    compatible_versions: ['v1.0.1-rc-testnet'],
    cosmos_sdk_version: '0.45.16',
    consensus: {
      type: 'tendermint',
      version: '0.34.27',
    },
    cosmwasm_version: '0.31',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/quasar-finance/questnet/main/v04/definitive-genesis.json',
    },
    versions: [
      {
        name: 'v1.0.1-rc-testnet',
        recommended_version: 'v1.0.1-rc-testnet',
        compatible_versions: ['v1.0.1-rc-testnet'],
        cosmos_sdk_version: '0.45.16',
        consensus: {
          type: 'tendermint',
          version: '0.34.27',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'testnet-seeds.polkachu.com:18256',
        provider: 'Polkachu',
      },
      {
        id: '58a7ede083714c51efd3f285c16ed613b49b83ee',
        address: '154.26.158.158:18256',
        provider: 'Stake and Relax',
      },
    ],
    persistent_peers: [
      {
        id: '8a19aa6e874ed5720aad2e7d02567ec932d92d22',
        address: '141.94.248.63:26656',
        provider: '',
      },
      {
        id: '444b80ce750976df59b88ac2e08d720e1dbbf230',
        address: '68.183.75.239:26666',
        provider: '',
      },
      {
        id: '20b4f9207cdc9d0310399f848f057621f7251846',
        address: '222.106.187.13:40606',
        provider: '',
      },
      {
        id: '7ef67269c8ec37ff8a538a5ae83ca670fd2da686',
        address: '137.184.192.123:26656',
        provider: '',
      },
      {
        id: '19afe579cc0a2b38ca87143f779f45e9a7f18a2f',
        address: '18.134.191.148:26656',
        provider: '',
      },
      {
        id: 'a23f002bda10cb90fa441a9f2435802b35164441',
        address: '38.146.3.203:18256',
        provider: '',
      },
      {
        id: 'bba6e85e3d1f1d9c127324e71a982ddd86af9a99',
        address: '88.99.3.158:18256',
        provider: '',
      },
      {
        id: '966acc999443bae0857604a9fce426b5e09a7409',
        address: '65.108.105.48:18256 ',
        provider: '',
      },
      {
        id: '177144bed1e280a6f2435d253441e3e4f1699c6d',
        address: '65.109.85.226:8090',
        provider: '',
      },
      {
        id: '769ebaa9942375e70cebc21a75a2cfda41049d99',
        address: '135.181.210.186:26656',
        provider: '',
      },
      {
        id: '8937bdacf1f0c8b2d1ffb4606554eaf08bd55df4',
        address: '5.75.255.107:26656',
        provider: '',
      },
      {
        id: '99a0695a7358fa520e6fcd46f91492f7cf205d4d',
        address: '34.175.159.249:26656',
        provider: '',
      },
      {
        id: '47401f4ac3f934afad079ddbe4733e66b58b67da',
        address: '34.175.244.202:26656',
        provider: '',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://quasar-testnet-rpc.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://quasar-testnet-rpc.stakeandrelax.net/',
        provider: 'Stake and Relax',
      },
    ],
    rest: [
      {
        address: 'https://quasar-testnet-api.polkachu.com/',
        provider: 'Polkachu',
      },
      {
        address: 'https://quasar-testnet-api.stakeandrelax.net/',
        provider: 'Stake and Relax',
      },
    ],
    grpc: [
      {
        address: 'quasar-testnet-grpc.polkachu.com:18290',
        provider: 'Polkachu',
      },
      {
        address: 'http://quasar-testnet-grpc.stakeandrelax.net:18290/',
        provider: 'Stake and Relax',
      },
    ],
  },
  keywords: ['testnet'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/quasar/images/quasar.svg',
    },
  ],
};

export const quasartestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'quasartestnet',
  assets: [
    {
      description: 'The native token of Quasar',
      denom_units: [
        {
          denom: 'uqsr',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'qsr',
          exponent: 6,
          aliases: [],
        },
      ],
      base: 'uqsr',
      name: 'Quasar',
      display: 'qsr',
      symbol: 'QSR',
    },
    {
      denom_units: [
        {
          denom: 'uayy',
          exponent: 0,
        },
        {
          denom: 'ayy',
          exponent: 6,
        },
      ],
      base: 'uayy',
      name: 'AYY',
      display: 'ayy',
      symbol: 'AYY',
    },
    {
      denom_units: [
        {
          denom: 'uoro',
          exponent: 0,
        },
        {
          denom: 'oro',
          exponent: 6,
        },
      ],
      base: 'uoro',
      name: 'oro',
      display: 'oro',
      symbol: 'ORO',
    },
  ],
};
