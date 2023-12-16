import type { Chain, AssetLists } from '../types';

export const persistence: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'persistence',
  chain_id: 'core-1',
  pretty_name: 'Persistence',
  status: 'live',
  network_type: 'mainnet',
  website: 'https://persistence.one/',
  bech32_prefix: 'persistence',
  daemon_name: 'persistenceCore',
  node_home: '$HOME/.persistenceCore',
  key_algos: ['secp256k1'],
  slip44: 118,
  alternative_slip44s: [750],
  fees: {
    fee_tokens: [
      {
        denom: 'uxprt',
        fixed_min_gas_price: 0,
        low_gas_price: 0,
        average_gas_price: 0.025,
        high_gas_price: 0.04,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uxprt',
      },
    ],
    lock_duration: {
      time: '1814400s',
    },
  },
  codebase: {
    git_repo: 'https://github.com/persistenceOne/persistenceCore',
    recommended_version: 'v10.0.0',
    compatible_versions: ['v10.0.0'],
    cosmos_sdk_version: 'v0.47.3-lsm5',
    ibc_go_version: 'v7.2.0-lsm3',
    ics_enabled: ['ics20-1', 'ics27-1'],
    consensus: {
      type: 'cometbft',
      version: 'v0.37.2',
    },
    cosmwasm_version: 'v0.40.2-lsm3',
    cosmwasm_enabled: true,
    cosmwasm_path: '$HOME/.persistenceCore/wasm',
    binaries: {
      'linux/amd64':
        'https://github.com/persistenceOne/persistenceCore/releases/download/v10.0.0/persistenceCore-v10.0.0-linux-amd64.tar.gz',
    },
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/persistenceOne/genesisTransactions/master/core-1/final_genesis.json',
    },
    versions: [
      {
        name: 'v7',
        tag: 'v7.0.0',
        recommended_version: 'v7.0.0',
        compatible_versions: ['v7.0.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/persistenceOne/persistenceCore/releases/download/v7.0.0/persistenceCore-v7.0.0-linux-amd64.tar.gz',
        },
        next_version_name: 'v8',
      },
      {
        name: 'v8',
        tag: 'v8.1.0',
        height: 13046600,
        proposal: 42,
        recommended_version: 'v8.1.0',
        compatible_versions: ['v8.1.0'],
        binaries: {
          'linux/amd64':
            'https://github.com/persistenceOne/persistenceCore/releases/download/v8.1.0/persistenceCore-v8.1.0-linux-amd64.tar.gz',
        },
        next_version_name: 'v9',
      },
      {
        name: 'v9',
        tag: 'v9.2.1',
        height: 13160000,
        proposal: 43,
        recommended_version: 'v9.2.1',
        compatible_versions: ['v9.1.1', 'v9.1.0', 'v9.2.1'],
        cosmos_sdk_version: 'v0.47.3-lsm',
        ibc_go_version: 'v7.2.0-lsm3',
        ics_enabled: ['ics20-1', 'ics27-1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.40.2-lsm3',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.persistenceCore/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/persistenceOne/persistenceCore/releases/download/v9.2.1/persistenceCore-v9.2.1-linux-amd64.tar.gz',
        },
        next_version_name: 'v10',
      },
      {
        name: 'v10',
        tag: 'v10.0.0',
        height: 13870350,
        proposal: 55,
        recommended_version: 'v10.0.0',
        compatible_versions: ['v10.0.0'],
        cosmos_sdk_version: 'v0.47.3-lsm',
        ibc_go_version: 'v7.2.0-lsm3',
        ics_enabled: ['ics20-1', 'ics27-1'],
        consensus: {
          type: 'cometbft',
          version: 'v0.37.2',
        },
        cosmwasm_version: 'v0.47.3-lsm5',
        cosmwasm_enabled: true,
        cosmwasm_path: '$HOME/.persistenceCore/wasm',
        binaries: {
          'linux/amd64':
            'https://github.com/persistenceOne/persistenceCore/releases/download/v10.0.0/persistenceCore-v10.0.0-linux-amd64.tar.gz',
        },
        next_version_name: '',
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
  },
  description:
    'Persistence is an app chain for Liquid Staking powering an ecosystem of DeFi applications focused on unlocking the liquidity of staked assets.',
  peers: {
    seeds: [
      {
        id: 'eaa76966cad27a9807b7d8b9a62c9b2ca4924581',
        address: 'tenderseed.ccvalidators.com:26003',
      },
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'persistence-mainnet-seed.autostake.com:26896',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'ade4d8bc8cbe014af6ebdf3cb7b1e9ad36f412c0',
        address: 'seeds.polkachu.com:15456',
        provider: 'Polkachu',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        id: 'ce9dc9467af943bf35f17f04cfcdf3895914d867',
        address: 'seed-persistence-01.stakeflow.io:33656',
        provider: 'Stakeflow',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'persistence-mainnet-peer.autostake.com:26896',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: '137818b03a705cf86622b4d97a074091f2f22589',
        address: '185.225.233.30:26756',
        provider: 'Cosmonaut Stakes',
      },
      {
        id: 'bb7c2cddd665303a0b4233e3d47f5bf2c3ac21ba',
        address: '135.181.142.60:15601',
        provider: 'POSTHUMAN∞DVS',
      },
      {
        id: '3a4aa732fc9ad4f971ce081a34d6fc06e08dd7c6',
        address: '141.95.33.97:26656',
        provider: 'Stakewolle.com | Auto-compound',
      },
      {
        id: 'ce9dc9467af943bf35f17f04cfcdf3895914d867',
        address: 'peer-persistence-01.stakeflow.io:33656',
        provider: 'Stakeflow',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.core.persistence.one',
        provider: 'Persistence',
      },
      {
        address: 'https://rpc-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://persistence-rpc.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://persistence-rpc.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://rpc-persistence.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://rpc-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://persistence-mainnet-rpc.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes',
      },
      {
        address: 'https://persistence-rpc.quantnode.tech',
        provider: 'QuantNode',
      },
      {
        address: 'https://persistence-rpc.zenscape.one',
        provider: 'Zenscape',
      },
      {
        address: 'https://persistence-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://persistence-rpc.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'https://rpc.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS',
      },
      {
        address: 'https://rpc-persistence-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://persistence-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://persistence-rpc.highstakes.ch:26657/',
        provider: 'High Stakes 🇨🇭',
      },
    ],
    rest: [
      {
        address: 'https://rest.core.persistence.one',
        provider: 'Persistence',
      },
      {
        address: 'https://api-persistent-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://persistence-api.polkachu.com',
        provider: 'Polkachu',
      },
      {
        address: 'https://api-persistence.cosmos-spaces.cloud',
        provider: 'Cosmos Spaces',
      },
      {
        address: 'https://persistence-api.kleomedes.network',
        provider: 'Kleomedes',
      },
      {
        address: 'https://rest-persistence.architectnodes.com',
        provider: 'Architect Nodes',
      },
      {
        address: 'https://persistence-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://persistence-mainnet-rest.cosmonautstakes.com',
        provider: 'Cosmonaut Stakes',
      },
      {
        address: 'https://persistence-lcd.quantnode.tech',
        provider: 'QuantNode',
      },
      {
        address: 'https://persistence-rest.zenscape.one',
        provider: 'Zenscape',
      },
      {
        address: 'https://persistence-api.stakeandrelax.net',
        provider: 'Stake&Relax Validator 🦥',
      },
      {
        address: 'https://rest.persistence.posthuman.digital:443',
        provider: 'POSTHUMAN∞DVS',
      },
      {
        address: 'https://api-persistence-01.stakeflow.io',
        provider: 'Stakeflow',
      },
      {
        address: 'https://persistence-rest.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://persistence-api.highstakes.ch:1317/',
        provider: 'High Stakes 🇨🇭',
      },
    ],
    grpc: [
      {
        address: 'grpc.core.persistence.one:443',
        provider: 'Persistence',
      },
      {
        address: 'grpc-persistent-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'persistence-grpc.polkachu.com:15490',
        provider: 'Polkachu',
      },
      {
        address: 'persistence-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'grpc.persistence.posthuman.digital:80',
        provider: 'POSTHUMAN∞DVS',
      },
      {
        address: 'grpc-persistence.cosmos-spaces.cloud:1180',
        provider: 'Cosmos Spaces',
      },
      {
        address: '141.95.33.97:9090',
        provider: 'Stakewolle.com | Auto-compound',
      },
      {
        address: 'grpc-persistence-01.stakeflow.io:49090',
        provider: 'Stakeflow',
      },
      {
        address: 'persistence-grpc.w3coins.io:15490',
        provider: 'w3coins',
      },
      {
        address: 'persistence-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
  },
  explorers: [
    {
      kind: 'mintscan',
      url: 'https://www.mintscan.io/persistence',
      tx_page: 'https://www.mintscan.io/persistence/transactions/${txHash}',
      account_page:
        'https://www.mintscan.io/persistence/accounts/${accountAddress}',
    },
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/persistence',
      tx_page: 'https://ping.pub/persistence/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/persistence',
      tx_page: 'https://atomscan.com/persistence/transactions/${txHash}',
      account_page:
        'https://atomscan.com/persistence/accounts/${accountAddress}',
    },
    {
      kind: 'bigdipper',
      url: 'https://bigdipper.live/persistence',
      tx_page: 'https://bigdipper.live/persistence/transactions/${txHash}',
      account_page:
        'https://bigdipper.live/persistence/accounts/${accountAddress}',
    },
    {
      kind: 'Stakeflow',
      url: 'https://stakeflow.io/persistence',
      account_page:
        'https://stakeflow.io/persistence/accounts/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
    },
  ],
};

export const persistenceAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'persistence',
  assets: [
    {
      description:
        'The XPRT token is primarily a governance token for the Persistence chain.',
      denom_units: [
        {
          denom: 'uxprt',
          exponent: 0,
        },
        {
          denom: 'xprt',
          exponent: 6,
        },
      ],
      base: 'uxprt',
      name: 'Persistence',
      display: 'xprt',
      symbol: 'XPRT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
      },
      coingecko_id: 'persistence',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/xprt.svg',
        },
      ],
    },
    {
      description: 'PSTAKE Liquid-Staked ATOM',
      denom_units: [
        {
          denom: 'stk/uatom',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'stkatom',
          exponent: 6,
          aliases: ['stk/atom'],
        },
      ],
      base: 'stk/uatom',
      name: 'PSTAKE staked ATOM',
      display: 'stkatom',
      symbol: 'stkATOM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
      },
      coingecko_id: 'stkatom',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg',
        },
      ],
    },
    {
      description:
        'pSTAKE is a liquid staking protocol unlocking the liquidity of staked assets.',
      denom_units: [
        {
          denom:
            'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
          exponent: 0,
          aliases: [
            'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          ],
        },
        {
          denom: 'pstake',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
      name: 'pSTAKE Finance',
      display: 'pstake',
      symbol: 'PSTAKE',
      traces: [
        {
          type: 'liquid-stake',
          counterparty: {
            chain_name: 'persistence',
            base_denom: 'uxprt',
          },
          provider: 'Persistence',
        },
        {
          type: 'bridge',
          counterparty: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          },
          provider: 'Gravity Bridge',
        },
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'gravitybridge',
            base_denom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
            channel_id: 'channel-24',
          },
          chain: {
            channel_id: 'channel-38',
            path: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          },
        },
      ],
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg',
      },
      keywords: ['canon'],
      images: [
        {
          image_sync: {
            chain_name: 'ethereum',
            base_denom: '0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
          },
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/pstake.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom:
            'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
          exponent: 0,
          aliases: ['uatom'],
        },
        {
          denom: 'atom',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C8A74ABBE2AF892E15680D916A7C22130585CE5704F9B17A10F184A90D53BECA',
      name: 'Cosmos Hub Atom',
      display: 'atom',
      symbol: 'ATOM',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'cosmoshub',
            base_denom: 'uatom',
            channel_id: 'channel-190',
          },
          chain: {
            channel_id: 'channel-24',
            path: 'transfer/channel-24/uatom',
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
      description: 'Tether USDT on Persistence',
      denom_units: [
        {
          denom:
            'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
          exponent: 0,
        },
        {
          denom: 'usdt',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/C559977F5797BDC1D74C0836A10C379C991D664166CB60D776A83029852431B4',
      name: 'Tether USDT',
      display: 'usdt',
      symbol: 'USDT',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
            channel_id: 'channel-134',
          },
          chain: {
            channel_id: 'channel-129',
            path: 'transfer/channel-129/erc20/tether/usdt',
          },
        },
      ],
      images: [
        {
          image_sync: {
            chain_name: 'kava',
            base_denom: 'erc20/tether/usdt',
          },
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
        },
      ],
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg',
      },
    },
    {
      denom_units: [
        {
          denom:
            'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
          exponent: 0,
          aliases: ['uusdc'],
        },
        {
          denom: 'usdc',
          exponent: 6,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/B3792E4A62DF4A934EF2DF5968556DB56F5776ED25BDE11188A4F58A7DD406F0',
      name: 'Noble USD Coin',
      display: 'usdc',
      symbol: 'USDC',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'noble',
            base_denom: 'uusdc',
            channel_id: 'channel-36',
          },
          chain: {
            channel_id: 'channel-132',
            path: 'transfer/channel-132/uusdc',
          },
        },
      ],
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
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/noble/images/USDCoin.svg',
      },
    },
    {
      description: 'dydx staking token',
      denom_units: [
        {
          denom:
            'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
          exponent: 0,
          aliases: ['adydx'],
        },
        {
          denom: 'dydx',
          exponent: 18,
        },
      ],
      type_asset: 'ics20',
      base: 'ibc/23DC3FF0E4CBB53A1915E4C62507CB7796956E84C68CA49707787CB8BDE90A1E',
      name: 'dYdX',
      display: 'dydx',
      symbol: 'DYDX',
      traces: [
        {
          type: 'ibc',
          counterparty: {
            chain_name: 'dydx',
            base_denom: 'adydx',
            channel_id: 'channel-4',
          },
          chain: {
            channel_id: 'channel-131',
            path: 'transfer/channel-131/adydx',
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
      description: 'PSTAKE Liquid-Staked OSMO',
      denom_units: [
        {
          denom: 'stk/uosmo',
          exponent: 0,
          aliases: [],
        },
        {
          denom: 'stkosmo',
          exponent: 6,
          aliases: ['stk/osmo'],
        },
      ],
      base: 'stk/uosmo',
      name: 'PSTAKE staked OSMO',
      display: 'stkosmo',
      symbol: 'stkOSMO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkosmo.svg',
        },
      ],
    },
  ],
};
