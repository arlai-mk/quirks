import type { Chain, AssetList, Versions } from '../types';

export const kyvetestnet: Chain = {
  $schema: '../../chain.schema.json',
  chain_name: 'kyvetestnet',
  chain_id: 'kaon-1',
  pretty_name: 'KYVE Kaon',
  status: 'live',
  network_type: 'testnet',
  bech32_prefix: 'kyve',
  daemon_name: 'kyved',
  node_home: '$HOME/.kyve',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'tkyve',
        fixed_min_gas_price: 0.02,
        low_gas_price: 0.02,
        average_gas_price: 0.03,
        high_gas_price: 0.06,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'tkyve',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/KYVENetwork/chain',
    recommended_version: 'v1.0.0-rc0',
    compatible_versions: ['v1.0.0-rc0'],
    binaries: {
      'linux/amd64':
        'https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_amd64.tar.gz',
      'linux/arm64':
        'https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_arm64.tar.gz',
      'darwin/amd64':
        'https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_amd64.tar.gz',
      'darwin/arm64':
        'https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_arm64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/KYVENetwork/networks/main/kaon-1/genesis.json',
    },
    versions: [
      {
        name: 'v1.0.0-rc0',
        recommended_version: 'v1.0.0-rc0',
        compatible_versions: ['v1.0.0-rc0'],
        binaries: {
          'linux/amd64':
            'https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_amd64.tar.gz',
          'linux/arm64':
            'https://files.kyve.network/chain/v1.0.0-rc0/kyved_linux_arm64.tar.gz',
          'darwin/amd64':
            'https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_amd64.tar.gz',
          'darwin/arm64':
            'https://files.kyve.network/chain/v1.0.0-rc0/kyved_darwin_arm64.tar.gz',
        },
      },
    ],
  },
  peers: {
    persistent_peers: [
      {
        id: '430845649afaad0a817bdf36da63b6f93bbd8bd1',
        address: '3.67.29.225:26656',
      },
      {
        id: 'b68e5131552e40b9ee70427879eb34e146ef20df',
        address: '18.194.131.3:26656',
      },
      {
        id: '801fa026c6d9227874eeaeba288eae3b800aad7f',
        address: '52.29.15.250:26656',
      },
      {
        id: 'bc8b5fbb40a1b82dfba591035cb137278a21c57d',
        address: '52.59.65.9:26656',
      },
    ],
    seeds: [
      {
        id: '496ac0ba20188f70f41e0a814dfd4d9a617338f8',
        address: 'kyve-testnet-seed.ibs.team:16659',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-eu-1.kaon.kyve.network',
        provider: 'kyve',
      },
      {
        address: 'https://rpc-kyve-test.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://kyve-testnet-rpc.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
    rest: [
      {
        address: 'https://api-eu-1.kaon.kyve.network',
        provider: 'kyve',
      },
      {
        address: 'https://rest-kyve-test.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://kyve-testnet-api.ibs.team:443',
        provider: 'Inter Blockchain Services',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://testnet.mintscan.io/kyve-testnet',
      tx_page: 'https://testnet.mintscan.io/kyve-testnet/txs/${txHash}',
      account_page:
        'https://testnet.mintscan.io/kyve-testnet/account/${accountAddress}',
    },
  ],
};

export const kyvetestnetAssetList: AssetList = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'kyvetestnet',
  assets: [
    {
      description:
        'The native utility token of the Kaon testnet version of KYVE.',
      denom_units: [
        {
          denom: 'tkyve',
          exponent: 0,
        },
        {
          denom: 'kyve',
          exponent: 6,
        },
      ],
      base: 'tkyve',
      name: 'KYVE',
      display: 'kyve',
      symbol: 'KYVE',
      traces: [
        {
          type: 'test-mintage',
          counterparty: {
            chain_name: 'kyve',
            base_denom: 'ukyve',
          },
          provider: 'Kyve',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/kyve/images/kyve-token.svg',
          image_sync: {
            chain_name: 'kyve',
            base_denom: 'ukyve',
          },
        },
      ],
    },
  ],
};
