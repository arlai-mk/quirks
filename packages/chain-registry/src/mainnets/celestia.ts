import type { Chain, AssetLists, ChainVersions } from '../types';

export const celestia: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'celestia',
  chain_id: 'celestia',
  pretty_name: 'Celestia',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://celestia.org/',
  bech32_prefix: 'celestia',
  daemon_name: 'celestia-appd',
  node_home: '$HOME/.celestia-app',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'utia',
        fixed_min_gas_price: 0.002,
        low_gas_price: 0.01,
        average_gas_price: 0.02,
        high_gas_price: 0.1,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utia',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/celestiaorg/celestia-app',
    recommended_version: 'v1.3.0',
    compatible_versions: ['v1.3.0'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/celestiaorg/networks/master/celestia/genesis.json',
    },
    versions: [
      {
        name: 'v1.3.0',
        recommended_version: 'v1.3.0',
        compatible_versions: ['v1.3.0'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
  },
  description:
    'Celestia is a modular data availability network that securely scales with the number of users, making it easy for anyone to launch their own blockchain.',
  peers: {
    seeds: [
      {
        id: 'e6116822e1a5e283d8a85d3ec38f4d232274eaf3',
        address: 'consensus-full-seed-1.celestia-bootstrap.net:26656',
        provider: 'Lunar Oasis',
      },
      {
        id: 'cf7ac8b19ff56a9d47c75551bd4864883d1e24b5',
        address: 'consensus-full-seed-1.celestia-bootstrap.net:26656',
        provider: 'Lunar Oasis',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'celestia-mainnet-seed.autostake.com:27206',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:16656',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: '24a607a217cf12be29bae5b2e8151391bde2d8c8',
        address: 'seed-celestia-01.stakeflow.io:15007',
        provider: 'Stakeflow',
      },

      {
        id: 'c809ca6486cd54501ce5291714c892f5dc9cfa93',
        address: 'celestia.seeds.validao.xyz:36656',
        provider: 'ValiDAO',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: '400f3d9e30b69e78a7fb891f60d76fa3c73f0ecc',
        address: 'celestia.rpc.kjnodes.com:12059',
        provider: 'kjnodes',
      },
      {
        id: '9aa8a73ea9364aa3cf7806d4dd25b6aed88d8152',
        address: 'celestia.seed.mzonder.com:13156',
        provider: 'MZONDER',
      },
      {
        id: '3abb9ad6d7a3c728984c4b7e9c05e91731779865',
        address: 'seed-celestia.theamsolutions.info:23656',
        provider: 'AM Solutions',
      },
      {
        id: '23b88ebcfb2177dbd2d8b2920c363a25e038e69a',
        address: 'seed.celestia.validatus.com:2000',
        provider: 'Validatus',
      },
      {
        id: 'b7408d0c59fc0fd0c9153365d5593c6c32870cb0',
        address: 'seed-celestia.freshstaking.com:34656',
        provider: 'FreshSTAKING',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'celestia-mainnet-peer.autostake.com:27206',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        id: '24a607a217cf12be29bae5b2e8151391bde2d8c8',
        address: 'peer-celestia-01.stakeflow.io:15007',
        provider: 'Stakeflow',
      },
      {
        id: '6de4ce5baa9d2bed33c0c53b9518b907cfaab33b',
        address: '65.108.128.201:11656',
        provider: 'Polkachu',
      },
      {
        id: 'a26091f9c247c1e68410a4e8b107a715a0e886f6',
        address: '65.108.226.26:29656',
        provider: '[NODERS]TEAM',
      },
      {
        id: 'c48d92566837d95f1eeae5815ac7e70fb80416f7',
        address: '74.208.94.42:26656',
        provider: 'Cumulo',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://public-celestia-rpc.numia.xyz',
        provider: 'Numia',
      },
      {
        address: 'https://celestia-rpc.mesa.newmetric.xyz',
        provider: 'Newmetric',
      },
      {
        address: 'https://rpc.lunaroasis.net',
        provider: 'Lunar Oasis',
      },
      {
        address: 'https://rpc.celestia.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://celestia-rpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-celestia-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://rpc-celestia.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://celestia.rpc.nodersteam.com:29657',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://celestia.rpc.interchain.validao.xyz',
        provider: 'ValiDAO',
      },
      {
        address: 'https://celestia-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://celestia.rpc.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://celestia.rpc.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://celestia-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://rpc-celestia.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://celestia-rpc.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://rpc-celestia.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://celestia-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        address: 'https://rpc.celestia.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://celestia-rpc.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'https://rpc-celestia-full.avril14th.org',
        provider: 'Avril 14th',
      },
      {
        address: 'https://rpc.freshstaking.com/celestia',
        provider: 'FreshSTAKING',
      },
      {
        address: 'https://celestia.cumulo.org.es/',
        provider: 'Cumulo',
      },
      {
        address: 'https://celestia-rpc.stake-town.com',
        provider: 'StakeTown',
      },
    ],
    rest: [
      {
        address: 'https://public-celestia-lcd.numia.xyz',
        provider: 'Numia',
      },
      {
        address: 'https://celestia-rest.mesa.newmetric.xyz',
        provider: 'Newmetric',
      },
      {
        address: 'http://celestia.rpc.nodersteam.com:1617',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'https://api.lunaroasis.net',
        provider: 'Lunar Oasis',
      },
      {
        address: 'https://api.celestia.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://celestia-api.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://api-celestia-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://api-celestia.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://celestia.rest.interchain.validao.xyz',
        provider: 'ValiDAO',
      },
      {
        address: 'https://celestia-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://celestia.rest.stakin-nodes.com',
        provider: 'Stakin',
      },
      {
        address: 'https://celestia.api.kjnodes.com',
        provider: 'kjnodes',
      },
      {
        address: 'https://api-celestia.mzonder.com',
        provider: 'MZONDER',
      },
      {
        address: 'https://celestia-lcd.enigma-validator.com',
        provider: 'Enigma',
      },
      {
        address: 'https://rest-celestia.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://api.celestia.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'https://celestia-api.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'https://celestia-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        address: 'https://api-celestia-full.avril14th.org',
        provider: 'Avril 14th',
      },
      {
        address: 'https://celestia.api.cumulo.org.es',
        provider: 'Cumulo',
      },
      {
        address: 'https://celestia-api.stake-town.com',
        provider: 'StakeTown',
      },
    ],
    grpc: [
      {
        address: 'https://grpc.celestia.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'celestia-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake | Delegate for StakeDrops',
      },
      {
        address: 'https://celestia-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'celestia.grpc.nodersteam.com:9690',
        provider: '[NODERS]TEAM',
      },
      {
        address: 'grpc-celestia-01.stakeflow.io:15002',
        provider: 'Stakeflow',
      },
      {
        address: 'grpc-celestia.cosmos-spaces.cloud:5190',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'celestia.grpc.interchain.validao.xyz:443',
        provider: 'ValiDAO',
      },
      {
        address: 'celestia-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'celestia.grpc.stakin-nodes.com:443',
        provider: 'Stakin',
      },
      {
        address: 'celestia.grpc.kjnodes.com:443',
        provider: 'kjnodes',
      },
      {
        address: 'grpc-celestia.mzonder.com:443',
        provider: 'MZONDER',
      },
      {
        address: 'grpc-celestia.theamsolutions.info:443',
        provider: 'AM Solutions',
      },
      {
        address: 'grpc.celestia.validatus.com',
        provider: 'Validatus',
      },
      {
        address: 'celestia-grpc.sr20de.xyz',
        provider: 'Sr20de',
      },
      {
        address: 'grpc-celestia-full.avril14th.org',
        provider: 'Avril 14th',
      },
      {
        address: 'celestia.grpc.cumulo.org.es',
        provider: 'Cumulo',
      },
      {
        address: 'https://celestia-grpc.stake-town.com',
        provider: 'StakeTown',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://mintscan.io/celestia',
      tx_page: 'https://mintscan.io/celestia/txs/${txHash}',
      account_page: 'https://mintscan.io/celestia/address/${accountAddress}',
    },
    {
      kind: 'NodeStake',
      url: 'https://explorer.nodestake.top/celestia/',
      tx_page: 'https://explorer.nodestake.top/celestia/txs/${txHash}',
      account_page:
        'https://explorer.nodestake.top/celestia/account/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/celestia',
      tx_page: 'https://stakeflow.io/celestia/transactions/${txHash}',
    },
    {
      kind: 'TC Network',
      url: 'https://explorer.tcnetwork.io/celestia',
      tx_page: 'https://explorer.tcnetwork.io/celestia/transaction/${txHash}',
      account_page:
        'https://explorer.tcnetwork.io/celestia/account/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Celestia-Mainnet',
      tx_page:
        'https://explorer.stavr.tech/Celestia-Mainnet/transaction/${txHash}',
      account_page:
        'https://explorer.stavr.tech/Celestia-Mainnet/account/${accountAddress}',
    },
    {
      kind: 'AM Solutions',
      url: 'https://explorer.theamsolutions.info/celestia-main',
      tx_page:
        'https://explorer.theamsolutions.info/celestia-main/transaction/${txHash}',
      account_page:
        'https://explorer.theamsolutions.info/celestia-main/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
    },
  ],
};

export const celestiaAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'celestia',
  assets: [
    {
      description: '',
      denom_units: [
        {
          denom: 'utia',
          exponent: 0,
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      base: 'utia',
      name: 'Celestia',
      display: 'tia',
      symbol: 'TIA',
      coingecko_id: 'celestia',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        },
      ],
    },
  ],
};
