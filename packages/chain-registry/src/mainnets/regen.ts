import type { Chain, AssetLists, ChainVersions } from '../types';

export const regen: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'regen',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://www.regen.network/',
  pretty_name: 'Regen',
  chain_id: 'regen-1',
  bech32_prefix: 'regen',
  daemon_name: 'regen',
  node_home: '$HOME/.regen',
  key_algos: ['secp256k1'],
  slip44: 118,
  fees: {
    fee_tokens: [
      {
        denom: 'uregen',
        low_gas_price: 0.015,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uregen',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/regen-network/regen-ledger',
    recommended_version: 'v5.0.0',
    compatible_versions: ['v5.0.0'],
    binaries: {
      'linux/amd64':
        'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_amd64.zip',
      'linux/arm64':
        'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_arm64.zip',
      'darwin/amd64':
        'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_amd64.zip',
      'darwin/arm64':
        'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_arm64.zip',
    },
    cosmos_sdk_version: '0.46',
    consensus: {
      type: 'tendermint',
      version: '0.34',
    },
    ibc_go_version: '5.2',
    ics_enabled: ['ics20-1', 'ics27-1'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/regen-network/mainnet/main/regen-1/genesis.json',
    },
    versions: [
      {
        name: 'v5.0.0',
        recommended_version: 'v5.0.0',
        compatible_versions: ['v5.0.0'],
        cosmos_sdk_version: '0.46',
        consensus: {
          type: 'tendermint',
          version: '0.34',
        },
        ibc_go_version: '5.2',
        ics_enabled: ['ics20-1', 'ics27-1'],
        binaries: {
          'linux/amd64':
            'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_amd64.zip',
          'linux/arm64':
            'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_linux_arm64.zip',
          'darwin/amd64':
            'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_amd64.zip',
          'darwin/arm64':
            'https://github.com/regen-network/regen-ledger/releases/download/v5.0.0/regen-ledger_5.0.0_darwin_arm64.zip',
        },
      },
    ],
  },
  description:
    'Regen Network, a platform to originate and invest in high-integrity carbon and biodiversity credits from ecological regeneration projects.',
  peers: {
    seeds: [
      {
        id: 'aebb8431609cb126a977592446f5de252d8b7fa1',
        address: '104.236.201.138:26656',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'dc7121500d58d40c98f06f14d5a9065935a7adf6',
        address: 'regen.seed.stavr.tech:2126',
        provider: '🔥STAVR🔥',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'regen-mainnet-seed.autostake.com:27216',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
    persistent_peers: [
      {
        id: 'd35d652b6cb3bf7d6cb8d4bd7c036ea03e7be2ab',
        address: '116.203.182.185:26656',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'regen-mainnet-peer.autostake.com:27216',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc-regen.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'http://public-rpc.regen.vitwit.com:26657',
        provider: 'vitwit',
      },
      {
        address: 'https://regen.rpc.m.stavr.tech:443',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://regen.stakesystems.io:2053',
        provider: 'stakesystems',
      },
      {
        address: 'http://rpc.regen.forbole.com:80',
        provider: 'forbole',
      },
      {
        address: 'https://rpc-regen-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://regen-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://regen-rpc.easy2stake.com',
        provider: 'Easy 2 Stake',
      },
      {
        address: 'https://regen-rpc.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://regen-rpc.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://regen-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    rest: [
      {
        address: 'http://public-rpc.regen.vitwit.com:1317',
        provider: 'vitwit',
      },
      {
        address: 'https://regen.stakesystems.io',
        provider: 'stakesystems',
      },
      {
        address: 'https://regen.api.m.stavr.tech',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'https://api-regen-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://regen-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://rest-regen.ecostake.com',
        provider: 'ecostake',
      },
      {
        address: 'https://regen-lcd.easy2stake.com',
        provider: 'Easy 2 Stake',
      },
      {
        address: 'https://regen-api.theamsolutions.info',
        provider: 'AM Solutions',
      },
      {
        address: 'https://regen-api.w3coins.io',
        provider: 'w3coins',
      },
      {
        address: 'https://regen-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    grpc: [
      {
        address: 'grpc-regen-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'regen-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'regen.grpc.m.stavr.tech:124',
        provider: '🔥STAVR🔥',
      },
      {
        address: 'regen-grpc.w3coins.io:22790',
        provider: 'w3coins',
      },
      {
        address: 'regen-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/regen',
      tx_page: 'https://www.mintscan.io/regen/transactions/${txHash}',
      account_page: 'https://www.mintscan.io/regen/accounts/${accountAddress}',
    },
    {
      kind: '🔥STAVR🔥',
      url: 'https://explorer.stavr.tech/Regen-Mainnet',
      tx_page: 'https://explorer.stavr.tech/Regen-Mainnet/tx/${txHash}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/regen',
      tx_page: 'https://ping.pub/regen/tx/${txHash}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/regen',
      tx_page: 'https://bigdipper.live/regen/transactions/${txHash}',
      account_page: 'https://bigdipper.live/regen/accounts/${accountAddress}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/regen-network',
      tx_page: 'https://atomscan.com/regen-network/transactions/${txHash}',
      account_page:
        'https://atomscan.com/regen-network/accounts/${accountAddress}',
    },
  ],
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
  },
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
    },
  ],
};

export const regenAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'regen',
  assets: [
    {
      description: 'REGEN coin is the token for the Regen Network Platform',
      denom_units: [
        {
          denom: 'uregen',
          exponent: 0,
        },
        {
          denom: 'regen',
          exponent: 6,
        },
      ],
      base: 'uregen',
      name: 'Regen Network',
      display: 'regen',
      symbol: 'REGEN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
      },
      coingecko_id: 'regen',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/regen.svg',
        },
      ],
    },
    {
      description:
        'Nature Carbon Ton (NCT) is a carbon token standard backed 1:1 by carbon credits issued by Verra, a global leader in the voluntary carbon market. NCT credits on Regen Network have been tokenized by Toucan.earth.',
      denom_units: [
        {
          denom: 'eco.uC.NCT',
          exponent: 0,
        },
        {
          denom: 'nct',
          exponent: 6,
        },
      ],
      base: 'eco.uC.NCT',
      name: 'Nature Carbon Ton',
      display: 'nct',
      symbol: 'NCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
      },
      coingecko_id: 'toucan-protocol-nature-carbon-tonne',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/regen/images/nct.svg',
        },
      ],
    },
  ],
};
