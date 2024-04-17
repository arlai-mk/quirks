import type { Chain, AssetLists, ChainVersions } from '../types';

export const rebus: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'rebus',
  website: 'https://www.rebuschain.com/',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Rebus',
  chain_id: 'reb_1111-1',
  bech32_prefix: 'rebus',
  daemon_name: 'rebusd',
  node_home: '$HOME/.rebusd',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'arebus',
        fixed_min_gas_price: 0,
        low_gas_price: 0.01,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'arebus',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/rebuschain/rebus.core',
    recommended_version: 'v0.4.0',
    compatible_versions: ['v0.4.0'],
    versions: [
      {
        name: 'v0.1.2',
        tag: 'v0.1.2',
        height: 0,
        next_version_name: 'v0.2.0',
      },
      {
        name: 'v0.2.0',
        tag: 'v0.2.3',
        proposal: 18,
        height: 473400,
        recommended_version: 'v0.2.3',
        compatible_versions: ['v0.2.3'],
        next_version_name: 'v0.3.0',
      },
      {
        name: 'v0.3.0',
        tag: 'v0.3.0',
        proposal: 25,
        height: 4167000,
        recommended_version: 'v0.3.0',
        compatible_versions: ['v0.3.0'],
        next_version_name: 'v0.3.0',
      },
      {
        name: 'v0.4.0',
        tag: 'v0.4.0',
        proposal: 31,
        height: 9464700,
        recommended_version: 'v0.4.0',
        compatible_versions: ['v0.4.0'],
        next_version_name: '',
      },
    ],
    genesis: {
      genesis_url:
        'https://github.com/rebuschain/rebus.mainnet/raw/master/reb_1111-1/genesis.zip',
    },
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
  },
  peers: {
    seeds: [
      {
        id: '718706d1a1e93c2fe9a3059588236cf96c457ff4',
        address: 'seed.rebus.cros-nest.com:26656',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:17256',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'rebus-mainnet-seed.autostake.com:26906',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: '0863966356f6532377aeba663415258d44ddbd13',
        address: 'rebus.peer.stavr.tech:40106',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'rebus-mainnet-peer.autostake.com:26906',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '9c7c067bd73bddfe8da39087cdae37c4fc5ec6e3',
        address: '5.9.69.107:26656',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://api.rebuschain.com:26657/',
        provider: 'Rebuschain',
      },
      {
        address: 'https://rebus.rpc.bccnodes.com:443',
        provider: 'BccNodes',
      },
      {
        address: 'https://rebus.rpc.manticore.team:443/',
        provider: 'MantiCore',
      },
      {
        address: 'https://rpc.rebus.nodestake.top/',
        provider: 'NodeStake',
      },
      {
        address: 'http://rebus.rpc.m.stavr.tech:40107',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://rpc-1.rebus.nodes.guru',
        provider: 'Nodes.Guru',
      },
      {
        address: 'https://api.mainnet.rebus.money:26657',
        provider: 'Rebuschain',
      },
      {
        address: 'https://rebus-rpc.brocha.in',
        provider: 'Brochain',
      },
      {
        address: 'https://rebus-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rebus.rpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://rebus-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rebus-rpc.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    rest: [
      {
        address: 'https://api.rebuschain.com:1317/',
        provider: 'Rebuschain',
      },
      {
        address: 'https://rebus.api.manticore.team:443/',
        provider: 'MantiCore',
      },
      {
        address: 'https://api.rebus.nodestake.top/',
        provider: 'NodeStake',
      },
      {
        address: 'https://rebus.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-1.rebus.nodes.guru',
        provider: 'Nodes.Guru',
      },
      {
        address: 'https://api.mainnet.rebus.money:1317',
        provider: 'Rebuschain',
      },
      {
        address: 'https://rebus-rest.brocha.in',
        provider: 'Brochain',
      },
      {
        address: 'https://rebus-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rebus.api.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'https://rebus-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https:/rebus-api.noders.services',
        provider: '[NODERS]TEAM',
      },
    ],
    grpc: [
      {
        address: 'rebus.grpc.manticore.team:443',
        provider: 'MantiCore',
      },
      {
        address: 'rebus.grpc.bccnodes.com:14090',
        provider: 'BccNodes',
      },
      {
        address: 'grpc.rebus.nodestake.top:443',
        provider: 'NodeStake',
      },
      {
        address: 'rebus.grpc.nodersteam.com:9181',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'http://rebus.grpc.m.stavr.tech:3211',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'rebus-grpc.brocha.in:443',
        provider: 'Brochain',
      },
      {
        address: 'rebus-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rebus.grpc.liveraven.net',
        provider: 'LiveRaveN',
      },
      {
        address: 'rebus-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'rebus-grpc.noders.services:18090',
        provider: '[NODERS]TEAM',
      },
    ],
  },
  explorers: [
    {
      kind: 'explorers.guru',
      url: 'https://rebus.explorers.guru',
      tx_page: 'https://rebus.explorers.guru/transaction/${txHash}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/rebus',
      tx_page: 'https://explorer.nodestake.top/rebus/tx/${txHash}',
    },
    {
      kind: 'BccNodes',
      url: 'https://explorer.bccnodes.com/rebus-M',
      tx_page: 'https://explorer.bccnodes.com/rebus-M/tx/${txHash}',
    },
    {
      kind: 'Brochain',
      url: 'https://explorer.brocha.in/rebus',
      tx_page: 'https://explorer.brocha.in/rebus/tx/${txHash}',
    },
    {
      kind: '🔥STAVR🔥 Explorer',
      url: 'https://explorer.stavr.tech/rebus',
      tx_page: 'https://explorer.stavr.tech/rebus/tx/${txHash}',
    },
    {
      kind: 'tcnetwork',
      url: 'https://rebus.tcnetwork.io',
      tx_page: 'https://rebus.tcnetwork.io/transaction/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/rebus',
      tx_page: 'https://atomscan.com/rebus/transactions/${txHash}',
      account_page: 'https://atomscan.com/rebus/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
    },
  ],
};

export const rebusAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'rebus',
  assets: [
    {
      description: 'REBUS, the native coin of the Rebus chain.',
      denom_units: [
        {
          denom: 'arebus',
          exponent: 0,
        },
        {
          denom: 'rebus',
          exponent: 18,
        },
      ],
      base: 'arebus',
      name: 'Rebus',
      display: 'rebus',
      symbol: 'REBUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
      },
      coingecko_id: 'rebus',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/rebus/images/rebus.svg',
        },
      ],
    },
  ],
};
