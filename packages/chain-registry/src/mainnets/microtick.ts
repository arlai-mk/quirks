import type { Chain, AssetLists } from '../types';

export const microtick: Chain = {
  $schema: '../chain.schema.json',
  chain_name: 'microtick',
  status: 'killed',
  network_type: 'mainnet',
  pretty_name: 'Microtick',
  chain_id: 'microtick-1',
  bech32_prefix: 'micro',
  daemon_name: 'mtm',
  fees: {
    fee_tokens: [
      {
        denom: 'utick',
      },
    ],
  },
  staking: {
    staking_tokens: [
      {
        denom: 'utick',
      },
    ],
  },
  codebase: {
    git_repo: 'https://github.com/microtick/mtzone',
    recommended_version: 'mtm-v2.0.4',
    compatible_versions: ['mtm-v2.0.4'],
    genesis: {
      genesis_url:
        'https://raw.githubusercontent.com/microtick/stargate-genesis/master/genesis.json',
    },
    versions: [
      {
        name: 'mtm-v2.0.4',
        recommended_version: 'mtm-v2.0.4',
        compatible_versions: ['mtm-v2.0.4'],
      },
    ],
  },
  logo_URIs: {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
  },
  explorers: [
    {
      kind: 'ping.pub',
      url: 'https://ping.pub/microtick',
      tx_page: 'https://ping.pub/microtick/tx/${txHash}',
    },
  ],
  images: [
    {
      png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
      svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
    },
  ],
};

export const microtickAssetList: AssetLists = {
  $schema: '../assetlist.schema.json',
  chain_name: 'microtick',
  assets: [
    {
      description:
        'TICK coin is the token for the Microtick Price Discovery & Oracle App',
      denom_units: [
        {
          denom: 'utick',
          exponent: 0,
        },
        {
          denom: 'tick',
          exponent: 6,
        },
      ],
      base: 'utick',
      display: 'tick',
      name: 'Microtick',
      symbol: 'TICK',
      logo_URIs: {
        png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
      },
      images: [
        {
          png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.png',
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/microtick/images/tick.svg',
        },
      ],
    },
  ],
};