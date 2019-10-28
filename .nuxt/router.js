import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _741f93dc = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _0fad7bc2 = () => interopDefault(import('..\\pages\\contacts\\index.vue' /* webpackChunkName: "pages_contacts_index" */))
const _03b6e79e = () => interopDefault(import('..\\pages\\form\\index.vue' /* webpackChunkName: "pages_form_index" */))
const _e83fd878 = () => interopDefault(import('..\\pages\\tours\\index.vue' /* webpackChunkName: "pages_tours_index" */))
const _78fca1e5 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\index.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_index" */))
const _d148d0f8 = () => interopDefault(import('..\\pages\\tours\\Alanya\\index.vue' /* webpackChunkName: "pages_tours_Alanya_index" */))
const _c41b4054 = () => interopDefault(import('..\\pages\\tours\\Antalya\\index.vue' /* webpackChunkName: "pages_tours_Antalya_index" */))
const _72fab0cf = () => interopDefault(import('..\\pages\\tours\\Athens\\index.vue' /* webpackChunkName: "pages_tours_Athens_index" */))
const _3591b141 = () => interopDefault(import('..\\pages\\tours\\Bangkok\\index.vue' /* webpackChunkName: "pages_tours_Bangkok_index" */))
const _63c147b0 = () => interopDefault(import('..\\pages\\tours\\Cairo\\index.vue' /* webpackChunkName: "pages_tours_Cairo_index" */))
const _fa309612 = () => interopDefault(import('..\\pages\\tours\\Dubai\\index.vue' /* webpackChunkName: "pages_tours_Dubai_index" */))
const _6c000fb0 = () => interopDefault(import('..\\pages\\tours\\Florence\\index.vue' /* webpackChunkName: "pages_tours_Florence_index" */))
const _60f3aa3c = () => interopDefault(import('..\\pages\\tours\\Hutta\\index.vue' /* webpackChunkName: "pages_tours_Hutta_index" */))
const _5b014182 = () => interopDefault(import('..\\pages\\tours\\Istanbul\\index.vue' /* webpackChunkName: "pages_tours_Istanbul_index" */))
const _48ef22fe = () => interopDefault(import('..\\pages\\tours\\Luxor\\index.vue' /* webpackChunkName: "pages_tours_Luxor_index" */))
const _33e1a1d3 = () => interopDefault(import('..\\pages\\tours\\Milan\\index.vue' /* webpackChunkName: "pages_tours_Milan_index" */))
const _009f9298 = () => interopDefault(import('..\\pages\\tours\\Pattaya\\index.vue' /* webpackChunkName: "pages_tours_Pattaya_index" */))
const _1a85d647 = () => interopDefault(import('..\\pages\\tours\\Phuket\\index.vue' /* webpackChunkName: "pages_tours_Phuket_index" */))
const _237661e8 = () => interopDefault(import('..\\pages\\tours\\Rethymno\\index.vue' /* webpackChunkName: "pages_tours_Rethymno_index" */))
const _b000f622 = () => interopDefault(import('..\\pages\\tours\\Rome\\index.vue' /* webpackChunkName: "pages_tours_Rome_index" */))
const _b9a51490 = () => interopDefault(import('..\\pages\\tours\\Taba\\index.vue' /* webpackChunkName: "pages_tours_Taba_index" */))
const _495e2ed8 = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\index.vue' /* webpackChunkName: "pages_tours_Thessaloniki_index" */))
const _7ee7f883 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\aloft-abu-dhabi.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_aloft-abu-dhabi" */))
const _10519c01 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\bab-al-qasr-hotel.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_bab-al-qasr-hotel" */))
const _c0ce4710 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\centro-yas-island-by-rotana.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_centro-yas-island-by-rotana" */))
const _3ec1f640 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\cristal-hotel.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_cristal-hotel" */))
const _0fa16f1e = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\grand-millennium-al-wahda-abu-dhabi.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_grand-millennium-al-wahda-abu-dhabi" */))
const _c5295430 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\khalidiya-hotel.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_khalidiya-hotel" */))
const _64211af1 = () => interopDefault(import('..\\pages\\tours\\Abu-Dhabi\\park-arjaan-by-rotana.vue' /* webpackChunkName: "pages_tours_Abu-Dhabi_park-arjaan-by-rotana" */))
const _a708c564 = () => interopDefault(import('..\\pages\\tours\\Alanya\\blue-heaven-apart-hotel.vue' /* webpackChunkName: "pages_tours_Alanya_blue-heaven-apart-hotel" */))
const _04fe9586 = () => interopDefault(import('..\\pages\\tours\\Alanya\\blue-sky-hotel-all-inclusive.vue' /* webpackChunkName: "pages_tours_Alanya_blue-sky-hotel-all-inclusive" */))
const _ae47829e = () => interopDefault(import('..\\pages\\tours\\Alanya\\hotel-grand-kaptan-ultra-all-inclusive.vue' /* webpackChunkName: "pages_tours_Alanya_hotel-grand-kaptan-ultra-all-inclusive" */))
const _775cf0d9 = () => interopDefault(import('..\\pages\\tours\\Alanya\\labranda-alantur.vue' /* webpackChunkName: "pages_tours_Alanya_labranda-alantur" */))
const _360148f2 = () => interopDefault(import('..\\pages\\tours\\Alanya\\palmiye-beach-hotel.vue' /* webpackChunkName: "pages_tours_Alanya_palmiye-beach-hotel" */))
const _145e01a8 = () => interopDefault(import('..\\pages\\tours\\Alanya\\savk-hotel.vue' /* webpackChunkName: "pages_tours_Alanya_savk-hotel" */))
const _10821f6c = () => interopDefault(import('..\\pages\\tours\\Antalya\\akra-hotel.vue' /* webpackChunkName: "pages_tours_Antalya_akra-hotel" */))
const _65e0d764 = () => interopDefault(import('..\\pages\\tours\\Antalya\\hotel-su-&-aqualand.vue' /* webpackChunkName: "pages_tours_Antalya_hotel-su-&-aqualand" */))
const _90d8a790 = () => interopDefault(import('..\\pages\\tours\\Antalya\\ramada-plaza-antalya.vue' /* webpackChunkName: "pages_tours_Antalya_ramada-plaza-antalya" */))
const _7d8a7983 = () => interopDefault(import('..\\pages\\tours\\Antalya\\sealife-family-resort-hotel.vue' /* webpackChunkName: "pages_tours_Antalya_sealife-family-resort-hotel" */))
const _401227ec = () => interopDefault(import('..\\pages\\tours\\Antalya\\white-garden-hotel.vue' /* webpackChunkName: "pages_tours_Antalya_white-garden-hotel" */))
const _46ea76fe = () => interopDefault(import('..\\pages\\tours\\Athens\\athens-hawks.vue' /* webpackChunkName: "pages_tours_Athens_athens-hawks" */))
const _1c0f0704 = () => interopDefault(import('..\\pages\\tours\\Athens\\coco-mat.vue' /* webpackChunkName: "pages_tours_Athens_coco-mat" */))
const _d030796a = () => interopDefault(import('..\\pages\\tours\\Athens\\elia-ermou.vue' /* webpackChunkName: "pages_tours_Athens_elia-ermou" */))
const _7b87bb6c = () => interopDefault(import('..\\pages\\tours\\Athens\\inn-athens.vue' /* webpackChunkName: "pages_tours_Athens_inn-athens" */))
const _26b133f0 = () => interopDefault(import('..\\pages\\tours\\Athens\\royal-olympic.vue' /* webpackChunkName: "pages_tours_Athens_royal-olympic" */))
const _22713bde = () => interopDefault(import('..\\pages\\tours\\Athens\\syngrou-fix.vue' /* webpackChunkName: "pages_tours_Athens_syngrou-fix" */))
const _bac307d0 = () => interopDefault(import('..\\pages\\tours\\Bangkok\\centra-by-centara-government-complex-hotel-&-covention-centre-chaeng-watthana.vue' /* webpackChunkName: "pages_tours_Bangkok_centra-by-centara-government-complex-hotel-&-covention-centre-chaeng-watthana" */))
const _85db631c = () => interopDefault(import('..\\pages\\tours\\Bangkok\\graceland-bangkok-by-grace-hotel.vue' /* webpackChunkName: "pages_tours_Bangkok_graceland-bangkok-by-grace-hotel" */))
const _7a412a5c = () => interopDefault(import('..\\pages\\tours\\Bangkok\\royal-benja-hotel.vue' /* webpackChunkName: "pages_tours_Bangkok_royal-benja-hotel" */))
const _05ffccd9 = () => interopDefault(import('..\\pages\\tours\\Bangkok\\the-green-bells.vue' /* webpackChunkName: "pages_tours_Bangkok_the-green-bells" */))
const _01d04724 = () => interopDefault(import('..\\pages\\tours\\Bangkok\\vince-hotel-pratunam.vue' /* webpackChunkName: "pages_tours_Bangkok_vince-hotel-pratunam" */))
const _b533052a = () => interopDefault(import('..\\pages\\tours\\Cairo\\grand-nile-tower.vue' /* webpackChunkName: "pages_tours_Cairo_grand-nile-tower" */))
const _15a604c3 = () => interopDefault(import('..\\pages\\tours\\Cairo\\pyramisa-suites-hotel.vue' /* webpackChunkName: "pages_tours_Cairo_pyramisa-suites-hotel" */))
const _27be9a4a = () => interopDefault(import('..\\pages\\tours\\Cairo\\ramses-hilton-hotel-&-casino.vue' /* webpackChunkName: "pages_tours_Cairo_ramses-hilton-hotel-&-casino" */))
const _4c1edb01 = () => interopDefault(import('..\\pages\\tours\\Cairo\\steigenberger-hotel-el-tahrir-cairo.vue' /* webpackChunkName: "pages_tours_Cairo_steigenberger-hotel-el-tahrir-cairo" */))
const _e90bcbca = () => interopDefault(import('..\\pages\\tours\\Cairo\\tolip-family-park-hotel.vue' /* webpackChunkName: "pages_tours_Cairo_tolip-family-park-hotel" */))
const _607b2e1c = () => interopDefault(import('..\\pages\\tours\\Dubai\\five-jumeirah-village.vue' /* webpackChunkName: "pages_tours_Dubai_five-jumeirah-village" */))
const _361b6998 = () => interopDefault(import('..\\pages\\tours\\Dubai\\ibis-ai-rigga.vue' /* webpackChunkName: "pages_tours_Dubai_ibis-ai-rigga" */))
const _1c82dec1 = () => interopDefault(import('..\\pages\\tours\\Dubai\\oceana-residences-the-palm-jumeirah.vue' /* webpackChunkName: "pages_tours_Dubai_oceana-residences-the-palm-jumeirah" */))
const _1be6fc66 = () => interopDefault(import('..\\pages\\tours\\Dubai\\savoy-suites-hotel-apartment.vue' /* webpackChunkName: "pages_tours_Dubai_savoy-suites-hotel-apartment" */))
const _4b97d07b = () => interopDefault(import('..\\pages\\tours\\Dubai\\two-seasons-hotel.vue' /* webpackChunkName: "pages_tours_Dubai_two-seasons-hotel" */))
const _3df82df9 = () => interopDefault(import('..\\pages\\tours\\Dubai\\yanjoon-holiday-homes-marina-heights.vue' /* webpackChunkName: "pages_tours_Dubai_yanjoon-holiday-homes-marina-heights" */))
const _126f33d6 = () => interopDefault(import('..\\pages\\tours\\Florence\\affittacamere-serena.vue' /* webpackChunkName: "pages_tours_Florence_affittacamere-serena" */))
const _8f94e828 = () => interopDefault(import('..\\pages\\tours\\Florence\\athenaeum-personal-hotel.vue' /* webpackChunkName: "pages_tours_Florence_athenaeum-personal-hotel" */))
const _902f0b58 = () => interopDefault(import('..\\pages\\tours\\Florence\\hotel-rapallo.vue' /* webpackChunkName: "pages_tours_Florence_hotel-rapallo" */))
const _c812117a = () => interopDefault(import('..\\pages\\tours\\Florence\\hotel-villa-gabriele-d-annunzio.vue' /* webpackChunkName: "pages_tours_Florence_hotel-villa-gabriele-d-annunzio" */))
const _3efdd34c = () => interopDefault(import('..\\pages\\tours\\Florence\\luxury-b-&-b-la-dimora-degli-angeli.vue' /* webpackChunkName: "pages_tours_Florence_luxury-b-&-b-la-dimora-degli-angeli" */))
const _29f2fc28 = () => interopDefault(import('..\\pages\\tours\\Florence\\tornabuoni-suites-collection-residenza-d-epoca.vue' /* webpackChunkName: "pages_tours_Florence_tornabuoni-suites-collection-residenza-d-epoca" */))
const _53f3c918 = () => interopDefault(import('..\\pages\\tours\\Hutta\\hatta-damani-lodges-resort.vue' /* webpackChunkName: "pages_tours_Hutta_hatta-damani-lodges-resort" */))
const _03f3d917 = () => interopDefault(import('..\\pages\\tours\\Hutta\\ja-hatta-fort-hotel.vue' /* webpackChunkName: "pages_tours_Hutta_ja-hatta-fort-hotel" */))
const _76a8f3c6 = () => interopDefault(import('..\\pages\\tours\\Istanbul\\avantgarde-hotel-levent.vue' /* webpackChunkName: "pages_tours_Istanbul_avantgarde-hotel-levent" */))
const _02fa4e3e = () => interopDefault(import('..\\pages\\tours\\Istanbul\\dila-hotel.vue' /* webpackChunkName: "pages_tours_Istanbul_dila-hotel" */))
const _1ffb0786 = () => interopDefault(import('..\\pages\\tours\\Istanbul\\elite-world-asia-hotel.vue' /* webpackChunkName: "pages_tours_Istanbul_elite-world-asia-hotel" */))
const _1bd4625a = () => interopDefault(import('..\\pages\\tours\\Istanbul\\güneş-hotel-merter.vue' /* webpackChunkName: "pages_tours_Istanbul_güneş-hotel-merter" */))
const _5d35f8a7 = () => interopDefault(import('..\\pages\\tours\\Istanbul\\pell-palace-hotel-&-spa.vue' /* webpackChunkName: "pages_tours_Istanbul_pell-palace-hotel-&-spa" */))
const _12c5771c = () => interopDefault(import('..\\pages\\tours\\Luxor\\al-hambra-hotel.vue' /* webpackChunkName: "pages_tours_Luxor_al-hambra-hotel" */))
const _f681139e = () => interopDefault(import('..\\pages\\tours\\Luxor\\aracan-eatabe-luxor-hotel.vue' /* webpackChunkName: "pages_tours_Luxor_aracan-eatabe-luxor-hotel" */))
const _f3cfc282 = () => interopDefault(import('..\\pages\\tours\\Luxor\\archti-resort.vue' /* webpackChunkName: "pages_tours_Luxor_archti-resort" */))
const _77f7c16d = () => interopDefault(import('..\\pages\\tours\\Luxor\\hilton-luxor-resort-&-spa.vue' /* webpackChunkName: "pages_tours_Luxor_hilton-luxor-resort-&-spa" */))
const _639dd10a = () => interopDefault(import('..\\pages\\tours\\Luxor\\iberotel-luxor.vue' /* webpackChunkName: "pages_tours_Luxor_iberotel-luxor" */))
const _506dabc0 = () => interopDefault(import('..\\pages\\tours\\Luxor\\pavillon-winter-luxor.vue' /* webpackChunkName: "pages_tours_Luxor_pavillon-winter-luxor" */))
const _11381572 = () => interopDefault(import('..\\pages\\tours\\Milan\\hotel-manzoni.vue' /* webpackChunkName: "pages_tours_Milan_hotel-manzoni" */))
const _2a736b0c = () => interopDefault(import('..\\pages\\tours\\Milan\\palazzo-segreti.vue' /* webpackChunkName: "pages_tours_Milan_palazzo-segreti" */))
const _4cd9626a = () => interopDefault(import('..\\pages\\tours\\Milan\\the-yard-milano.vue' /* webpackChunkName: "pages_tours_Milan_the-yard-milano" */))
const _c2f24182 = () => interopDefault(import('..\\pages\\tours\\Milan\\unahotels-cusani-milano.vue' /* webpackChunkName: "pages_tours_Milan_unahotels-cusani-milano" */))
const _8a53a4d2 = () => interopDefault(import('..\\pages\\tours\\Milan\\сarlyle-brera-hotel.vue' /* webpackChunkName: "pages_tours_Milan_сarlyle-brera-hotel" */))
const _213d291a = () => interopDefault(import('..\\pages\\tours\\Pattaya\\at-mind-serviced-residence.vue' /* webpackChunkName: "pages_tours_Pattaya_at-mind-serviced-residence" */))
const _1ca75422 = () => interopDefault(import('..\\pages\\tours\\Pattaya\\centara-azure-hotel-pattaya.vue' /* webpackChunkName: "pages_tours_Pattaya_centara-azure-hotel-pattaya" */))
const _126c4120 = () => interopDefault(import('..\\pages\\tours\\Pattaya\\d@sea-hotel.vue' /* webpackChunkName: "pages_tours_Pattaya_d@sea-hotel" */))
const _2fcb7750 = () => interopDefault(import('..\\pages\\tours\\Pattaya\\e-outfitting-boutique-hotel-pattaya.vue' /* webpackChunkName: "pages_tours_Pattaya_e-outfitting-boutique-hotel-pattaya" */))
const _ad8a987c = () => interopDefault(import('..\\pages\\tours\\Pattaya\\manita-boutique-hotel.vue' /* webpackChunkName: "pages_tours_Pattaya_manita-boutique-hotel" */))
const _99e09162 = () => interopDefault(import('..\\pages\\tours\\Phuket\\ibis-styles-phuket-city.vue' /* webpackChunkName: "pages_tours_Phuket_ibis-styles-phuket-city" */))
const _4513c163 = () => interopDefault(import('..\\pages\\tours\\Phuket\\ipavilion-phuket-hotel.vue' /* webpackChunkName: "pages_tours_Phuket_ipavilion-phuket-hotel" */))
const _4760f2f4 = () => interopDefault(import('..\\pages\\tours\\Phuket\\rang-hill-residence.vue' /* webpackChunkName: "pages_tours_Phuket_rang-hill-residence" */))
const _89a7f444 = () => interopDefault(import('..\\pages\\tours\\Phuket\\vapa-hotel.vue' /* webpackChunkName: "pages_tours_Phuket_vapa-hotel" */))
const _53ee1d7e = () => interopDefault(import('..\\pages\\tours\\Rethymno\\araucaria-villa.vue' /* webpackChunkName: "pages_tours_Rethymno_araucaria-villa" */))
const _1d5ca0ea = () => interopDefault(import('..\\pages\\tours\\Rethymno\\atrium-ambiance-hotel.vue' /* webpackChunkName: "pages_tours_Rethymno_atrium-ambiance-hotel" */))
const _3183aaac = () => interopDefault(import('..\\pages\\tours\\Rethymno\\blue-dream.vue' /* webpackChunkName: "pages_tours_Rethymno_blue-dream" */))
const _4cc3ae3f = () => interopDefault(import('..\\pages\\tours\\Rethymno\\filion-suites.vue' /* webpackChunkName: "pages_tours_Rethymno_filion-suites" */))
const _1c5f63f2 = () => interopDefault(import('..\\pages\\tours\\Rethymno\\iberostar-creta.vue' /* webpackChunkName: "pages_tours_Rethymno_iberostar-creta" */))
const _2a203277 = () => interopDefault(import('..\\pages\\tours\\Rome\\grand-hotel-fleming.vue' /* webpackChunkName: "pages_tours_Rome_grand-hotel-fleming" */))
const _fc647d6a = () => interopDefault(import('..\\pages\\tours\\Rome\\hotel-poggioverde-roma.vue' /* webpackChunkName: "pages_tours_Rome_hotel-poggioverde-roma" */))
const _12c0fdbb = () => interopDefault(import('..\\pages\\tours\\Rome\\hotel-residence-villa-tassoni.vue' /* webpackChunkName: "pages_tours_Rome_hotel-residence-villa-tassoni" */))
const _405c6536 = () => interopDefault(import('..\\pages\\tours\\Rome\\roma-camping-in-town.vue' /* webpackChunkName: "pages_tours_Rome_roma-camping-in-town" */))
const _86bfc1aa = () => interopDefault(import('..\\pages\\tours\\Rome\\roma-resort-colosseum.vue' /* webpackChunkName: "pages_tours_Rome_roma-resort-colosseum" */))
const _de226b2c = () => interopDefault(import('..\\pages\\tours\\Rome\\urban-garden-hotel.vue' /* webpackChunkName: "pages_tours_Rome_urban-garden-hotel" */))
const _7c943b02 = () => interopDefault(import('..\\pages\\tours\\Taba\\mosaique-beach-resort-taba-heights.vue' /* webpackChunkName: "pages_tours_Taba_mosaique-beach-resort-taba-heights" */))
const _698bec9a = () => interopDefault(import('..\\pages\\tours\\Taba\\strand-beach-&-golf-resort-taba-heights.vue' /* webpackChunkName: "pages_tours_Taba_strand-beach-&-golf-resort-taba-heights" */))
const _2b727ea3 = () => interopDefault(import('..\\pages\\tours\\Taba\\taba-hotel-&-nelson-village.vue' /* webpackChunkName: "pages_tours_Taba_taba-hotel-&-nelson-village" */))
const _9873958c = () => interopDefault(import('..\\pages\\tours\\Taba\\taba-sands-hotel-&-casino.vue' /* webpackChunkName: "pages_tours_Taba_taba-sands-hotel-&-casino" */))
const _01eaccc3 = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\astoria.vue' /* webpackChunkName: "pages_tours_Thessaloniki_astoria" */))
const _84b44cc0 = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\davitel-tobacco-hotel.vue' /* webpackChunkName: "pages_tours_Thessaloniki_davitel-tobacco-hotel" */))
const _53e46660 = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\limani-comfort-rooms.vue' /* webpackChunkName: "pages_tours_Thessaloniki_limani-comfort-rooms" */))
const _d954a5da = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\mandrino-hotel.vue' /* webpackChunkName: "pages_tours_Thessaloniki_mandrino-hotel" */))
const _95b46614 = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\minerva-premier-hotel.vue' /* webpackChunkName: "pages_tours_Thessaloniki_minerva-premier-hotel" */))
const _565a6b58 = () => interopDefault(import('..\\pages\\tours\\Thessaloniki\\mood-luxury-rooms.vue' /* webpackChunkName: "pages_tours_Thessaloniki_mood-luxury-rooms" */))
const _48b4c996 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _741f93dc,
      name: "about"
    }, {
      path: "/contacts",
      component: _0fad7bc2,
      name: "contacts"
    }, {
      path: "/form",
      component: _03b6e79e,
      name: "form"
    }, {
      path: "/tours",
      component: _e83fd878,
      name: "tours"
    }, {
      path: "/tours/Abu-Dhabi",
      component: _78fca1e5,
      name: "tours-Abu-Dhabi"
    }, {
      path: "/tours/Alanya",
      component: _d148d0f8,
      name: "tours-Alanya"
    }, {
      path: "/tours/Antalya",
      component: _c41b4054,
      name: "tours-Antalya"
    }, {
      path: "/tours/Athens",
      component: _72fab0cf,
      name: "tours-Athens"
    }, {
      path: "/tours/Bangkok",
      component: _3591b141,
      name: "tours-Bangkok"
    }, {
      path: "/tours/Cairo",
      component: _63c147b0,
      name: "tours-Cairo"
    }, {
      path: "/tours/Dubai",
      component: _fa309612,
      name: "tours-Dubai"
    }, {
      path: "/tours/Florence",
      component: _6c000fb0,
      name: "tours-Florence"
    }, {
      path: "/tours/Hutta",
      component: _60f3aa3c,
      name: "tours-Hutta"
    }, {
      path: "/tours/Istanbul",
      component: _5b014182,
      name: "tours-Istanbul"
    }, {
      path: "/tours/Luxor",
      component: _48ef22fe,
      name: "tours-Luxor"
    }, {
      path: "/tours/Milan",
      component: _33e1a1d3,
      name: "tours-Milan"
    }, {
      path: "/tours/Pattaya",
      component: _009f9298,
      name: "tours-Pattaya"
    }, {
      path: "/tours/Phuket",
      component: _1a85d647,
      name: "tours-Phuket"
    }, {
      path: "/tours/Rethymno",
      component: _237661e8,
      name: "tours-Rethymno"
    }, {
      path: "/tours/Rome",
      component: _b000f622,
      name: "tours-Rome"
    }, {
      path: "/tours/Taba",
      component: _b9a51490,
      name: "tours-Taba"
    }, {
      path: "/tours/Thessaloniki",
      component: _495e2ed8,
      name: "tours-Thessaloniki"
    }, {
      path: "/tours/Abu-Dhabi/aloft-abu-dhabi",
      component: _7ee7f883,
      name: "tours-Abu-Dhabi-aloft-abu-dhabi"
    }, {
      path: "/tours/Abu-Dhabi/bab-al-qasr-hotel",
      component: _10519c01,
      name: "tours-Abu-Dhabi-bab-al-qasr-hotel"
    }, {
      path: "/tours/Abu-Dhabi/centro-yas-island-by-rotana",
      component: _c0ce4710,
      name: "tours-Abu-Dhabi-centro-yas-island-by-rotana"
    }, {
      path: "/tours/Abu-Dhabi/cristal-hotel",
      component: _3ec1f640,
      name: "tours-Abu-Dhabi-cristal-hotel"
    }, {
      path: "/tours/Abu-Dhabi/grand-millennium-al-wahda-abu-dhabi",
      component: _0fa16f1e,
      name: "tours-Abu-Dhabi-grand-millennium-al-wahda-abu-dhabi"
    }, {
      path: "/tours/Abu-Dhabi/khalidiya-hotel",
      component: _c5295430,
      name: "tours-Abu-Dhabi-khalidiya-hotel"
    }, {
      path: "/tours/Abu-Dhabi/park-arjaan-by-rotana",
      component: _64211af1,
      name: "tours-Abu-Dhabi-park-arjaan-by-rotana"
    }, {
      path: "/tours/Alanya/blue-heaven-apart-hotel",
      component: _a708c564,
      name: "tours-Alanya-blue-heaven-apart-hotel"
    }, {
      path: "/tours/Alanya/blue-sky-hotel-all-inclusive",
      component: _04fe9586,
      name: "tours-Alanya-blue-sky-hotel-all-inclusive"
    }, {
      path: "/tours/Alanya/hotel-grand-kaptan-ultra-all-inclusive",
      component: _ae47829e,
      name: "tours-Alanya-hotel-grand-kaptan-ultra-all-inclusive"
    }, {
      path: "/tours/Alanya/labranda-alantur",
      component: _775cf0d9,
      name: "tours-Alanya-labranda-alantur"
    }, {
      path: "/tours/Alanya/palmiye-beach-hotel",
      component: _360148f2,
      name: "tours-Alanya-palmiye-beach-hotel"
    }, {
      path: "/tours/Alanya/savk-hotel",
      component: _145e01a8,
      name: "tours-Alanya-savk-hotel"
    }, {
      path: "/tours/Antalya/akra-hotel",
      component: _10821f6c,
      name: "tours-Antalya-akra-hotel"
    }, {
      path: "/tours/Antalya/hotel-su-&-aqualand",
      component: _65e0d764,
      name: "tours-Antalya-hotel-su-&-aqualand"
    }, {
      path: "/tours/Antalya/ramada-plaza-antalya",
      component: _90d8a790,
      name: "tours-Antalya-ramada-plaza-antalya"
    }, {
      path: "/tours/Antalya/sealife-family-resort-hotel",
      component: _7d8a7983,
      name: "tours-Antalya-sealife-family-resort-hotel"
    }, {
      path: "/tours/Antalya/white-garden-hotel",
      component: _401227ec,
      name: "tours-Antalya-white-garden-hotel"
    }, {
      path: "/tours/Athens/athens-hawks",
      component: _46ea76fe,
      name: "tours-Athens-athens-hawks"
    }, {
      path: "/tours/Athens/coco-mat",
      component: _1c0f0704,
      name: "tours-Athens-coco-mat"
    }, {
      path: "/tours/Athens/elia-ermou",
      component: _d030796a,
      name: "tours-Athens-elia-ermou"
    }, {
      path: "/tours/Athens/inn-athens",
      component: _7b87bb6c,
      name: "tours-Athens-inn-athens"
    }, {
      path: "/tours/Athens/royal-olympic",
      component: _26b133f0,
      name: "tours-Athens-royal-olympic"
    }, {
      path: "/tours/Athens/syngrou-fix",
      component: _22713bde,
      name: "tours-Athens-syngrou-fix"
    }, {
      path: "/tours/Bangkok/centra-by-centara-government-complex-hotel-&-covention-centre-chaeng-watthana",
      component: _bac307d0,
      name: "tours-Bangkok-centra-by-centara-government-complex-hotel-&-covention-centre-chaeng-watthana"
    }, {
      path: "/tours/Bangkok/graceland-bangkok-by-grace-hotel",
      component: _85db631c,
      name: "tours-Bangkok-graceland-bangkok-by-grace-hotel"
    }, {
      path: "/tours/Bangkok/royal-benja-hotel",
      component: _7a412a5c,
      name: "tours-Bangkok-royal-benja-hotel"
    }, {
      path: "/tours/Bangkok/the-green-bells",
      component: _05ffccd9,
      name: "tours-Bangkok-the-green-bells"
    }, {
      path: "/tours/Bangkok/vince-hotel-pratunam",
      component: _01d04724,
      name: "tours-Bangkok-vince-hotel-pratunam"
    }, {
      path: "/tours/Cairo/grand-nile-tower",
      component: _b533052a,
      name: "tours-Cairo-grand-nile-tower"
    }, {
      path: "/tours/Cairo/pyramisa-suites-hotel",
      component: _15a604c3,
      name: "tours-Cairo-pyramisa-suites-hotel"
    }, {
      path: "/tours/Cairo/ramses-hilton-hotel-&-casino",
      component: _27be9a4a,
      name: "tours-Cairo-ramses-hilton-hotel-&-casino"
    }, {
      path: "/tours/Cairo/steigenberger-hotel-el-tahrir-cairo",
      component: _4c1edb01,
      name: "tours-Cairo-steigenberger-hotel-el-tahrir-cairo"
    }, {
      path: "/tours/Cairo/tolip-family-park-hotel",
      component: _e90bcbca,
      name: "tours-Cairo-tolip-family-park-hotel"
    }, {
      path: "/tours/Dubai/five-jumeirah-village",
      component: _607b2e1c,
      name: "tours-Dubai-five-jumeirah-village"
    }, {
      path: "/tours/Dubai/ibis-ai-rigga",
      component: _361b6998,
      name: "tours-Dubai-ibis-ai-rigga"
    }, {
      path: "/tours/Dubai/oceana-residences-the-palm-jumeirah",
      component: _1c82dec1,
      name: "tours-Dubai-oceana-residences-the-palm-jumeirah"
    }, {
      path: "/tours/Dubai/savoy-suites-hotel-apartment",
      component: _1be6fc66,
      name: "tours-Dubai-savoy-suites-hotel-apartment"
    }, {
      path: "/tours/Dubai/two-seasons-hotel",
      component: _4b97d07b,
      name: "tours-Dubai-two-seasons-hotel"
    }, {
      path: "/tours/Dubai/yanjoon-holiday-homes-marina-heights",
      component: _3df82df9,
      name: "tours-Dubai-yanjoon-holiday-homes-marina-heights"
    }, {
      path: "/tours/Florence/affittacamere-serena",
      component: _126f33d6,
      name: "tours-Florence-affittacamere-serena"
    }, {
      path: "/tours/Florence/athenaeum-personal-hotel",
      component: _8f94e828,
      name: "tours-Florence-athenaeum-personal-hotel"
    }, {
      path: "/tours/Florence/hotel-rapallo",
      component: _902f0b58,
      name: "tours-Florence-hotel-rapallo"
    }, {
      path: "/tours/Florence/hotel-villa-gabriele-d-annunzio",
      component: _c812117a,
      name: "tours-Florence-hotel-villa-gabriele-d-annunzio"
    }, {
      path: "/tours/Florence/luxury-b-&-b-la-dimora-degli-angeli",
      component: _3efdd34c,
      name: "tours-Florence-luxury-b-&-b-la-dimora-degli-angeli"
    }, {
      path: "/tours/Florence/tornabuoni-suites-collection-residenza-d-epoca",
      component: _29f2fc28,
      name: "tours-Florence-tornabuoni-suites-collection-residenza-d-epoca"
    }, {
      path: "/tours/Hutta/hatta-damani-lodges-resort",
      component: _53f3c918,
      name: "tours-Hutta-hatta-damani-lodges-resort"
    }, {
      path: "/tours/Hutta/ja-hatta-fort-hotel",
      component: _03f3d917,
      name: "tours-Hutta-ja-hatta-fort-hotel"
    }, {
      path: "/tours/Istanbul/avantgarde-hotel-levent",
      component: _76a8f3c6,
      name: "tours-Istanbul-avantgarde-hotel-levent"
    }, {
      path: "/tours/Istanbul/dila-hotel",
      component: _02fa4e3e,
      name: "tours-Istanbul-dila-hotel"
    }, {
      path: "/tours/Istanbul/elite-world-asia-hotel",
      component: _1ffb0786,
      name: "tours-Istanbul-elite-world-asia-hotel"
    }, {
      path: "/tours/Istanbul/güneş-hotel-merter",
      component: _1bd4625a,
      name: "tours-Istanbul-güneş-hotel-merter"
    }, {
      path: "/tours/Istanbul/pell-palace-hotel-&-spa",
      component: _5d35f8a7,
      name: "tours-Istanbul-pell-palace-hotel-&-spa"
    }, {
      path: "/tours/Luxor/al-hambra-hotel",
      component: _12c5771c,
      name: "tours-Luxor-al-hambra-hotel"
    }, {
      path: "/tours/Luxor/aracan-eatabe-luxor-hotel",
      component: _f681139e,
      name: "tours-Luxor-aracan-eatabe-luxor-hotel"
    }, {
      path: "/tours/Luxor/archti-resort",
      component: _f3cfc282,
      name: "tours-Luxor-archti-resort"
    }, {
      path: "/tours/Luxor/hilton-luxor-resort-&-spa",
      component: _77f7c16d,
      name: "tours-Luxor-hilton-luxor-resort-&-spa"
    }, {
      path: "/tours/Luxor/iberotel-luxor",
      component: _639dd10a,
      name: "tours-Luxor-iberotel-luxor"
    }, {
      path: "/tours/Luxor/pavillon-winter-luxor",
      component: _506dabc0,
      name: "tours-Luxor-pavillon-winter-luxor"
    }, {
      path: "/tours/Milan/hotel-manzoni",
      component: _11381572,
      name: "tours-Milan-hotel-manzoni"
    }, {
      path: "/tours/Milan/palazzo-segreti",
      component: _2a736b0c,
      name: "tours-Milan-palazzo-segreti"
    }, {
      path: "/tours/Milan/the-yard-milano",
      component: _4cd9626a,
      name: "tours-Milan-the-yard-milano"
    }, {
      path: "/tours/Milan/unahotels-cusani-milano",
      component: _c2f24182,
      name: "tours-Milan-unahotels-cusani-milano"
    }, {
      path: "/tours/Milan/сarlyle-brera-hotel",
      component: _8a53a4d2,
      name: "tours-Milan-сarlyle-brera-hotel"
    }, {
      path: "/tours/Pattaya/at-mind-serviced-residence",
      component: _213d291a,
      name: "tours-Pattaya-at-mind-serviced-residence"
    }, {
      path: "/tours/Pattaya/centara-azure-hotel-pattaya",
      component: _1ca75422,
      name: "tours-Pattaya-centara-azure-hotel-pattaya"
    }, {
      path: "/tours/Pattaya/d@sea-hotel",
      component: _126c4120,
      name: "tours-Pattaya-d@sea-hotel"
    }, {
      path: "/tours/Pattaya/e-outfitting-boutique-hotel-pattaya",
      component: _2fcb7750,
      name: "tours-Pattaya-e-outfitting-boutique-hotel-pattaya"
    }, {
      path: "/tours/Pattaya/manita-boutique-hotel",
      component: _ad8a987c,
      name: "tours-Pattaya-manita-boutique-hotel"
    }, {
      path: "/tours/Phuket/ibis-styles-phuket-city",
      component: _99e09162,
      name: "tours-Phuket-ibis-styles-phuket-city"
    }, {
      path: "/tours/Phuket/ipavilion-phuket-hotel",
      component: _4513c163,
      name: "tours-Phuket-ipavilion-phuket-hotel"
    }, {
      path: "/tours/Phuket/rang-hill-residence",
      component: _4760f2f4,
      name: "tours-Phuket-rang-hill-residence"
    }, {
      path: "/tours/Phuket/vapa-hotel",
      component: _89a7f444,
      name: "tours-Phuket-vapa-hotel"
    }, {
      path: "/tours/Rethymno/araucaria-villa",
      component: _53ee1d7e,
      name: "tours-Rethymno-araucaria-villa"
    }, {
      path: "/tours/Rethymno/atrium-ambiance-hotel",
      component: _1d5ca0ea,
      name: "tours-Rethymno-atrium-ambiance-hotel"
    }, {
      path: "/tours/Rethymno/blue-dream",
      component: _3183aaac,
      name: "tours-Rethymno-blue-dream"
    }, {
      path: "/tours/Rethymno/filion-suites",
      component: _4cc3ae3f,
      name: "tours-Rethymno-filion-suites"
    }, {
      path: "/tours/Rethymno/iberostar-creta",
      component: _1c5f63f2,
      name: "tours-Rethymno-iberostar-creta"
    }, {
      path: "/tours/Rome/grand-hotel-fleming",
      component: _2a203277,
      name: "tours-Rome-grand-hotel-fleming"
    }, {
      path: "/tours/Rome/hotel-poggioverde-roma",
      component: _fc647d6a,
      name: "tours-Rome-hotel-poggioverde-roma"
    }, {
      path: "/tours/Rome/hotel-residence-villa-tassoni",
      component: _12c0fdbb,
      name: "tours-Rome-hotel-residence-villa-tassoni"
    }, {
      path: "/tours/Rome/roma-camping-in-town",
      component: _405c6536,
      name: "tours-Rome-roma-camping-in-town"
    }, {
      path: "/tours/Rome/roma-resort-colosseum",
      component: _86bfc1aa,
      name: "tours-Rome-roma-resort-colosseum"
    }, {
      path: "/tours/Rome/urban-garden-hotel",
      component: _de226b2c,
      name: "tours-Rome-urban-garden-hotel"
    }, {
      path: "/tours/Taba/mosaique-beach-resort-taba-heights",
      component: _7c943b02,
      name: "tours-Taba-mosaique-beach-resort-taba-heights"
    }, {
      path: "/tours/Taba/strand-beach-&-golf-resort-taba-heights",
      component: _698bec9a,
      name: "tours-Taba-strand-beach-&-golf-resort-taba-heights"
    }, {
      path: "/tours/Taba/taba-hotel-&-nelson-village",
      component: _2b727ea3,
      name: "tours-Taba-taba-hotel-&-nelson-village"
    }, {
      path: "/tours/Taba/taba-sands-hotel-&-casino",
      component: _9873958c,
      name: "tours-Taba-taba-sands-hotel-&-casino"
    }, {
      path: "/tours/Thessaloniki/astoria",
      component: _01eaccc3,
      name: "tours-Thessaloniki-astoria"
    }, {
      path: "/tours/Thessaloniki/davitel-tobacco-hotel",
      component: _84b44cc0,
      name: "tours-Thessaloniki-davitel-tobacco-hotel"
    }, {
      path: "/tours/Thessaloniki/limani-comfort-rooms",
      component: _53e46660,
      name: "tours-Thessaloniki-limani-comfort-rooms"
    }, {
      path: "/tours/Thessaloniki/mandrino-hotel",
      component: _d954a5da,
      name: "tours-Thessaloniki-mandrino-hotel"
    }, {
      path: "/tours/Thessaloniki/minerva-premier-hotel",
      component: _95b46614,
      name: "tours-Thessaloniki-minerva-premier-hotel"
    }, {
      path: "/tours/Thessaloniki/mood-luxury-rooms",
      component: _565a6b58,
      name: "tours-Thessaloniki-mood-luxury-rooms"
    }, {
      path: "/",
      component: _48b4c996,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
