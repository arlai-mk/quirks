import type { Chain, AssetList, Versions } from '../types';

export const evmostestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'evmostestnet',
  status: 'live',
  network_type: 'testnet',
  pretty_name: 'Evmos Testnet',
  chain_id: 'evmos_9000-4',
  bech32_prefix: 'evmos',
  daemon_name: 'evmosd',
  node_home: '$HOME/.evmosd',
  key_algos: ['ethsecp256k1'],
  extra_codecs: ['ethermint'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'atevmos',
        low_gas_price: 20000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'atevmos',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/evmos/evmos',
    recommended_version: 'v12.0.0-rc4',
    compatible_versions: ['v12.0.0-rc4'],
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    ibc_go_version: 'v6.1.0',
    genesis: {
      genesis_url:
        'https://github.com/evmos/testnets/raw/main/evmos_9000-4/genesis.zip',
    },
    versions: [
      {
        name: 'v11.0.0-rc3',
        recommended_version: 'v11.0.0-rc3',
        compatible_versions: ['v11.0.0-rc3'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: 'v6.1.0',
      },
      {
        name: 'v12.0.0',
        recommended_version: 'v12.0.0-rc4',
        compatible_versions: ['v12.0.0-rc4'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: 'v6.1.0',
      },
    ],
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
        id: 'b7635a113a52d0d25c82267de0648e71e46dc584',
        address: '167.99.182.201:46656',
        provider: 'coldy',
      },
      {
        id: '005efaae1ae29f95edea5f3729ce7e75511e5d3d',
        address: '65.108.225.158:13456',
        provider: 'Polkachu',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://evmos.test.rpc.coldyvalidator.net',
        provider: 'coldy',
      },
      {
        address: 'https://evmos-testnet-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://evmos-testnet-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'https://evmos.test.api.coldyvalidator.net',
        provider: 'coldy',
      },
      {
        address: 'https://evmos-testnet-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://evmos-testnet-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'https://evmos.test.grpc.coldyvalidator.net',
        provider: 'coldy',
      },
      {
        address: 'evmos-testnet-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://testnet.mintscan.io/evmos-testnet',
      tx_page: 'https://testnet.mintscan.io/evmos-testnet/txs/${txHash}',
    },
    {
      kind: 'NodesGuru',
      url: 'https://testnet.evmos.explorers.guru/',
      tx_page: 'https://testnet.evmos.explorers.guru/transaction/${txHash}',
    },
  ],
};

export const evmostestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'evmostestnet',
  assets: [
    {
      description:
        'The native EVM, governance and staking token of the Evmos Hub',
      denom_units: [
        {
          denom: 'atevmos',
          exponent: 0,
        },
        {
          denom: 'tevmos',
          exponent: 18,
        },
      ],
      base: 'atevmos',
      name: 'Evmos Testnet',
      display: 'tevmos',
      symbol: 'TEVMOS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/evmostestnet/images/evmos.svg',
        },
      ],
    },
  ],
};
