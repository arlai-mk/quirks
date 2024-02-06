import type { Chain, AssetLists, ChainVersions } from '../types';

export const uptick: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'uptick',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://uptick.network/',
  pretty_name: 'Uptick',
  chain_id: 'uptick_117-1',
  bech32_prefix: 'uptick',
  daemon_name: 'uptickd',
  node_home: '$HOME/.uptickd',
  key_algos: ['secp256k1'],
  slip44: 60,
  fees: {
    fee_tokens: [
      {
        denom: 'auptick',
        fixed_min_gas_price: 10000000000,
        low_gas_price: 10000000000,
        average_gas_price: 25000000000,
        high_gas_price: 40000000000,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'auptick',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/UptickNetwork/uptick',
    recommended_version: 'v0.2.4',
    compatible_versions: ['v0.2.4'],
    binaries: {
      'linux/amd64':
        'https://github.com/UptickNetwork/uptick/releases/download/v0.2.4/uptick-linux-amd64-v0.2.4.tar.gz',
    },
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    cosmwasm_version: '',
    cosmwasm_enabled: false,
    ibc_go_version: '5.0.1',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/uptick-network/mainnet/main/genesis.json',
    },
    versions: [
      {
        name: 'v0.2.4',
        recommended_version: 'v0.2.4',
        compatible_versions: ['v0.2.4'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '',
        cosmwasm_enabled: false,
        ibc_go_version: '5.0.1',
        binaries: {
          'linux/amd64':
            'https://github.com/UptickNetwork/uptick/releases/download/v0.2.4/uptick-linux-amd64-v0.2.4.tar.gz',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
  },
  peers: {
    seeds: [
      {
        id: 'f97a75fb69d3a5fe893dca7c8d238ccc0bd66a8f',
        address: 'uptick.seed.brocha.in:30600',
        provider: 'Brochain',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'uptick.rpc.kjnodes.com:11559',
        provider: 'kjnodes',
      },
      {
        id: 'e71bae28852a0b603f7360ec17fe91e7f065f324',
        address: 'uptick-mainnet-seed.itrocket.net:35656',
        provider: 'itrocket',
      },
      {
        id: 'bfc5a787583ee52e9e5f2e160e6b32a9cfe213fd',
        address: 'seed-node.mms.team:36656',
        provider: 'MMS',
      },
      {
        id: 'df949a46ae6529ae1e09b034b49716468d5cc7e9',
        address: 'seeds.stakerhouse.com:10656',
        provider: 'StakerHouse',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '94b63fddfc78230f51aeb7ac34b9fb86bd042a77',
        address: 'uptick-rpc.p2p.brocha.in:30601',
        provider: 'Brochain',
      },
      {
        id: 'dd482d080820020b144ca2efaf128d78261dea82',
        address: 'uptick-mainnet-peer.itrocket.net:10656',
        provider: 'itrocket',
      },
      {
        id: 'c65c6ecfb60635fc8a076b6f90fcd2607aceaa64',
        address: 'uptick.peers.stavr.tech:3156',
        provider: '🔥STAVR🔥',
      },
      {
        id: '37604dc6535a2f1b91e38c35f77b5be4a93c35b2',
        address: '45.77.168.172:26656',
        provider: '[NODERS]TEAM',
      },
      {
        id: '038aca614e49ec4e5e3a06c875976a94c478cb09',
        address: '65.108.195.29:21656',
        provider: 'Staketab',
      },
      {
        id: '3ffde1aaf638c681fb4bd3fa24f0786f68a16611',
        address: 'peer-uptick.mms.team:56105',
        provider: 'MMS',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://uptick-rpc.brocha.in:443',
        provider: 'Brochain',
      },
      {
        address: 'https://uptick.rpc.bccnodes.com:443',
        provider: 'BccNodes',
      },
      {
        address: 'https://rpc.uptick.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://uptick.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'http://uptick.rpc.m.stavr.tech:3157',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://m-uptick.rpc.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://uptick-mainnet-rpc.itrocket.net:443',
        provider: 'itrocket',
      },
      {
        address: 'https://uptick.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://uptick-rpc.staketab.org:443',
        provider: 'Staketab',
      },
      {
        address: 'https://uptick-rpc.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://rpc-uptick.cakralabs.site',
        provider: 'Cakra Labs',
      },
      {
        address: 'https://rpc-uptick.sr20de.xyz',
        provider: 'Sr20de',
      },
    ],
    rest: [
      {
        address: 'https://uptick-rest.brocha.in:443',
        provider: 'Brochain',
      },
      {
        address: 'https://api.uptick.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://uptick.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://uptick.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://m-uptick.api.utsa.tech',
        provider: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀',
      },
      {
        address: 'https://uptick-mainnet-api.itrocket.net:443',
        provider: 'itrocket',
      },
      {
        address: 'https://uptick.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://uptick-rest.staketab.org',
        provider: 'Staketab',
      },
      {
        address: 'https://uptick-rest.stakerhouse.com',
        provider: 'StakerHouse',
      },
      {
        address: 'https://rest-uptick.cakralabs.site',
        provider: 'Cakra Labs',
      },
      {
        address: 'https://api-uptick.sr20de.xyz',
        provider: 'Sr20de',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.uptick.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'uptick.rpc.bccnodes.com:9690',
        provider: 'BccNodes',
      },
      {
        address: 'uptick.grpc.nodersteam.com:9211',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'uptick.grpc.kjnodes.com:11590',
        provider: 'kjnodes',
      },
      {
        address: 'uptick.grpc.m.stavr.tech:1901',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'uptick-mainnet-grpc.itrocket.net:10090',
        provider: 'itrocket',
      },
      {
        address: 'https://uptick.grpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'services.staketab.com:9190',
        provider: 'Staketab',
      },
      {
        address: 'uptick-grpc.stakerhouse.com:443',
        provider: 'StakerHouse',
      },
      {
        address: 'grpc-uptick.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'https://grpc-uptick.sr20de.xyz',
        provider: 'Sr20de',
      },
    ],
    'evm-http-jsonrpc': [
      {
        address: 'https://jsonrpc.uptick.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://uptick.jsonrpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://evm-uptick.sr20de.xyz',
        provider: 'Sr20de',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://explorers.brocha.in/uptick',
      tx_page: 'https://explorers.brocha.in/uptick/tx/${txHash}',
    },
    {
      kind: 'NodeStake Explorer',
      url: 'https://explorer.nodestake.top/uptick',
      tx_page: 'https://explorer.nodestake.top/uptick/tx/${txHash}',
    },
    {
      kind: 'BccNodes Explorer',
      url: 'https://explorer.bccnodes.com/uptick-M',
      tx_page: 'https://explorer.bccnodes.com/uptick-M/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/uptick-mainnet',
      tx_page: 'https://explorer.stavr.tech/uptick-mainnet/tx/${txHash}',
    },
    {
      kind: '𝐥𝐞𝐬𝐧𝐢𝐤 | 𝐔𝐓𝐒𝐀 Explorer',
      url: 'https://exp.utsa.tech/uptick',
      tx_page: 'https://exp.utsa.tech/uptick/tx/${txHash}',
    },
    {
      kind: 'cosmotracker',
      url: 'https://cosmotracker.com/uptick',
      tx_page: 'https://cosmotracker.com/uptick/tx/${txHash}',
    },
    {
      kind: 'Upscan',
      url: 'https://upscan.xyz/',
      tx_page: 'https://upscan.xyz/uptick_117-1/tx/${txHash}',
    },
    {
      kind: 'Sr20de',
      url: 'https://explorer.sr20de.xyz/uptick',
      tx_page: 'https://explorer.sr20de.xyz/uptick/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
    },
  ],
};

export const uptickAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'uptick',
  assets: [
    {
      description: 'The native token of Uptick',
      denom_units: [
        {
          denom: 'auptick',
          exponent: 0,
        },
        {
          denom: 'uptick',
          exponent: 18,
        },
      ],
      base: 'auptick',
      name: 'Uptick',
      display: 'uptick',
      symbol: 'UPTICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/uptick/images/uptick.svg',
        },
      ],
    },
  ],
};
