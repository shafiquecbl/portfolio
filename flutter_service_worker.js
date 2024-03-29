'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c2724e3a5442a52b6f44b2096ff25524",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "618647d2139f081694148e19b6bdbf16",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a0579d85c91729cd14505be4a2adfe45",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "96409ce2e452a2f97bfc53f93dc14f3e",
".git/logs/refs/heads/main": "17e12f203cdc21d5d915bc70f47778f6",
".git/logs/refs/remotes/origin/main": "07c2b9376f51df72a424b6eb8ac1a1d5",
".git/objects/00/4396134a9d10a42de5ba3b652d30e00a7faf62": "00a3ed21065ba56f4401c8cb7194e74d",
".git/objects/00/4423d27f1a5f49d41f821324dfac707176fcf6": "3047d2131175bc356c26012233cfc660",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/cb00b7dc5f5c9de326863d3d7e0100554b68f3": "21adf9b3999a8b2508d8e3d7b13f7359",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/72e6b00c0e66734921ecd3831cb9a81be22abb": "4be44796c8b59b3856d16bcee2a363c0",
".git/objects/03/b9cb51b728dfdd78526c94560994673860ddd5": "07659b23b302e65bed7cdba3c9dda78e",
".git/objects/03/c449376e6e80894c26641e5ce74e9931ac017e": "4404e15875ba8bae83415d385323e919",
".git/objects/04/56e91313bb02f302b10414d1188dc5bb5308a2": "6e32a1e849fa2c097426bc6ec2aef48d",
".git/objects/05/d3a62f563561cff9770644b3662e56e8750ef1": "db8c8ff0edacba68d48190541507064f",
".git/objects/08/563900fc756788b59f4675003f7c476d7982c3": "7f8ecc525497d5827825b6d940dfddc2",
".git/objects/09/8fc0d582ee6c7037ad5cca6d6d9e3fb78baadd": "4305c6a3a75ad05c95cd477f02c0b6b6",
".git/objects/0a/af29ed2b027b8127ae38e7fcc37464459bb26c": "7575857bef90366178a1d57d7bb4d643",
".git/objects/0b/7c9eb2479734832070dd73b308947ba5fd6ec9": "65daced94deb5a89191bd42ae95c74dd",
".git/objects/0c/e5300ce84280d437872f865fe21644814a5635": "67e0f07878fb0039dfc64099a52420e9",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/0f/97dd02a2b6c5f75cd52c79e1708395b41da7c3": "cbe376fdee043520aee6925701dd8130",
".git/objects/10/18b044b9ba263a3ed5f14b3838af87c22f2744": "c2cb76fa89ca6648e843d3fdbf3ea402",
".git/objects/11/e2661e178d4acad477fd42fa6aee340c1741e9": "d5d1c502e6354fcd06eac685f0233060",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/33aecc8368880bc157b6e7c13694db3713f12a": "810c70bff8fa07b20a600688d5951c5a",
".git/objects/14/ae174f6cb753012796f4e83faf2672a16f80c2": "bb7f607914a668364d21f326066122cf",
".git/objects/15/dcf2eb8dfd832b79213d828b3f97dd98eb6a74": "0e85649a19e8db68bd10d00ef7db7753",
".git/objects/16/2aa79ae8a81f474d75e3f7afecc384b5606dd6": "0c14a5fae6395004f3cb7e42890d44f0",
".git/objects/17/83bd72c0a3cb5310e0b428b58beda131916da6": "085e43a64224858f30ab196b602cc551",
".git/objects/17/ab3be8a4ef46e7ec86145fa25917f228739d73": "296672e48758c54fe269286abcd3ff42",
".git/objects/18/0714e763001c8e52f4d7ccb27673a61cdd287b": "006a421226070e61a2f0075ab8c0b17b",
".git/objects/19/395acb4cba8988644473c8c24a9777b7d82605": "1f4fd11df699d68ec708052dcbf50982",
".git/objects/19/8d9703a621180a54f0bf013ffbbed4e4f8354d": "303972d3a2ff9d7ab066cdcc65a6109f",
".git/objects/19/ded92b91d97be7da3f1f39431031a78b4b5c90": "4c47f3bf0a0e9e2933a892d36176ca35",
".git/objects/19/fceaaaee3acea12c06497305a8caa5c798fe64": "d481191e949c4debab45616f5183d474",
".git/objects/1a/3f8755323c3c6a6cf28d737b7f78e1c8bb1478": "bb4d5c680edd657739e6783b3208c95c",
".git/objects/1a/f6e2c017dafb5a0e054f41c34665b8f8c5e90f": "37145ba0fcf149178d1eca9ec4516470",
".git/objects/1b/9eb8b6dc8d4d7a4e0fbbcf6105c46a8a3a8f20": "15ed7dee54f7a1525c588368d7cb9b7e",
".git/objects/1d/37c0a7f317c54e0ad343f17e0cb85e37bfdf46": "116847b6c4644c346cc3d45b3719b2f8",
".git/objects/1e/7fac0d2b77e3e1e49a1d36255976f8e17ea5cd": "cd1941027a900ce90f13d176bb0fbea1",
".git/objects/1e/9bd05a7cb2a5ecdf98c8aee5d5b6b687b5f306": "290af3c2040cbd1f0d9ce65165101ce1",
".git/objects/1e/c230ea76a4e36d2fab70f5ca1d3bc561989800": "9fbf490097301c51a352d3d1866afef0",
".git/objects/20/954149f29fd5483e08ba58213cebe5d4104f2d": "21764205f0bd7089da92e51a331130d1",
".git/objects/22/9937f9cf0d62cabf93d9686a15a8e1b53835f7": "00929f0ee7c84ec7575f859582322fbd",
".git/objects/23/5257718ef566fa5c66342611d96d2705090d86": "a40dd64653d7b871987b349482c3d098",
".git/objects/23/95171012df7fccfb3e100e85aec6c7474521d5": "7113da9d9f3a24b02012d608212506b5",
".git/objects/25/26c843d3a33d720df7d59900bf7537b072ba34": "13e222a00c92da7c1ae870324f5ad815",
".git/objects/28/5dafd03c1f934352ad92f6967913a488059f59": "2c51e0180aa8db382cb7804b652121c2",
".git/objects/28/c4e0345d2d144d3e4597901bc6c7594e553ef2": "b24980430ac33faf3a2852321bfd672a",
".git/objects/28/e2e7d33480607ccd333bc1455a6b59b919dbe2": "4bf4bd1e9a95414281b8f986a2baf25e",
".git/objects/2a/fe9e066a80120bfb33cef08cb427b65f0df15d": "3ce4e94213bf77eb0c890251ec2c202f",
".git/objects/2c/24094c9c7484744a96c767bde72c756e25743f": "a32f8decdb637f86dc5f125a57df1bdc",
".git/objects/2c/5910938306125644fbbe6604859c04904f638c": "7496745085a43ffa1111245d740ce212",
".git/objects/2e/3613740537a699ee096b05c3604dac4952d555": "6732daeb1fae9a1db6cfd6b9c23377a1",
".git/objects/2f/96909c248187c58fa0b7aae288af4f2ac399dd": "a52b592f8307b9359552dcf92fb990bc",
".git/objects/2f/ddd76d791501a41381d9d00ac58eb0562aad93": "66448689f0f03629539b44bc5070e21a",
".git/objects/32/80fbe05208c8b80877f89addeb372d5ec2dfb7": "44d6720a203add052a8e29ee1d0fc5bf",
".git/objects/33/78bf83b7d689448cb1a118d8dde786e9276886": "b258e66d1e8a5d3eb7cd260f0042a0d7",
".git/objects/33/d77a22b1d2267b1a04f9bc79eafb768f6bf2ae": "f87ac387eee2d7611b7b3738ef2f2309",
".git/objects/34/eb921ef7c0e5b1bb3469f7c52fa47024dfa6b9": "c5a2aab166607edcd36196f79abe7722",
".git/objects/36/97d548ebb23600fbbc5f43dc72d43126958dfb": "e9d61418f9900aaf587e284e16568d62",
".git/objects/37/1139af7dd53f03c74d145e8c4c579d5aefb821": "9731757b170060da2ecdfa028f5caf27",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/1892b9810a25c17f1794b6b6d78577cf841ade": "52fa140b7c2d0a51ef67f953b1565f68",
".git/objects/38/1c1bcb89065e668de578c78c1b0a4e5ec976b5": "9fbfe5e6d68cb89e0fddbf0f9ffcb98b",
".git/objects/39/2be23e70032f35ac530e4d407fdcf0d999bda4": "cb4d209334a6c68779b58a1dcfd4542a",
".git/objects/3b/f1500d46f0861187eb52a54200f00c7b842bbb": "044461e14ad4815cc598bb2fa0344906",
".git/objects/3c/83ce908dfb9a17bcd869881239cd99bd923f34": "abbf509aedd79cbc5c134212040b9507",
".git/objects/3d/d97e9127ccf6642be89d9b6fc725fb1566d357": "ee5e240be0d5dcde14cec2fcd9b8cb19",
".git/objects/3f/722e471e190c95cbd3c32bed42ea6c23d17236": "3af32e0382c26d7c781555bc3c38d684",
".git/objects/3f/7c8f4f19469dd12d9d80dc79175f5e092748b4": "e3fa27e8219f14e72e0968e2f7dbb41c",
".git/objects/3f/805d114843f09c610b0f117adc9be9658eecef": "25ac9236b3912d51860d69d2e60d718c",
".git/objects/40/b6c2528985ae185c27dd7af2b37e996391b2e1": "2032a5967481abac9c427230cb02d6eb",
".git/objects/41/23f52926627f432c6fa09a36b62cc0295bbb15": "6ef8ca10fe9d768ba21f9ec672397d02",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/9593fc9e35994f9c02c1d610fdfde0534afec3": "2104c305e0c55a562ef5b7286291cb0f",
".git/objects/41/cd82cd5c73953c4670f8fdfc28cc0333e56bc8": "b5e99e424dec6af9a1704d256ca5adc7",
".git/objects/42/10f3063a431e5229544f3ee73f686223ec0736": "9e4b6f75b95f39fb83334fbf28b3b02d",
".git/objects/43/4e9ccbc01aa63089cd34d7ab238b60c69b2e17": "7d619bad6b794154953ed3f633da060a",
".git/objects/44/3c39756ba8449df657e19d75ec6bd407bd1b9d": "b329580db682b7954453de595ba35ddd",
".git/objects/45/0c603aa4df9435519a03cdc94a17c88646b525": "081b7889693298666a262b90117a7852",
".git/objects/45/9f9523e99e4e23fbebe9bf36fd2a05d84d29d0": "9f1d9f59bbbd4be3e2749904e7f2fbae",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc834dbd0c31831d5112277afbe124e44d7a2c": "5396e80737745e5c470970ba1d97c62a",
".git/objects/47/2bbbc4e66fd1b33ea20a924c9b892e6209f267": "ade7a20394bd017c5962366e328f74b6",
".git/objects/47/784981f0d211e3d9f21cb919dcdf3c65b86dd8": "c359e15aca95c487e2b4c2382839b737",
".git/objects/48/1b06854c96ea4ca82a7aeb428bc596a09f7b4f": "ad623ed5a9c11af935d1dbe137b6c828",
".git/objects/48/9393bdf00d8e1504574e783bdef12aa3ba447f": "88d972805ab55d8f37264b1720f60916",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4a/8e83a83047cc2957692a656edbc1d608fc2474": "3cb2b44264333f4ddd22abed20b3fb2b",
".git/objects/4b/0ed7812d8f1c263fc77386c63522abe2ea844b": "8228b703f752f7f411cc2aedf4b1c397",
".git/objects/4b/bf54159c312e3000344802ca0cde9ea6644253": "c00b56ea66e7dd2a8a065c172e1aaad9",
".git/objects/4b/c9e2acbbaae43c3da441e8d224cdd14438c1b6": "de18162862ef2d6136748b173231018d",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4b/dfdb38d31f7fde8daa6ca37ccb3d2088bf2e9f": "d5ce2b52274a79b13016b79db40016d0",
".git/objects/4c/13b1984a3fc494b28f906248381e067cf9d6d8": "45f1318e9c5233b315f2882e12b8229b",
".git/objects/4c/33cf0826e4c1a877b4aa3a6be9a44652e3d469": "38b07e834656aefc9e47b58957046c16",
".git/objects/4c/473f4de0c07086aace8d07cebe84bc8be0e7e8": "e0cef7386a607f2084d5d819e032c79d",
".git/objects/4e/4553096130b61f65108055043b8aeb30bd69ca": "69fe5b03cb51f5a3dad5256027403659",
".git/objects/4e/8025fdb7533b37667c1bc75f239250985d9cf9": "589d54141879976cd5eb1b200329d9e8",
".git/objects/4e/f5652f7ade04811ec25165f28378034cba4115": "ea216e69a7b5ca900c0b28b5ec93bcc9",
".git/objects/51/4dddc252486021f5cea69c8be37a99bb482444": "def8c2cf882837191bfc139fbeaccb41",
".git/objects/53/3ca3954d234d6552f1d3f4eab7a08dfe73cb94": "b35ef49fc44f417c48ae70ae51e613c7",
".git/objects/53/6275ff334ec60df863ea8e80a609f0c7fd4688": "0c9a0d9fe42bae93386fe53afc510364",
".git/objects/53/d5e2f73a6d7644c476e513256ebca4fd193698": "b6324cb5b504e1e3203b7ce54f699986",
".git/objects/54/6893c935ecf88b04c2d269ecaf003a22e390a5": "d59ebc084848e15da466ebc65f979404",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/f2362ab66cf2ca137987ffebec3dd5ac2d5a74": "469e2ca6e0c96c550ad00ef33ff29946",
".git/objects/57/b02df5ad278dc980a524119f1fa7793ce2e39c": "29eb7d57309f72d0171b6564df95877d",
".git/objects/58/e2640a5847652fa8e3a14be0f8b7ea6cb458e4": "74ae6ea0a1e11a7e568b84ae5fe1efcd",
".git/objects/5a/61641eb351c59da3dab40a73bccf6dd6a0b251": "278df882b1bae8d1d6d389778fc95343",
".git/objects/5b/315777f98b585c60d9f470f608476005883a49": "d0d6ff00a28f3a7511623eb07a2d5440",
".git/objects/5b/68ccd887e5e0990fd468f4ecedc869c3ead67e": "7a87e998f6744e59e17b0986b3d85f55",
".git/objects/5b/c9c9d840e92888b1197621fbfabda9c5c63946": "2a1ccec4377e8c46619d2599e9968571",
".git/objects/5b/d363b58c4f52f4cc3ae8ae4367bc176daed7e7": "d70629101e43d569c706af50c8098849",
".git/objects/5c/bb7e963e14e4fc73932062e17e8d383625720a": "61103d0ff68380f9bb4fa7ab2069604c",
".git/objects/5f/a91ea076c76dc3cb1f25bfbcd3505881186ca0": "1d8540dfafb8a7e14e7155db482aca6d",
".git/objects/62/6ffb7ae23752d01289b136cdbfbd402ec12419": "6dc410b3e36387359182673241afd7db",
".git/objects/63/37f069a714a2d137627738fe05b4359faddcc0": "31cfd8d6396fe98d19b609b44f989f61",
".git/objects/63/4bdc5aa1f3a87c112f913fbb5c3cee2b7ef2a1": "1c4d5917ed09ca999992464f138f19a7",
".git/objects/63/b732442b32344c584e2e8ab9d0372b50b66324": "472d6d4a6359e1de0ce3464fda6243e8",
".git/objects/64/11e2273df442689cfc38384dcbed8e453341c1": "c816d7bbbda4e5083807dbb44418ae0e",
".git/objects/64/1365a1bcf0f82c2291ff8794542d7c0447ab3d": "cef1744a96975f64d2a8171037534b4c",
".git/objects/65/0a89a974e82a91c802cacb9ea6a7c6af530591": "235f7c7b60d724ea4ce1e651a721ef02",
".git/objects/67/09b1e80da6e8697cf7ffb14274ac637d68a470": "33193a285e87df53bef8f2278249b91c",
".git/objects/68/1f5e06a6046960b0654e6895611be286873f9d": "13b81e5901a3fafa5f26ca088f2e988a",
".git/objects/68/de9c1a7885ad8b513963141347d3910aeaad5b": "dcbd18cdef0ea8423e52efcdee5689a9",
".git/objects/69/03a8a67cf9229a21e2bbbde8870ce3e8d1403d": "7520323d8dccadb69541de15a1a44a20",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/6b9e06c8fb6a562f5ff3b3727038814cf6be56": "58f52019dacda8a9efa67f24b7447c7c",
".git/objects/6c/0ca15658bd51da9c7dd65c7aee8bcc1b67c93f": "68f65dc5309702fb6f1e70be7b83af8d",
".git/objects/6c/bf5727c9704c25d9eb9e2a5905f0402efc50df": "d6b816f6c8cfbc69a5934b1dfc3f054b",
".git/objects/6e/c4e271d8501ec873fbc2ee5efa04e2a21db539": "7613952cb53b406f9b269497531d2434",
".git/objects/6f/9aee10d864e116986dd884a33c6469db5e43a7": "a859c1885f620f07d2fa84dc639c391f",
".git/objects/70/1fbb3c73b925cd3b107413e49816ad8b94583d": "04bdda9d51eb11e45b528d21193bd701",
".git/objects/71/023dee38eb62ada150af90e82df888d10f8f90": "ddf9a65898312d1fde34d8d36e623382",
".git/objects/73/422aac741aa428137879b6020f9ef549220bee": "bbe585bee072f99d76d2ee12e551f302",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/b9c34baa7914c34ccc2018149c84d13ea63838": "affdf543e5616122eb800cf97b8165a5",
".git/objects/74/33605d397b0e1976de2065c5fc2b36822bde4b": "b8dc1679be96fe33a8d3273deb084327",
".git/objects/74/79544e7c8d64b8a3855e08790d41ece1e97458": "50e6c940f1ad7221f9aba14ccec31ad6",
".git/objects/75/f50af3a8a0652475ec068a5b72f0143d8a8071": "d5518eb6571911800f5d8717361eda30",
".git/objects/76/577891d7d9d0698cfdb4560f53d23b8fd63481": "ca80a8d674eb347f22c8c4a2f2133f39",
".git/objects/77/40c376a8c9ec39ed15b5d104bb780043f71dbb": "eddad67e061cfbff1048f599ec18891e",
".git/objects/77/dc255fdd0fd935ebd708743370033cc09b25e7": "b15340438b15ce16c880a93bb4b920ac",
".git/objects/78/c19a754e8191536a1709732dd48ab150083076": "73c7e37fda60fcc6a64df502558a084d",
".git/objects/79/0f4683d31b964d38a602230f19d2c7b7dbcb52": "0dd5986d4d969b4e5d736c5021a0984a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ebea6f28e50b69121bbb431035da758645efb0": "33c20d42e426dbd10c94c44ab3482fee",
".git/objects/7a/8110f903bffd69756405b36f06b6eb054c95b0": "77d3097eddcf503d2e343cec26fea63a",
".git/objects/7b/a27b7a1c6ba18c1a6213b8a6c7011dca2d21fb": "80430933a028a4b8cb41864580f2fa9e",
".git/objects/7d/b34f301754d0b1e17de74471edd77b86eb6eda": "be9d7b3779f0ce507f08f2270352c353",
".git/objects/7e/7681ba9afbf947f9633962defdd1697ccb6126": "6d684e70694092f137277c9f2d7740b4",
".git/objects/7f/1c5d19ff82cda20e95f1af97ac7cf56301f68f": "d0648203890e3616776283ada5750493",
".git/objects/80/5cb306de68948516eaa6cd2389d468e81715c9": "f7d70d3043ea61c97ca95faae6a5c21f",
".git/objects/80/d916241045dc10c222c50e35f1441a8eadb909": "3c8a6101661d803876d15faef9eb85af",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/83/08e09fab6a92d7a620ff9dc3aeecb8901fc502": "04413d1432f186ffa743efa07e178c94",
".git/objects/83/2148b153c0e6bb80e476cc6582e964c9f0b007": "de9e96ba5ca76a78f67dfa1ff3566654",
".git/objects/86/dadc6eca4e4e974ccffd5d06019bbc771247a2": "b8aae9478437d14e7b4842b9a5003dd6",
".git/objects/87/237d7726233a9702702636b4cd2478efacad71": "5440dd09a67ecc2f4df625dc6a8d9d7b",
".git/objects/87/a086700e741e7d94fc60467f107973f6461a36": "5bf91ba1b73f426ccfed2188e7a87763",
".git/objects/88/102702eb2ecf7ecced6861a8682431686f647c": "2cf80d29a719781493a7819fdc9dd307",
".git/objects/8b/4fa2a6e3ff0d051d14fc629d9f63252d0e56d9": "33713f89a9bb83842086e12e9ae333fa",
".git/objects/8b/c8fd0e71b3ffadd55834c20cc7eeab534a422c": "fb0eb1297eb4a57099141ed4ff37c521",
".git/objects/8b/ff51e1e2a46fc599ca4a6eab0c9b3f2cbbbd43": "3eb61dbbd8e8213d804042cff3278e66",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/bd0b9ed1d0d8423fe8b7fd3445f2104f3752e0": "e2eb747b74653a46a0f77e98f262a9d8",
".git/objects/8d/5e34655303d1460f06171507b4ed1e4706be9d": "cc190c1fefae70116de125b9d97a1c0c",
".git/objects/8e/8a4275d5d4990ddbef597fde0537c050ffe687": "095f99c62946fe9ed7ee819380b1ae32",
".git/objects/90/3841018ca2d4e00b44d6ec030407d229517e8b": "e0add32c29fbf379b3ef6ee68d9b8d35",
".git/objects/92/7e07a648de7191cc34cb636eca494b50976f85": "0708201b5a7fba8f76d7da125aece07c",
".git/objects/93/41241a5bf1463bab6dde40efacc2b86ed8adf9": "2c10e353f165aa2f14befbe59ccef8c4",
".git/objects/94/1c495ed286717fc48db89db374b382e7eba5b2": "e4ed7abc67df6bc3f2d258a465584e09",
".git/objects/94/42eee37ca8bcb9ad441079a0fc2b84b4572460": "f1f8df6493437b05a177903bf9930a7d",
".git/objects/95/b5aeaf10c317821fb7269bd84b57f8c940ef1d": "4268f92524e0a6788338e088b9d0a878",
".git/objects/95/efdc87898c4fe6b307bdb51d168ff33d8c9032": "f8646f5c4cdc551fc3b448db7c2c644a",
".git/objects/97/1df5250f10a020b5f1b750e4395b0f41f1b461": "ae832d39c055ed8376adaa1a30b37ceb",
".git/objects/98/4dc0c857f9f196695dc468759c7e2a7bb8c194": "42951717efa9d1382c0d897ae466fbee",
".git/objects/98/ef3417632b65297074ebb801f69a75a6ca770c": "5d560e054147a54a88ff501f6720c662",
".git/objects/99/4d6141a1109312f53e243bce949b657021f108": "e4e69b187d342a3a3e7b55c3d5f4c79c",
".git/objects/9a/4443edec81f3241d7cc491094eda7a3101070c": "9e596ba5d862bbd117085a0a43e67ff2",
".git/objects/9b/d007882c8066645ae767b40961684c9dde36d1": "fd7b24e6cc0f54580cdb865b1d0d71a6",
".git/objects/9c/9380222f869efc28825964e5b6659271e897a0": "9ac9873fa2b14de5373485d46cf9d9c2",
".git/objects/9e/ad87ba54bd95c23e5437a36129972c8c8ecb3a": "52af0ad1d49890344b98bf19fbfccfbe",
".git/objects/9f/ec75bdf6f241f1ee644789aa0a0532501d233c": "8375c40c7088e55ce9a308be44182e28",
".git/objects/a1/3722f25b5852b813e6e08994a5145bcedc1def": "12cf2e3f5c8586b92e03eb7f7a4eb0fd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a3/a0523bd50bad92fda7f57a8dc6bd669af8fec1": "c634dcd0117bf19295bd17bbec1ffadd",
".git/objects/a4/52aa950388f618b83145f24dc57394b6775098": "19707dc069159ead505ada771fab0331",
".git/objects/a4/729299f3920d38527684f9ebd299d45ce51610": "e00293ef21c114973cc53ddec6401654",
".git/objects/a4/8f4fd4314416606c1bb1cc83cae779ce4c37f5": "9ae2bdf6adc6a3f2aa762e4d9db3bb6a",
".git/objects/a6/d54239d86cdaf98e44ac4b2f06a4c1c4b1e224": "a739faa3b692ba09dd108f81244e0ddc",
".git/objects/a7/0bc1a6d1b5e19f085ec42e3be453303f2fa4d4": "5a9a9643e4b765bd7bf6f26e279426f6",
".git/objects/a7/611be4853b2d3467718a7424ec2756971723ca": "f162edb0595967e95d4584c90f4f9b5d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/f07ca0283c28c38297b50ec6a8a59241b8c1ef": "5217587a3fed7539dfbf24ffe70ff6d3",
".git/objects/ae/0aa5b373127a67799288bfb8b5111cfe62ed04": "c47b9d7645f65b58dbb986a17e001f41",
".git/objects/af/d359e8ddfcb4bdf21cc29375c742b420b12ff1": "2c8833b4990ac98937472d42b58cdfd7",
".git/objects/af/fed30457affc32351cd5ebfe9f5fc027e21bdc": "47e8870674e5d35dc34d3da65f2ca450",
".git/objects/b0/536dd2413fed79e5e9a256f8b380647f7b29da": "8b80a1697292a8c0c0ffaf188535158c",
".git/objects/b0/5671047fa5c6a9b1cfb106055a2306a8117178": "25c4fb1b35a6cc0cec9bbf6d2cf7a850",
".git/objects/b0/83b252eea553e57b154e834a69c361423d1657": "61011a0be6505a1af9d1d5ff80a8ef0b",
".git/objects/b1/3ecdd32c45f3ca5c2e96caed1e168b0b645a99": "1d462789f97fb2d3c83a1d89960860f1",
".git/objects/b2/afe73fb5b3cc9f1d8a85ba898c271ee825dccc": "7a7d6335b72f866010b2fcc433c7af77",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b4/1833a803ce05cd382cdc71503a57a14da662c3": "ee1ef8609df89a8f928c9e887f5a0a1b",
".git/objects/b5/4b7bc49a382b284af1f52db005796650f6e9a7": "27f7c1ac4970cb87f1e0069f315e749d",
".git/objects/b6/43eac26151864c23959e58635ed701c26b326b": "c62cedfbdab3b7862b0b48623b7d2390",
".git/objects/b7/161343cab1a42e113845fc812f09053a7b0414": "e9b1e47b3d167f2c0c015d8d2d469396",
".git/objects/b8/bbbbaebf9fa5bb5b46f8fa51605da6fb88ba43": "0c29f7116702d1e71f770f7b9c14d36f",
".git/objects/b8/eed3d368efe1ed578a9fb5148d9cbbc360de22": "9452aa34fecb76147d33b8884d904ec0",
".git/objects/b9/393725c069cd3a329f1b233d6c494be993086e": "b4652d33606c17ff146e0e0b7a25a6e3",
".git/objects/b9/f3d7c08a80922c2019f7212edff63f511b3bf4": "6ad73ed89759876d0b36943211d6b2a3",
".git/objects/bb/657b05f9bd29ef636c07517cf3f26f4e38d66d": "d7a680753087500b3a8826a4dd23c555",
".git/objects/bc/4b5abf997567e5852f19825fe640040cd034d4": "9886b466c05577d4e6d46ce7bf98d19d",
".git/objects/bc/5f05bded85f1aa3a52703236de419ca9285db7": "0d63092602fe7917c85e5692ad605bc7",
".git/objects/bc/63e3bc236638f604026f7355e4a1a8f7ddfc1a": "470a96f555fa0605d8fd7c1387f6b92b",
".git/objects/bc/7fea8fda9821a3a09af1cc4c87efed43e7547d": "095d706e6509118fedbd0cee87ab4cb5",
".git/objects/bd/6d51e2ac690b35ed32106cd2a5d23699fb197b": "51443e3610b307a1438609cb7a65a167",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c4/7fe8c9419dfb45d3b46ca26554176afc67bc51": "4525dc74d50b38ed287ff6a82065cba9",
".git/objects/c4/8b8fae02cb3b853f067cbe951fee6e8dc493ac": "33482a2e8766c91aa607d8df06ece035",
".git/objects/c4/d479b2abf0d0fa75744264600e3e39fa3d57ea": "87a99133237bea01c4403f8a80967595",
".git/objects/c5/98f8072414805f5f56f7a2b7bd25661f75734e": "12de8475bec2b8da58ea42080d34b4d3",
".git/objects/c5/a620eda17ea2275ffff445b256e8ca8c5e2a14": "435df7c26ff39666c3c35d372939eead",
".git/objects/c6/64c228d55a947c0c93e9f98eef54cf6f5d6bef": "0f97dbc4e5ce758d7ec6fda14b7b4df3",
".git/objects/c8/b20b73fa9a2e157bb3d9a33a1b243abcd6c06c": "ae4ca591f725261b633a8fbb0071b294",
".git/objects/ca/3eeec59d460907fc61c16ed649c1d37679363f": "41d943540887fbec784ad3646241b71d",
".git/objects/ca/b734a12ec8075044d62021e1aab464c352eb23": "61e831a4ae4f385a5ce908dc73f4dffd",
".git/objects/cb/2af60213574e61f3ec5a968719bd239813c2db": "fb3d5cec15f31e786a9cdec63a0567e2",
".git/objects/cc/018b22b4175454b8f237a6405c0aed3b585812": "34dbdb05c1991be72541ccfe9b84d3a5",
".git/objects/cc/89ec654a52004d364863e4ddef4e4e7531b96d": "343cc25e89922103ba0f0380ea310493",
".git/objects/cc/908922cf9309da500747dd6b0bdeb4228616c9": "1392e6547644a3d6a551b21a847a8943",
".git/objects/cd/9e099e68917b1268b67c49df25e07d8c54f0de": "ec508575cb02166a3726db7543f54303",
".git/objects/cd/fdecdf88bbd09ca5f7a66045fcd936e9d94880": "f21e8106fee8bd5ced55b243e556c6b0",
".git/objects/d0/0769d33b2e8b2843e1d97a6736d35837928982": "72e0c376b8fc750cb209fe1342f78fc3",
".git/objects/d0/9267aaaf497caaef2915b38c1e631342ed2258": "c742c3dfd9815c5af03a90efc597e7c0",
".git/objects/d1/8014f3a4ca37e6c69c8f015185a8c68f11355d": "92c174e1d7e78e149eb500150e261143",
".git/objects/d1/8d15f5ef6f8efbaa04bc16b251fd196c32aa59": "39dc608f078991fc4f7a5e8f4ff83bbc",
".git/objects/d2/35ba6a7b5909c110462c9b02cfaeb5ce755a0f": "0443a57befeae1048e232791bb0a6066",
".git/objects/d4/02aadd7b520f711eaebbf0b6bbdb142854b73f": "9daa8f2b743ff2dff821ea21de4273c3",
".git/objects/d4/0b414c69483f3572ee9fc02821c3acc65bb427": "bc8b2d173f72eb2fdc016465addcec9a",
".git/objects/d4/3444dfd0a7763d748336138d9d04718bd585c3": "6460a470da9124837ffbe4b58cc7f658",
".git/objects/d4/36883b900873a09aba806244be8a2e5291571c": "9c3250cd624f6a95e9abf12eb3c06d4e",
".git/objects/d5/5c0176e45c6d1fa2109f9dc90552c779a777df": "15b9dde07d5cc27bd53b8accf57304f7",
".git/objects/da/16d01524a0d887b4b163e8979586a4b667bec8": "eedf5b0b000cab019bb132e8ed2f0f8e",
".git/objects/de/34a3128c3f58063670a7ccf1bb39ceeba9bbcd": "f1c94666d62fe982b79a605cbf3daf4c",
".git/objects/de/42e8978657f8a56f40ad2da961aa2e65d43054": "3b2cb1d21fb367b8e344e44b851564f1",
".git/objects/de/b87a831aa035bf637f387ab545392126f198d3": "4cf8d3998b6a414188cea62cf0260ae9",
".git/objects/e1/a32bb8d9e306366f741080cf14f54639e8a0cd": "75ce805eaad523360a9631e12b867309",
".git/objects/e2/41d07cca5ff0f12cfc32cfd75ceeb8b01f194f": "51ec1e9ce7cfb82a41281bc68f7099fd",
".git/objects/e2/8cf9cf0b12c1f60f3fea450dc75b9b1a512d23": "b56c49d2117401e93255d0fb59fd660e",
".git/objects/e4/a57b76df4f6fd318d8f2f74d6b8372857f5670": "f072284e1e98b3b66688ed72f19382a9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2424f536ba908fa1b0ac91bdacdaf93fd6a9ac": "af672b9848f7ca091a5af00ede4c3c8c",
".git/objects/e7/def5ff778aaefb564e7b75526b9875a70ae6d4": "2df5907eed02704538888cbbd7c4c1ae",
".git/objects/e8/0d26351747eaa613364b1e87f3eb299527669a": "532fef006098cac80a3fce51bfaf4172",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/9cd8202e548b8ae8bb5ca8b3b274206fc7e9c4": "8743367a59bb9e113e9ad41dab857a54",
".git/objects/ea/e29122ab94d8c04727a5162666dbfbc9c84bd5": "8e987e8373c1abb7f85d5a5065e06b4d",
".git/objects/eb/04ea24def5e09ff44abbe0d46bf6b399e34191": "071b42f2c1c758ecffc2b34396f239f3",
".git/objects/ec/2aaa04bed7fdd624d174aaee82419a8d2f7a02": "b13e1d70be3fa23603f47500949be3ef",
".git/objects/ee/084591e096bc1276e383a6506dddf56a9474c0": "83c31f3231047c563ef3e8b2167a5c58",
".git/objects/ee/d65de1e25bfa15b19d511f90240347ee5a78d4": "9e087ef916e2e8cf277e5cfce3027919",
".git/objects/ee/de912d9712a011d4b49dbe1ace2b78da963f29": "6f4196fd7eee326bf742b684b479ca12",
".git/objects/ef/665cb1627fc2dffc030b887c640974d09b1887": "288cea1da8b92a67cf9526ff3e14a82e",
".git/objects/f0/9253d799a48b1ad0248f9850b7c9f72672cb12": "03c68ae753c578238a79272a6b56c879",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/c2c9cb82570554b3af73e9e53cbc6cdf7cdc00": "da6f2b54fe113fa4b4b3f0d210eef2fa",
".git/objects/f2/c12d6aad3ae97853f5a6537ea13dad45e84be0": "908818e33c0a0b37d40197aaca0353a7",
".git/objects/f3/b9443f5c44fbfdfebe20c088582c8fbb9d3514": "023bdf528f5ada40c5ea674aff2496ea",
".git/objects/f7/c0639392604a758b8fb240ca02baaa3d77ebfe": "79afd0996d0902a9248b612c9b26c46d",
".git/objects/f7/d37ed592b8b0d349bb054c19399e288dfab775": "b5ef86245d0fa82ac0267693bd45d422",
".git/objects/f9/0937fc85a0bc1238809a8cbfb4e14b1ea44f29": "3458a7ec48481d04460dd88b183bb50c",
".git/objects/f9/79f9b4f8bf147feed31f428c4fc53b29102b88": "988cd59ff5c2b2f4a9e4afee8332d74e",
".git/objects/fb/c650cc502a31dc52ce2b6ffe86eccba59a8d63": "3333fbacd8ee0e4eb85bead4ae5478c6",
".git/objects/fb/cb38814411185ba065ed633fd23c577791294a": "12a334b7160560ea6918622323328a40",
".git/objects/fc/6f2bf5c21e35d8ce8b98bd0279a4555a6e33f1": "f3467c1a94ee7f90f5be4ed73bc13e65",
".git/objects/fc/733953e86f17c54f5900095bed022e80cf6ce3": "9fb0c9babc907240f4e737201aa2dda7",
".git/objects/fd/e2d33509c77a1e73ce4e78ca8c4ca60d4da1b4": "a829fceec9e3877fc6827b4b72a75a6c",
".git/objects/fe/e2299753b5c9ce53fb534ff09c488deeca2f86": "62ef958cbb7ebf897e293e342b99b88e",
".git/objects/ff/44db73739d393b55de3af7cd14e358e6125d6b": "aade0d11b9353779e6e3d4e24248a186",
".git/refs/heads/main": "a802953fd4f3d3aa5194b959712a7497",
".git/refs/remotes/origin/main": "a802953fd4f3d3aa5194b959712a7497",
".git/sourcetreeconfig": "2b6690de2af119726d38635954f77692",
"assets/AssetManifest.json": "db9a10ffce5caa50d5724b3016653ff2",
"assets/assets/ai_art/1.jpeg": "52947f0dbff1f5b7d57b4064286c4592",
"assets/assets/ai_art/2.jpeg": "ccb3b08a2708ecbb11ce1d549814d39c",
"assets/assets/ai_art/3.jpeg": "c0f6008997a2a603848c68d2f0e9db28",
"assets/assets/ai_art/4.jpeg": "ce89cc20c7b1845c4c0fbf188f4958d0",
"assets/assets/ai_art/5.jpeg": "7e8ba35bb2da0107f383bcd540802cbc",
"assets/assets/ai_art/6.jpeg": "17e064794f9fbae1657b72e408ee9e2c",
"assets/assets/ai_art/7.jpeg": "e53daac898292fbbe41091f46a47bc79",
"assets/assets/ai_art/8.jpeg": "967cb82ecdd3c8d92b8be71d5802e3be",
"assets/assets/ai_art/9.jpeg": "aee553fb658ca5ec59a9880004598585",
"assets/assets/drop_us/1.jpeg": "20a2c916a6184dc2f7bc26cf1264460a",
"assets/assets/drop_us/2.jpeg": "875a5538e2ce5b5d4fd43218af07658b",
"assets/assets/drop_us/3.jpeg": "0ccd6064cdf1b4e8acf8016e574b659c",
"assets/assets/drop_us/4.jpeg": "df8c5d9e6fa0f5a40931c46b83700ac1",
"assets/assets/drop_us/5.jpeg": "9272d4ad95f77b51d381b75451a9e3d5",
"assets/assets/drop_us/6.jpeg": "f1921443bd83007a049138caa8e6e9f3",
"assets/assets/drop_us/7.jpeg": "ad4a4aeb37f970c9a438092fc38a9092",
"assets/assets/drop_us/8.jpeg": "1c08a4642f9ab8b7cc1d72ef42e1565a",
"assets/assets/feast_flow/1.jpeg": "6647eb4e4351e999bd1d0cbfa6950809",
"assets/assets/feast_flow/10.jpeg": "3e0be2df0c79325d4054b055db4608a0",
"assets/assets/feast_flow/11.jpeg": "0bb4eaf339acfbb904e3f8a0ef4f15c7",
"assets/assets/feast_flow/12.jpeg": "04bdbadfbd582c4e3988a89dda594374",
"assets/assets/feast_flow/13.jpeg": "1bbbf98df005aca5ac4b121efdbf58fe",
"assets/assets/feast_flow/14.jpeg": "6f33f56a3cb1997d31b66693e1962205",
"assets/assets/feast_flow/15.jpeg": "da066ddbdf03ffcaa5a83022e6bbf6a5",
"assets/assets/feast_flow/16.jpeg": "4bd4a78ffa1d773402ffd2bcaed0adab",
"assets/assets/feast_flow/17.jpeg": "5b90d88d209cee54c4067ab5af310a55",
"assets/assets/feast_flow/18.jpeg": "0ef45d7a3e1b2dd4822e957aba502629",
"assets/assets/feast_flow/19.jpeg": "311b81fdb274c258e04625aec51c67e9",
"assets/assets/feast_flow/2.jpeg": "8dc6b55e2d60c00f9164fe4ada2f4dcd",
"assets/assets/feast_flow/20.jpeg": "c1d66eb2c118824edeec7e8073a14c86",
"assets/assets/feast_flow/21.jpeg": "fa4acf9717f3a07c1aa7cd81de8d2b3f",
"assets/assets/feast_flow/3.jpeg": "c47b2f6023dc15c311aea91018d296be",
"assets/assets/feast_flow/4.jpeg": "5a5d5c747e66bf4f3aa8e1bb077de510",
"assets/assets/feast_flow/5.jpeg": "0467a482252ed5312eda13a3b31bf5fc",
"assets/assets/feast_flow/6.jpeg": "7e11e8490c42135b15efd9136a8468f8",
"assets/assets/feast_flow/7.jpeg": "5fe011318070b171b646e2d10e9d3e77",
"assets/assets/feast_flow/8.jpeg": "4054c231703793b5a71f210f14561072",
"assets/assets/feast_flow/9.jpeg": "504bf9deed3dac050ecdea69cb661777",
"assets/assets/feast_flow_driver/1.jpeg": "fb846246692735ac1d003121172e5148",
"assets/assets/feast_flow_driver/2.jpeg": "fd10c53485f4b77ae02894e82db5eb31",
"assets/assets/feast_flow_driver/3.jpeg": "6d9ef9b92d073aebd184be82b800d052",
"assets/assets/feast_flow_driver/4.jpeg": "19595293f4787ba5f9a4a42e4cd48b25",
"assets/assets/feast_flow_driver/5.jpeg": "3cdb731691a0413fc4c65a0e2b95bdc1",
"assets/assets/feast_flow_driver/6.jpeg": "cfc17828fa2d12b6ec7aa5b41472b424",
"assets/assets/feast_flow_driver/7.jpeg": "df7f1b3e659f5dda9b1d1bb0459d08c2",
"assets/assets/food/1.png": "8b9be2d592d42c401f198563c7e2c09e",
"assets/assets/food/10.png": "c331295867964b70fd110809711b4bf6",
"assets/assets/food/11.png": "37a467960bc65ac833a8c04cd9ce3e23",
"assets/assets/food/12.png": "69480c76b55600b6d347010833ae9ba7",
"assets/assets/food/13.png": "04d89c37621982510789c048cd30a2ab",
"assets/assets/food/14.png": "93a0c259b91c2aac1c2abf14670cbe97",
"assets/assets/food/15.png": "693b951ec1b4ac04d3fd4d76ecfadaef",
"assets/assets/food/16.png": "04c0ecd93707928450a8f1e49361521b",
"assets/assets/food/17.png": "22d86b1d195cbe059afe0b701fbb737a",
"assets/assets/food/18.png": "77f6691c93dd532b01ea8e44f56ee48c",
"assets/assets/food/19.png": "3ab9cd5efcd03c6b6fec0e52c817ffa6",
"assets/assets/food/2.png": "3698406da0e3000fdaf6138f1b44d2b8",
"assets/assets/food/20.png": "e89a4c444e334c992dfa6edbac8ba43c",
"assets/assets/food/21.png": "1410aadd0d1b56c55feca0141837e73a",
"assets/assets/food/22.png": "545807fef5c400ac059257a493f53cbd",
"assets/assets/food/23.png": "b266bb2412178c12df67676e67f4edb3",
"assets/assets/food/24.png": "a87db6aa034a3d097ef50254757a1d43",
"assets/assets/food/25.png": "6eb2bd0fcd9537fafc88883f28aac008",
"assets/assets/food/26.png": "97ddb9d783dc9c17417e59865482ee84",
"assets/assets/food/27.png": "7d9c530c20be308195362eb243d76ba9",
"assets/assets/food/28.png": "fb34974492b6a8520f6847614c6bbfb6",
"assets/assets/food/29.png": "50a11e27db467ed77138876d875088db",
"assets/assets/food/3.png": "b40459ede14d08baf30f8d5d094b9ca5",
"assets/assets/food/30.png": "76104bf5814346b3e06235df62b149e8",
"assets/assets/food/4.png": "2397f0ccac3078ee2e551af43ce86581",
"assets/assets/food/5.png": "c1b49e3203152056b86289e293a799a0",
"assets/assets/food/6.png": "86051c555c72b18919c26d29a6f30e59",
"assets/assets/food/7.png": "b8bf0278a2f1afc84dbf1eb549213cb4",
"assets/assets/food/8.png": "dcbe2c2dc33112f77dc64d3630003071",
"assets/assets/food/9.png": "984520cf7fe837bcfe6ba9567a01ce59",
"assets/assets/footankle/1.png": "73deb1a889eb423a21cdc9cbedfb868f",
"assets/assets/footankle/2.png": "34b49aa8bf8003c3b67d7ee7e87d1ffb",
"assets/assets/footankle/3.png": "c081ed6f9a9ec4d27f79e4b8c6573213",
"assets/assets/footankle/4.png": "9c6217ac1b2004e3ffa6fcc3889d61a0",
"assets/assets/footankle/5.png": "3362b86a16346b5b111bdda6c2c51d57",
"assets/assets/got/1.png": "425879792dbedfa102ff8a6313d029ba",
"assets/assets/got/10.png": "855b03a38ef2dd2bc930a982898b8da0",
"assets/assets/got/11.png": "b905c588bcb7eab1e9c0102a4829b313",
"assets/assets/got/12.png": "5b69ddc0f3896e2029cd89513edf1a5d",
"assets/assets/got/13.png": "c2e8345ef24569289158789a92003cc8",
"assets/assets/got/14.png": "050040a9155c0f4402cb09bbd5eb5b42",
"assets/assets/got/15.png": "8113a57eaf0de694f2dbc602e14f2c59",
"assets/assets/got/16.png": "07f0a933a60a3146840f17ae6a91b7f6",
"assets/assets/got/17.png": "3c52cc6c0996db71813381addb5b148e",
"assets/assets/got/18.png": "851df3a32911f2add6002a709e2bf4ce",
"assets/assets/got/19.png": "1b053c650d15df8fb976ac59191cdef3",
"assets/assets/got/2.png": "73c237c4bb6e463b399775444b141098",
"assets/assets/got/20.png": "4d521cd83e0dc8b0c6124442c9356c5e",
"assets/assets/got/21.png": "412f7174d54f69c7c4c39b1a1a99d6e9",
"assets/assets/got/3.png": "1c6b71d9af1ef3ebc353de8ec175b0e8",
"assets/assets/got/4.png": "d3d2c21330b193b11ec0af892e21c1a5",
"assets/assets/got/5.png": "9c2b70d99ea86dccd2c06d8d397c1fea",
"assets/assets/got/6.png": "6bf189000fe9d9dd14fd8a070e924cc3",
"assets/assets/got/7.png": "941299d59a6f573303dad5114e540e99",
"assets/assets/got/8.png": "6eba9cf126ce159cd0e05712154734c6",
"assets/assets/got/9.png": "9149f06706ce18059a6285b37e907bb5",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/dp.png": "02f4a2fd65ea66192ac456b37068fa2e",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/moonport/1.png": "ff27e1095a6d66bea78d8915707379c1",
"assets/assets/moonport/10.png": "ad16a94a5b36be151a744e36d1fe63c5",
"assets/assets/moonport/11.png": "1cb197e664d8c5178ffbfaf03cfb6ef5",
"assets/assets/moonport/12.png": "4b859cd1eaca79bb68a330a31b2df308",
"assets/assets/moonport/13.png": "b23b6c4a5c8c13216d3c3cc21b3d41e5",
"assets/assets/moonport/14.png": "5fc6ebbe4e22653b90fae1a1a6030d67",
"assets/assets/moonport/15.png": "fed1ef32f3a68776f3a0e96e14382b65",
"assets/assets/moonport/16.png": "84723c718ccfc4ee0f90eb9da59e6019",
"assets/assets/moonport/17.png": "3a95485b41c8bb2370890f4aebb50bcd",
"assets/assets/moonport/18.png": "505cdaa5d64e660253d669afa2bb1e98",
"assets/assets/moonport/19.png": "7d96fda7d3595776d72fbaa51270f9d8",
"assets/assets/moonport/2.png": "44c59af36d24b8e1e6bded863099e6a7",
"assets/assets/moonport/20.png": "98c1c1b69fc9cf885fb695478cd7aa64",
"assets/assets/moonport/21.png": "b03dc4e86d19e07230474558294a582c",
"assets/assets/moonport/22.png": "4922f3878c87c5e767e17fd6436fecdc",
"assets/assets/moonport/23.png": "0c65c25f328946ffd129caff40c19cd2",
"assets/assets/moonport/24.png": "318032f7a0678d511d3b1b148b1ae5e6",
"assets/assets/moonport/25.png": "b8c2d2a7ef57a95b0cd5b01c6c0e61df",
"assets/assets/moonport/26.png": "305f0334f84910fea25782f3f2f2624f",
"assets/assets/moonport/27.png": "2143c8bb3dbe917d4464c2bc6dbe12cf",
"assets/assets/moonport/28.png": "308c9e5e38aa188f6958bd4ccb288f7b",
"assets/assets/moonport/3.png": "275f6ed0dad6db65c2432ff63c9e508c",
"assets/assets/moonport/4.png": "c3243308471cee78d57e2593bb95f60b",
"assets/assets/moonport/5.png": "d4571c1b8e3ad96602842fcaecefe100",
"assets/assets/moonport/6.png": "3789b20b569c5788bcf135f06c94e491",
"assets/assets/moonport/7.png": "9c1a1421143a616abeabf84fc5addcd1",
"assets/assets/moonport/8.png": "64f0eb78b629d6405c269059b9c605b8",
"assets/assets/moonport/9.png": "9303a176c06cc7499c685acd685c3204",
"assets/assets/my_budget/1.jpeg": "fb43a76911e09b0b4fe8e495ffb1513e",
"assets/assets/my_budget/2.jpeg": "8be0799a564c8dc1748621cb0bc2f0ab",
"assets/assets/my_budget/3.jpeg": "be921ca5a1d9878ac98746b0417bf6d9",
"assets/assets/my_budget/4.jpeg": "a39b8038efb6102e12b845fc357d8fc4",
"assets/assets/my_budget/5.jpeg": "dafdf24e13058bd206eb7d0120605755",
"assets/assets/my_budget/6.jpeg": "e9556ec86a4ebb829e6d6ab89aff6fa8",
"assets/assets/my_budget/7.jpeg": "f7c96bfef303ef8e2a502beaf9dcfde9",
"assets/assets/my_budget/8.jpeg": "5986ba3afc327545a12418f8af312ef1",
"assets/assets/period_tracker/1.png": "91a087a7f45386ee9286ba38bd88e054",
"assets/assets/period_tracker/2.png": "0438aaa7d183a062ad61dc924d629527",
"assets/assets/period_tracker/3.png": "c5effccc7d6848d29eed4410070bd0cd",
"assets/assets/period_tracker/4.png": "24a73513189028e13c473d4716b5efd3",
"assets/assets/period_tracker/5.png": "022cb3714b40c5bdcf15540e91e434f2",
"assets/assets/period_tracker/6.png": "3fe41c1c547682c7ef56ea466a5a8cd0",
"assets/assets/period_tracker/7.png": "1f63dacd7f25426520636a13a992292f",
"assets/assets/restaurant/1.png": "c58a4f01aeb4b4da98898957ca4a7808",
"assets/assets/restaurant/10.png": "bbca861cbc0140c520015e85c556ac20",
"assets/assets/restaurant/11.png": "ebf530345a2e8bb62e6018a35ce88e66",
"assets/assets/restaurant/12.png": "91b5f44fb48fb0ccac0ff747774aa2ea",
"assets/assets/restaurant/13.png": "6a361f1cae1e16e377a2e9d29dc0acbc",
"assets/assets/restaurant/14.png": "47ac2b2ade99bcc774d57b8b87125e5f",
"assets/assets/restaurant/15.png": "b414725b7d739d2e67ff54f83b0f4f32",
"assets/assets/restaurant/16.png": "983ad49368dcca1b9f90e2e4ee5318d0",
"assets/assets/restaurant/17.png": "96e52fd5d33c2af3569aa5ac179f1236",
"assets/assets/restaurant/18.png": "d1fe2cfc3f4ea072974f42c21451d65f",
"assets/assets/restaurant/19.png": "e66a8241558edd75a6d6d8dd1603384f",
"assets/assets/restaurant/2.png": "ac90a1c81c3114ebc88fab58b2c94a93",
"assets/assets/restaurant/20.png": "90670a878d7fea217b6dc05121aa7956",
"assets/assets/restaurant/21.png": "c4b376128295ba0a8d355876c586622c",
"assets/assets/restaurant/22.png": "7c77f3966f896758791fe3d917a0882e",
"assets/assets/restaurant/23.png": "d6879395b09c24474987098f48cc73e5",
"assets/assets/restaurant/24.png": "bf2ab357706dbd05650f51f4ff761abb",
"assets/assets/restaurant/25.png": "c8120bafaf8c0c6abe70ba4ed351d183",
"assets/assets/restaurant/26.png": "af061b0049ec33cbb8e6a46e5b3bcf91",
"assets/assets/restaurant/27.png": "33a2e5562bdd58cb1f2c9addc4d29d80",
"assets/assets/restaurant/28.png": "d6f4f6bdad738c90098a0976f3f13f99",
"assets/assets/restaurant/29.png": "44270b08de60ee70722ec78c7d38b5d2",
"assets/assets/restaurant/3.png": "b025825430d7606146347461c99cedc7",
"assets/assets/restaurant/30.png": "3ec405543b017b495e2dc942d9e45f9c",
"assets/assets/restaurant/31.png": "e5470a400f6aa1ca5bc2bd034e04f6dd",
"assets/assets/restaurant/32.png": "12ae7864b924ce45eee2ac2081ff26fb",
"assets/assets/restaurant/33.png": "2b1735bb3fd29e99d2923670fb9c7906",
"assets/assets/restaurant/34.png": "c084c0197821d1ccd996fbfbb05ba12f",
"assets/assets/restaurant/35.png": "0865eb9a7f0c7a5e19a20223c25614bc",
"assets/assets/restaurant/36.png": "79457182e95960c7f8cf2b97d01586f2",
"assets/assets/restaurant/37.png": "51cf4cdd2febdbda6696d98caf7017c9",
"assets/assets/restaurant/38.png": "5463fdd70a99c9bfcb421fbeba7bfe30",
"assets/assets/restaurant/39.png": "10fb49bfab32c7f7edb5c7404237033a",
"assets/assets/restaurant/4.png": "faa8a0bcc5a444ac33e418115ce20b96",
"assets/assets/restaurant/5.png": "70d962321d708470147f37a43ff8391a",
"assets/assets/restaurant/6.png": "f60dfbcc6a467ce60c36629d58e4d135",
"assets/assets/restaurant/7.png": "5f3c9afd91d23266fce97ae085d38d5e",
"assets/assets/restaurant/8.png": "578ea8f3a05c9d0be26b14616e55613d",
"assets/assets/restaurant/9.png": "456d6e5c41737b111af2e63d621ddeb4",
"assets/assets/tv/1.png": "d746fe64095aa508f84bc374d1f92486",
"assets/assets/tv/2.png": "bc11ebd208a75ff954ebc2e2cafc5252",
"assets/assets/tv/3.png": "af861aad77de7a3f39104f5fd63df7bf",
"assets/assets/tv/4.png": "ff26b11dbf0bf6253c9c95a1994ec829",
"assets/assets/tv/5.png": "7bb3174f7f2af28fd335e48780ae7fa4",
"assets/assets/tv/6.png": "e56a6369d1b806ec53b33909d0c0f9d8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "3f3ef8e994ec75911f78ab016cdf43f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "a3ad5f88b638b30812411b4e37920b48",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "a3ad5f88b638b30812411b4e37920b48",
"icons/Icon-512.png": "a3ad5f88b638b30812411b4e37920b48",
"index.html": "48671406ea82b0a7678d4a776bcf404c",
"/": "48671406ea82b0a7678d4a776bcf404c",
"main.dart.js": "baca2619f4a5b4ee58da4ac5f80f7b62",
"manifest.json": "502168388c56809995e2f4fc21b8ad50",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
