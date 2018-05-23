 // CSGOClicker - Case CSGOClicker
//money, inventory, jackpot
var itemCounter = 0;
var fps = 15;
var money = 0.50;
var currentCase = "case1";
var acceptMoneyPerClick = 0.10;
/*=========================Inventory============================*/
//In inventory: weap skins
//Hidden: money
//sorting: by money, rarity
var popup = true;
var inventory = {};
var jackpotInventory = {};
var inventoryMax = 1000;
var inventoryCurrent = 0;
var keyPrice = 0.00;
var caseDiscount = 0;
var keyDiscount = 0;
var operationCases = {
  case1: {name: "Weapon Case 1", price: 0.00, img: "https://google.com
  case2: {name: "eSports 2013 Case", price: 0.00, img: "https://google-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsVk5kKhZDpYX3e1YznfCcdzkR74vnw9TZwa-
sYOOCzzoF6ZJ0jL6Qp9uj3Qbj_Uc6Z2z1I9WLMlhp9VPHu3g"},
  case3: {name: "Bravo Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsXE1xNwVDv7WrFA5pnabNJGwSuN3gxtnawKOlMO6HzzhQucAm0uvFo4n2iw3h_UM-
ZmilJNeLMlhpjfjxEoE"},
  case4: {name: "CS:GO Weapon Case 2", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5PT8elUwgKKZJmtEvo_kxITZk6StNe-
Fz2pTu8Aj3eqVpIqgjVfjrRI9fSmtc1Nw-Kh3"},
  case5: {name: "eSports 2013 Winter Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-
fRPasw8rsVk5kKhZDpYX3e1Yz7KKcPzwav9jnzdfdlfWmY7_TzmkF6ZMlj77A9o3x0Qe1qhBkZGjxI9LBJgMgIQaH1G7WeaA
"},
  case6: {name: "Winter Offensive Weapon Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYu0aKfJz8a793gxNLfzvOkMunUwWgH7JIjj-
qW8d7x2VXt_UBuMT3zIpjVLFEGDSGUSQ"},
  case7: {name: "CS:GO Weapon Case 3", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsRVx4MwFo5fSnf15k0KGacG0UtYXnzdTdkq-
gariGlDgHvMcmjryZotqg2wCxrUVtfSmtc20v4quI" },
  case8: {name: "Operation Phoenix Weapon Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-
fRPasw8rsUFJ5KBFZv668FFUuh6qZJmlD7tiyl4OIlaGhYuLTzjhVupJ12urH89ii3lHlqEdoMDr2I5jVLFFSv_J2Rg" },
  case9: {name: "Huntsman Weapon Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFQu0PaQIm9DtY6wzYaIxKWtN7iJwW8G6Z0h2LqWoY6s2Qy2-
0Q_Nzv7IJjVLFGZqUbjlQ" },
  case10: {name: "Operation Breakout Weapon Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFMu1aPMI24auITjxteJwPXxY72AkGgIvZAniLjHpon2jlbl-
kpvNjz3JJjVLFG9rl1YLQ" },
  case11: {name: "eSports 2014 Summer Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-
fRPasw8rsVk5kKhZDpYX3e1Y07ODdfDBH_pKzwdfSkqTyZLjQxjsF7sEoiLyQ9I2ljgHt_EZlYzr6J4DHIA9oZ1-
D5BHglkR7Cs6C" },
  case12: {name: "Operation Vanguard Weapon Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFIuh6rJImVGvtjllYaNka6la7rUxWkE65BzibvD9N7z0Q22-
0Fka2GlJ5jVLFHqavWW2g" },
  case13: {name: "Chroma Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-
fRPasw8rsUFJ5KBFZv668FFEuh_KQJTtEuI63xIXbxqOtauyClTMEsJV1jruS89T3iQKx_BBqa2j3JpjVLFH1xpp0EQ" },
  case14: {name: "Chroma 2 Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-
fRPasw8rsUFJ5KBFZv668FFAuhqSaKWtEu43mxtbbk6b1a77Twm4Iu8Yl3bCU9Imii1Xt80M5MmD7JZjVLFH-6VnQJQ" },
  case15: {name: "Falchion Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FF8ugPDMIWpAuIq1w4KIlaChZOyFwzgJuZNy3-
2T89T0jlC2rhZla2vwIJjVLFHz75yKpg" },
  case16: {name: "Shadow Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FF4u1qubIW4Su4mzxYHbzqGtZ-KGlz8EuJcg3rnE9NiijVe3_UY-
Zzr2JJjVLFEEeiQRtg" },
  case17: {name: "Revolver Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYwnfKfcG9HvN7iktaOkqD1auLTxD5SvZYgiLvFpo7xjVLh-
kdrYWnzcoGLMlhpsyM-5vg" },
  case18: {name: "Operation Wildfire Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYxnaeQImRGu4S1x9TawfSmY-iHkmoD7cEl2LiQpIjz3wPl_ERkYWHwLY-
LMlhp9pkR_UQ" },
  case19: {name: "Chroma 3 Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYynaSdJGhE74y0wNWIw_OlNuvXkDpSuZQmi--SrN-h3gey-
Uo6YWmlIoCLMlhplhFFvwI" },
  case20: {name: "Gamma Case", price: 0.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
U5A1PIYQNqhpOSV-fRPasw8rsUFJ5KBFZv668FFYznarJJjkQ6ovjw4SPlfP3auqEl2oBuJB1j--
WoY322QziqkdpZGr3IteLMlhpw4RJCv8" }
}
var knives = {
  regular: {
knife1: {name: "✯ Bayonet", price: 168.73, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX U5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaKQZ53P3NZXMXvYmykdLSxqWkZ7- HkjMIvpIj3u2Y84733gzh_RU_MG_zIYLEdQ45fxiOrdJh0ExF"},
knife2: {name: "✯ Bayonet | Blue Steel BS", price: 120.75, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-
DkvbiKoTdl3lW7Ytzj7HFpIr3jQTiqEptYDjzcIeWJgI4YF_Z_Fm7lOvnjJbquJXKmiMypGB8sl3Uv6q3"},
knife3: {name: "✯ Bayonet | Blue Steel WW", price: 129.79, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-
GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
knife4: {name: "✯ Bayonet | Blue Steel FT", price: 139.42, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-
GkvP9JrbummpD78A_37vEp4rz3w21_hBrNWD7dteSeg8_M1jSrFK5wrrr18Xpu5TAwHNmsj5iuyhFiVGqLA"},
knife5: {name: "✯ Bayonet | Blue Steel MW", price: 162.56, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J4Tdl3lW7Ysl2rCRoNum3lfn_Rc-
Nzv6cIadcgE5NQyBrwPswei818S-v5qfzHpgpGB8so3I7TlV"},
knife6: {name: "✯ Bayonet | Blue Steel FN", price: 261.63, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJA4MmzkL-HnvD8J4Tdl3lW7Ysl2rCRoNum3lfn_Rc-
Nzv6cIadcgE5NQyBrwPswei818S-v5qfzHpgpGB8so3I7TlV"},
knife7: {name: "✯ Bayonet | Boreal Forest BS", price: 80.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWNU6dNoteXA54vwxgDhrxJtMGj7II7
GcVI5MgqE-gDsyObng5W_vM-bmyFi6CkitnbayRKpwUYbBWXvKcI"},
knife8: {name: "✯ Bayonet | Boreal Forest WW", price: 79.97, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh9bN9J7yjRrl_kFrYGjxcNO
WewQ3MAmE-FG2yOe7gpW0uZyam3A2siVw7S6MzR3in1gSOUa5wz9E"},
knife9: {name: "✯ Bayonet | Boreal Forest FT", price: 79.82, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWZU7Mxkh9bN9J7yjRrl_kFrYGjxcNO
WewQ3MAmE-FG2yOe7gpW0uZyam3A2siVw7S6MzR3in1gSOUa5wz9E"},
knife10: {name: "✯ Bayonet | Boreal Forest MW", price: 110.10, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIb
BdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},
knife11: {name: "✯ Bayonet | Boreal Forest FN", price: 216.23, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJE486zh5S0lfjmNrrdqWdY781lteXA54vwxgCxqBE6Nzv0IIb
BdQU6ZAuC-Vm6wu68hMe46MzIzCE26SQk7S3YzECpwUYbTEk7wBI"},
knife12: {name: "✯ Bayonet | Case Hardened BS", price: 146.93, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-DkvbiKoTdl3lW7YspjrmV8N2n2wGyrxU4Yz-
gJNOVcFI8M1uE_lbrlO260ZC_uZvOwXs3pGB8soiApmlV"},
knife13: {name: "✯ Bayonet | Case Hardened WW", price: 149.99, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-
GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
knife14: {name: "✯ Bayonet | Case Hardened FT", price: 156.48, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-
GkvP9JrbummpD78A_j7DEoo2njFHl_kM5Zz_1I9OUI1dtYw3U_1nskOvuhMS7vM_AnXdr7z5iuyiOIPCcdg"},
knife15: {name: "✯ Bayonet | Case Hardened MW", price: 205.21, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-
HnvD8J4Tdl3lW7Yso2LmZo9rw2lXlrUJrNT2iI4GVcFM-M1yDqFi7l-rq1J7ttM7JyXVjpGB8slOwrcti"},
knife16: {name: "✯ Bayonet | Case Hardened FN", price: 310.50, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJN5dCzkL-
HnvD8J4Tdl3lW7Yso2LmZo9rw2lXlrUJrNT2iI4GVcFM-M1yDqFi7l-rq1J7ttM7JyXVjpGB8slOwrcti"},
knife17: {name: "✯ Bayonet | Crimson Web BS", price: 108.30, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4iOluHtDLfQhGxUppIlib7AptvwjFDs-
EVtZmygIdKSdgNqaFHWr1TolO7u15Xqu57On3d9-n51YCbwx_k"},
knife18: {name: "✯ Bayonet | Crimson Web WW", price: 131.11, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPoTdl3lW7Yt00rDC992giQyw8xBqYm_0dob
Ee1VrMgzY-lK3kurohJG4ucnLwXVlpGB8ssQqSA2k"},
knife19: {name: "✯ Bayonet | Crimson Web FT", price: 130.30, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq42Ok_7hPoTdl3lW7Yt00rDC992giQyw8xBqYm_0dob
Ee1VrMgzY-lK3kurohJG4ucnLwXVlpGB8ssQqSA2k"},
knife20: {name: "✯ Bayonet | Crimson Web MW", price: 257.83, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-
Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
knife21: {name: "✯ Bayonet | Crimson Web FN", price: 1531.25, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJV6d6lq4yCkP_gDLfQhGxUppwj3r-
Rpd3zjAy38xFsMGn0I9LGcA49Zw2B_VO5wL_r1Ja-vJrMySB9-n51NRRkGyg"},
knife22: {name: "✯ Bayonet | Fade MW", price: 322.01, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYK RdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
knife23: {name: "✯ Bayonet | Fade FN", price: 328.90, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJcAJE7dizq4yCkP_gDLfQhGxUppBwib3Hod6n2ADnqUdkMW30cYK RdwVtMlrV-gK5yLi71JXpu5XBzHd9-n51Ga5qFJk"},
knife24: {name: "✯ Bayonet | Forest DDPAT BS", price: 81.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-DkvbiKoTdl3lW7Yt30-
3HpIqsiwS18xFlY2jwLYGWdAE3aFvXrADol7zqgJC0tJ_IyHI1pGB8smaas5HW"},
knife25: {name: "✯ Bayonet | Forest DDPAT WW", price: 82.43, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-
GkvP9JrbummpD78A_27HCp9qi2FawqBduYGCgI47HdFBtMg3R-wK9l-zugZPou5zJwHAyuD5iuyjZxtS4iw"},
knife26: {name: "✯ Bayonet | Forest DDPAT FT", price: 78.67, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-
GkvP9JrbummpD78A_27HCp9qi2FawqBduYGCgI47HdFBtMg3R-wK9l-zugZPou5zJwHAyuD5iuyjZxtS4iw"},
knife27: {name: "✯ Bayonet | Forest DDPAT MW", price: 104.99, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-
Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
knife28: {name: "✯ Bayonet | Forest DDPAT FN", price: 325.10, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zAaAJG6My3gL-HnvD8J4Tdl3lW7Yt337rC99iijASxrUs-
Z2ryJYeTcgY2NAvT8li4l-a80MLuu5zLnyBmpGB8ss5wKTWe"},
knife29: {name: "✯ Bayonet | Night BS", price: 90.07, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL- DkvbiKoTdl3lW7Ysg07CYpdqsjQzl_0E_YWigLIGUI1U5aV_T-lm6krjvjZS66prByyRnpGB8suefpNvA"},
knife30: {name: "✯ Bayonet | Night WW", price: 99.47, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL- GkvP9JrbummpD78A_jL7F89jw2VGw_0M6MTrzd9XBIwc7MF-C_FO-xOvmgpG7tJnKy3Bl6D5iuyi5sRnq8g"},
knife31: {name: "✯ Bayonet | Night FT", price: 94.89, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL- GkvP9JrbummpD78A_jL7F89jw2VGw_0M6MTrzd9XBIwc7MF-C_FO-xOvmgpG7tJnKy3Bl6D5iuyi5sRnq8g"},
knife32: {name: "✯ Bayonet | Night MW", price: 180.13, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2- uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
knife33: {name: "✯ Bayonet | Night FN", price: 975.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbfgJM5du-gL-HnvD8J4Tdl3lW7Ysg2- uTpN2iiVLmrkM6YW3zJYeUcQY7aV3XqwO3wrvvhZ-96Z7Nzic3pGB8sk5ZbSKb"},
knife34: {name: "✯ Bayonet | Safari Mesh BS", price: 78.67, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj8NrrHj1Rd6dd2j6fCrd2s0Aaw-
EA4YG73cNSWdVdoZgzV_1i2l-bu1Jfo6Z-fm3c37CJx-z-DyLk6KurC"},
knife35: {name: "✯ Bayonet | Safari Mesh WW", price: 84.65, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--
q5SKmcj5Nr_Yg2Zu5MRjjeyPp9Ws0QDjqEpuNmjxJdDBIVc4ZV7U-FG8kuztgZHttMmYznFg6SQk7WGdwUKUDs9gvQ"},
knife36: {name: "✯ Bayonet | Safari Mesh FT", price: 78.05, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--
q5SKmcj5Nr_Yg2Zu5MRjjeyPp9Ws0QDjqEpuNmjxJdDBIVc4ZV7U-FG8kuztgZHttMmYznFg6SQk7WGdwUKUDs9gvQ"},
knife37: {name: "✯ Bayonet | Safari Mesh MW", price: 93.49, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-
kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
knife38: {name: "✯ Bayonet | Safari Mesh FN", price: 321.21, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJP6c--q5SKmcj4OrzZglRd6dd2j6fHpY-
kigPlrRduYmmhI4LHdgRqMw7X8lO7wuvqg8O77szAmHtq7iEn-z-DyIB9jWZF"},
knife39: {name: "✯ Bayonet | Scorched BS", price: 87.56, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0n_L1JaLummpD78A_2-2YpoqgiQDk- EY9ZmH2dYfBdFM7MgvU-wC9yea80JftvJyfzHU2sj5iuyggPXmmzw"},
knife40: {name: "✯ Bayonet | Scorched WW", price: 86.99, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0mvLwOq7cqWdQ- sJ0xO_DrNil0AKx_xJpMWmmIoCXcQRoNVHRrFe9wee5jJW-usvMynY3syM8pSGKzDZP-os"},
knife41: {name: "✯ Bayonet | Scorched FT", price: 79.82, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0mvLwOq7cqWdQ- sJ0xO_DrNil0AKx_xJpMWmmIoCXcQRoNVHRrFe9wee5jJW-usvMynY3syM8pSGKzDZP-os"},
knife42: {name: "✯ Bayonet | Scorched MW", price: 101.75, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3- qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
knife43: {name: "✯ Bayonet | Scorched FN", price: 340.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJG7cymmIW0m_7zO6_ummpD78A_3- qXrNqnjAPtqUVpNjvxJIOWdQE-MFDY_Qfvkr-6jZ7uv5vInyE17z5iuyhdvxrhyA"},
knife44: {name: "✯ Bayonet | Slaughter FT", price: 169.87, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-
GkvP9JrbummpD78A_27_C8Ir321Lj_0VkNTzxdYCccQU_aV3WqVnvl-vrg8fu7s-awHAx7j5iuyizZJPXwA"},
knife45: {name: "✯ Bayonet | Slaughter MW", price: 244.99, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-
UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
knife46: {name: "✯ Bayonet | Slaughter FN", price: 333.93, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-HnvD8J4Tdl3lW7Ysj2LqVpdqh2wLm-
UNoNmH0cdeQIVM9N1HZ_QXtx-fu0Z64uMnAyHRrpGB8stNTCQHv"},
knife47: {name: "✯ Bayonet | Stained BS", price: 113.89, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0n_L1JaLummpD78A_3LDAoYn00FDj- EVtamnzJ9Wceg82YlrZ-QLtyLrthcXt6cmczSA1uz5iuygQfIQs8A"},
knife48: {name: "✯ Bayonet | Stained WW", price: 121.41, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0mvLwOq7cqWdQ- sJ0xLyZo4qk2QXt_0RrYmilJdPDdFA9ZF7T-1G5kunogJS87s-azyNis3Y8pSGKV1SJhw0"},
knife49: {name: "✯ Bayonet | Stained FT", price: 118.39, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0mvLwOq7cqWdQ- sJ0xLyZo4qk2QXt_0RrYmilJdPDdFA9ZF7T-1G5kunogJS87s-azyNis3Y8pSGKV1SJhw0"},
knife50: {name: "✯ Bayonet | Stained MW", price: 125.41, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r- RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
knife51: {name: "✯ Bayonet | Stained FN", price: 166.46, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJYAJE4861kYS0m_7zO6_ummpD78A_3r- RrNWti1Dl8kc6ammlIoPEJ1U_YQuDqwTvyejrgcS4vpnKySQwuj5iuyhwZ4qAMQ"},
knife52: {name: "✯ Bayonet | Urban Masked BS", price: 85.36, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLPUl31I18lwmO7Eu92gjgzmqktsMDj3I9T
GJFA9ZQnQr1Psl-vnjJC0usjMwXA273N05CrD30vga0eXEBM"},
knife53: {name: "✯ Bayonet | Urban Masked WW", price: 84.59, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLbUkmJE5fp9i_vG8MKijQTl_Bc_ZT3wI4K
dJ1M2Mw6ErgLqkr3n1Ja1vZTLn3FmsnQh4H_fgVXp1kJdzvEN"},
knife54: {name: "✯ Bayonet | Urban Masked FT", price: 82.42, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLbUkmJE5fp9i_vG8MKijQTl_Bc_ZT3wI4K
dJ1M2Mw6ErgLqkr3n1Ja1vZTLn3FmsnQh4H_fgVXp1kJdzvEN"},
knife55: {name: "✯ Bayonet | Urban Masked MW", price: 103.84, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-
RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
knife56: {name: "✯ Bayonet | Urban Masked FN", price: 171.01, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zbYQJW7cyzq5WZlfb6DLfYkWNF18lwmO7Eu9SkiwCw-
RJsZTrxcI7GcAE_MFqC_AXrxby8gZHqvM6bySZg7CMgtyrD30vgFNz3E8k"},
knife57: {name: "✯ Gut Knife", price: 67.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX U5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3dihWoo2ywdPbx6Cna-- IwTtUsMBwjLuZodit2wXm_ERrZWHwctKTcQVvZlHOug_pU950d94"},
knife58: {name: "✯ Gut Knife | Blue Steel BS", price: 70.50, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqP_xMq3IqWdQ-sJ0xO3DrNil3lDg-
UY5N2_6LNOUI1A3aA7Y_AC4yevsh5686JifnSNnsyc8pSGKeUVXnMM"},
knife59: {name: "✯ Gut Knife | Blue Steel WW", price: 69.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPrxN7LEm1Rd6dd2j6fF89Xxiway-
ktuNW7wdoKUdA5raQ7SrlW5yejoh5G5tZvNwCdmuyYm-z-DyMBqk-Qb"},
knife60: {name: "✯ Gut Knife | Blue Steel FT", price: 68.17, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPrxN7LEm1Rd6dd2j6fF89Xxiway-
ktuNW7wdoKUdA5raQ7SrlW5yejoh5G5tZvNwCdmuyYm-z-DyMBqk-Qb"},
knife61: {name: "✯ Gut Knife | Blue Steel MW", price: 76.16, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-
Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
knife62: {name: "✯ Gut Knife | Blue Steel FN", price: 103.50, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT0966gYWPqPv9NLPFqWdQ-sJ0xLnEodz3igSx-BY-
Zj2mJ9LAc1Q3Y13Y_1Lrwrvr0MW7uZifwCBlv3E8pSGKHolYdI0"},
knife63: {name: "✯ Gut Knife | Boreal Forest BS", price: 51.13, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du4MBwnPD--
Y3nj1H6rkA9MGinJYGQegU8N1DU-gDsxb3mgZ676p7KyXtq7Cdxs3rcmxK1hgYMMLKK05eNEw"},
knife64: {name: "✯ Gut Knife | Boreal Forest WW", price: 54.05, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5cB1g_zMyoD0mlOx5UVtYmDyLNP
EdwVtaV-Cq1S6lO_mjJ-07szAmiQyuCQqtn7dmBO0gk1SLrs4R_gpvnA"},
knife65: {name: "✯ Gut Knife | Boreal Forest FT", price: 50.06, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5cB1g_zMyoD0mlOx5UVtYmDyLNP
EdwVtaV-Cq1S6lO_mjJ-07szAmiQyuCQqtn7dmBO0gk1SLrs4R_gpvnA"},
knife66: {name: "✯ Gut Knife | Boreal Forest MW", price: 63.82, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--
Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},
knife67: {name: "✯ Gut Knife | Boreal Forest FN", price: 105.17, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09q5hoWYg8j2PKnUl2du5Mx2gv3--
Y3nj1H6qUFkMm2gctSUcQJtNVCCr1TqkO3m056-6M_JnSRnuicn4njZmB3iiQYMMLJLcEs9NA"},
knife68: {name: "✯ Gut Knife | Case Hardened BS", price: 71.60, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqP_xMq3IqWdQ-
sJ0xLuYrN2s2lXhrUpkMW_zI4WVd1Q8MlzYr1C5l-nqhZC1vZTJzSZj7nQ8pSGKnPOWYls"},
knife69: {name: "✯ Gut Knife | Case Hardened WW", price: 79.50, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eUrdzw0Vfg-
EY9N236IoSRIFU_YV_RqFi2kOjsg5e1u5XAmnAxsiR3-z-DyDOYcv8_"},
knife70: {name: "✯ Gut Knife | Case Hardened FT", price: 80.29, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPrxN7LEm1Rd6dd2j6eUrdzw0Vfg-
EY9N236IoSRIFU_YV_RqFi2kOjsg5e1u5XAmnAxsiR3-z-DyDOYcv8_"},
knife71: {name: "✯ Gut Knife | Case Hardened MW", price: 91.65, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-
Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},
knife72: {name: "✯ Gut Knife | Case Hardened FN", price: 114.01, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09O_mIWPqPv9NLPFqWdQ-sJ0xO-
Qod2i2wOy_EdpYW_7LIDBclI6aVHV-Fm_lOe-gJG5vpvKyHYwv3M8pSGKIGsDSZw"},
knife73: {name: "✯ Gut Knife | Crimson Web BS", price: 60.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0n_L1JaLummpD78A_3L2Zo9Sn31Xm-
0RtajjwddLEcVBvYA7W-VjqwOfsgce_vpyfmHEx6z5iuyh_csHsVQ"},
knife74: {name: "✯ Gut Knife | Crimson Web WW", price: 83.79, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0mvLwOq7cqWdQ-
sJ0xLqZ99_w3FXt80tpMDyncY7EcARqMlyC_lO8wOrt1p-6uZzByHUxsyA8pSGK0TMvFOE"},
knife75: {name: "✯ Gut Knife | Crimson Web FT", price: 66.13, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0mvLwOq7cqWdQ-
sJ0xLqZ99_w3FXt80tpMDyncY7EcARqMlyC_lO8wOrt1p-6uZzByHUxsyA8pSGK0TMvFOE"},
knife76: {name: "✯ Gut Knife | Crimson Web MW", price: 106.19, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-
0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
knife77: {name: "✯ Gut Knife | Crimson Web FN", price: 545.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb08uzlpO0m_7zO6_ummpD78A_2LiW9Nuj0VGw-
0JvYj2hJdKWI1NoZAnU-gPtyOzo0ZK4u52bm3Bh7j5iuyiVfFD71A"},
knife78: {name: "✯ Gut Knife | Fade MW", price: 136.81, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI- n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
knife79: {name: "✯ Gut Knife | Fade FN", price: 114.02, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxD09q3kIW0m_7zO6_ummpD78A_3OyZrI- n2wPk_RY9NTrwINOSdQc9MlrW_gfqlbu9jJK4uJmYwCBlvT5iuyhGHAgcYg"},
knife80: {name: "✯ Gut Knife | Forest DDPAT BS", price: 52.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqP_xMq3IqWdQ-
sJ0xLHAptWkjFHjrkE5NzrwdtPAIQFsZg3UqVi9l7zt0ZTutcjOnCY17nQ8pSGK6FhQMfo"},
knife81: {name: "✯ Gut Knife | Forest DDPAT WW", price: 54.60, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPrxN7LEm1Rd6dd2j6eQod7wjAKw_UVvYGH2JYL
DIQA9ZFmF_wW-wui80ZK_vp3Ln3Rq7nYi-z-DyOnWDwct"},
knife82: {name: "✯ Gut Knife | Forest DDPAT FT", price: 54.30, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPrxN7LEm1Rd6dd2j6eQod7wjAKw_UVvYGH2JYL
DIQA9ZFmF_wW-wui80ZK_vp3Ln3Rq7nYi-z-DyOnWDwct"},
knife83: {name: "✯ Gut Knife | Forest DDPAT MW", price: 61.68, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-
UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
knife84: {name: "✯ Gut Knife | Forest DDPAT FN", price: 95.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjVb09iyhIGfqPv9NLPFqWdQ-sJ0xLGUoIqji1Xi-
UVkZTr7coWTd1M7YVuE-Va3k-7o15LvuJyYwXRmsnE8pSGKxxB-nH8"},
knife85: {name: "✯ Gut Knife | Night BS", price: 59.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqP_xMq3IqWdQ-sJ0xL7Drd2tigDl- xc6NW_1IoLHdwc4M1HV8lS9xri515e6upmbziZnsyA8pSGKTvPJmWM"},
knife86: {name: "✯ Gut Knife | Night WW", price: 58.37, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn- EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9"},
knife87: {name: "✯ Gut Knife | Night FT", price: 56.94, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPrxN7LEm1Rd6dd2j6fAodqgjFfn- EpvYzuhINWUdA5rYF-B_FS_wbzn1pDptMjAmCRkunIl-z-DyJdWNjR9"},
knife88: {name: "✯ Gut Knife | Night MW", price: 82.63, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG- hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
knife89: {name: "✯ Gut Knife | Night FN", price: 241.84, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5N09K_k4ifqPv9NLPFqWdQ-sJ0xOzE9t73igDk_xJoYG- hItKSdlA_aAvX-AO2ybjohZW0vMybynM273U8pSGKrp7Yw2U"},
knife90: {name: "✯ Gut Knife | Safari Mesh BS", price: 50.00, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLPUl31I18lwmO7Eu9ml2we1_RJuZ2n6JoS
UclU8ZFzRqVW_krq5gZC1tZuYmnQwsnYisCzD30vg3qUbx98"},
knife91: {name: "✯ Gut Knife | Safari Mesh WW", price: 52.44, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoW
VdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"},
knife92: {name: "✯ Gut Knife | Safari Mesh FT", price: 51.44, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLbUkmJE5fp9i_vG8MLx2QSy_BdpZmmlcoW
VdQdvYV2G-1bvw-zv18O96MzByCA27nYrtyqPgVXp1t9T3ex9"},
knife93: {name: "✯ Gut Knife | Safari Mesh MW", price: 53.72, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYK
dIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
knife94: {name: "✯ Gut Knife | Safari Mesh FN", price: 75.61, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09Gzh4i0g_b6DLfYkWNF18lwmO7Eu9nz3Qyw_ERrN271JYK
dIFc-YlmC_1m5l7i5hMS87p7Nz3c3uHMm4X7D30vgVFLgw28"},
knife95: {name: "✯ Gut Knife | Scorched BS", price: 57.01, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj8NrrHj1Rd6dd2j6eY9tj00ALh-
kI_ZGrxcNPEdQI9YAvQ_lS6l-bqhpG6tMzNnCZr73R3-z-DyD8PeNWQ"},
knife96: {name: "✯ Gut Knife | Scorched WW", price: 54.94, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-
SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q"},
knife97: {name: "✯ Gut Knife | Scorched FT", price: 53.59, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj5Nr_Yg2Zu5MRjjeyPot3zjQzi_0FrMGylLY-
SIQI6Yg6B-1ntxu27gMC47smbm3thu3QqtGGdwUIO0yEj6Q"},
knife98: {name: "✯ Gut Knife | Scorched MW", price: 65.01, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIa
dclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
knife99: {name: "✯ Gut Knife | Scorched FN", price: 114.02, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S09i3hJCHksj4OrzZglRd6dd2j6eXoNv0jgLg_RVpZ2_zJIa
dclQ7Ml2F_Vi_wu3rhJbp7pnOyntk7HQk-z-DyOfOL3QM"},
knife100: {name: "✯ Gut Knife | Slaughter FT", price: 80.40, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPrxN7LEm1Rd6dd2j6eTptSliwK2rRBuamzxdY-
UIA87YQrZrljqybzsgp_t6Z3PwCNjvXQr-z-DyHD2KsrX"},
knife101: {name: "✯ Gut Knife | Slaughter MW", price: 88.35, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-
hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
knife102: {name: "✯ Gut Knife | Slaughter FN", price: 106.63, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxP08azlpKKqPv9NLPFqWdQ-sJ0xOqSotjz0FHj-
hVvY2mmIIWQc1Q4aViC_FO6x7q-g5K56J6dnCNju3Q8pSGKFg_49QU"},
knife103: {name: "✯ Gut Knife | Stained BS", price: 62.19, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j8NrrHj1Rd6dd2j6eQp4-
hjQ3jqEs_Z2_yJIWdcAI7NVHQ-1K_l7y7gJ7uu8zOznRmu3Uj-z-DyOsRAYmy"},
knife104: {name: "✯ Gut Knife | Stained WW", price: 61.60, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j5Nr_Yg2Zu5MRjjeyPotqg2gDgrUU5Zm-
nJdKVdg5vNAyG8wTvwum5hMXptJnAnHZi7nIitmGdwUII6z1SkA"},
knife105: {name: "✯ Gut Knife | Stained FT", price: 58.83, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j5Nr_Yg2Zu5MRjjeyPotqg2gDgrUU5Zm-
nJdKVdg5vNAyG8wTvwum5hMXptJnAnHZi7nIitmGdwUII6z1SkA"},
knife106: {name: "✯ Gut Knife | Stained MW", price: 65.98, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-
gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
knife107: {name: "✯ Gut Knife | Stained FN", price: 88.93, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTjxT09q5hoOOk8j4OrzZglRd6dd2j6eS89n32AHjqERtYz-
gIIKVcVA7ZQzT81a3l-rnh8C5vZycm3Rq7ihw-z-DyB1e9elV"},
knife108: {name: "✯ Gut Knife | Urban Masked BS", price: 85.36, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXunm5Q_txOhujT8om7iVCw_EJqYGygddK
SI1U_NVqFrlbvw--6gpS8vJjOwCBlu3Eltn_Ungv330_hbfuoMQ"},
knife109: {name: "✯ Gut Knife | Urban Masked WW", price: 84.59, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXum25V4dB8teXA54vwxgPgrkQ6ZmH6d9W
RcQQ4ZFrU-Vi2x-e9h8fv6Z3PziAysiFz5XrblxSpwUYbNI9lScA"},
knife110: {name: "✯ Gut Knife | Urban Masked FT", price: 82.42, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXum25V4dB8teXA54vwxgPgrkQ6ZmH6d9W
RcQQ4ZFrU-Vi2x-e9h8fv6Z3PziAysiFz5XrblxSpwUYbNI9lScA"},
knife111: {name: "✯ Gut Knife | Urban Masked MW", price: 103.84, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LIC
VcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
knife112: {name: "✯ Gut Knife | Urban Masked FN", price: 171.01, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTi5S08i3hIW0guX2MrXummJW4NFOhujT8om73wWy_0ttYmH7LIC
VcFI9M1zYrFK7lO7shcTov5ScmiAw63Mls33fygv330-gpCcFhQ"},
knife113: {name: "✯ M9 Bayonet", price: 185.85, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX U5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3fGR97t2vm46Og7mlMu6ExzsI7ZVy0rGWrN7w3VDh_RY9Y22nd4f DdAE4NFzUrFjqlL3tm9bi6x2aUKuH"},
knife114: {name: "✯ M9 Bayonet | Blue Steel BS", price: 180.81, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Khsj2P67UklRZ7cRnk9bN9J7yjRrgrkRqZz3yddXHewA9NFvW-VC9lOnm08Luup3NyyEw6yVw7Cncy0Cwn1gSOfymx4IO"},
knife115: {name: "✯ M9 Bayonet | Blue Steel WW", price: 179.60, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRc7cF4n-T-- Y3nj1H6qEo5ZW_yJ9OWew5sZV6Fq1O8lLq-gJe-vZycmnMwvCIq53uOzkC2iAYMMLIoQ_29Zw"},
knife116: {name: "✯ M9 Bayonet | Blue Steel FT", price: 194.39, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj2P67UklRc7cF4n-T-- Y3nj1H6qEo5ZW_yJ9OWew5sZV6Fq1O8lLq-gJe-vZycmnMwvCIq53uOzkC2iAYMMLIoQ_29Zw"},
knife117: {name: "✯ M9 Bayonet | Blue Steel MW", price: 204.67, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
knife118: {name: "✯ M9 Bayonet | Blue Steel FN", price: 288.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Khsj2P67UklRd4cJ5ntbN9J7yjRq3rUI5Mjz2dobBdgRtYQvS_FTrlOno1MLo78nIy3Jk73Jz4i7VzhHln1gSOQ4y0ztq"},
knife119: {name: "✯ M9 Bayonet | Boreal Forest BS", price: 107.34, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj- jNyoTwiUKtlB89IT6mOoCXew9tYQ7QqwK7yL-7gJS9vZnInCNl7CAn4njfyRLj1BkdZ-E61KSACQLJjIYzs5A"},
knife120: {name: "✯ M9 Bayonet | Boreal Forest WW", price: 102.62, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj- jNyoHwjF2hpiwwMiukcZiXJA84aAnS_Fm3k7jqh5e0u8zKnXQw7il3sCvdmUDhiRBKPeBqg_SZVxzAUOGh-x8F"},
knife121: {name: "✯ M9 Bayonet | Boreal Forest FT", price: 100.99, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj- jNyoHwjF2hpiwwMiukcZiXJA84aAnS_Fm3k7jqh5e0u8zKnXQw7il3sCvdmUDhiRBKPeBqg_SZVxzAUOGh-x8F"},
knife122: {name: "✯ M9 Bayonet | Boreal Forest MW", price: 125.39, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj- jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},
knife123: {name: "✯ M9 Bayonet | Boreal Forest FN", price: 251.41, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjyPKnUhX9u6spjj- jNyoD8j1yglB89IT6mOoaSdlc5MFHWq1m5xL_qgsO67cnIzydr6yYl7X3ZmkO1gk1LOuFp16eACQLJZSfpy04"},
knife124: {name: "✯ M9 Bayonet | Case Hardened BS", price: 168.68, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRZ7cRnk9bN9J7yjRqy-EM- amn3J4OVJAU3Yl3W_1O5w7q61JC-u5TNn3NquXYk43jYmBfmn1gSOfZ4vD5g"},
knife125: {name: "✯ M9 Bayonet | Case Hardened WW", price: 172.50, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-T-- Y3nj1H6_UBuammldo_GdARsYw6CqVbtyLjt0Mfpu5jLyHFjviZzs3nbnkO2iQYMMLLSEHvXoA"},
knife126: {name: "✯ M9 Bayonet | Case Hardened FT", price: 179.97, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Khsj7OrfUklRc7cF4n-T-- Y3nj1H6_UBuammldo_GdARsYw6CqVbtyLjt0Mfpu5jLyHFjviZzs3nbnkO2iQYMMLLSEHvXoA"},
knife127: {name: "✯ M9 Bayonet | Case Hardened MW", price: 213.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},
knife128: {name: "✯ M9 Bayonet | Case Hardened FN", price: 362.25, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Khsj7OrfUklRd4cJ5ntbN9J7yjRrj_hE6NjqlLNOccgE9MljVqAC8wOzqhJ60tc_BnXZqsigrs3bdmRO-n1gSObDaDdZj"},
knife129: {name: "✯ M9 Bayonet | Crimson Web BS", price: 140.27, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjjNrnCqWNU6dNoteXA54vwxle2- 0ZlMG70ItfDcg83YFyB-1S6wu-618O0tMjJmCRl7yZ3sy6MykSpwUYbwc40mvc"},
knife130: {name: "✯ M9 Bayonet | Crimson Web WW", price: 177.84, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
knife131: {name: "✯ M9 Bayonet | Crimson Web FT", price: 195.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- DjsjjNrnCqWZU7Mxkh9bN9J7yjRqwrxVvMGDyI9KSdgQ-Z1HV_VfsyLu-hZe1tMzJnHFgv3IitHmLzhO0n1gSOc4nk3bB"},
knife132: {name: "✯ M9 Bayonet | Crimson Web MW", price: 606.25, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP- qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j- 9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhqKzvAALlRUvAuywD1NjA36tRcWN6x_685JV2t49fYNuJ 5YtFEGZKFWKWGMF38u01s1PRbfMaK9inp3Xu7Oz8OCRTs8mkHzPjH5OVNhzgQCA"},
knife133: {name: "✯ M9 Bayonet | Crimson Web FN", price: 4375.00, img: "https://steamcommunity-a.akamaihd.net/economy/image/fWFc82js0fmoRAP- qOIPu5THSWqfSmTELLqcUywGkijVjZYMUrsm1j- 9xgEObwgfEh_nvjlWhNzZCveCDfIBj98xqodQ2CZknz5wOuqzNQhqKzvAALlRUvAuywD1NjA36tRcWN6x_685JV2t49fYNuJ 5YtFEGZKFWKWGMF38u01s1PRbfMaK9inp3Xu7Oz8OCRTs8mkHzPjH5OVNhzgQCA"},
knife134: {name: "✯ M9 Bayonet | Fade MW", price: 382.50, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi- 0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
knife135: {name: "✯ M9 Bayonet | Fade FN", price: 382.76, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lteXA54vwxgLi- 0FrNWqiI4CWIw5sYQnY81m3xLjs18LouZjNwXc3uCF27SuOy0SpwUYbghNKfR8"},
knife136: {name: "✯ M9 Bayonet | Forest DDPAT BS", price: 100.86, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- DjsjwN6vQglRZ7cRnk9bN9J7yjRrj_kpkYDv3IIeddwY_ZVvT_1G8yO_mgsPtv5icyHY3s3Mq5yncmhy3n1gSOUso9JJN"},
knife137: {name: "✯ M9 Bayonet | Forest DDPAT WW", price: 114.47, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T-- Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
knife138: {name: "✯ M9 Bayonet | Forest DDPAT FT", price: 96.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRc7cF4n-T-- Y3nj1H6_0RtYD32IY_BIwY4aA3R-VLrxue90Ja_tZ6fmHpn7CNwtCuPzBzhiQYMMLJQizr10Q"},
knife139: {name: "✯ M9 Bayonet | Forest DDPAT MW", price: 123.76, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5ntbN9J7yjRrlrUZtYjz3Io- dc1c5YAyD_FbvlL3tjJa47cvMmnUyuSl2sHrfnRO_n1gSOSrPFa2E"},
knife140: {name: "✯ M9 Bayonet | Forest DDPAT FN", price: 355.70, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-DjsjwN6vQglRd4cJ5ntbN9J7yjRrlrUZtYjz3Io-
dc1c5YAyD_FbvlL3tjJa47cvMmnUyuSl2sHrfnRO_n1gSOSrPFa2E"},
knife141: {name: "✯ M9 Bayonet | Night BS", price: 119.03, img: "https://steamcommunity-
a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX
H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRZ7cRnk9bN9J7yjRrsrRdvMjz0cY-
QdwE4YF_S-Vm4yOi5hpHo7szOyHswvyUq4C3bmEG2n1gSOUNlScIM"},
knife142: {name: "✯ M9 Bayonet | Night WW", price: 134.62, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRc7cF4n-T-- Y3nj1H6_0RoMmv0cYCRJlU5Yw7SqwS4x-_v1pXqvJjMnHA1uCUgsC7UnRC1gwYMMLKQrWJFUg"},
knife143: {name: "✯ M9 Bayonet | Night FT", price: 135.67, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRc7cF4n-T-- Y3nj1H6_0RoMmv0cYCRJlU5Yw7SqwS4x-_v1pXqvJjMnHA1uCUgsC7UnRC1gwYMMLKQrWJFUg"},
knife144: {name: "✯ M9 Bayonet | Night MW", price: 249.56, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA- MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
knife145: {name: "✯ M9 Bayonet | Night FN", price: 1041.25, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-YmMj6OrzZglRd4cJ5ntbN9J7yjRrhqhA- MTygIILEcwRvYgzVr1S9yefv1pHtvsjMwSMy7CghtCrflxK2n1gSORdzljmC"},
knife146: {name: "✯ M9 Bayonet | Safari Mesh BS", price: 100.09, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp5j- jX7LP5iUazrl06a277I9fBcFBvM13VqQS-levohMC6vpvNmCc16SRzty3dlxHh0BhLcKUx0m8uYnFB"},
knife147: {name: "✯ M9 Bayonet | Safari Mesh WW", price: 88.93, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp8j- 3I4IHKhFWmrBZyMGj2JNWReg43MF_Y_AO2yOrshMLov5vPwXVn6yF2tirfzRSw1B1MbPsv26I55_R-ww"},
knife148: {name: "✯ M9 Bayonet | Safari Mesh FT", price: 96.97, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp8j- 3I4IHKhFWmrBZyMGj2JNWReg43MF_Y_AO2yOrshMLov5vPwXVn6yF2tirfzRSw1B1MbPsv26I55_R-ww"},
knife149: {name: "✯ M9 Bayonet | Safari Mesh MW", price: 100.60, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g- 7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
knife150: {name: "✯ M9 Bayonet | Safari Mesh FN", price: 159.21, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8j5NqjZqX9Q5vp9g- 7J4bP5iUazrl1tY2H6ItWSIQU-Y1DX_Vjsx-jnjZ657Z_LwCdm6HEl4nzbnBLlhxEfcKUx0rp-zgq-"},
knife151: {name: "✯ M9 Bayonet | Scorched BS", price: 109.25, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u4MBwnPD-- Y3nj1H6qBZvZGyidtKWIAU4Zl7Q_lTvlem81pW4us_KnCBn73ImsHvazEayggYMMLJyFcWEgQ"},
knife152: {name: "✯ M9 Bayonet | Scorched WW", price: 88.98, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jwMqvBmm5u5cB1g_zMyoD0mlOx5Uo_NWDwd4GTdA5rYQ2B8lm- xOa7jcO7vJ6dnHBhs3V04iuPmUbj1R9SLrs479ENwoU"},
knife153: {name: "✯ M9 Bayonet | Scorched FT", price: 90.50, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jwMqvBmm5u5cB1g_zMyoD0mlOx5Uo_NWDwd4GTdA5rYQ2B8lm- xOa7jcO7vJ6dnHBhs3V04iuPmUbj1R9SLrs479ENwoU"},
knife154: {name: "✯ M9 Bayonet | Scorched MW", price: 128.48, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz- mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
knife155: {name: "✯ M9 Bayonet | Scorched FN", price: 173.37, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-Yh8jwMqvBmm5u5Mx2gv3--Y3nj1H6qUttYz- mcoKTdg83Z1HX_FG4l7jt1pG8vZ7AwXJm6HVw4nfZzBDm1AYMMLItqjyW3w"},
knife156: {name: "✯ M9 Bayonet | Slaughter FT", price: 288.44, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rc7cF4n-T-- Y3nj1H6_EU_ZjynJ4CUcQQ3ZVvRrle6l-a7jZbo75XPn3AxvHIm43veyxHi1QYMMLIuBhODCg"},
knife157: {name: "✯ M9 Bayonet | Slaughter MW", price: 342.25, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh- BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
knife158: {name: "✯ M9 Bayonet | Slaughter FN", price: 563.37, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KmsjuNrnDl1Rd4cJ5ntbN9J7yjRrh- BVlZW3ydoTHdABsZ13Y_Qe5xue6gMC-vp-amntr6yQq4XfUzhTin1gSOZHog2Kf"},
knife159: {name: "✯ M9 Bayonet | Stained BS", price: 124.55, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u4MBwnPD--Y3nj1H6- kJuamvyLYGTIwJsYVGFrgW7wejrhpa4uJ2YziRns3Ei5n7VmhO-gQYMMLKI5mr6SQ"},
knife160: {name: "✯ M9 Bayonet | Stained WW", price: 124.82, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- KhsjyPKnSk29u5cB1g_zMyoD0mlOx5RE5N2mmcNSXJ1VqZVjRrwK9le270Ze7v5XMy3RqvSkg43ban0e- hx1SLrs4e2w5pZ8"},
knife161: {name: "✯ M9 Bayonet | Stained FT", price: 129.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- KhsjyPKnSk29u5cB1g_zMyoD0mlOx5RE5N2mmcNSXJ1VqZVjRrwK9le270Ze7v5XMy3RqvSkg43ban0e- hx1SLrs4e2w5pZ8"},
knife162: {name: "✯ M9 Bayonet | Stained MW", price: 136.80, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3-- Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
knife163: {name: "✯ M9 Bayonet | Stained FN", price: 199.99, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KhsjyPKnSk29u5Mx2gv3-- Y3nj1H6rkdsajvyLIKQcAY9YQ7Trwfvxe_ugp7uuJ7AzHdl7iZ05XnayUSygwYMMLKw8Vd9_Q"},
knife164: {name: "✯ M9 Bayonet | Urban Masked BS", price: 101.78, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jgMqvUqX5D6sR_teHE9Jrst1i1uRQ5fWGhIICRJAQ_YAyG81i7kubrhZW_vJ3OnXo36HQhtH_ZnBW2iR1MbrRxxavJiZp SILw"},
knife165: {name: "✯ M9 Bayonet | Urban Masked WW", price: 98.33, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x- 7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"},
knife166: {name: "✯ M9 Bayonet | Urban Masked FT", price: 92.32, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jgMqvUqX5D6sR_teTE8YXghWu4qgE7Nnf7cYCXcA9tZ1DZ_QO3x- 7sjZS7ucidwSM26XZ07HbczRO_hxoZPeA8m7XAHsJxu2aY"},
knife167: {name: "✯ M9 Bayonet | Urban Masked MW", price: 129.98, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jgMqvUqX5D6sR_teXI8oTht1i1uRQ5fTv6IIbBe1JvYFHWq1i3lbi- hJbqvJWYwXswvHQg7XvezRC_hRwaO7NxxavJcnTzV04"},
knife168: {name: "✯ M9 Bayonet | Urban Masked FN", price: 201.71, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL- Yh8jgMqvUqX5D6sR_teXI8oTht1i1uRQ5fTv6IIbBe1JvYFHWq1i3lbi- hJbqvJWYwXswvHQg7XvezRC_hRwaO7NxxavJcnTzV04"},
knife169: {name: "✯ Karambit", price: 275.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX U5A1PIYQh5hlcX0nvUOGsx8DdQBJjIAVHubSaIAlp1fb3ejxQ7dG0nZTFz_WgaurTwzMA6ZFz0- qW99mn0Qzk_EJoYWylJtSXe1c9aAnSq1C8l_Cv28F7-X3KYA"},
knife170: {name: "✯ Karambit | Blue Steel BS", price: 249.98, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_unm5Q_txOhujT8om7iQK2rhA_MWv1LIa Segc2aFjR-lK7w-q70MW67pmfzCY3syF25Hvdmwv3308f-tSK-w"},
knife171: {name: "✯ Karambit | Blue Steel WW", price: 255.47, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT- nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
knife172: {name: "✯ Karambit | Blue Steel FT", price: 273.62, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_um25V4dB8teXA54vwxgLmqhFtYT- nIYecJgI3Z1DZ_FfqyLvqhpK-tJSbnSY2vSBx43eLn0epwUYbMQqd_ig"},
knife173: {name: "✯ Karambit | Blue Steel MW", price: 314.50, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_ummJW4NFOhujT8om72QCx8kFkMD2mcNO cc1c-ZAnU_Ve7x7y8hMe4u52anXdiv3IrsXjemgv3308svFRjrA"},
knife174: {name: "✯ Karambit | Blue Steel FN", price: 350.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0lfvhNr_ummJW4NFOhujT8om72QCx8kFkMD2mcNO cc1c-ZAnU_Ve7x7y8hMe4u52anXdiv3IrsXjemgv3308svFRjrA"},
knife175: {name: "✯ Karambit | Boreal Forest BS", price: 155.25, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle- sBwhtbJ8I3jkWu4qgE7NnehLdKQewZrMFvRrAK9kOnv1sTp6p7My3A1viIq4S3dmRbjh04aa-dum7XAHpYVBQgv"},
knife176: {name: "✯ Karambit | Boreal Forest WW", price: 150.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle- sBwhtbM8Ij8nVmLpxIuNDztd4XDd1U-MFCDqVi3kL-7gsW8upnPziQxsnF24HrcyxzkhxxEPbBp0eveFwujSqEF8A"},
knife177: {name: "✯ Karambit | Boreal Forest FT", price: 146.05, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle- sBwhtbM8Ij8nVmLpxIuNDztd4XDd1U-MFCDqVi3kL-7gsW8upnPziQxsnF24HrcyxzkhxxEPbBp0eveFwujSqEF8A"},
knife178: {name: "✯ Karambit | Boreal Forest MW", price: 200.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle- sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
knife179: {name: "✯ Karambit | Boreal Forest FN", price: 370.00, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJnJm0kfjmNqjFqWle- sBwhtbN_Iv9nGu4qgE7Nnf7dtOce1Q3M13T-Fa7xejs0MXt753AnXJruiMn7C6LnBC1h0tIO-1um7XAHtmw6SCz"},
knife180: {name: "✯ Karambit | Case Hardened BS", price: 272.66, img: "https://steamcommunity- a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbX H5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf2PLacDBA5ciJlZG0mP74Nr_unm5Q_txOhujT8om70Abg-Bdoa2- iIoaRdlU7NA2GrlTtkuvs0MXtu5zOwHExs3Yj5neMzQv33088DhhWAw"},
knife181: {name: "✯ Karambit | Case Hardened WW", price: 285.01, img:
"https://steamcommunity-
