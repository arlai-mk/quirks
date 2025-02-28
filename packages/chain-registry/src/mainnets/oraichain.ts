import type { Chain, AssetList, Versions } from '../types';

export const oraichain: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'oraichain',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://orai.io/',
  pretty_name: 'Oraichain',
  chain_id: 'Oraichain',
  bech32_prefix: 'orai',
  daemon_name: 'oraid',
  node_home: '$WORKSPACE/.oraid',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'orai',
        fixed_min_gas_price: 0,
        low_gas_price: 0.003,
        average_gas_price: 0.005,
        high_gas_price: 0.007,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'orai',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/oraichain/orai',
    recommended_version: 'v0.41.7',
    compatible_versions: ['v0.41.3', 'v0.41.4', 'v0.41.6', 'v0.41.7'],
    cosmwasm_version: '0.30.2',
    cosmwasm_enabled: true,
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/oraichain/oraichain-static-files/master/genesis.json',
    },
    versions: [
      {
        name: 'v0.40',
        recommended_version: 'v0.40.3',
        compatible_versions: ['v0.40.3'],
        binaries: {
          'linux/amd64':
            'https://orai.s3.us-east-2.amazonaws.com/v0.40.3/oraid',
        },
        next_version_name: 'v0.41',
      },
      {
        name: 'v0.41',
        height: 12353514,
        proposal: 185,
        recommended_version: 'v0.41.7',
        compatible_versions: ['v0.41.3', 'v0.41.4', 'v0.41.5', 'v0.41.7'],
        previous_version_name: 'v0.40',
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
  },
  peers: {
    seeds: [
      {
        id: '8b346750e75fd584645192a65c62c7ab88741791',
        address: '134.209.106.91:26656',
        provider: 'oraichain-team',
      },
      {
        id: '4d0f2d042405abbcac5193206642e1456fe89963',
        address: '3.134.19.98:26656',
        provider: 'oraichain-team',
      },
      {
        id: 'd088d05d7689905819d4381ae30df4075dbb66e7',
        address: '34.75.13.200:26656',
        provider: 'oraichain-team',
      },
      {
        id: '2c328c41e0ace21c6351265a5a935e1b3f37b62d',
        address: '35.237.59.125:26656',
        provider: 'oraichain-team',
      },
      {
        id: '49165f4ef94395897d435f144964bdd14413ea28',
        address: 'seed.orai.synergynodes.com:26656',
        provider: 'synergynodes',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'oraichain-mainnet-seed.autostake.com:27436',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'f223f1be06ef35a6dfe54995f05daeb1897d94d7',
        address: 'seed-node.mms.team:42656',
        provider: 'MMS',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'fe0a0d46eb5436905bf8465f83d2da5a503bf4eb',
        address: 'mainnet-seed.konsortech.xyz:33165',
        provider: 'KonsorTech',
      },
      {
        id: 'bdf3f54758e6a712d13fbcda9f49b01f3c1c73b2',
        address: 'seed.orai.mortysnode.nl:26656',
        provider: "Morty's Nodes",
      },
    ],
    persistent_peers: [
      {
        id: '8b346750e75fd584645192a65c62c7ab88741791',
        address: '134.209.106.91:26656',
        provider: 'oraichain-team',
      },
      {
        id: '4d0f2d042405abbcac5193206642e1456fe89963',
        address: '3.134.19.98:26656',
        provider: 'oraichain-team',
      },
      {
        id: 'd088d05d7689905819d4381ae30df4075dbb66e7',
        address: '34.75.13.200:26656',
        provider: 'oraichain-team',
      },
      {
        id: '2c328c41e0ace21c6351265a5a935e1b3f37b62d',
        address: '35.237.59.125:26656',
        provider: 'oraichain-team',
      },
      {
        id: '49165f4ef94395897d435f144964bdd14413ea28',
        address: 'seed.orai.synergynodes.com:26656',
        provider: 'synergynodes',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'oraichain-mainnet-seed.autostake.com:27436',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'c14df7b2e097d743aa7574c7cf65397a06ea3833',
        address: 'peer-oraichain.mms.team:56103',
        provider: 'MMS',
      },
      {
        id: 'efb9d22a6fdf7460f965982ae013d242bbbfd53c',
        address: 'mainnet-orai.konsortech.xyz:33656',
        provider: 'KonsorTech',
      },
      {
        id: 'bdf3f54758e6a712d13fbcda9f49b01f3c1c73b2',
        address: 'seed.orai.mortysnode.nl:26656',
        provider: "Morty's Nodes",
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.orai.io',
        provider: 'oraichain-team',
      },
      {
        address: 'https://rpc.orai.pfc.zone/',
        provider: 'PFC',
      },
      {
        address: 'https://rpc-orai.nodine.id/',
        provider: 'Nodine.ID',
      },
      {
        address: 'https://oraichain-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rpc-oraichain.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://rpc-orai.blockval.io/',
        provider: 'Blockval',
      },
      {
        address: 'https://mainnet-orai-rpc.konsortech.xyz',
        provider: 'KonsorTech',
      },
      {
        address: 'https://rpc.orai.mortysnode.nl',
        provider: "Morty's Nodes",
      },
    ],
    rest: [
      {
        address: 'http://lcd.orai.io',
        provider: 'oraichain-team',
      },
      {
        address: 'https://oraichain-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://api-oraichain.mms.team',
        provider: 'MMS',
      },
      {
        address: 'https://api-orai.blockval.io',
        provider: 'Blockval',
      },
      {
        address: 'https://mainnet-orai-api.konsortech.xyz',
        provider: 'KonsorTech',
      },
    ],
    grpc: [
      {
        address: 'grpc-oraichain.mms.team:443',
        provider: 'MMS',
      },
      {
        address: 'grpc.orai.pfc.zone:443',
        provider: 'PFC',
      },
      {
        address: 'oraichain-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc-orai.blockval.io:9390',
        provider: 'Blockval',
      },
      {
        address: 'mainnet-orai.konsortech.xyz:33090',
        provider: 'KonsorTech',
      },
    ],
  },
  explorers: [
    {
      kind: 'oraiscan',
      url: 'https://scan.orai.io',
      tx_page: 'https://scan.orai.io/txs/${txHash}',
    },
    {
      kind: 'Nodine Explorer',
      url: 'https://explorer.co.id/orai',
      tx_page: 'https://explorer.co.id/orai/tx/${txHash}',
    },
    {
      kind: 'Blockval Explorer',
      url: 'https://explorer.blockval.io/oraichain',
      tx_page: 'https://explorer.blockval.io/oraichain/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/orai',
      tx_page: 'https://atomscan.com/orai/transactions/${txHash}',
      account_page: 'https://atomscan.com/orai/accounts/${accountAddress}',
    },
    {
      kind: 'KonsorTech Explorer',
      url: 'https://explorer.konsortech.xyz/oraichain',
      tx_page:
        'https://explorer.konsortech.xyz/oraichain/transactions/${txHash}',
      account_page:
        'https://explorer.konsortech.xyz/oraichain/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai.svg',
    },
  ],
};

export const oraichainAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'oraichain',
  assets: [
    {
      description: 'The native token of Oraichain',
      denom_units: [
        {
          denom: 'orai',
          exponent: 0,
        },
        {
          denom: 'ORAI',
          exponent: 6,
        },
      ],
      base: 'orai',
      name: 'Oraichain',
      display: 'ORAI',
      symbol: 'ORAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
      },
      coingecko_id: 'oraichain-token',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/oraichain/images/orai-white.svg',
        },
      ],
    },
  ],
};
