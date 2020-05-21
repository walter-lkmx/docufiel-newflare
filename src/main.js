import DefaultLayout from '~/layouts/Default.vue';

// components
import SimpleHeader from '@lkmx/flare/src/components/headers/simple/SimpleHeader';
import SimpleNavItem from '@lkmx/flare/src/components/navigation/simple/SimpleNavItem';
import SimpleHero from '@lkmx/flare/src/components/heroes/SimpleHero';
import TextBanner from '@lkmx/flare/src/components/blocks/TextBanner';

// structures
import NoColumn from '@lkmx/flare/src/structures/columns/NoColumn';
import SingleColumn from '@lkmx/flare/src/structures/columns/SingleColumn';
import SlimColumn from '@lkmx/flare/src/structures/columns/SlimColumn';

import DefaultPage from '~/layouts/pages/DefaultPage.vue';

import '~/sass/styles.scss';


export default function (Vue, {router, head, isClient}) {
  
  Vue.component('Layout', DefaultLayout)
  
  // components
  Vue.component('DefaultPage', DefaultPage);
  Vue.component('SimpleHeader', SimpleHeader);
  Vue.component('SimpleNavItem', SimpleNavItem);
  Vue.component('SimpleHero', SimpleHero);
  Vue.component('TextBanner', TextBanner);

  // structures
  Vue.component('NoColumn', NoColumn);
  Vue.component('SingleColumn', SingleColumn);
  Vue.component('SlimColumn', SlimColumn);
}
