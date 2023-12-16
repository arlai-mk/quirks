import type { Chain, AssetLists } from '../types';

export const ojotestnetAssetList: AssetLists = {
  $schema: '../../assetlist.schema.json',
  chain_name: 'ojotestnet',
  assets: [
    {
      description: 'The native token of Ojo Network',
      denom_units: [
        {
          denom: 'uojo',
          exponent: 0,
        },
        {
          denom: 'ojo',
          exponent: 6,
        },
      ],
      base: 'uojo',
      name: 'ojo',
      display: 'ojo',
      symbol: 'OJO',
      logo_URIs: {
        svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ojotestnet/images/ojo.svg',
      },
      images: [
        {
          svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/testnets/ojotestnet/images/ojo.svg',
        },
      ],
    },
  ],
};
