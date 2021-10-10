'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c8abc0d58ae8837f21adb5690632b35d",
".git/config": "51cdcd33c88c153bf5d21bc3cb2c01ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "23b2abffc34e4ec3580a0cbd4c864277",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c97ba09d432b660b9ec73afb5f6896dc",
".git/logs/refs/heads/main": "07d69b610fdea51a14d861f5c6b37ed6",
".git/logs/refs/remotes/origin/main": "6eb7f574e04203abb0422388fce2776d",
".git/objects/00/d097a2ba6c3c260769aad4f712b9472a88cb1b": "17b3f261027e79c17777e973254382ef",
".git/objects/02/216cff87088b4b4d4febc74acbfb54aebc5986": "57a7a1932c584f189c44c7f8092b6bd3",
".git/objects/02/39d04867a6577b30dbe35ab84f0d0952d82ee8": "bd65b531eaccce8ea6bf89b8a6c321ef",
".git/objects/02/c9f93a8e4cfcd7001116e1975e7793a726ca89": "6d21aefd3855ab4b610554773e6a442f",
".git/objects/02/eb0d1fafbe47efb3de4b616b420feef951b9be": "dc3d34023e24adae3ea7134a55bef7de",
".git/objects/03/938a2f632e2c939168041059aabe65435cbe06": "0611fb08b8b20a39d4971291cad8fc75",
".git/objects/04/865668b5aa8ffc7152234c7d175456b7ec145e": "dbbb0712d009dc654e0b1f2ef1d7bd13",
".git/objects/05/56df34071af42de15462af1ae018509d483cd4": "8844d9b619bfe8dc93a868ac2e1cbad2",
".git/objects/07/2635029e167eedfe8e0c06419a285e935053aa": "a1ddc1c84dabdb5e5d9c67af3c9db544",
".git/objects/09/a658ad62407181b97b869ca91e2b2a6129aae6": "fe42a66b38972639978e86ba44d3e054",
".git/objects/0d/ed09550ec10486583824919a863ed288a6b3cb": "84a58aeedea364d635f1a18eb1167224",
".git/objects/0d/ef50ce98eab6bddfe84254752a50c7f70412b1": "f31d14c18619941aa180f1ee53c828d6",
".git/objects/0f/811aee841b83efefb8559484393ba37c77266d": "92f2a5155499a6ea42e54cbb2852194e",
".git/objects/0f/bd3e5b85973d44596ddcb532b5fb330e963d6d": "1a997e24984c7411483bcbb3772bfe47",
".git/objects/10/e4524f56a901c7eb339e6029c4b026c32619e6": "169016f8583725cfc90ab09cb0b0475c",
".git/objects/14/612738706bd60d2b4a29551d1cc6e5a7bf6ace": "c1c95eada843424b3d61423810ec0c96",
".git/objects/17/16512f0e9b0ad7116a06021bcac673bdb74219": "026899ea67220bb92e7559eca57b3aae",
".git/objects/17/32394091b63e3e166a2650eb3e8028f66d4d3e": "8df1fc465c20afbb9068506b40c94dd6",
".git/objects/17/a722d22e16204bb2b99c41ee57c0bd3d657350": "1faa536c074cfb709501dbc1512db860",
".git/objects/1a/5e2ed0c183160ca0c37a0423c0708e1ca33e28": "189bbb26993607d6fccf18e0136a9130",
".git/objects/1b/3b5f827ffc03113cf0084d1f1c25fcc790d029": "7aeb00b5f8b394ae86883ea11ce926b4",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1e/91ba0563b03c0f3c957ac432cd6c494d275660": "25d47be362fa64439fe95e50380401a0",
".git/objects/1f/434b799e5314e39297a0374e2e3a96c7a30deb": "932ca271042f1fe1ffbd4851ed4e5761",
".git/objects/20/ee23fd580aff3bd71ebf80942866f04703d6bc": "511d9a5dc60ef6ff2fe6d32f3f28dd3b",
".git/objects/21/91ac86076d0ddd1d9287d3579c9a5273ca5657": "d5c5d927c12ec4b77fff98faf533b3a9",
".git/objects/21/fabc90eaea169a5844b4a9cd84209acb1a1054": "df5dc9a93afe796d21bdb1b598b365a5",
".git/objects/22/72e0ebeb59b1deaf1e5ead5a371f4eb949eb0b": "9195e11ad3f47266e346f63b4f2be744",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/63c142c1b5ebe3f2b72ff522bacbc72d36cb0a": "364286df00f360f38d5e8267a2ef86a3",
".git/objects/26/77718dc762b49afe4e89e7aa75d29a5c4cc521": "9b62223cee519b3241b98c382a3829c9",
".git/objects/26/7d97cde051abbbfe6f00220c5acb42b523a0e1": "d88b6150c875cfa0fbac5839a56b56df",
".git/objects/2e/25c0ec2867637df694640e73f931ab81927a09": "e2ec266ff6aa020598ba93cf37c4d58f",
".git/objects/30/6e53754467d97a15d628bc5fda9913b467e3f2": "778b1295344c149369e291488879820a",
".git/objects/30/a018f32a0160a523715eb596a5d625db567d7d": "b6740632c6fe4531b96485b0fade626b",
".git/objects/30/b67cf787760e2679205f540162503adf87e97f": "c1ace787f6dc8bb6233be7b3afc771fb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/8f0af3c404d692db8565eed1a3a227cc38df32": "dd8e26ebf8e14d5472f4d02402010db6",
".git/objects/34/cc6ecd21e9562e10c2c4b41b978ebd499365de": "ee51b2ceab2ceb848a26d91ee46a60dd",
".git/objects/35/61cd52b603aa568f68fb273959fc596869f9ee": "b65d26420565459253ad76cb968dec32",
".git/objects/36/0d3ba7a1e6aea88f249a5381df993ebfbfe1c1": "9a7ff7da6098a212c1bc6dbacc7e8b55",
".git/objects/37/0fb38527e72f557bfd26e771b1d2a88cd1a550": "8653a0100998e2bfdab23e7da85c8eb2",
".git/objects/38/08a33ecec26fbe836cd85847ad23283ba94a70": "5629cbba32b13affde39c97347287893",
".git/objects/38/43f0e860a551d75769ceff46455a60132d96ed": "45490506cbc781586361176c1de6fdb5",
".git/objects/39/5a03f94169e35b4282f698ad15ccec7551177f": "26296277aa6bdb80a72b5473f259c65a",
".git/objects/3a/6bbf6c200cf62866ba66b93c2179c6bb77c805": "2fc7b1b6646b18794d3f046783b687eb",
".git/objects/40/55861e1ceac96b14f777d48b949f25dfa9297e": "3794c5fbca8f5cd062caa49fc9d85c89",
".git/objects/41/2b90b41c8f41fbddb534dc6c35d79d4de9d04e": "539b9e62b73d18ac5ef32df63702c120",
".git/objects/41/48e54ff92315c29e7f4daeae77054a01348d7e": "cbc1eba19473bd8565e465dbeda2cf6c",
".git/objects/44/4fc7f9e2043c8428cd6a071f3e97a7494e67f2": "ae52b927559494e585a2b5d871e6d722",
".git/objects/46/013de2d134eb1f1ca6d05d961b48b9ba7f404d": "2da0bda0620ec76df481ba86257cbd25",
".git/objects/46/c1b73d88277ece4700478e6d8ef679c03cea8a": "f75efbedc2d4da393b04586e5685db66",
".git/objects/47/6ceb60376c0f4780f79cfb1e26aa221faf3a87": "7120a4f0a2bd37c0ac18042028aaacf4",
".git/objects/48/0282fa4ba7dfb31f37e7b5bdcf31ca13e9a1c2": "e64b28eaf459929b29d031a4e6ef5879",
".git/objects/49/65b80aea694149278bdd876bea78bcd4ad77e9": "a9c37f8857e385a673598dcc56dbbe1a",
".git/objects/4b/6fc57d8319d237c300fc0504e45d61f8f63eee": "c7e29b13b1cccc9fecbf9b9050b886a1",
".git/objects/4b/89bb919b55da86930dbbdcdc0e384c60b5b13d": "88bbcea6166632193801605da9d43866",
".git/objects/4c/d15222b72556482ddfcfc1afcd26ebbecff41b": "4899aae26c5ca2818562bc4ea8626fae",
".git/objects/4c/e9ce5d1b9c8747102808f5d87ff6ce281fcdc6": "90f9e6dd2e4a8ee89534ecb68501e5a6",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4f/3c1345d7a69d5b1fe154c2fa445b45bad67126": "256b499aa5659409014e969acad2ae75",
".git/objects/4f/b23f03fe0e6c43f1779213a692db0d8d68c291": "14ed9d68a43c3645c2f0a247670fad8f",
".git/objects/50/3fa0249b37d79a3e4df597611c059db83d8a62": "7b249b8503f6a4b4287c6a474b0070d0",
".git/objects/51/dce6ae3774bc3d7eb7056313a00dfdf1d590f4": "9790715dfefc233f94decd06ceee46c7",
".git/objects/52/53fba0075ca8880c9cc98417447fb43d098f56": "c332663b9fdd4a58e7bf1edd222c9258",
".git/objects/54/514884517242f60aa91dd99d7da69252c23b42": "c3e1fa77152fc196c295247a63665033",
".git/objects/54/682200047004f27f91cf25cb1f895e9564db63": "59fba29d38a520921fcf703fc49d54e4",
".git/objects/55/25776ac9458c99f351240e3cd678e5e9685272": "9271a84ebb283751a00efbfe9de378e8",
".git/objects/55/ce695e5da79e639f7d6602a1f1e88f175eedca": "379dc7e9eaf2b6a671e805eda8bddb1e",
".git/objects/56/4e57ed27eab3591f261613eb90e4990aa60766": "c6bd00892f87dd4144581ba8579a4cf0",
".git/objects/56/eb76d7929f71e87b60863e8b8cddf8b91b8822": "378fc6dd039ac9b29bf808590bf6b5e9",
".git/objects/57/dbc3956ab9baac25f5bf4025a2f8eb68e5877f": "a6d7634773430d3a65d70ff4e842e29e",
".git/objects/57/e8a5eaff9d45780e536579d46358c046f4cbb3": "b5a06c80f009b62b46dd7c4e2b99f9e6",
".git/objects/58/394848894ce51a6878d85eabea61bd0ab4aa85": "5aebe72536b3aa11db25d6bb8478aa8e",
".git/objects/59/5ecd564cfa928c24f621a0b58f1cc7bb336670": "db3a216a55b92844293960b0c2d410fa",
".git/objects/5b/c87ac8f8bf9bdd543119555f47566c274a712d": "546bf1d69fac91f5ca18113b93f4754e",
".git/objects/5c/fec509c6fc40c30dccf959a861ebc7170a5b6d": "6c8c07f3d94e936df963f479375d7bc1",
".git/objects/60/750563e0db4d062b170a1daf18ed1c5d6882ce": "4006c048739e4314b089dcba2a5dfd84",
".git/objects/60/a92acb2dd3fa86621062b49150364355915e94": "c0c60fe84ef8c5006326615fe17747bf",
".git/objects/61/c4eef34565e11a107a7dd4c1fae063dfa5278e": "f4eedc5e3e3ea6e794bba17f70c82f71",
".git/objects/63/a33132a2f64536e14dc04232da8156a46fb9aa": "a6c617d0af1be8554acf0588c4539031",
".git/objects/64/2543f6c8afebe978efd027eeea10bf4bdc6aa4": "86050b5c45226260773bdc2ea71121fa",
".git/objects/66/9f3c65b2a47ffbc1cc5a5be7efeac7ce5dc5b0": "5d17dc183a54743b2bc3f15b18633b59",
".git/objects/66/ed647c0ad87dc4df2bb997733c05e8efa3ca33": "560f00244eb22aad855e8bee627ca386",
".git/objects/67/5c092ddee178a8b089b529cf07a80aa1dedcac": "d4301bf93eee95307b2ee6138fdecb7e",
".git/objects/68/f524818c1aa61560dab04084bb1dca8ffd5a9f": "e741159d6d6bad2b0cdcc80e20f8ffbf",
".git/objects/69/39df95d99c1c5c9904153504239529af07af46": "5c701f24e120ce1ad7c17db43854d55b",
".git/objects/69/5be4fd45c7277556449983e257be98c4d7657c": "2d677688693ee5b62136bd7ca150b501",
".git/objects/6b/25aab73f80f208660fa1ab53c333eecb154c2e": "fed03233674e001b539f2bf129c93fbc",
".git/objects/6b/f59465ab2195d237c92b4d93930c3052fb1e37": "20126ff34f3fa9de40e420901cfccdfa",
".git/objects/6d/a9f33b3ca7a1056a0c9fe7a93501053d90808e": "d20b92a686451d13f8e6063977b97eb5",
".git/objects/6e/b9068434371a9f793c7c8c7e56e741cb0dd29d": "d22a2dc4d43728a4acdc74fc455a5ff5",
".git/objects/6e/ce303cc403f954b44f65c3b268fd96c068c360": "aef4444435d8d5c2377ca75f4c04c17b",
".git/objects/74/f4651d3e46a3cfbfddd230b5993d211087c4bf": "06ff764b83536cb2309117a1e5fd0ce7",
".git/objects/75/44f36f5d6ef9b4f8c697663db8d65ba0568ec4": "0af4d33716ec2fe0ad16772c0af978c6",
".git/objects/75/6aa07ba26291d935828a72427e32af11fcb2a0": "8b22bcca236711adfb55976459af47fd",
".git/objects/76/e27c36758ec8a71581b3b38f42237dbe8b0a93": "8665065f00f63e691ac646b74e7daa6f",
".git/objects/77/df874d6b851edc1cc5dfe5efcdc89fce8635f0": "2bbdaff39ddd5af9dd543dec71c3de8c",
".git/objects/78/708ad2c5c2de84c5fc2652c625108f37e917a3": "9d20d5f0d5fc9070a67d03a389841105",
".git/objects/79/15e039d699ad47c0f5e9478409d59b6ef18212": "0e906287d6d5c3aeedb571d5a54d9882",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/25d5280c1474d5661a19cb0b64307c65cd4bcb": "15af75c5b75da3dc3847944201e7cf44",
".git/objects/7b/362fae5c044f2d1f3143bea00cf33e524218ae": "b7dcba4c54944399919941b204324d1d",
".git/objects/7b/375265a0fe1485b4c880001fc065ec64df7b78": "6082e34085386ecbfda7e1c8f31d8051",
".git/objects/7d/b0405432220b0371ea0ab688598dc8e33b70f7": "430e3a45fb3dfd30ed4dba5c9bf1b0dd",
".git/objects/7d/dc0f4a07a9da11e051b9cd2d91a149fa783270": "b5e4d8dbcced72754be3b4d0ecb662c8",
".git/objects/7d/fa5c86df5077332dbbff6f132d0aaf2c29a9a1": "3fb5c3a695451febbf1723a9da5f16eb",
".git/objects/80/040ca7da41d855d3e807551087a07af981dbd1": "e5eb7773325e96318d83246c52ca5a01",
".git/objects/82/274cd0c93859797bbf180f9d111bdcfea3d695": "5eaa00cc6655f075dd11a276c8dfcd74",
".git/objects/82/e0ef196bea4390fd95c65f412dd6bb45708140": "67e43973972ffb990fda7a77f539dd85",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/84/cebe54ec9affe1cb75cab6026ab85fed099659": "1f672e68c1c2393a34d094d91f28dc68",
".git/objects/84/d5b8aa9ffebfdc3bd0d240f435cf5aced4e97c": "e52266d270abfd208db72954320125f4",
".git/objects/85/085f324d553d1f0eb7df3a822a0f96b9a2f458": "62ff9c343a882d64897c709d18817ba8",
".git/objects/85/5dfe6e0d0b1915f1419a03c9f23e4a30a203b7": "2e61384b92b9fc6f991010dc49d3ed4a",
".git/objects/85/68c9622c119c8c709a9cc0435a09fe9a47fd2e": "cd4ffbc244ffd43e328723fb8eefacef",
".git/objects/86/1e8fc79e3e249cf5fc9a229472993fd85fc4bc": "5a9cf1122ddb96c963bc7636b3df3116",
".git/objects/87/fdc9730933298068cc00461dfd94f448282290": "36c823998cdee8f9f335f03d8ab32eda",
".git/objects/88/3f541f6049f39357843385687e26a38a185392": "9b5727160a587d036efef7671b193524",
".git/objects/89/cda5d1b2cefa131eb60e42639053043cf041ee": "beb6d6407a9882c318bf25ec25fdf9c1",
".git/objects/8a/67e08cbd3d5d6e70eaa1db596c5885a8ceb9fc": "6efc04fbe5b9b1b34dc4f7e48379613b",
".git/objects/8b/a1974cd6ee8a8031f416951803e10a8e7b5881": "7fdd42e90ef1079f78df5743092a9ca5",
".git/objects/8c/8c3b8bd258c01b6f59f1aebea278fa420bd0c6": "f47f29bd352a986fdc494f8c703fa6de",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8d/464051b12ce45c12e728b9bed3a987eef53f02": "5139f0dfd719bcbb06533551761c8dd0",
".git/objects/92/520b1f939b113c8bd91534f27ec1ad4e653e2c": "3117874ce5e1445cdf50421dcc85cc27",
".git/objects/92/a8b47326a3c0f920c72429e35407ef92b60dfe": "4d0118c1aea0df3894b864a3006133d1",
".git/objects/93/fa15295689a960df7a4846e9c31639e65552a6": "1c2e5f1bbd66b6485a25ab829930ae26",
".git/objects/95/e0c22add56e78df6879ad747ecb582645f2699": "aef90d9edfbd7524798c0d1dd32df403",
".git/objects/96/628378615e05c8995ec319477750e6355d729f": "1b6719ae8a80b53bb6c90af255b1f9e2",
".git/objects/9b/1fd4d642863e3e335e0e20c8021d87f182f244": "382f36eb44156c0d0f08be2331283ed7",
".git/objects/9b/3e1f2a2b6a1412bdbe83bda5250b8eed27bb19": "48987399290dccef9d6f8eda43a09efa",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/6889fb5f3dbb6d36f2d8692a03583c9901f66a": "4b5eac4cf12605886a22a17dd43c8c9f",
".git/objects/9d/fd7811bb55efa07b32673401f1ee827a7674aa": "ebcde14c1e888614ce5a45fd35cc84f4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/fa5ffda13f85843c0c431341b0e871b3a3dbfb": "ff2fca55385a096bb2ddc3763a5147af",
".git/objects/a2/8b9ced4be2bfb67f5d54d8d0720e80963ccac4": "b0483efff06b7d39751ae02b81910d12",
".git/objects/a5/d843856248ebda00ecb60cc8cb3ad741f4aed7": "72a094be7781882f1419c20dbfbfc3d3",
".git/objects/a6/57361ad7a9eb821d34c511462e1b9937986641": "9ff17369a2456b54ecca9c8a53df6686",
".git/objects/a8/a2acf8da880358b3c835908918ae7be7144c7a": "50bc396542a8f0b0229d7dab34043b73",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/b40e2585025ec678954e03941fb7a46ae65e6a": "fa21bde598cd0152ee94472984c8a805",
".git/objects/aa/35d537308eb56e3b379d40df13f8d2b35767f6": "1d33f8ed06cd2ddf26590d0bf2d09ea2",
".git/objects/aa/646ac8085444d146f723208fd615683a7bb315": "4b587f97f8440294c6c3e91658fa3dd3",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/542277333b991b69ef4ab4a14f028c6d93b418": "35e0b6a8a908f3b3782060f73c10c92b",
".git/objects/ad/70c61a1da6b3483072fb041d62690298caf3df": "0d8688840b5a1f0815a36f6f9bba7891",
".git/objects/af/6719ace2c155cee049b7f456c55cc0dd4a82ce": "dd438cc5aabd42f23ea22195c31e8875",
".git/objects/af/803a1144e4ffb95f01d98815d7913fc33e3610": "46aea9ab639ea2a35f4bb3155491a231",
".git/objects/b1/975dfe6634a095e41fc9bb3f4becbda8a140e0": "1d30912a33eae41cdf394201f9fa364d",
".git/objects/b1/979c84b530ce0c7feef706ebd18a51bbe1d18f": "7e49c49987ccf58e8968f2472cbd897e",
".git/objects/b2/f052f87ecdf59085e941a444cd46033197cd94": "1aeaff7f021ef7db6bc74a2f1db93eb1",
".git/objects/b3/f42518db047e8839afb5aeefe511d4f999a122": "35b1b241c93534f492ba230e4ba8b945",
".git/objects/b6/1ec9d031656483a8d6315dcca8a3e0e1f1494b": "7d01bee0dbb1143268a11bb8304213fa",
".git/objects/b8/775a84739dd1e23c25eb62930538c64b4d9a5e": "4db0fcea6c74f7bb820e27cc1c706509",
".git/objects/b8/c7225fc07763fa5e10e6b025671beeb2aa3916": "767552d90a8d223827a34fccca9e9e1a",
".git/objects/b9/4cdcf8c9095361488c534d5823837fba4f8c44": "94c56ecb6d5f9d47210520d60d7144ea",
".git/objects/b9/ea343c4f52a84cf65debeac6ce877016c6d889": "fa26c759a752b2eb00716c776028c297",
".git/objects/ba/d78248cab2f45c8d7de3df7b6e737256ebd26f": "29d80889a182542313764078a3cfb6c2",
".git/objects/bb/c62f08e7e8c261d33f198df8d1998235bf1341": "a5ded246b2e1ef2ef15452984b6c5819",
".git/objects/bc/1b72f9a3fc82dc26983bbee09fc2f5a2dcc7e4": "3fed7688d76887e7c46bb7f26b9982d2",
".git/objects/c0/40d6946dd5e62137414ca42509702faec64b62": "fedbc6ba37dae4702e6bbf61554c03f2",
".git/objects/c1/12afcda7b2f0e0c4f838ed828aa0a3161b9e2d": "19e25bcb7c14796e663b4de1427cd4d3",
".git/objects/c1/3a6dbccfa04d533cace6b1b639b16177fac228": "d132301bf4dbc65d55fae8e7f42aa9b6",
".git/objects/c4/e800ddb17d4f8f059263730d19a79d83d29a0d": "faaee0fd6081d8c0949201eea88e3eb8",
".git/objects/c5/0ba95dbbe9a4339c9053ea4eb2a86b5ae4a8cb": "ac6ec8adc3133d6ebce9f04936221ffa",
".git/objects/c5/6d6dd11f7de5d9d29344e87d9be578a27ea33d": "80d9464431048419255a4d54b9e6d070",
".git/objects/c6/d0cffc08def1ff2014641631748a58213885d8": "96aa866bc9081eb2f992d090ae986c4f",
".git/objects/c8/76908880a883176e2faa10f2b106ec3b78005d": "9723faad417fff108fc87ec748d135f9",
".git/objects/c9/04a5ba56486cb79e15b86eb70173d8ac91a779": "03f3615864b1b2c8132a1008380e8c72",
".git/objects/c9/a34a170f077e8066bc4f5875bc916d6fd150e6": "56a776c6965bbebab93c62884c5410d5",
".git/objects/c9/e1e4f6f06453c0ee545b0f60991d0f84e910d8": "df1683cf1fec1317da9794ebda0eb881",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/ca/b0d6447aba4d3ec9fd52be1fc89db38f7a3a6c": "b0ae29a26816b6a46e06ae6babaacdd7",
".git/objects/ce/230b225a097e7b0d5962796e3339270e45cf3f": "76d2094a84917db27948db3bbf10c462",
".git/objects/d1/6bcf7b4f39b7904f82349d133e690027ddc7d2": "bebbd6cb8390206d0dae3e9778956d75",
".git/objects/d5/8d4aecced455bd8329210e9fe635ea7831bb0c": "3cceab6d1a07890bd99c09ca11bf3bb3",
".git/objects/d5/e8655fa55fd0c329fdc2b76b816110c78d39f6": "fc14e177d2769ab65cf526fc8ea31e6f",
".git/objects/d8/444cd23b4a56586a2212bd10eb91a18f8d5c27": "159615bd8e65aa15e4d3404da6ebf567",
".git/objects/d8/af13798af44678cb807421ed6be461df7ba061": "b5622476dca202c7d2a40dbb224d65d9",
".git/objects/d9/94f579e54fb9bb99501dc970c657cef823e379": "777e008f7c7824aa55d5ba16ddc31aee",
".git/objects/db/11118ddf0b146058f1aa4a2d3d73425489c9d3": "0c32c39fb6e7ee0fa3ac32fd4c97ae65",
".git/objects/dc/7e3e43229a3d01260f345cafcec58399cdfade": "18b6eb683b144a9faf888b69351471a5",
".git/objects/e0/2fa772af4822cf052de9fa5646a778065f1103": "6cb4b23c5240656b76201a0f80ab7c44",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e4/1a57a971ba14a5bdc31894b0e7362b6f3d168e": "40ad7d196668f4f2549f11e1ea81c3db",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f6044733ce55dfe912d18b5928c9b98df899c6": "37c60eb79cdaf06c4dc72b712f430e8a",
".git/objects/e6/82db09711a9001a489854f0164e94a4d4da24a": "38a8a7586ce55103e2ff6f5b1e73cf6b",
".git/objects/e7/9c3a36c511a4a5e3abdf25dfcd5157011dd043": "9a85461a31d675df199c3775089a6d45",
".git/objects/e7/a1b602376e24d512ed3dfa01bba74c11f0b58e": "f583e634a91885fa631f088d73a1a3c8",
".git/objects/e7/c6e9719206d673289bf36dff01aa573316f52f": "fa1df393fe958df64f3e20ae2c2957ee",
".git/objects/e8/0ff295c433233b2ec6bf7c22e8c2fee965ccec": "1f0598891ac8823c9592a5debee06280",
".git/objects/e8/dd73acbdd74dab100bcad0b5bf92231a426068": "70468ca63e1647e18dce5b0dfa2251df",
".git/objects/ea/65207e2032a327535d8310e4b6df618ec9b060": "c7d99c309951da03a81add1a4f158a47",
".git/objects/eb/e79af91d84c431b82db2d91b4849c919f6bd57": "d0ada710dbd02763aff9c5bcd29680b8",
".git/objects/ec/1eeaafea397eab089159762b114f95be48cafe": "466633d95e7e10f899f315d246176cc9",
".git/objects/ed/b2d7f29d3a6aff32aa9bb7872d6c4703d9a2f9": "836f2fed2fec44e30c10548a83947a87",
".git/objects/ee/ee4284e97e6af4d7fee45f21d39564662509b7": "54c1e3136e1c238034bfbd96d033e8dc",
".git/objects/ef/a696a285e4bfff0dfe9009987be4995a278d80": "520a4d4b3411f8ee4a07e6ea45c081db",
".git/objects/ef/ecf94d58dd95f3c176e019ce10cfb62f43aae8": "a09c10bbc4f5f5b2c17c299d47bd5c70",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f1/c5eb6deea8c80c9f8ef5284b85fde1d44f212d": "df92043b2020b42e51ef6be0020f9b69",
".git/objects/f2/091c0a7d2b377c5f263d57efa20526b4a83283": "a66622a6dfb85975c1e2b34bc2a7e46e",
".git/objects/f2/8f99b99cdc7b2ed0b81e523ce817aaa6a66c1b": "03d514159881c2f92f62e4a853eac6c2",
".git/objects/f2/90aacfb12fde8f7405d7f71ac86a366d174a9d": "c1aae28d1873b666452c4c82c11b2c7e",
".git/objects/f3/84c96d1b78475aa32adcee6c94dc067d122bb9": "af8038f41751eaf006757ee796f64f37",
".git/objects/f3/bea5c5ceaf01756d91de294d1963627743c8ac": "84e7cbd39e3ad8e8b5f241f91f904381",
".git/objects/fa/6ca90d6b1b184d74863bd1a7ff33baddbe1e80": "8b5b43d7f8e928a3a206260265112b52",
".git/objects/fa/f4e0babb906ccb5b301f4eebb6b2085ff775c1": "d77d818376adf4d3bbe469108015f90a",
".git/objects/fc/2d229e2d17360976e142f59d58ec13e2f1ddda": "7b7d4ddc79519a14d1a316b09cd88e3d",
".git/objects/fc/d3f15a9706bb98f32c0f61393ad4c496319222": "4a9f20a00e2a8e99a15c4468dd4ad546",
".git/objects/fd/6dc5b69602e0d8482a67a87092fb92e3c9453a": "303f46e51227fab49df806d1654240e3",
".git/objects/fd/984d089464ba072e9147f1fbb2b1d331cc0cc0": "0afd8bf097cd27f1501ae7e738cd1891",
".git/objects/ff/4a493b24abc179f9e8f96f0642540b74e2c169": "ee305b51db1d79d7795f6376596b5c9d",
".git/refs/heads/main": "5f0bfe502d2821151b7433dd7b2a6f29",
".git/refs/remotes/origin/main": "5f0bfe502d2821151b7433dd7b2a6f29",
"assets/AssetManifest.json": "e8d249ba12342f593887c63a5ff3c663",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/21.png": "f528465a93c9b9522eb632673a4348c9",
"assets/assets/3.png": "4f2e1db7b6d28b1ad85d6b60e36a36a2",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/projects/1.png": "1cb71dd8e1f9e2daeab241e98a554ac1",
"assets/assets/projects/1p.jpeg": "c8335efb62ad1d59635c99bc327b35e8",
"assets/assets/projects/2.png": "8820cbbda83f026f541011c584151f2f",
"assets/assets/projects/2p.jpeg": "6b79b125982697822a9ef5f8b4058004",
"assets/assets/projects/3.png": "ccd5ac6559d2c3647b3a13edde167fbb",
"assets/assets/projects/3p.jpeg": "6dec9ac870a0c0e0a663a4d198de4e6a",
"assets/assets/projects/4.png": "677735f52d3149d3c3cca119c61dcb7a",
"assets/assets/projects/5.png": "c342c5df9a9814ad3e6cd36708c9186f",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/FontManifest.json": "53db916e40f5cd339f7e07ff4f1303a1",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "740b382dedeac10a0afefffdda3ee284",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "57838d52c318faff743130c3fcfae0c6",
"icons/Icon-192.png": "57838d52c318faff743130c3fcfae0c6",
"icons/Icon-512.png": "57838d52c318faff743130c3fcfae0c6",
"index.html": "370482ba368eb5abece7d491bdfd1687",
"/": "370482ba368eb5abece7d491bdfd1687",
"loading.gif": "926310caa619c247a2b13b4fb0c9a9be",
"main.dart.js": "2c1663957ff72bc190c95f68a1a4751e",
"manifest.json": "107ed63498eb0b17095861b3083f0fd5",
"style.css": "aed5cc443e508ccb86412bb2cda63eb2",
"version.json": "1cefaf2a48f42633ff4b37ffe0e9de96"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
