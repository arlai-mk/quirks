import type { Chain, AssetList, Versions } from '../types';

export const secretnetworktestnet2: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'secretnetworktestnet2',
  status: 'killed',
  network_type: 'testnet',
  pretty_name: 'Secret Network Testnet',
  chain_id: 'pulsar-2',
  bech32_prefix: 'secret',
  daemon_name: 'secretd',
  node_home: '$HOME/.secretd',
  key_algos: ['secp256k1'],
  slip44: 529,
  fees: {
    fee_tokens: [
      {
        denom: 'uscrt',
        fixed_min_gas_price: 0.1,
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/scrtlabs/SecretNetwork',
    recommended_version: 'v1.3.1',
    binaries: {
      'linux/amd64':
        'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb',
    },
    compatible_versions: ['v1.3.0', 'v1.3.1'],
    genesis: {
      genesis_url:
        'https://storage.googleapis.com/stakeordie-pulsar-2/genesis.json',
    },
    versions: [
      {
        name: 'v1.3.1',
        recommended_version: 'v1.3.1',
        compatible_versions: ['v1.3.0', 'v1.3.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/scrtlabs/SecretNetwork/releases/download/v1.3.1/secretnetwork_1.3.1_testnet_goleveldb_amd64.deb',
        },
      },
    ],
  },
  peers: {
    seeds: [
      {
        id: '7a421a6f5f1618f7b6fdfbe4854985746f85d263',
        address: '108.62.104.102:26656',
        provider: 'Community',
      },
      {
        id: 'a72e376dca664bac55e8ce55a2e972a8ae2c995e',
        address: '144.202.126.98:26656',
        provider: 'Community',
      },
      {
        id: 'f95ba3da4a9eec559397f4b47b1539e24af6904c',
        address: '52.190.249.47:26656',
        provider: 'Community',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn',
      },
      {
        address: 'https://rpc.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee',
      },
    ],
    rest: [
      {
        address: 'http://testnet.securesecrets.org:1317',
        provider: 'Trivium | Trivium.Network',
      },
      {
        address: 'https://lcd.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn',
      },
      {
        address: 'https://api.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee',
      },
    ],
    'grpc-web': [
      {
        address: 'https://grpc.testnet.secretsaturn.net',
        provider: '𝕊ecret 𝕊aturn',
      },
      {
        address: 'https://grpc.pulsar.scrttestnet.com',
        provider: 'SCRT Testnet Committee',
      },
    ],
  },
  explorers: [
    {
      kind: 'secret nodes',
      url: 'https://secretnodes.com/secret/chains/pulsar-2',
      tx_page:
        'https://secretnodes.com/secret/chains/pulsar-2/transactions/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://testnet.ping.pub/secret',
      tx_page: 'https://testnet.ping.pub/secret/tx/${txHash}',
    },
  ],
};

export const secretnetworktestnet2AssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'secretnetworktestnet2',
  assets: [
    {
      description: 'The native token of Secret Network',
      denom_units: [
        {
          denom: 'uscrt',
          exponent: 0,
        },
        {
          denom: 'scrt',
          exponent: 6,
        },
      ],
      base: 'uscrt',
      name: 'Secret Network',
      display: 'scrt',
      symbol: 'SCRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/secretnetwork/images/scrt.svg',
        },
      ],
    },
  ],
};
