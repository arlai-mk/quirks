import type { Chain, AssetLists } from '../types';

export const terra: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'terra',
  status: 'live',
  network_type: 'mainnet',
  pretty_name: 'Terra Classic',
  chain_id: 'columbus-5',
  daemon_name: 'terrad',
  node_home: '$HOME/.terra',
  bech32_prefix: 'terra',
  slip44: 330,
  fees: {
    fee_tokens: [
      {
        denom: 'uluna',
        low_gas_price: 28.325,
        average_gas_price: 28.325,
        high_gas_price: 50,
      },
      {
        denom: 'usdr',
        low_gas_price: 0.52469,
        average_gas_price: 0.52469,
        high_gas_price: 0.52469,
      },
      {
        denom: 'uusd',
        low_gas_price: 0.75,
        average_gas_price: 0.75,
        high_gas_price: 0.75,
      },
      {
        denom: 'ukrw',
        low_gas_price: 850,
        average_gas_price: 850,
        high_gas_price: 850,
      },
      {
        denom: 'umnt',
        low_gas_price: 2142.855,
        average_gas_price: 2142.855,
        high_gas_price: 2142.855,
      },
      {
        denom: 'ueur',
        low_gas_price: 0.625,
        average_gas_price: 0.625,
        high_gas_price: 0.625,
      },
      {
        denom: 'ucny',
        low_gas_price: 4.9,
        average_gas_price: 4.9,
        high_gas_price: 4.9,
      },
      {
        denom: 'ujpy',
        low_gas_price: 81.85,
        average_gas_price: 81.85,
        high_gas_price: 81.85,
      },
      {
        denom: 'ugbp',
        low_gas_price: 0.55,
        average_gas_price: 0.55,
        high_gas_price: 0.55,
      },
      {
        denom: 'uinr',
        low_gas_price: 54.4,
        average_gas_price: 54.4,
        high_gas_price: 54.4,
      },
      {
        denom: 'ucad',
        low_gas_price: 0.95,
        average_gas_price: 0.95,
        high_gas_price: 0.95,
      },
      {
        denom: 'uchf',
        low_gas_price: 0.7,
        average_gas_price: 0.7,
        high_gas_price: 0.7,
      },
      {
        denom: 'uaud',
        low_gas_price: 0.95,
        average_gas_price: 0.95,
        high_gas_price: 0.95,
      },
      {
        denom: 'usgd',
        low_gas_price: 1,
        average_gas_price: 1,
        high_gas_price: 1,
      },
      {
        denom: 'uthb',
        low_gas_price: 23.1,
        average_gas_price: 23.1,
        high_gas_price: 23.1,
      },
      {
        denom: 'usek',
        low_gas_price: 6.25,
        average_gas_price: 6.25,
        high_gas_price: 6.25,
      },
      {
        denom: 'unok',
        low_gas_price: 6.25,
        average_gas_price: 6.25,
        high_gas_price: 6.25,
      },
      {
        denom: 'udkk',
        low_gas_price: 4.5,
        average_gas_price: 4.5,
        high_gas_price: 4.5,
      },
      {
        denom: 'uidr',
        low_gas_price: 10900,
        average_gas_price: 10900,
        high_gas_price: 10900,
      },
      {
        denom: 'uphp',
        low_gas_price: 38,
        average_gas_price: 38,
        high_gas_price: 38,
      },
      {
        denom: 'uhkd',
        low_gas_price: 5.85,
        average_gas_price: 5.85,
        high_gas_price: 5.85,
      },
      {
        denom: 'umyr',
        low_gas_price: 3,
        average_gas_price: 3,
        high_gas_price: 3,
      },
      {
        denom: 'utwd',
        low_gas_price: 20,
        average_gas_price: 20,
        high_gas_price: 20,
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'uluna',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/classic-terra/core',
    recommended_version: 'v2.1.1',
    compatible_versions: ['v2.1.1'],
    genesis: {
      name: '1.0.5',
      genesis_url: 'https://tfl-columbus-5.s3.amazonaws.com/genesis.json',
    },
    versions: [
      {
        name: '1.0.5',
        tag: 'v1.0.5-full-archive',
        height: 0,
        next_version_name: '1.1.0',
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/classic-core/releases/download/v1.0.5-full-archive/terra_1.0.5_Linux_x86_64.tar.gz?checksum=sha256:af3ee3bd99bd719d6d9a93a40af9f0bc49bb3866c68e923e284876784126f38c',
        },
      },
      {
        name: '1.1.0',
        tag: 'v1.1.0',
        height: 11734000,
        recommended_version: 'v1.1.0',
        compatible_versions: ['v1.1.0'],
        next_version_name: '2.0.1',
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/classic-core/releases/download/v1.1.0/terra_1.1.0_Linux_x86_64.tar.gz?checksum=sha256:fd83c14bcfadea36ad444c219ab557b9d65d2f74be0684498a5c41e3df7cb535',
        },
      },
      {
        name: '2.0.1',
        tag: 'v2.0.1',
        height: 12815210,
        cosmos_sdk_version: '0.45.13',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.16.7',
        ibc_go_version: '1.3.1',
        consensus: {
          type: 'tendermint',
          version: '0.34.24',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/classic-core/releases/download/v2.0.1/terra_2.0.1_Linux_x86_64.tar.gz?checksum=sha256:b9edfd51080c9c9ae16b30afd1b8490d7278e51d521ccc0f2afcbb7e3b389b8d',
        },
      },
      {
        name: '2.1.1',
        tag: 'v2.1.1',
        height: 13215800,
        cosmos_sdk_version: '0.45.14',
        cosmwasm_enabled: true,
        cosmwasm_version: '0.30.0',
        ibc_go_version: '4.3.1',
        consensus: {
          type: 'tendermint',
          version: '0.34.24',
        },
        binaries: {
          'linux/amd64':
            'https://github.com/terra-money/classic-core/releases/download/v2.1.1/terra_2.1.1_Linux_x86_64.tar.gz?checksum=sha256:9bf91be244af95f1afcf7fc1ddb1852aa96651adf94e9668c16c7df5596100d6',
        },
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
  },
  peers: {
    seeds: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'terraclassic-mainnet-seed.autostake.com:26676',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'b1bdf6249fb58b4c8284aff8a9c5b2804d822261',
        address: 'seed.terra.synergynodes.com:26656',
        provider: 'www.synergynodes.com',
      },
      {
        id: '65d86ab6024153286b823a3950e9055478effb04',
        address: 'terra.inotel.ro:26656',
        provider: 'www.inotel.ro',
      },
      {
        id: '8542cd7e6bf9d260fef543bc49e59be5a3fa9074',
        address: 'seed.publicnode.com:26656',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
    ],
    persistent_peers: [
      {
        id: 'ebc272824924ea1a27ea3183dd0b9ba713494f83',
        address: 'terraclassic-mainnet-peer.autostake.com:26676',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        id: 'b1bdf6249fb58b4c8284aff8a9c5b2804d822261',
        address: 'seed.terra.synergynodes.com:26656',
        provider: 'www.synergynodes.com',
      },
      {
        id: '65d86ab6024153286b823a3950e9055478effb04',
        address: 'terra.inotel.ro:26656',
        provider: 'www.inotel.ro',
      },
    ],
  },
  apis: {
    rpc: [
      {
        address: 'https://rpc.terrarebels.net',
        provider: 'Terra Rebels',
      },
      {
        address: 'https://terra-classic-rpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://rpc-terra-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://terraclassic-mainnet-rpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://terraclassic-rpc-server-01.stakely.io',
        provider: 'Stakely',
      },
    ],
    rest: [
      {
        address: 'https://lcd.terrarebels.net',
        provider: 'Terra Rebels',
      },
      {
        address: 'https://terra-classic-lcd.publicnode.com',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'https://api-terra-ia.cosmosia.notional.ventures/',
        provider: 'Notional',
      },
      {
        address: 'https://terraclassic-mainnet-lcd.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
      {
        address: 'https://terraclassic-lcd-server-01.stakely.io',
        provider: 'Stakely',
      },
    ],
    grpc: [
      {
        address: 'grpc.terrarebels.net',
        provider: 'Terra Rebels',
      },
      {
        address: 'terra-classic-grpc.publicnode.com:443',
        provider: 'Allnodes ⚡️ Nodes & Staking',
      },
      {
        address: 'grpc-terra-ia.cosmosia.notional.ventures:443',
        provider: 'Notional',
      },
      {
        address: 'terraclassic-mainnet-grpc.autostake.com:443',
        provider: 'AutoStake 🛡️ Slash Protected',
      },
    ],
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/terra-luna',
      tx_page: 'https://ping.pub/terra-luna/tx/${txHash}',
    },
    {
      kind: 'atomscan',
      url: 'https://atomscan.com/terra',
      tx_page: 'https://atomscan.com/terra/transactions/${txHash}',
      account_page: 'https://atomscan.com/terra/accounts/${accountAddress}',
    },
    {
      kind: 'finder',
      url: 'https://finder.terra.money/classic',
      tx_page: 'https://finder.terra.money/classic/tx/${txHash}',
      account_page:
        'https://finder.terra.money/classic/address/${accountAddress}',
    },
    {
      kind: 'finder',
      url: 'https://finder.terrarebels.net/classic',
      tx_page: 'https://finder.terrarebels.net/classic/tx/${txHash}',
      account_page:
        'https://finder.terrarebels.net/classic/address/${accountAddress}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
    },
  ],
};

export const terraAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'terra',
  assets: [
    {
      description: 'The native staking token of Terra Classic.',
      denom_units: [
        {
          denom: 'uluna',
          exponent: 0,
          aliases: ['microluna'],
        },
        {
          denom: 'mluna',
          exponent: 3,
          aliases: ['milliluna'],
        },
        {
          denom: 'luna',
          exponent: 6,
          aliases: ['lunc'],
        },
      ],
      base: 'uluna',
      name: 'Luna Classic',
      display: 'luna',
      symbol: 'LUNC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
      },
      coingecko_id: 'terra-luna',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luna.svg',
        },
      ],
    },
    {
      description: 'The USD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uusd',
          exponent: 0,
          aliases: ['microusd'],
        },
        {
          denom: 'musd',
          exponent: 3,
          aliases: ['milliusd'],
        },
        {
          denom: 'ust',
          exponent: 6,
          aliases: ['ustc'],
        },
      ],
      base: 'uusd',
      name: 'TerraClassicUSD',
      display: 'ust',
      symbol: 'USTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
      },
      coingecko_id: 'terrausd',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ust.svg',
        },
      ],
    },
    {
      description: 'The KRW stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ukrw',
          exponent: 0,
          aliases: ['microkrw'],
        },
        {
          denom: 'mkrw',
          exponent: 3,
          aliases: ['millikrw'],
        },
        {
          denom: 'krt',
          exponent: 6,
          aliases: ['krtc'],
        },
      ],
      base: 'ukrw',
      name: 'TerraClassicKRW',
      display: 'krt',
      symbol: 'KRTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
      },
      coingecko_id: 'terrakrw',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/krt.svg',
        },
      ],
    },
    {
      description: 'The governance token of the White Whale protocol on Terra.',
      type_asset: 'cw20',
      address: 'terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
      denom_units: [
        {
          denom: 'cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
          exponent: 0,
        },
        {
          denom: 'whale',
          exponent: 6,
        },
      ],
      base: 'cw20:terra1php5m8a6qd68z02t3zpw4jv2pj4vgw4wz0t8mz',
      name: 'Whale Token',
      display: 'whale',
      symbol: 'WHALE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png',
      },
      coingecko_id: 'white-whale',
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whale.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
          exponent: 0,
        },
        {
          denom: 'bluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
      base: 'cw20:terra1kc87mu460fwkqte29rquh4hc20m54fxwtsx7gp',
      name: 'Bonded Luna',
      display: 'bluna',
      symbol: 'bLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bluna.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
          exponent: 0,
        },
        {
          denom: 'beth',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
      base: 'cw20:terra1dzhzukyezv0etz22ud940z7adyv7xgcjkahuun',
      name: 'Bonded ETH',
      display: 'beth',
      symbol: 'bETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/beth.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
          exponent: 0,
        },
        {
          denom: 'aust',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
      base: 'cw20:terra1hzh9vpxhsk8253se0vv5jj6etdvxu3nv8z07zu',
      name: 'Anchor Terra USD',
      display: 'aust',
      symbol: 'aUST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aust.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
          exponent: 0,
        },
        {
          denom: 'anc',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
      base: 'cw20:terra14z56l0fp2lsf86zy3hty2z47ezkhnthtr9yq76',
      name: 'Anchor Token',
      display: 'anc',
      symbol: 'ANC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/anc.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
          exponent: 0,
        },
        {
          denom: 'mir',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
      base: 'cw20:terra15gwkyepfc6xgca5t5zefzwy42uts8l2m4g40k6',
      name: 'Mirror',
      display: 'mir',
      symbol: 'MIR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mir.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
          exponent: 0,
        },
        {
          denom: 'maapl',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
      base: 'cw20:terra1vxtwu4ehgzz77mnfwrntyrmgl64qjs75mpwqaz',
      name: 'Apple Inc.',
      display: 'maapl',
      symbol: 'mAAPL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maapl.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
          exponent: 0,
        },
        {
          denom: 'mabnb',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
      base: 'cw20:terra1g4x2pzmkc9z3mseewxf758rllg08z3797xly0n',
      name: 'Airbnb Inc.',
      display: 'mabnb',
      symbol: 'mABNB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mabnb.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
          exponent: 0,
        },
        {
          denom: 'mamc',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
      base: 'cw20:terra1qelfthdanju7wavc5tq0k5r0rhsyzyyrsn09qy',
      name: 'AMC Entertainment Holdings Inc.',
      display: 'mamc',
      symbol: 'mAMC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamc.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
          exponent: 0,
        },
        {
          denom: 'mamd',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
      base: 'cw20:terra18ej5nsuu867fkx4tuy2aglpvqjrkcrjjslap3z',
      name: 'Advanced Micro Devices, Inc.',
      display: 'mamd',
      symbol: 'mAMD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamd.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
          exponent: 0,
        },
        {
          denom: 'mamzn',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
      base: 'cw20:terra165nd2qmrtszehcfrntlplzern7zl4ahtlhd5t2',
      name: 'Amazon.com, Inc.',
      display: 'mamzn',
      symbol: 'mAMZN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mamzn.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
          exponent: 0,
        },
        {
          denom: 'markk',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
      base: 'cw20:terra1qqfx5jph0rsmkur2zgzyqnfucra45rtjae5vh6',
      name: 'ARK Innovation ETF',
      display: 'markk',
      symbol: 'mARKK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/markk.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
          exponent: 0,
        },
        {
          denom: 'mbaba',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
      base: 'cw20:terra1w7zgkcyt7y4zpct9dw8mw362ywvdlydnum2awa',
      name: 'Alibaba Group Holding Limited',
      display: 'mbaba',
      symbol: 'mBABA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbaba.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
          exponent: 0,
        },
        {
          denom: 'mbtc',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
      base: 'cw20:terra1rhhvx8nzfrx5fufkuft06q5marfkucdqwq5sjw',
      name: 'Bitcoin',
      display: 'mbtc',
      symbol: 'mBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mbtc.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
          exponent: 0,
        },
        {
          denom: 'mcoin',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
      base: 'cw20:terra18wayjpyq28gd970qzgjfmsjj7dmgdk039duhph',
      name: 'Coinbase Global, Inc.',
      display: 'mcoin',
      symbol: 'mCOIN',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mcoin.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
          exponent: 0,
        },
        {
          denom: 'mdis',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
      base: 'cw20:terra149755r3y0rve30e209awkhn5cxgkn5c8ju9pm5',
      name: 'The Walt Disney Company',
      display: 'mdis',
      symbol: 'mDIS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdis.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
          exponent: 0,
        },
        {
          denom: 'mdot',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
      base: 'cw20:terra19ya4jpvjvvtggepvmmj6ftmwly3p7way0tt08r',
      name: 'Polkadot',
      display: 'mdot',
      symbol: 'mDOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mdot.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
          exponent: 0,
        },
        {
          denom: 'meth',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
      base: 'cw20:terra1dk3g53js3034x4v5c3vavhj2738une880yu6kx',
      name: 'Ether',
      display: 'meth',
      symbol: 'mETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/meth.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
          exponent: 0,
        },
        {
          denom: 'mfb',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
      base: 'cw20:terra1mqsjugsugfprn3cvgxsrr8akkvdxv2pzc74us7',
      name: 'Facebook Inc.',
      display: 'mfb',
      symbol: 'mFB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mfb.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
          exponent: 0,
        },
        {
          denom: 'mglxy',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
      base: 'cw20:terra1l5lrxtwd98ylfy09fn866au6dp76gu8ywnudls',
      name: 'Galaxy Digital Holdings Ltd',
      display: 'mglxy',
      symbol: 'mGLXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mglxy.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
          exponent: 0,
        },
        {
          denom: 'mgme',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
      base: 'cw20:terra1m6j6j9gw728n82k78s0j9kq8l5p6ne0xcc820p',
      name: 'GameStop Corp',
      display: 'mgme',
      symbol: 'mGME',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgme.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
          exponent: 0,
        },
        {
          denom: 'mgoogl',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
      base: 'cw20:terra1h8arz2k547uvmpxctuwush3jzc8fun4s96qgwt',
      name: 'Alphabet Inc.',
      display: 'mgoogl',
      symbol: 'mGOOGL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgoogl.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
          exponent: 0,
        },
        {
          denom: 'mgs',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
      base: 'cw20:terra137drsu8gce5thf6jr5mxlfghw36rpljt3zj73v',
      name: 'Goldman Sachs Group Inc.',
      display: 'mgs',
      symbol: 'mGS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mgs.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
          exponent: 0,
        },
        {
          denom: 'mhood',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
      base: 'cw20:terra18yqdfzfhnguerz9du5mnvxsh5kxlknqhcxzjfr',
      name: 'Robinhood Markets, Inc.',
      display: 'mhood',
      symbol: 'mHOOD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mhood.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
          exponent: 0,
        },
        {
          denom: 'miau',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
      base: 'cw20:terra10h7ry7apm55h4ez502dqdv9gr53juu85nkd4aq',
      name: 'iShares Gold Trust',
      display: 'miau',
      symbol: 'mIAU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
          exponent: 0,
        },
        {
          denom: 'miau',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
      base: 'cw20:terra15hp9pr8y4qsvqvxf3m4xeptlk7l8h60634gqec',
      name: 'iShares Gold Trust',
      display: 'miau',
      symbol: 'mIAU',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miau.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
          exponent: 0,
        },
        {
          denom: 'mjnj',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
      base: 'cw20:terra1ptdxmj3xmmljzx02nr4auwfuelmj0cnkh8egs2',
      name: 'Johnson & Johnson',
      display: 'mjnj',
      symbol: 'mJNJ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mjnj.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
          exponent: 0,
        },
        {
          denom: 'mko',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
      base: 'cw20:terra1qsnj5gvq8rgs7yws8x5u02gwd5wvtu4tks0hjm',
      name: 'Coca-Cola',
      display: 'mko',
      symbol: 'mKO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mko.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
          exponent: 0,
        },
        {
          denom: 'mmsft',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
      base: 'cw20:terra1227ppwxxj3jxz8cfgq00jgnxqcny7ryenvkwj6',
      name: 'Microsoft Corporation',
      display: 'mmsft',
      symbol: 'mMSFT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mmsft.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
          exponent: 0,
        },
        {
          denom: 'mnflx',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
      base: 'cw20:terra1jsxngqasf2zynj5kyh0tgq9mj3zksa5gk35j4k',
      name: 'Netflix, Inc.',
      display: 'mnflx',
      symbol: 'mNFLX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnflx.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
          exponent: 0,
        },
        {
          denom: 'mnio',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
      base: 'cw20:terra1dj2cj02zak0nvwy3uj9r9dhhxhdwxnw6psse6p',
      name: 'NIO Inc.',
      display: 'mnio',
      symbol: 'mNIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnio.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
          exponent: 0,
        },
        {
          denom: 'mnke',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
      base: 'cw20:terra17ana8hvzea0q7w367dm0dw48sxwql39qekpt7g',
      name: 'NIKE, Inc.',
      display: 'mnke',
      symbol: 'mNKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnke.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
          exponent: 0,
        },
        {
          denom: 'mnvda',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
      base: 'cw20:terra1drsjzvzej4h4qlehcfwclxg4w5l3h5tuvd3jd8',
      name: 'NVIDIA Corporation',
      display: 'mnvda',
      symbol: 'mNVDA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnvda.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
          exponent: 0,
        },
        {
          denom: 'mpypl',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
      base: 'cw20:terra1rh2907984nudl7vh56qjdtvv7947z4dujj92sx',
      name: 'PayPal Holdings Inc',
      display: 'mpypl',
      symbol: 'mPYPL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mpypl.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
          exponent: 0,
        },
        {
          denom: 'mqqq',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
      base: 'cw20:terra1csk6tc7pdmpr782w527hwhez6gfv632tyf72cp',
      name: 'Invesco QQQ Trust',
      display: 'mqqq',
      symbol: 'mQQQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mqqq.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
          exponent: 0,
        },
        {
          denom: 'msbux',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
      base: 'cw20:terra1246zy658dfgtausf0c4a6ly8sc2e285q4kxqga',
      name: 'Starbucks Corporation',
      display: 'msbux',
      symbol: 'mSBUX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msbux.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
          exponent: 0,
        },
        {
          denom: 'mslv',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
      base: 'cw20:terra1kscs6uhrqwy6rx5kuw5lwpuqvm3t6j2d6uf2lp',
      name: 'iShares Silver Trust',
      display: 'mslv',
      symbol: 'mSLV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mslv.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
          exponent: 0,
        },
        {
          denom: 'mspy',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
      base: 'cw20:terra1aa00lpfexyycedfg5k2p60l9djcmw0ue5l8fhc',
      name: 'SPDR S&P 500',
      display: 'mspy',
      symbol: 'mSPY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mspy.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
          exponent: 0,
        },
        {
          denom: 'msq',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
      base: 'cw20:terra1u43zu5amjlsgty5j64445fr9yglhm53m576ugh',
      name: 'Square, Inc.',
      display: 'msq',
      symbol: 'mSQ',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msq.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
          exponent: 0,
        },
        {
          denom: 'mtsla',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
      base: 'cw20:terra14y5affaarufk3uscy2vr6pe6w6zqf2wpjzn5sh',
      name: 'Tesla, Inc.',
      display: 'mtsla',
      symbol: 'mTSLA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtsla.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
          exponent: 0,
        },
        {
          denom: 'mtwtr',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
      base: 'cw20:terra1cc3enj9qgchlrj34cnzhwuclc4vl2z3jl7tkqg',
      name: 'Twitter, Inc.',
      display: 'mtwtr',
      symbol: 'mTWTR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mtwtr.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
          exponent: 0,
        },
        {
          denom: 'muso',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
      base: 'cw20:terra1lvmx8fsagy70tv0fhmfzdw9h6s3sy4prz38ugf',
      name: 'United States Oil Fund, LP',
      display: 'muso',
      symbol: 'mUSO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/muso.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
          exponent: 0,
        },
        {
          denom: 'mvixy',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
      base: 'cw20:terra19cmt6vzvhnnnfsmccaaxzy2uaj06zjktu6yzjx',
      name: 'ProShares VIX Short-Term Futures ETF',
      display: 'mvixy',
      symbol: 'mVIXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
          exponent: 0,
        },
        {
          denom: 'mvixy',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
      base: 'cw20:terra1zp3a6q6q4953cz376906g5qfmxnlg77hx3te45',
      name: 'ProShares VIX Short-Term Futures ETF',
      display: 'mvixy',
      symbol: 'mVIXY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mvixy.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
          exponent: 0,
        },
        {
          denom: 'lota',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
      base: 'cw20:terra1ez46kxtulsdv07538fh5ra5xj8l68mu8eg24vr',
      name: 'loterra',
      display: 'lota',
      symbol: 'LOTA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lota.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
          exponent: 0,
        },
        {
          denom: 'dph',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
      base: 'cw20:terra17jnhankdfl8vyzj6vejt7ag8uz0cjc9crkl2h7',
      name: 'Digipharm',
      display: 'dph',
      symbol: 'DPH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dph.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
          exponent: 0,
        },
        {
          denom: 'mine',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
      base: 'cw20:terra1kcthelkax4j9x8d3ny6sdag0qmxxynl3qtcrpy',
      name: 'Pylon MINE Token',
      display: 'mine',
      symbol: 'MINE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mine.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
          exponent: 0,
        },
        {
          denom: 'bpsidp-24m',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
      base: 'cw20:terra1zsaswh926ey8qa5x4vj93kzzlfnef0pstuca0y',
      name: 'Pylon bDP Token for Gateway Psi 24m Pool',
      display: 'bpsidp-24m',
      symbol: 'bPsiDP-24m',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bpsidp-24m.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
          exponent: 0,
        },
        {
          denom: 'spec',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
      base: 'cw20:terra1s5eczhe0h0jutf46re52x5z4r03c8hupacxmdr',
      name: 'Spectrum Token',
      display: 'spec',
      symbol: 'SPEC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/spec.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
          exponent: 0,
        },
        {
          denom: 'loop',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
      base: 'cw20:terra1nef5jf6c7js9x6gkntlehgywvjlpytm7pcgkn4',
      name: 'LOOP token',
      display: 'loop',
      symbol: 'LOOP',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loop.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
          exponent: 0,
        },
        {
          denom: 'loopr',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
      base: 'cw20:terra1jx4lmmke2srcvpjeereetc9hgegp4g5j0p9r2q',
      name: 'LOOPR token',
      display: 'loopr',
      symbol: 'LOOPR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/loopr.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
          exponent: 0,
        },
        {
          denom: 'stt',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
      base: 'cw20:terra13xujxcrc9dqft4p9a8ls0w3j0xnzm6y2uvve8n',
      name: 'StarTerra Token',
      display: 'stt',
      symbol: 'STT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stt.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
          exponent: 0,
        },
        {
          denom: 'twd',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
      base: 'cw20:terra19djkaepjjswucys4npd5ltaxgsntl7jf0xz7w6',
      name: 'TWD Token',
      display: 'twd',
      symbol: 'TWD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twd.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
          exponent: 0,
        },
        {
          denom: 'xtra',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
      base: 'cw20:terra1kvjscdgwuvwc6uzm4rqfjl6nlmuhj28tequlnc',
      name: 'xterra Token',
      display: 'xtra',
      symbol: 'XTRA',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xtra.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
          exponent: 0,
        },
        {
          denom: 'miaw',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
      base: 'cw20:terra1vtr50tw0pgqpes34zqu60n554p9x4950wk8f63',
      name: 'MIAW Token',
      display: 'miaw',
      symbol: 'MIAW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/miaw.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608',
          exponent: 0,
        },
        {
          denom: 'psi',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra12897djskt9rge8dtmm86w654g7kzckkd698608',
      base: 'cw20:terra12897djskt9rge8dtmm86w654g7kzckkd698608',
      name: 'Nexus Governance Token',
      display: 'psi',
      symbol: 'Psi',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/psi.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
          exponent: 0,
        },
        {
          denom: 'nluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
      base: 'cw20:terra10f2mt82kjnkxqj2gepgwl637u2w4ue2z5nhz5j',
      name: 'Nexus nLuna Token',
      display: 'nluna',
      symbol: 'nLuna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nluna.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
          exponent: 0,
        },
        {
          denom: 'neth',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
      base: 'cw20:terra178v546c407pdnx5rer3hu8s2c0fc924k74ymnn',
      name: 'Nexus nETH Token',
      display: 'neth',
      symbol: 'nETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neth.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
          exponent: 0,
        },
        {
          denom: 'cnluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
      base: 'cw20:terra1u553zk43jd4rwzc53qrdrq4jc2p8rextyq09dj',
      name: 'nLuna autocompounder share representation',
      display: 'cnluna',
      symbol: 'cnLuna',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnluna.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
          exponent: 0,
        },
        {
          denom: 'cneth',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
      base: 'cw20:terra1nagqpmyw55yjphea4rhntlfv87ugmeaj8ym756',
      name: 'nETH autocompounder share representation',
      display: 'cneth',
      symbol: 'cnETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cneth.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
          exponent: 0,
        },
        {
          denom: 'navax',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
      base: 'cw20:terra13k62n0285wj8ug0ngcgpf7dgnkzqeu279tz636',
      name: 'Nexus nAVAX Token',
      display: 'navax',
      symbol: 'nAVAX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/navax.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
          exponent: 0,
        },
        {
          denom: 'natom',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
      base: 'cw20:terra1jtdc6zpf95tvh9peuaxwp3v0yqszcnwl8j5ade',
      name: 'Nexus nATOM Token',
      display: 'natom',
      symbol: 'nATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/natom.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
          exponent: 0,
        },
        {
          denom: 'vkr',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
      base: 'cw20:terra1dy9kmlm4anr92e42mrkjwzyvfqwz66un00rwr5',
      name: 'VKR Token',
      display: 'vkr',
      symbol: 'VKR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vkr.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
          exponent: 0,
        },
        {
          denom: 'orion',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
      base: 'cw20:terra1mddcdx0ujx89f38gu7zspk2r2ffdl5enyz2u03',
      name: 'Orion Money (Portal)',
      display: 'orion',
      symbol: 'ORION',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orion.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
          exponent: 0,
        },
        {
          denom: 'tland',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
      base: 'cw20:terra1r5506ckw5tfr3z52jwlek8vg9sn3yflrqrzfsc',
      name: 'TerraLand Token',
      display: 'tland',
      symbol: 'TLAND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tland.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
          exponent: 0,
        },
        {
          denom: 'vust',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
      base: 'cw20:terra1w0p5zre38ecdy3ez8efd5h9fvgum5s206xknrg',
      name: 'Vault UST',
      display: 'vust',
      symbol: 'vUST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vust.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
          exponent: 0,
        },
        {
          denom: 'eth',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
      base: 'cw20:terra14tl83xcwqjy0ken9peu4pjjuu755lrry2uy25r',
      name: 'Ether (Portal)',
      display: 'eth',
      symbol: 'ETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eth.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
          exponent: 0,
        },
        {
          denom: 'wbtc',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
      base: 'cw20:terra1aa7upykmmqqc63l924l5qfap8mrmx5rfdm0v55',
      name: 'Wrapped BTC (Portal)',
      display: 'wbtc',
      symbol: 'WBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wbtc.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
          exponent: 0,
        },
        {
          denom: 'sol',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
      base: 'cw20:terra190tqwgqx7s8qrknz6kckct7v607cu068gfujpk',
      name: 'SOL (Portal)',
      display: 'sol',
      symbol: 'SOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sol.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
          exponent: 0,
        },
        {
          denom: 'maticet',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
      base: 'cw20:terra1dfasranqm4uyaz72r960umxy0w8t6zewqlnkuq',
      name: 'MATIC (Portal from Ethereum)',
      display: 'maticet',
      symbol: 'MATICet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticet.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
          exponent: 0,
        },
        {
          denom: 'bnb',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
      base: 'cw20:terra1cetg5wruw2wsdjp7j46rj44xdel00z006e9yg8',
      name: 'Binance Coin (Portal)',
      display: 'bnb',
      symbol: 'BNB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bnb.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
          exponent: 0,
        },
        {
          denom: 'cake',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
      base: 'cw20:terra1xvqlpjl2dxyel9qrp6qvtrg04xe3jh9cyxc6av',
      name: 'PancakeSwap Token (Portal)',
      display: 'cake',
      symbol: 'CAKE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cake.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
          exponent: 0,
        },
        {
          denom: 'link',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
      base: 'cw20:terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym',
      name: 'Chainlink (Portal)',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
          exponent: 0,
        },
        {
          denom: 'sushi',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
      base: 'cw20:terra1csvuzlf92nyemu6tv25h0l79etpe8hz3h5vn4a',
      name: 'SushiToken (Portal)',
      display: 'sushi',
      symbol: 'SUSHI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sushi.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
          exponent: 0,
        },
        {
          denom: 'uni',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
      base: 'cw20:terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf',
      name: 'Uniswap (Portal)',
      display: 'uni',
      symbol: 'UNI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/uni.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
          exponent: 0,
        },
        {
          denom: 'usdtet',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
      base: 'cw20:terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva',
      name: 'Tether USD (Portal from Ethereum)',
      display: 'usdtet',
      symbol: 'USDTet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtet.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
          exponent: 0,
        },
        {
          denom: 'usdcet',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
      base: 'cw20:terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06',
      name: 'USD Coin (Portal from Ethereum)',
      display: 'usdcet',
      symbol: 'USDCet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcet.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
          exponent: 0,
        },
        {
          denom: 'kuji',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
      base: 'cw20:terra1xfsdgcemqwxp4hhnyk4rle6wr22sseq7j07dnn',
      name: 'Kujira Token',
      display: 'kuji',
      symbol: 'KUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kuji.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
          exponent: 0,
        },
        {
          denom: 'skuji',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
      base: 'cw20:terra188w26t95tf4dz77raftme8p75rggatxjxfeknw',
      name: 'Staked KUJI',
      display: 'skuji',
      symbol: 'sKUJI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/skuji.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
          exponent: 0,
        },
        {
          denom: 'wsteth',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
      base: 'cw20:terra133chr09wu8sakfte5v7vd8qzq9vghtkv4tn0ur',
      name: 'Lido wstETH (Portal)',
      display: 'wsteth',
      symbol: 'wstETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsteth.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
          exponent: 0,
        },
        {
          denom: 'wstsol',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
      base: 'cw20:terra1t9ul45l7m6jw6sxgvnp8e5hj8xzkjsg82g84ap',
      name: 'Lido wstSOL (Portal)',
      display: 'wstsol',
      symbol: 'wstSOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wstsol.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
          exponent: 0,
        },
        {
          denom: 'wsbsol',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
      base: 'cw20:terra1c3xd5s2j3ejx2d94tvcjfkrdeu6rmz48ghzznj',
      name: 'Lido bonded SOL (Portal)',
      display: 'wsbsol',
      symbol: 'wsbSOL',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wsbsol.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
          exponent: 0,
        },
        {
          denom: 'ldo',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
      base: 'cw20:terra1jxypgnfa07j6w92wazzyskhreq2ey2a5crgt6z',
      name: 'Lido DAO (Portal)',
      display: 'ldo',
      symbol: 'LDO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ldo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
          exponent: 0,
        },
        {
          denom: 'webeth',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
      base: 'cw20:terra1u5szg038ur9kzuular3cae8hq6q5rk5u27tuvz',
      name: 'Lido Bonded ETH (Wormhole)',
      display: 'webeth',
      symbol: 'webETH',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webeth.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
          exponent: 0,
        },
        {
          denom: 'stluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
      base: 'cw20:terra1yg3j2s986nyp5z7r2lvt0hx3r0lnd7kwvwwtsc',
      name: 'Lido staked Luna',
      display: 'stluna',
      symbol: 'stLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stluna.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
          exponent: 0,
        },
        {
          denom: 'xdefi',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
      base: 'cw20:terra169edevav3pdrtjcx35j6pvzuv54aevewar4nlh',
      name: 'XDEFI (Portal)',
      display: 'xdefi',
      symbol: 'XDEFI',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
          exponent: 0,
        },
        {
          denom: 'btl',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
      base: 'cw20:terra193c42lfwmlkasvcw22l9qqzc5q2dx208tkd7wl',
      name: 'Bitlocus Token',
      display: 'btl',
      symbol: 'BTL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/btl.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
          exponent: 0,
        },
        {
          denom: 'lunax',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
      base: 'cw20:terra17y9qkl8dfkeg4py7n0g5407emqnemc3yqk5rup',
      name: 'LunaX Token',
      display: 'lunax',
      symbol: 'LunaX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lunax.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
          exponent: 0,
        },
        {
          denom: 'luni',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
      base: 'cw20:terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7',
      name: 'LUNI',
      display: 'luni',
      symbol: 'LUNI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luni.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
          exponent: 0,
        },
        {
          denom: 'ply',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
      base: 'cw20:terra13awdgcx40tz5uygkgm79dytez3x87rpg4uhnvu',
      name: 'PlayNity Token',
      display: 'ply',
      symbol: 'PLY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ply.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
          exponent: 0,
        },
        {
          denom: 'tfloki',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
      base: 'cw20:terra1u2k0nkenw0p25ljsr4ksh7rxm65y466vkdewwj',
      name: 'TFLOKI',
      display: 'tfloki',
      symbol: 'TFLOKI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfloki.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
          exponent: 0,
        },
        {
          denom: 'tftic',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
      base: 'cw20:terra1a8k3jyv3wf6k3zngza5h6srrxcckdf7zv90p6u',
      name: 'TFLOKI Genesis Ticket',
      display: 'tftic',
      symbol: 'TFTIC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tftic.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
          exponent: 0,
        },
        {
          denom: 'tfticii',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
      base: 'cw20:terra1xt9fgu7965kgvunnjts9zkprd8986kcc444q86',
      name: 'TFLOKI New World Ticket',
      display: 'tfticii',
      symbol: 'TFTICII',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticii.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
          exponent: 0,
        },
        {
          denom: 'tfticiii',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
      base: 'cw20:terra1vte2xv7dr8sfnrnwdf9arcyprqgr0hty5ads28',
      name: 'TFLOKI Aviator Ticket',
      display: 'tfticiii',
      symbol: 'TFTICIII',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tfticiii.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
          exponent: 0,
        },
        {
          denom: 'moon',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
      base: 'cw20:terra1hmxxq0y8h79f3228vs0czc4uz5jdgjt0appp26',
      name: 'Moon Token',
      display: 'moon',
      symbol: 'MOON',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/moon.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
          exponent: 0,
        },
        {
          denom: 'astro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
      base: 'cw20:terra1xj49zyqrwpv5k928jwfpfy2ha668nwdgkwlrg3',
      name: 'Astroport Token',
      display: 'astro',
      symbol: 'ASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/astro.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
          exponent: 0,
        },
        {
          denom: 'xastro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
      base: 'cw20:terra14lpnyzc9z4g3ugr4lhm8s4nle0tq8vcltkhzh7',
      name: 'Staked Astroport Token',
      display: 'xastro',
      symbol: 'xASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xastro.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
          exponent: 0,
        },
        {
          denom: 'halo',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
      base: 'cw20:terra1w8kvd6cqpsthupsk4l0clwnmek4l3zr7c84kwq',
      name: 'Angel Protocol Token',
      display: 'halo',
      symbol: 'HALO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/halo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
          exponent: 0,
        },
        {
          denom: 'pug',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
      base: 'cw20:terra1kdfsdm3c4reun9j3m4mk3nmyw4a4ns7mj24q3j',
      name: 'AstroPug Token',
      display: 'pug',
      symbol: 'PUG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pug.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
          exponent: 0,
        },
        {
          denom: 'orne',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
      base: 'cw20:terra1hnezwjqlhzawcrfysczcxs6xqxu2jawn729kkf',
      name: 'Orne Token',
      display: 'orne',
      symbol: 'ORNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orne.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
          exponent: 0,
        },
        {
          denom: 'tns',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
      base: 'cw20:terra14vz4v8adanzph278xyeggll4tfww7teh0xtw2y',
      name: 'Terra Name Service',
      display: 'tns',
      symbol: 'TNS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tns.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
          exponent: 0,
        },
        {
          denom: 'xrune',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
      base: 'cw20:terra1td743l5k5cmfy7tqq202g7vkmdvq35q48u2jfm',
      name: 'Thorstarter',
      display: 'xrune',
      symbol: 'XRUNE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xrune.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
          exponent: 0,
        },
        {
          denom: 'alot',
          exponent: 0,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
      base: 'cw20:terra1366wmr8t8rrkh6mag8fagqxntmf2qe4kyte784',
      name: 'Alpha Pack Token',
      display: 'alot',
      symbol: 'aLOT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/alot.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
          exponent: 0,
        },
        {
          denom: 'sity',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
      base: 'cw20:terra1z09gnzufuflz6ckd9k0u456l9dnpgsynu0yyhe',
      name: 'CurioSITY play to earn token',
      display: 'sity',
      symbol: 'SITY',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sity.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
          exponent: 0,
        },
        {
          denom: 'glow',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
      base: 'cw20:terra13zx49nk8wjavedjzu8xkk95r3t0ta43c9ptul7',
      name: 'Glow Token',
      display: 'glow',
      symbol: 'GLOW',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/glow.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
          exponent: 0,
        },
        {
          denom: 'apollo',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
      base: 'cw20:terra100yeqvww74h4yaejj6h733thgcafdaukjtw397',
      name: 'Apollo DAO Token',
      display: 'apollo',
      symbol: 'APOLLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/apollo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
          exponent: 0,
        },
        {
          denom: 'abr',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
      base: 'cw20:terra1a7ye2splpfzyenu0yrdu8t83uzgusx2malkc7u',
      name: 'Allbridge',
      display: 'abr',
      symbol: 'ABR',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/abr.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
          exponent: 0,
        },
        {
          denom: 'whgtps',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
      base: 'cw20:terra1y3d5qexmyac0fg53pfglh2pjk0664ymfvcq9mc',
      name: 'Global Transaction Payment Solu',
      display: 'whgtps',
      symbol: 'whGTPS',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
          exponent: 0,
        },
        {
          denom: 'prism',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
      base: 'cw20:terra1dh9478k2qvqhqeajhn75a2a7dsnf74y5ukregw',
      name: 'Prism Protocol Token',
      display: 'prism',
      symbol: 'PRISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/prism.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
          exponent: 0,
        },
        {
          denom: 'sdollar',
          exponent: 2,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
      base: 'cw20:terra1l0y8yg0s86x299nqw0p6fhh7ngex3r4phtjeuq',
      name: 'Space Dollar',
      display: 'sdollar',
      symbol: 'SDOLLAR',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
          exponent: 0,
        },
        {
          denom: 'whsail',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
      base: 'cw20:terra1ku5e0dhutxhuxudsmsn5647wwcz6ndr3rsh90k',
      name: 'SAIL',
      display: 'whsail',
      symbol: 'whSAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whsail.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
          exponent: 0,
        },
        {
          denom: 'whgsail',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
      base: 'cw20:terra1rl0cpwgtwl4utnaynugevdje37fnmsea7rv4uu',
      name: 'SolanaSail Governance Token V2',
      display: 'whgsail',
      symbol: 'whgSAIL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whgsail.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
          exponent: 0,
        },
        {
          denom: 'xprism',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
      base: 'cw20:terra1042wzrwg2uk6jqxjm34ysqquyr9esdgm5qyswz',
      name: 'Prism Governance Token',
      display: 'xprism',
      symbol: 'xPRISM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xprism.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
          exponent: 0,
        },
        {
          denom: 'cde',
          exponent: 9,
        },
      ],
      type_asset: 'cw20',
      address: 'terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
      base: 'cw20:terra13fs83g5atgjwuh7c5ydzh6n7gecel6xyhhy2t5',
      name: 'CAPITRADE TOKEN',
      display: 'cde',
      symbol: 'CDE',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
          exponent: 0,
        },
        {
          denom: 'ctx',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
      base: 'cw20:terra1rl20t79ffsrqfa29rke48tj05gj9jxumm92vg8',
      name: 'C2X Token',
      display: 'ctx',
      symbol: 'CTX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ctx.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
          exponent: 0,
        },
        {
          denom: 'cluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
      base: 'cw20:terra13zaagrrrxj47qjwczsczujlvnnntde7fdt0mau',
      name: 'Prism cLuna Token',
      display: 'cluna',
      symbol: 'cLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cluna.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
          exponent: 0,
        },
        {
          denom: 'pluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
      base: 'cw20:terra1tlgelulz9pdkhls6uglfn5lmxarx7f2gxtdzh2',
      name: 'Prism pLuna Token',
      display: 'pluna',
      symbol: 'pLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pluna.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
          exponent: 0,
        },
        {
          denom: 'yluna',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
      base: 'cw20:terra17wkadg0tah554r35x6wvff0y5s7ve8npcjfuhz',
      name: 'Prism yLuna Token',
      display: 'yluna',
      symbol: 'yLuna',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/yluna.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
          exponent: 0,
        },
        {
          denom: 'atlo',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
      base: 'cw20:terra1cl7whtrqmz5ldr553q69qahck8xvk80fm33qjx',
      name: 'Atlo Token',
      display: 'atlo',
      symbol: 'ATLO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
          exponent: 0,
        },
        {
          denom: 'local',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
      base: 'cw20:terra1vchw83qt25j89zqwdpmdzj722sqxthnckqzxxp',
      name: 'LOCAL Token',
      display: 'local',
      symbol: 'LOCAL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/local.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
          exponent: 0,
        },
        {
          denom: 'luv',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
      base: 'cw20:terra15k5r9r8dl8r7xlr29pry8a9w7sghehcnv5mgp6',
      name: 'Lunaverse',
      display: 'luv',
      symbol: 'LUV',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luv.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
          exponent: 0,
        },
        {
          denom: 'robo',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
      base: 'cw20:terra1f62tqesptvmhtzr8sudru00gsdtdz24srgm7wp',
      name: 'RoboHero',
      display: 'robo',
      symbol: 'ROBO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/robo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
          exponent: 0,
        },
        {
          denom: 'luart',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
      base: 'cw20:terra1vwz7t30q76s7xx6qgtxdqnu6vpr3ak3vw62ygk',
      name: 'Luart Token',
      display: 'luart',
      symbol: 'LUART',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/luart.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
          exponent: 0,
        },
        {
          denom: 'mars',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
      base: 'cw20:terra12hgwnpupflfpuual532wgrxu2gjp0tcagzgx4n',
      name: 'Mars Token',
      display: 'mars',
      symbol: 'MARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mars.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
          exponent: 0,
        },
        {
          denom: 'xmars',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
      base: 'cw20:terra1a04v570f9cxp49mk06vjsm8axsswndpwwt67k4',
      name: 'xMars Token',
      display: 'xmars',
      symbol: 'XMARS',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xmars.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
          exponent: 0,
        },
        {
          denom: 'dfiat',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
      base: 'cw20:terra1vpws4hmpmpsqwnz3gljn8zj42rv7rkpc5atgt4',
      name: 'DeFiato',
      display: 'dfiat',
      symbol: 'DFIAT',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
          exponent: 0,
        },
        {
          denom: 'ceres',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
      base: 'cw20:terra1hppnw4jppmrzzga4yvd8s87y3dwkhe27xwwl5d',
      name: 'Ceres Governance Token',
      display: 'ceres',
      symbol: 'CERES',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ceres.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
          exponent: 0,
        },
        {
          denom: 'wasavax',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
      base: 'cw20:terra1z3e2e4jpk4n0xzzwlkgcfvc95pc5ldq0xcny58',
      name: 'BENQI Staked AVAX (Portal)',
      display: 'wasavax',
      symbol: 'wasAVAX',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wasavax.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
          exponent: 0,
        },
        {
          denom: 'mint',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
      base: 'cw20:terra1zd6let0zg0xjn2sestagxv4ax24a4ml6j40qdr',
      name: 'MintDAO',
      display: 'mint',
      symbol: 'MINT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mint.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
          exponent: 0,
        },
        {
          denom: 'sd',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
      base: 'cw20:terra1ustvnmngueq0p4jd7gfnutgvdc6ujpsjhsjd02',
      name: 'Stader SD (Portal)',
      display: 'sd',
      symbol: 'SD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sd.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
          exponent: 0,
        },
        {
          denom: 'xsd',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
      base: 'cw20:terra1ln2z938phz0nc2wepxpzfkwp6ezn9yrz9zv9ep',
      name: 'Stader xSD',
      display: 'xsd',
      symbol: 'xSD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/xsd.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
          exponent: 0,
        },
        {
          denom: 'paxg',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
      base: 'cw20:terra1uux6gwd6pzr0gfzrru5kne55cxex9d0700c72r',
      name: 'Paxos Gold (Portal)',
      display: 'paxg',
      symbol: 'PAXG',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/paxg.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
          exponent: 0,
        },
        {
          denom: 'whdao',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
      base: 'cw20:terra1efjugpjc50d8sha7lr8s48cr7wmsthz94eevcl',
      name: 'DAO Maker',
      display: 'whdao',
      symbol: 'whDAO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/whdao.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
          exponent: 0,
        },
        {
          denom: 'link',
          exponent: 18,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
      base: 'cw20:terra1su6g4t4vwx7y0uh3ksancyaurj4l6w9pfs40qt',
      name: 'ChainLink Token',
      display: 'link',
      symbol: 'LINK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/link.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
          exponent: 0,
        },
        {
          denom: 'sayve',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
      base: 'cw20:terra14v9wrjs55qsn9lkvylsqela3w2ytwxzkycqzcr',
      name: 'Sayve Token',
      display: 'sayve',
      symbol: 'SAYVE',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sayve.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
          exponent: 0,
        },
        {
          denom: 'guides',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
      base: 'cw20:terra1z55rhw0ut70jxdmpvge98mvj0rkwcz74q77z0u',
      name: 'Guides Token',
      display: 'guides',
      symbol: 'GUIDES',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
          exponent: 0,
        },
        {
          denom: 'bro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
      base: 'cw20:terra1mt2ytlrxhvd5c4d4fshxxs3zcus3fkdmuv4mk2',
      name: 'BRO token',
      display: 'bro',
      symbol: 'BRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bro.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
          exponent: 0,
        },
        {
          denom: 'bbro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
      base: 'cw20:terra1qryq5wreecx2wd3cdtzz94syr4z0a92l60asds',
      name: 'bBRO token',
      display: 'bbro',
      symbol: 'bBRO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bbro.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
          exponent: 0,
        },
        {
          denom: 'gtps',
          exponent: 18,
        },
      ],
      type_asset: 'cw20',
      address: 'terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
      base: 'cw20:terra15zvyhmv6gwddht7kt4q6w5nasn4tcpgzcdfmgr',
      name: 'Global Transaction Payment Solut',
      display: 'gtps',
      symbol: 'GTPS',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
          exponent: 0,
        },
        {
          denom: 'gfi',
          exponent: 18,
        },
      ],
      type_asset: 'cw20',
      address: 'terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
      base: 'cw20:terra15pkdjxv2ewjzn9x665y26pfz2h6ymak4d4e8se',
      name: 'Gtps.Finance',
      display: 'gfi',
      symbol: 'GFI',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
          exponent: 0,
        },
        {
          denom: 'ulc',
          exponent: 18,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
      base: 'cw20:terra1fyjsxx73jrufw8ufgtuswa773dvdkny92k70wa',
      name: 'Ultimatalioniscoin',
      display: 'ulc',
      symbol: 'ULC',
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
          exponent: 0,
        },
        {
          denom: 'sst',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
      base: 'cw20:terra1689ys6p6gfu0q6xrjqkzfn80sdyhurjqn0jfdl',
      name: 'Sooah Studio Token',
      display: 'sst',
      symbol: 'SST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sst.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
          exponent: 0,
        },
        {
          denom: 'atlas',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
      base: 'cw20:terra1rg8f993m9834afwazersesgx7jjxv4p87q9wvc',
      name: 'Star Atlas (Portal)',
      display: 'atlas',
      symbol: 'ATLAS',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/atlas.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
          exponent: 0,
        },
        {
          denom: 'audio',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
      base: 'cw20:terra1nc6flp57m5hsr6y5y8aexzszy43ksr0drdr8rp',
      name: 'Audius (Portal)',
      display: 'audio',
      symbol: 'AUDIO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/audio.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
          exponent: 0,
        },
        {
          denom: 'avax',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
      base: 'cw20:terra1hj8de24c3yqvcsv9r8chr03fzwsak3hgd8gv3m',
      name: 'AVAX (Portal)',
      display: 'avax',
      symbol: 'AVAX',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/avax.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
          exponent: 0,
        },
        {
          denom: 'bat',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
      base: 'cw20:terra1apxgj5agkkfdm2tprwvykug0qtahxvfmugnhx2',
      name: 'Basic Attention Token (Portal)',
      display: 'bat',
      symbol: 'BAT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/bat.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
          exponent: 0,
        },
        {
          denom: 'busdbs',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
      base: 'cw20:terra1skjr69exm6v8zellgjpaa2emhwutrk5a6dz7dd',
      name: 'Binance USD (Portal from BSC)',
      display: 'busdbs',
      symbol: 'BUSDbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/busdbs.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
          exponent: 0,
        },
        {
          denom: 'dai',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
      base: 'cw20:terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95',
      name: 'DAI (Portal)',
      display: 'dai',
      symbol: 'DAI',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dai.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
          exponent: 0,
        },
        {
          denom: 'maticpo',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
      base: 'cw20:terra1dtqlfecglk47yplfrtwjzyagkgcqqngd5lgjp8',
      name: 'MATIC (Portal from Polygon)',
      display: 'maticpo',
      symbol: 'MATICpo',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/maticpo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
          exponent: 0,
        },
        {
          denom: 'mimet',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
      base: 'cw20:terra15a9dr3a2a2lj5fclrw35xxg9yuxg0d908wpf2y',
      name: 'Magic Internet Money (Portal from Ethereum)',
      display: 'mimet',
      symbol: 'MIMet',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mimet.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
          exponent: 0,
        },
        {
          denom: 'ray',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
      base: 'cw20:terra1ht5sepn28z999jx33sdduuxm9acthad507jg9q',
      name: 'Raydium (Portal)',
      display: 'ray',
      symbol: 'RAY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/ray.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
          exponent: 0,
        },
        {
          denom: 'sbr',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
      base: 'cw20:terra17h82zsq6q8x5tsgm5ugcx4gytw3axguvzt4pkc',
      name: 'Saber (Portal)',
      display: 'sbr',
      symbol: 'SBR',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sbr.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
          exponent: 0,
        },
        {
          denom: 'shib',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
      base: 'cw20:terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd',
      name: 'Shiba Inu (Portal)',
      display: 'shib',
      symbol: 'SHIB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/shib.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
          exponent: 0,
        },
        {
          denom: 'srmso',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
      base: 'cw20:terra1dkam9wd5yvaswv4yq3n2aqd4wm5j8n82qc0c7c',
      name: 'Serum (Portal from Solana)',
      display: 'srmso',
      symbol: 'SRMso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/srmso.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
          exponent: 0,
        },
        {
          denom: 'usdcav',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
      base: 'cw20:terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w',
      name: 'USD Coin (Portal from Avalanche)',
      display: 'usdcav',
      symbol: 'USDCav',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcav.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
          exponent: 0,
        },
        {
          denom: 'usdcbs',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
      base: 'cw20:terra1yljlrxvkar0c6ujpvf8g57m5rpcwl7r032zyvu',
      name: 'USD Coin (Portal from BSC)',
      display: 'usdcbs',
      symbol: 'USDCbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcbs.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
          exponent: 0,
        },
        {
          denom: 'usdcpo',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
      base: 'cw20:terra1kkyyh7vganlpkj0gkc2rfmhy858ma4rtwywe3x',
      name: 'USD Coin (Portal from Polygon)',
      display: 'usdcpo',
      symbol: 'USDCpo',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcpo.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
          exponent: 0,
        },
        {
          denom: 'usdcso',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
      base: 'cw20:terra1e6mq63y64zcxz8xyu5van4tgkhemj3r86yvgu4',
      name: 'USD Coin (Portal from Solana)',
      display: 'usdcso',
      symbol: 'USDCso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdcso.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
          exponent: 0,
        },
        {
          denom: 'usdtav',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
      base: 'cw20:terra1eqvq3thjhye7anv6f6mhxpjhyvww8zjvqcdgjx',
      name: 'Tether USD (Portal from Avalanche)',
      display: 'usdtav',
      symbol: 'USDTav',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtav.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
          exponent: 0,
        },
        {
          denom: 'usdtbs',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
      base: 'cw20:terra1vlqeghv5mt5udh96kt5zxlh2wkh8q4kewkr0dd',
      name: 'Tether USD (Portal from BSC)',
      display: 'usdtbs',
      symbol: 'USDTbs',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtbs.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
          exponent: 0,
        },
        {
          denom: 'usdtso',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
      base: 'cw20:terra1hd9n65snaluvf7en0p4hqzse9eqecejz2k8rl5',
      name: 'Tether USD (Portal from Solana)',
      display: 'usdtso',
      symbol: 'USDTso',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/usdtso.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
          exponent: 0,
        },
        {
          denom: 'gohm',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
      base: 'cw20:terra1fpfn2kkr8mv390wx4dtpfk3vkjx9ch3thvykl3',
      name: 'Governance OHM (Portal)',
      display: 'gohm',
      symbol: 'gOHM',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gohm.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
          exponent: 0,
        },
        {
          denom: 'msol',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
      base: 'cw20:terra1qvlpf2v0zmru3gtex40sqq02wxp39x3cjh359y',
      name: 'Marinade staked SOL (Portal)',
      display: 'msol',
      symbol: 'mSOL',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/msol.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
          exponent: 0,
        },
        {
          denom: 'steth',
          exponent: 8,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
      base: 'cw20:terra1w7ywr6waxtjuvn5svk5wqydqpjj0q9ps7qct4d',
      name: 'Lido Staked Ether (Portal)',
      display: 'steth',
      symbol: 'stETH',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steth.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
          exponent: 0,
        },
        {
          denom: 'lct',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
      base: 'cw20:terra1srp2u95kxps35nvan88gn96nfqhukqya2d0ffc',
      name: 'LCT Token',
      display: 'lct',
      symbol: 'LCT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lct.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
          exponent: 0,
        },
        {
          denom: 'batom',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
      base: 'cw20:terra18zqcnl83z98tf6lly37gghm7238k7lh79u4z9a',
      name: 'Bonded ATOM',
      display: 'batom',
      symbol: 'bATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/batom.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
          exponent: 0,
        },
        {
          denom: 'webatom',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
      base: 'cw20:terra128pe5jpempxu0nws5lw28se9zknhsr78626cpn',
      name: 'pStake Bonded ATOM (Wormhole)',
      display: 'webatom',
      symbol: 'webATOM',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/webatom.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
          exponent: 0,
        },
        {
          denom: 'wcoin',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
      base: 'cw20:terra1laczhlpxlgmrwr9un9ds74qxd2fj4754nf82dn',
      name: 'Willisch Coin',
      display: 'wcoin',
      symbol: 'WCOIN',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/wcoin.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
          exponent: 0,
        },
        {
          denom: 'lctfancard',
          exponent: 0,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
      base: 'cw20:terra1thhm2u93m2stytzynhsxh5h3jrtg540x4punqy',
      name: 'LCT Fancard Token',
      display: 'lctfancard',
      symbol: 'LCTfancard',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/lctfancard.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
          exponent: 0,
        },
        {
          denom: 'kntc',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
      base: 'cw20:terra1yeyr6taynkwdl85ppaggr3zr8txhf66cny2ang',
      name: 'Kinetic Token',
      display: 'kntc',
      symbol: 'KNTC',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kntc.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
          exponent: 0,
        },
        {
          denom: 'kust',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
      base: 'cw20:terra1g53pyke8jtmt4lwvk4yl0xaqc4u0qlsl8dz3ex',
      name: 'Kinetic kUST Token',
      display: 'kust',
      symbol: 'kUST',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/kust.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
          exponent: 0,
        },
        {
          denom: 'steak',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
      base: 'cw20:terra1rl4zyexjphwgx6v3ytyljkkc4mrje2pyznaclv',
      name: 'Steak Token',
      display: 'steak',
      symbol: 'STEAK',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/steak.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
          exponent: 0,
        },
        {
          denom: 'cst',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
      base: 'cw20:terra1jkkt5638cd5pur0u5jnr2juw0v6hz5d6z8xu8m',
      name: 'CST Token',
      display: 'cst',
      symbol: 'CST',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cst.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
          exponent: 0,
        },
        {
          denom: 'cstfancard',
          exponent: 0,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
      base: 'cw20:terra1kz7qszu7p4dg9lts7m9m7lpuarsnan47jh3fam',
      name: 'CST Fancard Token',
      display: 'cstfancard',
      symbol: 'CSTfancard',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cstfancard.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
          exponent: 0,
        },
        {
          denom: 'nwld',
          exponent: 9,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
      base: 'cw20:terra1amz5c45l34n7w8m5a3z7rd7u0k037x4nnsemwj',
      name: 'Neworld Labs Develpper Token',
      display: 'nwld',
      symbol: 'NWLD',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwld.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
          exponent: 0,
        },
        {
          denom: 'fury',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
      base: 'cw20:terra1cdc6nlsx0l6jmt3nnx7gxjggf902wge3n2z76k',
      name: 'FURY',
      display: 'fury',
      symbol: 'FURY',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/fury.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
          exponent: 0,
        },
        {
          denom: 'rct',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
      base: 'cw20:terra17n223dxpkypc5c48la7aqjvverczg82ga3cr93',
      name: 'Reactor Token',
      display: 'rct',
      symbol: 'RCT',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/rct.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
          exponent: 0,
        },
        {
          denom: 'vitc',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
      base: 'cw20:terra14vw4sfqwe7jw8ppcc7u44vq7hy9qa2nlstnxmu',
      name: 'Vitamin Coin',
      display: 'vitc',
      symbol: 'VITC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/vitc.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
          exponent: 0,
        },
        {
          denom: 'sb',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
      base: 'cw20:terra1948uvsah8aw40dhsa9mhl3htq8lraj0smlh77g',
      name: 'DragonSB',
      display: 'sb',
      symbol: 'SB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sb.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
          exponent: 0,
        },
        {
          denom: 'toad',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
      base: 'cw20:terra1rz964297kvt86rteajhtp4hsffhcum0ye8eljh',
      name: 'RESToad Token',
      display: 'toad',
      symbol: 'TOAD',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/toad.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
          exponent: 0,
        },
        {
          denom: 'orionastro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
      base: 'cw20:terra1yhlhrea3rgyx2xdnsswsfakn28qa8z7yp5gmhd',
      name: 'Orion Money xASTRO Derivative Token',
      display: 'orionastro',
      symbol: 'orionASTRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/orionastro.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
          exponent: 0,
        },
        {
          denom: 'retro',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
      base: 'cw20:terra1j4hwavavmtsafa6zr0npalfz3tk9gf3p4787mp',
      name: 'Retrograde',
      display: 'retro',
      symbol: 'RETRO',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/retro.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
          exponent: 0,
        },
        {
          denom: 'tnd',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
      base: 'cw20:terra16wggm67a34msdxasg2vergm2pt289y7930wv7d',
      name: 'TerrnadoCash',
      display: 'tnd',
      symbol: 'TND',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tnd.png',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
          exponent: 0,
        },
        {
          denom: 'stnd',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
      base: 'cw20:terra1n9k2he20h5vpyn4mgv7pg4pzvw2n3wc4a86v3g',
      name: 'TerrnadoCash',
      display: 'stnd',
      symbol: 'sTND',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/stnd.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
          exponent: 0,
        },
        {
          denom: 'nwt',
          exponent: 9,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
      base: 'cw20:terra1ezz5xply2v3xdyv32gy5tcd7zq4k235q4xtzwe',
      name: 'Neworld Token',
      display: 'nwt',
      symbol: 'NWT',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/nwt.png',
        },
      ],
    },
    {
      description: 'The AUD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uaud',
          exponent: 0,
          aliases: ['microaud'],
        },
        {
          denom: 'maud',
          exponent: 3,
          aliases: ['milliaud'],
        },
        {
          denom: 'aut',
          exponent: 6,
          aliases: ['autc'],
        },
      ],
      base: 'uaud',
      display: 'aut',
      name: 'TerraClassicAUD',
      symbol: 'AUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/aut.svg',
        },
      ],
    },
    {
      description: 'The CAD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ucad',
          exponent: 0,
          aliases: ['microcad'],
        },
        {
          denom: 'mcad',
          exponent: 3,
          aliases: ['millicad'],
        },
        {
          denom: 'cat',
          exponent: 6,
          aliases: ['catc'],
        },
      ],
      base: 'ucad',
      display: 'cat',
      name: 'TerraClassicCAD',
      symbol: 'CATC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cat.svg',
        },
      ],
    },
    {
      description: 'The CHF stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uchf',
          exponent: 0,
          aliases: ['microchf'],
        },
        {
          denom: 'mchf',
          exponent: 3,
          aliases: ['millichf'],
        },
        {
          denom: 'cht',
          exponent: 6,
          aliases: ['chtc'],
        },
      ],
      base: 'uchf',
      display: 'cht',
      name: 'TerraClassicCHF',
      symbol: 'CHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cht.svg',
        },
      ],
    },
    {
      description: 'The CNY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ucny',
          exponent: 0,
          aliases: ['microcny'],
        },
        {
          denom: 'mcny',
          exponent: 3,
          aliases: ['millicny'],
        },
        {
          denom: 'cnt',
          exponent: 6,
          aliases: ['cntc'],
        },
      ],
      base: 'ucny',
      display: 'cnt',
      name: 'TerraClassicCNY',
      symbol: 'CNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/cnt.svg',
        },
      ],
    },
    {
      description: 'The DKK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'udkk',
          exponent: 0,
          aliases: ['microdkk'],
        },
        {
          denom: 'mdkk',
          exponent: 3,
          aliases: ['millidkk'],
        },
        {
          denom: 'dkt',
          exponent: 6,
          aliases: ['dktc'],
        },
      ],
      base: 'udkk',
      display: 'dkt',
      name: 'TerraClassicDKK',
      symbol: 'DKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/dkt.svg',
        },
      ],
    },
    {
      description: 'The EUR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ueur',
          exponent: 0,
          aliases: ['microeur'],
        },
        {
          denom: 'meur',
          exponent: 3,
          aliases: ['millieur'],
        },
        {
          denom: 'eut',
          exponent: 6,
          aliases: ['eutc'],
        },
      ],
      base: 'ueur',
      display: 'eut',
      name: 'TerraClassicEUR',
      symbol: 'EUTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/eut.svg',
        },
      ],
    },
    {
      description: 'The GBP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ugbp',
          exponent: 0,
          aliases: ['microgbp'],
        },
        {
          denom: 'mgbp',
          exponent: 3,
          aliases: ['milligbp'],
        },
        {
          denom: 'gbt',
          exponent: 6,
          aliases: ['gbtc'],
        },
      ],
      base: 'ugbp',
      display: 'gbt',
      name: 'TerraClassicGBP',
      symbol: 'GBTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/gbt.svg',
        },
      ],
    },
    {
      description: 'The HKD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uhkd',
          exponent: 0,
          aliases: ['microhkd'],
        },
        {
          denom: 'mhkd',
          exponent: 3,
          aliases: ['millihkd'],
        },
        {
          denom: 'hkt',
          exponent: 6,
          aliases: ['hktc'],
        },
      ],
      base: 'uhkd',
      display: 'hkt',
      name: 'TerraClassicHKD',
      symbol: 'HKTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/hkt.svg',
        },
      ],
    },
    {
      description: 'The IDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uidr',
          exponent: 0,
          aliases: ['microidr'],
        },
        {
          denom: 'midr',
          exponent: 3,
          aliases: ['milliidr'],
        },
        {
          denom: 'idt',
          exponent: 6,
          aliases: ['idtc'],
        },
      ],
      base: 'uidr',
      display: 'idt',
      name: 'TerraClassicIDR',
      symbol: 'IDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/idt.svg',
        },
      ],
    },
    {
      description: 'The INR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uinr',
          exponent: 0,
          aliases: ['microinr'],
        },
        {
          denom: 'minr',
          exponent: 3,
          aliases: ['milliinr'],
        },
        {
          denom: 'int',
          exponent: 6,
          aliases: ['intc'],
        },
      ],
      base: 'uinr',
      display: 'int',
      name: 'TerraClassicINR',
      symbol: 'INTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/int.svg',
        },
      ],
    },
    {
      description: 'The JPY stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'ujpy',
          exponent: 0,
          aliases: ['microjpy'],
        },
        {
          denom: 'mjpy',
          exponent: 3,
          aliases: ['millijpy'],
        },
        {
          denom: 'jpt',
          exponent: 6,
          aliases: ['jptc'],
        },
      ],
      base: 'ujpy',
      display: 'jpt',
      name: 'TerraClassicJPY',
      symbol: 'JPTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/jpt.svg',
        },
      ],
    },
    {
      description: 'The MNT stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'umnt',
          exponent: 0,
          aliases: ['micromnt'],
        },
        {
          denom: 'mmnt',
          exponent: 3,
          aliases: ['millimnt'],
        },
        {
          denom: 'mnt',
          exponent: 6,
          aliases: ['mntc'],
        },
      ],
      base: 'umnt',
      display: 'mnt',
      name: 'TerraClassicMNT',
      symbol: 'MNTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/mnt.svg',
        },
      ],
    },
    {
      description: 'The MYR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'umyr',
          exponent: 0,
          aliases: ['micromyr'],
        },
        {
          denom: 'mmyr',
          exponent: 3,
          aliases: ['millimyr'],
        },
        {
          denom: 'myt',
          exponent: 6,
          aliases: ['mytc'],
        },
      ],
      base: 'umyr',
      display: 'myt',
      name: 'TerraClassicMYR',
      symbol: 'MYTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/myt.svg',
        },
      ],
    },
    {
      description: 'The NOK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'unok',
          exponent: 0,
          aliases: ['micronok'],
        },
        {
          denom: 'mnok',
          exponent: 3,
          aliases: ['millinok'],
        },
        {
          denom: 'not',
          exponent: 6,
          aliases: ['notc'],
        },
      ],
      base: 'unok',
      display: 'not',
      name: 'TerraClassicNOK',
      symbol: 'NOTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/not.svg',
        },
      ],
    },
    {
      description: 'The PHP stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uphp',
          exponent: 0,
          aliases: ['microphp'],
        },
        {
          denom: 'mphp',
          exponent: 3,
          aliases: ['milliphp'],
        },
        {
          denom: 'pht',
          exponent: 6,
          aliases: ['phtc'],
        },
      ],
      base: 'uphp',
      display: 'pht',
      name: 'TerraClassicPHP',
      symbol: 'PHTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/pht.svg',
        },
      ],
    },
    {
      description: 'The SDR stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'usdr',
          exponent: 0,
          aliases: ['microsdr'],
        },
        {
          denom: 'msdr',
          exponent: 3,
          aliases: ['millisdr'],
        },
        {
          denom: 'sdt',
          exponent: 6,
          aliases: ['sdtc'],
        },
      ],
      base: 'usdr',
      display: 'sdt',
      name: 'TerraClassicSDR',
      symbol: 'SDTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sdt.svg',
        },
      ],
    },
    {
      description: 'The SEK stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'usek',
          exponent: 0,
          aliases: ['microsek'],
        },
        {
          denom: 'msek',
          exponent: 3,
          aliases: ['millisek'],
        },
        {
          denom: 'set',
          exponent: 6,
          aliases: ['setc'],
        },
      ],
      base: 'usek',
      display: 'set',
      name: 'TerraClassicSEK',
      symbol: 'SETC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/set.svg',
        },
      ],
    },
    {
      description: 'The SGD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'usgd',
          exponent: 0,
          aliases: ['microsgd'],
        },
        {
          denom: 'msgd',
          exponent: 3,
          aliases: ['millisgd'],
        },
        {
          denom: 'sgt',
          exponent: 6,
          aliases: ['sgtc'],
        },
      ],
      base: 'usgd',
      display: 'sgt',
      name: 'TerraClassicSGD',
      symbol: 'SGTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/sgt.svg',
        },
      ],
    },
    {
      description: 'The THB stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'uthb',
          exponent: 0,
          aliases: ['microthb'],
        },
        {
          denom: 'mthb',
          exponent: 3,
          aliases: ['millithb'],
        },
        {
          denom: 'tht',
          exponent: 6,
          aliases: ['thtc'],
        },
      ],
      base: 'uthb',
      display: 'tht',
      name: 'TerraClassicTHB',
      symbol: 'THTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/tht.svg',
        },
      ],
    },
    {
      description: 'The TWD stablecoin of Terra Classic.',
      denom_units: [
        {
          denom: 'utwd',
          exponent: 0,
          aliases: ['microtwd'],
        },
        {
          denom: 'mtwd',
          exponent: 3,
          aliases: ['millitwd'],
        },
        {
          denom: 'twt',
          exponent: 6,
          aliases: ['twtc'],
        },
      ],
      base: 'utwd',
      display: 'twt',
      name: 'TerraClassicTWD',
      symbol: 'TWTC',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/twt.svg',
        },
      ],
    },
    {
      denom_units: [
        {
          denom: 'cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
          exponent: 0,
        },
        {
          denom: 'neb',
          exponent: 6,
        },
      ],
      type_asset: 'cw20',
      address: 'terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
      base: 'cw20:terra1mpq5zkkm39nmjrjg9raknpfrfmcfwv0nh0whvn',
      name: 'Nebula Token',
      display: 'neb',
      symbol: 'NEB',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/terra/images/neb.png',
        },
      ],
    },
  ],
};
