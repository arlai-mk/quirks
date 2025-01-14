import type { Chain, AssetList, Versions } from '../types';

export const neutron: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'neutron',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Neutron',
  chain_id: 'neutron-1',
  bech32_prefix: 'neutron',
  website: 'https://neutron.org/',
  daemon_name: 'neutrond',
  node_home: '$HOME/.neutrond',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'untrn',
        low_gas_price: 0.0053,
        average_gas_price: 0.0053,
        high_gas_price: 0.0053,
      },
      {
        denom:
          'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
        low_gas_price: 0.0008,
        average_gas_price: 0.0008,
        high_gas_price: 0.0008,
      },
      {
        denom:
          'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
        low_gas_price: 0.008,
        average_gas_price: 0.008,
        high_gas_price: 0.008,
      },
      {
        denom:
          'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
        low_gas_price: 2903231.6597,
        average_gas_price: 2903231.6597,
        high_gas_price: 2903231.6597,
      },
      {
        denom:
          'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
        low_gas_price: 2564102564.1026,
        average_gas_price: 2564102564.1026,
        high_gas_price: 2564102564.1026,
      },
      {
        denom:
          'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
        low_gas_price: 0.0004,
        average_gas_price: 0.0004,
        high_gas_price: 0.0004,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'untrn',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/neutron-org/neutron',
    recommended_version: 'v3.0.2',
    compatible_versions: ['v3.0.2'],
    binaries: {
      'linux/amd64':
        'https://github.com/neutron-org/neutron/releases/download/v3.0.2/neutrond-linux-amd64',
    },
    cosmos_sdk_version: 'neutron-org/cosmos-sdk v0.47.10-neutron',
    consensus: {
      type: 'cometbft',
      version: 'v0.37.4',
    },
    cosmwasm_version: 'neutron-org/wasmd v0.45.0',
    cosmwasm_enabled: true,
    ibc_go_version: 'v7.3.2',
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/neutron-org/mainnet-assets/main/neutron-1-genesis.json',
    },
    versions: [
      {
        name: 'v1.0.1',
        recommended_version: 'v1.0.4',
        compatible_versions: ['v1.0.3', 'v1.0.4'],
        cosmos_sdk_version: '0.45',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        cosmwasm_version: '0.31',
        cosmwasm_enabled: true,
        ibc_go_version: '4.3.0',
        next_version_name: 'v2.0.0',
      },
      {
        name: 'v2.0.0',
        proposal: 25,
        height: 5416000,
        recommended_version: 'v2.0.4',
        compatible_versions: ['v2.0.4'],
        binaries: {
          'linux/amd64':
            'https://github.com/neutron-org/neutron/releases/download/v2.0.4/neutrond-linux-amd64',
        },
        cosmos_sdk_version: 'v0.47.6',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.1',
        next_version_name: 'v3.0.1',
      },
      {
        name: 'v3.0.1',
        proposal: 35,
        height: 9034900,
        recommended_version: 'v3.0.2',
        compatible_versions: ['v3.0.2'],
        binaries: {
          'linux/amd64':
            'https://github.com/neutron-org/neutron/releases/download/v3.0.2/neutrond-linux-amd64',
        },
        cosmos_sdk_version: 'neutron-org/cosmos-sdk v0.47.10-neutron',
        consensus: {
          type: 'cometbft',
          version: 'v0.37.4',
        },
        cosmwasm_version: 'neutron-org/wasmd v0.45.0',
        cosmwasm_enabled: true,
        ibc_go_version: 'v7.3.2',
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
  },
  description:
    'The most secure CosmWasm platform in Cosmos, Neutron lets smart-contracts leverage bleeding-edge Interchain technology with minimal overhead.',
  peers: {
    seeds: [
      {
        id: '74f3a4a0423e72334f4439b438b29934e5f0dbbd',
        address: 'p2p-xyphion.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '65beeffac5c0f29e6c3749687f03b2040d265895',
        address: 'p2p-talzor.neutron-1.neutron.org:26656',
        provider: 'Neutron',
      },
      {
        id: '20e1000e88125698264454a884812746c2eb4807',
        address: 'seeds.lavenderfive.com:19156',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        id: 'c28827cb96c14c905b127b92065a3fb4cd77d7f6',
        address: 'seeds.whispernode.com:19156',
        provider: 'WhisperNode 🤐',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'e5d2743d9a3de514e4f7b9461bf3f0c1500c58d9',
        address: 'neutron.peer.stakewith.us:39956',
        provider: 'StakeWithUs',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-rpc.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://rpc-neutron.whispernode.com',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://rpc-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://rpc.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/trpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://rpc.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    rest: [
      {
        address: 'https://api.novel.remedy.tm.p2p.org',
        provider: 'P2P',
      },
      {
        address: 'https://neutron-api.lavenderfive.com',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'https://lcd-neutron.whispernode.com',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'https://api-neutron.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'http://api.neutron.nodestake.top',
        provider: 'NodeStake',
      },
      {
        address: 'https://neutron-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://community.nuxian-node.ch:6797/neutron/crpc',
        provider: 'PRO Delegators',
      },
      {
        address: 'https://lcd.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
    grpc: [
      {
        address: 'grpc-kralum.neutron-1.neutron.org:80',
        provider: 'Neutron',
      },
      {
        address: 'neutron-grpc-pub.rpc.p2p.world:3001',
        provider: 'P2P',
      },
      {
        address: 'neutron-grpc.lavenderfive.com:443',
        provider: 'Lavender.Five Nodes 🐝',
      },
      {
        address: 'grpc-neutron.whispernode.com:443',
        provider: 'WhisperNode 🤐',
      },
      {
        address: 'grpc-neutron.cosmos-spaces.cloud:3090',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'grpc.neutron.nodestake.top:9090',
        provider: 'NodeStake',
      },
      {
        address: 'neutron-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://grpc.neutron.bronbro.io:443',
        provider: 'Bro_n_Bro',
      },
    ],
  },
  explorers: [
    {
      kind: 'Mintscan',
      url: 'https://www.mintscan.io/neutron',
      tx_page: 'https://www.mintscan.io/neutron/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/neutron/accounts/${accountAddress}',
    },
    {
      kind: 'ezstaking',
      url: 'https://ezstaking.app/neutron',
      tx_page: 'https://ezstaking.app/neutron/txs/${txHash}',
      account_page: 'https://ezstaking.app/neutron/account/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/neutron-black-logo.svg',
    },
  ],
};

export const neutronAssetList: AssetList = {
  $schema: '../assetlist.schema.json',
  chain_name: 'neutron',
  assets: [
    {
      description: 'The native token of Neutron chain.',
      denom_units: [
        {
          denom: 'untrn',
          exponent: 0,
        },
        {
          denom: 'ntrn',
          exponent: 6,
        },
      ],
      base: 'untrn',
      name: 'Neutron',
      display: 'ntrn',
      symbol: 'NTRN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
      },
      coingecko_id: 'neutron-3',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ntrn.svg',
        },
      ],
      socials: {
        website: 'https://neutron.org/',
        twitter: 'https://twitter.com/Neutron_org',
      },
    },
    {
      description: 'IBC uatom through cosmoshub-4 transfer/channel-1',
      denom_units: [
        {
          denom:
            'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
          exponent: 0,
          aliases: ['uatom'],
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9',
      name: 'IBC atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-569',
          },
          chain: {
            channel_id: 'channel-1',
            path: 'transfer/channel-1/uatom',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg',
      },
    },
    {
      description: 'IBC Axelar uusdc through axelar-dojo-1 transfer/channel-2',
      denom_units: [
        {
          denom:
            'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'axlusdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349',
      name: 'USD Coin (Axelar)',
      display: 'axlusdc',
      symbol: 'axlUSDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
            channel_id: 'channel-78',
          },
          chain: {
            channel_id: 'channel-2',
            path: 'transfer/channel-2/uusdc',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'axelar',
            base_denom: 'uusdc',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg',
      },
    },
    {
      description: 'Tia on Neutron',
      denom_units: [
        {
          denom:
            'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
          exponent: 0,
          aliases: ['utia'],
        },
        {
          denom: 'tia',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7',
      name: 'Celestia TIA',
      display: 'tia',
      symbol: 'TIA',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'celestia',
            base_denom: 'utia',
            channel_id: 'channel-8',
          },
          chain: {
            channel_id: 'channel-35',
            path: 'transfer/channel-35',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'celestia',
            base_denom: 'utia',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/celestia/images/celestia.svg',
      },
    },
    {
      description: 'Astropepe meme coin',
      denom_units: [
        {
          denom:
            'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
          exponent: 0,
        },
        {
          denom: 'ASTROPEPE',
          exponent: 6,
        },
      ],
      base: 'factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe',
      name: 'AstroPepe',
      display: 'ASTROPEPE',
      symbol: 'ASTROPEPE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astropepe.png',
        },
      ],
    },
    {
      description: 'wstETH on Neutron',
      denom_units: [
        {
          denom:
            'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
          exponent: 0,
        },
        {
          denom: 'wstETH',
          exponent: 18,
        },
      ],
      base: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
      name: 'wstETH',
      display: 'wstETH',
      symbol: 'wstETH',
      traces: [
        {
          type: 'additional-mintage',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          },
          provider: 'Lido',
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wsteth.svg',
      },
    },
    {
      description: 'NBTC on Neutron',
      denom_units: [
        {
          denom:
            'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
          exponent: 0,
          aliases: ['usat'],
        },
        {
          denom: 'sat',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/DDC3C60EE82BF544F1A0C6A983FF500EF1C14DE20071A5E1E7C0FB470E36E920',
      name: 'Nomic NBTC',
      display: 'sat',
      symbol: 'SAT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nomic',
            base_denom: 'usat',
            channel_id: 'channel-2',
          },
          chain: {
            channel_id: 'channel-42',
            path: 'transfer/channel-42/usat',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nomic',
            base_denom: 'usat',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nomic/images/nbtc.svg',
      },
    },
    {
      description: 'DYDX on Neutron',
      denom_units: [
        {
          denom:
            'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
          exponent: 0,
          aliases: ['adydx'],
        },
        {
          denom: 'dydx',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130',
      name: 'DYDX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-11',
          },
          chain: {
            channel_id: 'channel-48',
            path: 'transfer/channel-48/adydx',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'dydx',
            base_denom: 'adydx',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/dydx/images/dydx.svg',
      },
    },
    {
      description: 'The cutest NEWT token on Neutron chain.',
      denom_units: [
        {
          denom: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
          exponent: 0,
          aliases: ['unewt'],
        },
        {
          denom: 'newt',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt',
      name: 'Newt',
      display: 'newt',
      symbol: 'NEWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
      },
      coingecko_id: 'newt',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newt.png',
        },
      ],
    },
    {
      description:
        'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [
        {
          denom:
            'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
          exponent: 0,
          aliases: ['uastro'],
        },
        {
          denom: 'astro',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
      name: 'Astroport token',
      display: 'astro',
      symbol: 'ASTRO',
      coingecko_id: 'astroport-fi',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/astro.svg',
      },
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi',
      },
    },
    {
      description:
        'Astroport is a neutral marketplace where anyone, from anywhere in the galaxy, can dock to trade their wares.',
      denom_units: [
        {
          denom:
            'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
          exponent: 0,
          aliases: ['uxastro'],
        },
        {
          denom: 'xASTRO',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1zlf3hutsa4qnmue53lz2tfxrutp8y2e3rj4nkghg3rupgl4mqy8s5jgxsn/xASTRO',
      name: 'Staked Astroport Token',
      display: 'xASTRO',
      symbol: 'xASTRO',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'neutron',
            base_denom:
              'factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro',
          },
          provider: 'Astroport',
        },
      ],
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/xAstro.svg',
      },
      socials: {
        website: 'https://astroport.fi/',
        twitter: 'https://twitter.com/astroport_fi',
      },
    },
    {
      description: 'ASTRO.cw20 on Neutron',
      denom_units: [
        {
          denom:
            'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
          exponent: 0,
          aliases: ['uastro'],
        },
        {
          denom: 'astro.cw20',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A',
      name: 'Astroport CW20 token',
      display: 'astro.cw20',
      symbol: 'ASTRO.cw20',
      traces: [
        {
          type: 'ibc-cw20',
          counterparty: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            channel_id: 'channel-167',
            port: 'wasm.terra1jhfjnm39y3nn9l4520mdn4k5mw23nz0674c4gsvyrcr90z9tqcvst22fce',
          },
          chain: {
            channel_id: 'channel-5',
            path: 'transfer/channel-5/cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
            port: 'transfer',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'terra2',
            base_denom:
              'cw20:terra1nsuqsk6kh58ulczatwev87ttq2z6r3pusulg9r24mfj2fvtzd4uq3exn26',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra2/images/astro-cw20.svg',
      },
    },
    {
      description: 'Baby Corgi is the real doggo of Neutron!',
      denom_units: [
        {
          denom: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
          exponent: 0,
          aliases: ['ucorgi'],
        },
        {
          denom: 'corgi',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi',
      name: 'Baby Corgi',
      display: 'corgi',
      symbol: 'CORGI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/babycorgi.png',
        },
      ],
    },
    {
      description: 'clownmaxxed store of value',
      denom_units: [
        {
          denom:
            'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
          exponent: 0,
          aliases: ['ucircus'],
        },
        {
          denom: 'circus',
          exponent: 6,
        },
      ],
      base: 'factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus',
      name: 'AtomEconomicZone69JaeKwonInu',
      display: 'circus',
      symbol: 'CIRCUS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/circus.png',
        },
      ],
    },
    {
      description: 'Jimmy Neutron Finance',
      denom_units: [
        {
          denom: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
          exponent: 0,
          aliases: ['ujimmy'],
        },
        {
          denom: 'jimmy',
          exponent: 6,
        },
      ],
      base: 'factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY',
      name: 'jimmy',
      display: 'jimmy',
      symbol: 'JIMMY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/jimmy.png',
        },
      ],
    },
    {
      description: 'Baddest coin on Cosmos',
      denom_units: [
        {
          denom: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
          exponent: 0,
          aliases: ['ubad'],
        },
        {
          denom: 'bad',
          exponent: 6,
        },
      ],
      base: 'factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad',
      name: 'Badcoin',
      display: 'bad',
      symbol: 'BAD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bad.png',
        },
      ],
    },
    {
      description: 'BITCOSMOS',
      denom_units: [
        {
          denom:
            'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
          exponent: 0,
          aliases: ['ubitcosmos'],
        },
        {
          denom: 'bitcosmos',
          exponent: 6,
        },
      ],
      base: 'neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj',
      name: 'Bitcosmos',
      display: 'bitcosmos',
      symbol: 'BTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/bitcosmos.png',
        },
      ],
    },
    {
      description: 'What the Fuck',
      denom_units: [
        {
          denom:
            'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
          exponent: 0,
          aliases: ['uwtf'],
        },
        {
          denom: 'wtf',
          exponent: 6,
        },
      ],
      base: 'neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf',
      name: 'wtf',
      display: 'wtf',
      symbol: 'WTF',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/WTF.png',
        },
      ],
    },
    {
      description: 'NLS on Neutron',
      denom_units: [
        {
          denom:
            'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
          exponent: 0,
          aliases: ['unls'],
        },
        {
          denom: 'nls',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/6C9E6701AC217C0FC7D74B0F7A6265B9B4E3C3CDA6E80AADE5F950A8F52F9972',
      name: 'Nolus NLS',
      display: 'nls',
      symbol: 'NLS',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'nolus',
            base_denom: 'unls',
            channel_id: 'channel-3839',
          },
          chain: {
            channel_id: 'channel-44',
            path: 'transfer/channel-44/unls',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'nolus',
            base_denom: 'unls',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/nolus/images/nolus.svg',
      },
    },
    {
      description: 'A Mechanical Canine',
      denom_units: [
        {
          denom:
            'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
          exponent: 0,
          aliases: ['ugoddard'],
        },
        {
          denom: 'goddard',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODRD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddardntrn.png',
        },
      ],
    },
    {
      description: 'The deflationary utility token of the Apollo DAO project',
      denom_units: [
        {
          denom:
            'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
          exponent: 0,
          aliases: ['uapollo'],
        },
        {
          denom: 'apollo',
          exponent: 6,
        },
      ],
      base: 'factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO',
      name: 'Apollo DAO',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/apollo.svg',
        },
      ],
      socials: {
        website: 'https://apollo.farm/',
        twitter: 'https://twitter.com/ApolloDAO',
      },
    },
    {
      description: 'NEWTROLL',
      denom_units: [
        {
          denom:
            'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
          exponent: 0,
          aliases: ['unewtroll'],
        },
        {
          denom: 'newtroll',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1ume2n42r5j0660gegrr28fzdze7aqf7r5cd9y6/newtroll',
      name: 'Newtroll',
      display: 'newtroll',
      symbol: 'NTRL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/newtroll.svg',
        },
      ],
    },
    {
      description: 'Retro Game',
      denom_units: [
        {
          denom:
            'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
          exponent: 0,
          aliases: ['uretro'],
        },
        {
          denom: 'retro',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1t24nc7whl77relnu3taxyg3p66pjyuk82png2y/uretro',
      name: 'Retro',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/retro.svg',
        },
      ],
    },
    {
      description: 'THE FIRST NATIVE GODDARD MEMECOIN ON NEUTRON',
      denom_units: [
        {
          denom:
            'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
          exponent: 0,
          aliases: ['ugoddard'],
        },
        {
          denom: 'goddard',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1yqj9vcc0y73xfxjzegaj4v8q0zefevnlpuh4rj/GODDARD',
      name: 'Goddard',
      display: 'goddard',
      symbol: 'GODDARD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/goddard.svg',
        },
      ],
    },
    {
      description: 'The first memecoin on osmosis.',
      denom_units: [
        {
          denom:
            'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958',
          exponent: 0,
        },
        {
          denom: 'WOSMO',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/7DA39F5140741177846FCF3CFAB14450EE7F57B7794E5A94BEF73825D3741958',
      name: 'Wosmo',
      display: 'WOSMO',
      symbol: 'WOSMO',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
            channel_id: 'channel-874',
          },
          chain: {
            channel_id: 'channel-10',
            path: 'transfer/channel-10/factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/wosmo.png',
      },
    },
    {
      description: 'Astro BOY',
      denom_units: [
        {
          denom:
            'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
          exponent: 0,
          aliases: ['uboy'],
        },
        {
          denom: 'boy',
          exponent: 6,
        },
      ],
      base: 'neutron1uqvse8fdrd9tam47f2jhy9m6al6xxtqpc83f9pdnz5gdle4swc0spfnctv',
      name: 'boy',
      display: 'boy',
      symbol: 'BOY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/boy.png',
        },
      ],
    },
    {
      description:
        "A clan of 11y bad kids crafting chaos on the Cosmos eco. One bad memecoin to rule them all  $BADKID. Airdropped to Badkids NFT holders and $STARS stakers. It's so bad, your wallet's throwing a tantrum for it.",
      denom_units: [
        {
          denom:
            'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8',
          exponent: 0,
        },
        {
          denom: 'BADKID',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/9F8417FBA11E5E01F7F85DDD48C400EB746E95084C11706041663845B4A700A8',
      name: 'Badkid',
      display: 'BADKID',
      symbol: 'BADKID',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
            channel_id: 'channel-874',
          },
          chain: {
            channel_id: 'channel-10',
            path: 'transfer/channel-10/factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'osmosis',
            base_denom:
              'factory/osmo10n8rv8npx870l69248hnp6djy6pll2yuzzn9x8/BADKID',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/badkid.png',
      },
    },
    {
      description: 'Reflections of cartel activity on Cosmos.',
      denom_units: [
        {
          denom:
            'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
          exponent: 0,
          aliases: ['ucartel'],
        },
        {
          denom: 'cartel',
          exponent: 6,
        },
      ],
      base: 'factory/neutron1w0pz4mjw7n96kkragj8etgfgakg5vw9lzg77wq/cartel',
      name: 'cartel',
      display: 'cartel',
      symbol: 'CARTEL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/cartel.png',
        },
      ],
    },
    {
      description: '$ATOM to $1,000 LFG!!',
      denom_units: [
        {
          denom:
            'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
          exponent: 0,
          aliases: ['uatom1klfg'],
        },
        {
          denom: 'ATOM1KLFG',
          exponent: 6,
        },
      ],
      base: 'factory/neutron13lkh47msw28yynspc5rnmty3yktk43wc3dsv0l/ATOM1KLFG',
      name: 'ATOM1KLFG',
      display: 'ATOM1KLFG',
      symbol: 'ATOM1KLFG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/ATOM1KLFGc.png',
        },
      ],
    },
    {
      type_asset: 'ics20',
      description: 'USD Coin on Neutron',
      denom_units: [
        {
          denom:
            'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
          exponent: 0,
          aliases: ['uusdc', 'microusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      base: 'ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81',
      name: 'USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      coingecko_id: 'usd-coin',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
      },
      images: [
        {
          image_sync: {
            chain_name: 'noble',
            base_denom: 'uusdc',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
        },
      ],
      traces: [
        {
          type: 'ibc',
          counterparty: {
            channel_id: 'channel-18',
            base_denom: 'uusdc',
            chain_name: 'noble',
          },
          chain: {
            channel_id: 'channel-30',
            path: 'transfer/channel-30/uusdc',
          },
        },
      ],
    },
  ],
};
