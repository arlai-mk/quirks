import type { Chain, AssetLists } from '../types';

export const ununifi: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'ununifi',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://ununifi.io/',
  pretty_name: 'UnUniFi',
  chain_id: 'ununifi-beta-v1',
  bech32_prefix: 'ununifi',
  daemon_name: 'ununifid',
  node_home: '$HOME/.ununifi',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uguu',
        fixed_min_gas_price: 0.0025,
        low_gas_price: 0.0025,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uguu',
      },
    ],
    lock_duration: {
      time: '1209600s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/UnUniFi/chain',
    recommended_version: 'v4.0.1',
    compatible_versions: ['v4.0.1'],
    binaries: {
      'linux/amd64':
        'https://github.com/UnUniFi/chain/releases/download/v4.0.1/ununifid',
    },
    cosmos_sdk_version: 'v0.47.3-custom-bank-1',
    consensus: {
      type: 'cometbft',
      version: '0.37.1',
    },
    cosmwasm_version: 'v0.40.1',
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.0.1',
    ics_enabled: ['ics20-1'],
    genesis: {
      name: 'beta-v1',
      genesis_url:
        'https://raw.githubusercontent.com/UnUniFi/network/main/launch/ununifi-beta-v1/genesis.json',
    },
    versions: [
      {
        name: 'v2',
        recommended_version: 'v2.0.0',
        compatible_versions: ['v2.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v2.0.0/ununifid',
        },
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.40',
        cosmwasm_enabled: true,
        ibc_go_version: '7.0.0',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v2_1',
      },
      {
        name: 'v2_1',
        recommended_version: 'v2.1.0',
        compatible_versions: ['v2.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v2.1.0/ununifid',
        },
        proposal: 12,
        height: 5630000,
        cosmos_sdk_version: '0.47',
        consensus: {
          type: 'cometbft',
          version: '0.34',
        },
        cosmwasm_version: '0.40',
        cosmwasm_enabled: true,
        ibc_go_version: '7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v2_2',
      },
      {
        name: 'v2_2',
        recommended_version: 'v2.2.0',
        compatible_versions: ['v2.2.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v2.2.0/ununifid',
        },
        proposal: 13,
        height: 5736100,
        cosmos_sdk_version: 'v0.47.1-bank-rc2',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3',
      },
      {
        name: 'v3',
        recommended_version: 'v3.0.0',
        compatible_versions: ['v3.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v3.0.0/ununifid',
        },
        proposal: 14,
        height: 5807100,
        cosmos_sdk_version: 'v0.47.3-custom-bank-1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3_1',
      },
      {
        name: 'v3_1',
        recommended_version: 'v3.1.0',
        compatible_versions: ['v3.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v3.1.0/ununifid',
        },
        proposal: 15,
        height: 6577693,
        cosmos_sdk_version: 'v0.47.3-custom-bank-1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3_2_1',
      },
      {
        name: 'v3_2_1',
        recommended_version: 'v3.2.1',
        compatible_versions: ['v3.2.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v3.2.1/ununifid',
        },
        proposal: 16,
        height: 6754737,
        cosmos_sdk_version: 'v0.47.3-custom-bank-1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v3_2_2',
      },
      {
        name: 'v3_2_2',
        recommended_version: 'v3.2.2-query',
        compatible_versions: ['v3.2.2', 'v3.2.2-query'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v3.2.2-query/ununifid',
        },
        proposal: 18,
        height: 7061394,
        cosmos_sdk_version: 'v0.47.3-custom-bank-1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v4',
      },
      {
        name: 'v4',
        recommended_version: 'v4.0.0',
        compatible_versions: ['v4.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v4.0.0/ununifid',
        },
        proposal: 24,
        height: 8197583,
        cosmos_sdk_version: 'v0.47.3-custom-bank-1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: 'v4_0_1',
      },
      {
        name: 'v4_0_1',
        recommended_version: 'v4.0.1',
        compatible_versions: ['v4.0.1'],
        binaries: {
          'linux/amd64':
            'https://github.com/UnUniFi/chain/releases/download/v4.0.1/ununifid',
        },
        proposal: 25,
        height: 8299656,
        cosmos_sdk_version: 'v0.47.3-custom-bank-1',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.1',
        },
        cosmwasm_version: 'v0.40.1',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.0.1',
        ics_enabled: ['ics20-1'],
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
  },
  peers: {
    seeds: [],
    persistent_peers: [
      {
        id: 'fa38d2a851de43d34d9602956cd907eb3942ae89',
        address: 'a.ununifi.cauchye.net:26656',
        provider: 'CauchyE',
      },
      {
        id: '404ea79bd31b1734caacced7a057d78ae5b60348',
        address: 'b.ununifi.cauchye.net:26656',
        provider: 'CauchyE',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'ununifi-mainnet-seed.autostake.com:26746',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '1357ac5cd92b215b05253b25d78cf485dd899d55',
        address: '[2600:1f1c:534:8f02:7bf:6b31:3702:2265]:26656',
      },
      {
        id: '25006d6b85daeac2234bcb94dafaa73861b43ee3',
        address: '[2600:1f1c:534:8f02:a407:b1c6:e8f5:94b]:26656',
      },
      {
        id: 'caf792ed396dd7e737574a030ae8eabe19ecdf5c',
        address: '[2600:1f1c:534:8f02:b0a4:dbf6:e50b:d64e]:26656',
      },
      {
        id: '796c62bb2af411c140cf24ddc409dff76d9d61cf',
        address: '[2600:1f1c:534:8f02:ca0e:14e9:8e60:989e]:26656',
      },
      {
        id: 'cea8d05b6e01188cf6481c55b7d1bc2f31de0eed',
        address: '[2600:1f1c:534:8f02:ba43:1f69:e23a:df6b]:26656',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:23256',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'http://a.lcd.ununifi.cauchye.net:26657',
        provider: 'CauchyE',
      },
      {
        address: 'https://rpc.ununifi.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://ununifi-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
    rest: [
      {
        address: 'https://a.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE',
      },
      {
        address: 'https://b.lcd.ununifi.cauchye.net:1318',
        provider: 'CauchyE',
      },
      {
        address: 'https://api.ununifi.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://ununifi-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
    grpc: [
      {
        address: 'a.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE',
      },
      {
        address: 'b.lcd.ununifi.cauchye.net:9092',
        provider: 'CauchyE',
      },
      {
        address: 'ununifi-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc.ununifi.nodestake.top:9090',
        provider: 'NodeStake',
      },
      {
        address: 'https://grpc-ununifi.nodeist.net',
        provider: 'Nodeist',
      },
      {
        address: 'https://ununifi-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
    ],
  },
  explorers: [
    {
      kind: 'UnUniFi Explorer',
      url: 'https://ununifi.io/explorer',
      tx_page: 'https://ununifi.io/explorer/txs/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/ununifi',
      tx_page: 'https://explorer.nodestake.top/ununifi/tx/${txHash}',
    },
    {
      kind: 'Nodeist Explorer',
      url: 'https://exp.nodeist.net/Ununifi',
      tx_page: 'https://exp.nodeist.net/Ununifi/tx/${txHash}',
    },
  ],
  keywords: ['staking', 'wasm', 'assets', 'nft'],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
    },
  ],
};

export const ununifiAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'ununifi',
  assets: [
    {
      description: 'The governance token of UnUniFi protocol.',
      denom_units: [
        {
          denom: 'uguu',
          exponent: 0,
        },
        {
          denom: 'guu',
          exponent: 6,
        },
      ],
      base: 'uguu',
      name: 'UnUniFi',
      display: 'guu',
      symbol: 'GUU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
      },
      keywords: ['staking', 'wasm', 'assets', 'nft'],
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/ununifi/images/ununifi.svg',
        },
      ],
    },
  ],
};
