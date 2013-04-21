// ==UserScript==
// @name Tibia world and house linker
// @description Enhance the character info pages on Tibia.com.
// @version 2013-04-21 15:02:24
// @link http://mths.be/tibiauserjs
// @author Mathias Bynens <http://mathiasbynens.be/>
// @match http://*.tibia.com/*
// @match https://*.tibia.com/*
// ==/UserScript==
(function() {

var buildings = {
	'guildhalls': {
		'Ab\x27Dendriel Clanhall': 40111,
		'Castle of the Winds': 40112,
		'Shadow Towers': 40001,
		'The Hideout': 40002,
		'Harrah I': 59020,
		'Horakhal': 59076,
		'Ramen Tah': 58047,
		'Uthemath II': 59066,
		'Carlin Clanhall': 20515,
		'House of Recreation': 20002,
		'Moonkeep': 20001,
		'Nordic Stronghold': 20003,
		'Northport Clanhall': 22008,
		'Seawatch': 22005,
		'Senja Clanhall': 24014,
		'Suntower': 20901,
		'Darashia, Eastern Guildhall': 62018,
		'Darashia, Western Guildhall': 62017,
		'Castle of the White Dragon': 54027,
		'Magic Academy, Guild': 50701,
		'Sky Lane, Guild 1': 50601,
		'Sky Lane, Guild 2': 50602,
		'Sky Lane, Guild 3': 50603,
		'Stonehome Clanhall': 52022,
		'Granite Guildhall': 30703,
		'Hill Hideout': 30002,
		'Iron Guildhall': 30702,
		'Marble Guildhall': 30701,
		'Outlaw Castle': 32015,
		'Riverspring': 30003,
		'Wolftower': 30001,
		'Ivy Cottage': 64026,
		'Mountain Hideout': 64028,
		'The Shelter': 65023,
		'Bamboo Fortress': 46041,
		'Shark Manor': 46040,
		'The Treehouse': 47001,
		'Crystal Glance': 55302,
		'Frost Manor': 55303,
		'Mammoth Belly': 55301,
		'Bloodhall': 10005,
		'Castle of Greenshore': 14002,
		'Dark Mansion': 10004,
		'Fibula Clanhall': 12010,
		'Greenshore Clanhall': 14012,
		'Guildhall of the Red Rose': 12002,
		'Halls of the Adventurers': 10003,
		'Mercenary Tower': 12001,
		'Snake Tower': 10002,
		'Southern Thais Guildhall': 10406,
		'Spiritkeep': 10001,
		'Thais Clanhall': 10601,
		'The Tibianic': 14001,
		'Warriors Guildhall': 10801,
		'Blessed Shield Guildhall': 35001,
		'Golden Axe Guildhall': 35004,
		'Steel Home': 35002,
		'Swamp Watch': 35003,
		'Valorous Venore': 35005,
		'Cascade Towers': 38002,
		'Halls of Serenity': 38001,
		'Sun Palace': 38003
	},
	'houses': {
		'Ab\x27Dendriel': {
			'Coastwood 1': 40501,
			'Coastwood 10': 40510,
			'Coastwood 2': 40502,
			'Coastwood 3': 40503,
			'Coastwood 4': 40504,
			'Coastwood 5': 40505,
			'Coastwood 6 (Shop)': 40506,
			'Coastwood 7': 40507,
			'Coastwood 8': 40508,
			'Coastwood 9': 40509,
			'Great Willow 1a': 40211,
			'Great Willow 1b': 40212,
			'Great Willow 1c': 40213,
			'Great Willow 2a': 40221,
			'Great Willow 2b': 40222,
			'Great Willow 2c': 40223,
			'Great Willow 2d': 40224,
			'Great Willow 3a': 40231,
			'Great Willow 3b': 40232,
			'Great Willow 3c': 40233,
			'Great Willow 3d': 40234,
			'Great Willow 4a': 40241,
			'Great Willow 4b': 40242,
			'Great Willow 4c': 40243,
			'Great Willow 4d': 40244,
			'Mangrove 1': 40301,
			'Mangrove 2': 40302,
			'Mangrove 3': 40303,
			'Mangrove 4': 40304,
			'Shadow Caves 1': 40611,
			'Shadow Caves 11': 40621,
			'Shadow Caves 12': 40622,
			'Shadow Caves 13': 40623,
			'Shadow Caves 14': 40624,
			'Shadow Caves 15': 40625,
			'Shadow Caves 16': 40626,
			'Shadow Caves 17': 40627,
			'Shadow Caves 18': 40628,
			'Shadow Caves 2': 40612,
			'Shadow Caves 21': 40631,
			'Shadow Caves 22': 40632,
			'Shadow Caves 23': 40633,
			'Shadow Caves 24': 40634,
			'Shadow Caves 25': 40635,
			'Shadow Caves 26': 40636,
			'Shadow Caves 27': 40637,
			'Shadow Caves 28': 40638,
			'Shadow Caves 3': 40613,
			'Shadow Caves 4': 40614,
			'Treetop 1': 40401,
			'Treetop 10': 40410,
			'Treetop 11': 40411,
			'Treetop 12 (Shop)': 40412,
			'Treetop 13': 40413,
			'Treetop 2': 40402,
			'Treetop 3 (Shop)': 40403,
			'Treetop 4 (Shop)': 40404,
			'Treetop 5 (Shop)': 40405,
			'Treetop 6': 40406,
			'Treetop 7': 40407,
			'Treetop 8': 40408,
			'Treetop 9': 40409,
			'Underwood 1': 40101,
			'Underwood 10': 40110,
			'Underwood 2': 40102,
			'Underwood 3': 40103,
			'Underwood 4': 40104,
			'Underwood 5': 40105,
			'Underwood 6': 40106,
			'Underwood 7': 40107,
			'Underwood 8': 40108,
			'Underwood 9': 40109
		},
		'Ankrahmun': {
			'Arakmehn I': 59036,
			'Arakmehn II': 59037,
			'Arakmehn III': 59038,
			'Arakmehn IV': 59039,
			'Botham III a': 58030,
			'Botham III b': 58031,
			'Botham III c': 58032,
			'Botham III d': 58033,
			'Botham III e': 58034,
			'Botham III f': 58035,
			'Botham III g': 58036,
			'Botham III h': 58037,
			'Botham II a': 58023,
			'Botham II b': 58024,
			'Botham II c': 58025,
			'Botham II d': 58026,
			'Botham II e': 58027,
			'Botham II f': 58028,
			'Botham II g': 58029,
			'Botham IV a': 58038,
			'Botham IV b': 58039,
			'Botham IV c': 58040,
			'Botham IV d': 58041,
			'Botham IV e': 58042,
			'Botham IV f': 58043,
			'Botham IV g': 58044,
			'Botham IV h': 58045,
			'Botham IV i': 58046,
			'Botham I a': 58018,
			'Botham I b': 58019,
			'Botham I c': 58020,
			'Botham I d': 58021,
			'Botham I e': 58022,
			'Chameken I': 58000,
			'Chameken II': 58001,
			'Charsirakh II': 59002,
			'Charsirakh III': 59003,
			'Charsirakh I a': 59000,
			'Charsirakh I b': 59001,
			'Esuph I': 59067,
			'Esuph III a': 59070,
			'Esuph III b': 59071,
			'Esuph II a': 59068,
			'Esuph II b': 59069,
			'Esuph IV a': 59072,
			'Esuph IV b': 59073,
			'Esuph IV c': 59074,
			'Esuph IV d': 59075,
			'Low Waters Observatory': 57001,
			'Mothrem I': 59035,
			'Murkhol I a': 59021,
			'Murkhol I b': 59022,
			'Murkhol I c': 59023,
			'Murkhol I d': 59024,
			'Oskahl I a': 59025,
			'Oskahl I b': 59026,
			'Oskahl I c': 59027,
			'Oskahl I d': 59028,
			'Oskahl I e': 59029,
			'Oskahl I f': 59030,
			'Oskahl I g': 59031,
			'Oskahl I h': 59032,
			'Oskahl I i': 59033,
			'Oskahl I j': 59034,
			'Othehothep III a': 59014,
			'Othehothep III b': 59015,
			'Othehothep III c': 59016,
			'Othehothep III d': 59017,
			'Othehothep III e': 59018,
			'Othehothep III f': 59019,
			'Othehothep II a': 59008,
			'Othehothep II b': 59009,
			'Othehothep II c': 59010,
			'Othehothep II d': 59011,
			'Othehothep II e': 59012,
			'Othehothep II f': 59013,
			'Othehothep I a': 59004,
			'Othehothep I b': 59005,
			'Othehothep I c': 59006,
			'Othehothep I d': 59007,
			'Rathal II a': 59056,
			'Rathal II b': 59057,
			'Rathal II c': 59058,
			'Rathal II d': 59059,
			'Rathal I a': 59051,
			'Rathal I b': 59052,
			'Rathal I c': 59053,
			'Rathal I d': 59054,
			'Rathal I e': 59055,
			'Thanah II a': 58006,
			'Thanah II b': 58007,
			'Thanah II c': 58008,
			'Thanah II d': 58009,
			'Thanah II e': 58010,
			'Thanah II f': 58011,
			'Thanah II g': 58012,
			'Thanah II h': 58013,
			'Thanah I a': 58002,
			'Thanah I b': 58003,
			'Thanah I c': 58004,
			'Thanah I d': 58005,
			'Thrarhor I a (Shop)': 58014,
			'Thrarhor I b (Shop)': 58015,
			'Thrarhor I c (Shop)': 58016,
			'Thrarhor I d (Shop)': 58017,
			'Unklath II a': 59047,
			'Unklath II b': 59048,
			'Unklath II c': 59049,
			'Unklath II d': 59050,
			'Unklath I a': 59040,
			'Unklath I b': 59041,
			'Unklath I c': 59042,
			'Unklath I d': 59043,
			'Unklath I e': 59044,
			'Unklath I f': 59045,
			'Unklath I g': 59046,
			'Uthemath I a': 59060,
			'Uthemath I b': 59061,
			'Uthemath I c': 59062,
			'Uthemath I d': 59063,
			'Uthemath I e': 59064,
			'Uthemath I f': 59065
		},
		'Carlin': {
			'Central Plaza 1': 20104,
			'Central Plaza 2': 20103,
			'Central Plaza 3': 20102,
			'Druids Retreat A': 20004,
			'Druids Retreat B': 20005,
			'Druids Retreat C': 20006,
			'Druids Retreat D': 20007,
			'East Lane 1a': 20801,
			'East Lane 1b': 20802,
			'East Lane 2': 20803,
			'Harbour Flats, Flat 11': 20705,
			'Harbour Flats, Flat 12': 20706,
			'Harbour Flats, Flat 13': 20707,
			'Harbour Flats, Flat 14': 20708,
			'Harbour Flats, Flat 15': 20709,
			'Harbour Flats, Flat 16': 20710,
			'Harbour Flats, Flat 17': 20711,
			'Harbour Flats, Flat 18': 20712,
			'Harbour Flats, Flat 21': 20713,
			'Harbour Flats, Flat 22': 20714,
			'Harbour Flats, Flat 23': 20715,
			'Harbour Lane 1 (Shop)': 20701,
			'Harbour Lane 2a (Shop)': 20703,
			'Harbour Lane 2b (Shop)': 20704,
			'Harbour Lane 3': 20702,
			'Lonely Sea Side Hostel': 20902,
			'Magician\x27s Alley 1': 20501,
			'Magician\x27s Alley 1a': 20502,
			'Magician\x27s Alley 1b': 20503,
			'Magician\x27s Alley 1c': 20504,
			'Magician\x27s Alley 1d': 20505,
			'Magician\x27s Alley 4': 20513,
			'Magician\x27s Alley 5a': 20507,
			'Magician\x27s Alley 5b': 20508,
			'Magician\x27s Alley 5c': 20509,
			'Magician\x27s Alley 5d': 20510,
			'Magician\x27s Alley 5e': 20511,
			'Magician\x27s Alley 5f': 20512,
			'Magician\x27s Alley 8': 20514,
			'Nautic Observer': 20011,
			'Northern Street 1a': 20601,
			'Northern Street 1b': 20602,
			'Northern Street 1c': 20603,
			'Northern Street 3a': 20604,
			'Northern Street 3b': 20605,
			'Northern Street 5': 20606,
			'Northern Street 7': 20607,
			'Northport Village 1': 22001,
			'Northport Village 2': 22002,
			'Northport Village 3': 22003,
			'Northport Village 4': 22004,
			'Northport Village 5': 22006,
			'Northport Village 6': 22007,
			'Park Lane 1a': 20201,
			'Park Lane 1b': 20202,
			'Park Lane 2': 20206,
			'Park Lane 3a': 20204,
			'Park Lane 3b': 20203,
			'Park Lane 4': 20205,
			'Rosebud A': 20008,
			'Rosebud B': 20009,
			'Rosebud C': 20010,
			'Senja Village 10': 24012,
			'Senja Village 11': 24013,
			'Senja Village 1a': 24001,
			'Senja Village 1b': 24002,
			'Senja Village 2': 24003,
			'Senja Village 3': 24004,
			'Senja Village 4': 24005,
			'Senja Village 5': 24006,
			'Senja Village 6a': 24007,
			'Senja Village 6b': 24008,
			'Senja Village 7': 24009,
			'Senja Village 8': 24010,
			'Senja Village 9': 24011,
			'Theater Avenue 10': 20401,
			'Theater Avenue 11a': 20404,
			'Theater Avenue 11b': 20405,
			'Theater Avenue 11c': 20406,
			'Theater Avenue 12': 20402,
			'Theater Avenue 14 (Shop)': 20403,
			'Theater Avenue 5a': 20310,
			'Theater Avenue 5b': 20311,
			'Theater Avenue 5c': 20312,
			'Theater Avenue 5d': 20313,
			'Theater Avenue 6a': 20304,
			'Theater Avenue 6b': 20305,
			'Theater Avenue 6c': 20306,
			'Theater Avenue 6d': 20307,
			'Theater Avenue 6e': 20308,
			'Theater Avenue 6f': 20309,
			'Theater Avenue 7, Flat 01': 20316,
			'Theater Avenue 7, Flat 02': 20317,
			'Theater Avenue 7, Flat 03': 20318,
			'Theater Avenue 7, Flat 04': 20319,
			'Theater Avenue 7, Flat 05': 20320,
			'Theater Avenue 7, Flat 06': 20321,
			'Theater Avenue 7, Flat 11': 20322,
			'Theater Avenue 7, Flat 12': 20323,
			'Theater Avenue 7, Flat 13': 20324,
			'Theater Avenue 7, Flat 14': 20325,
			'Theater Avenue 7, Flat 15': 20326,
			'Theater Avenue 7, Flat 16': 20327,
			'Theater Avenue 8a': 20314,
			'Theater Avenue 8b': 20315
		},
		'Darashia': {
			'Darashia, Villa': 62016,
			'Darashia 1, Flat 01': 61000,
			'Darashia 1, Flat 02': 61001,
			'Darashia 1, Flat 03': 61002,
			'Darashia 1, Flat 04': 61003,
			'Darashia 1, Flat 05': 61004,
			'Darashia 1, Flat 11': 61005,
			'Darashia 1, Flat 12': 61006,
			'Darashia 1, Flat 13': 61007,
			'Darashia 1, Flat 14': 61008,
			'Darashia 2, Flat 01': 61009,
			'Darashia 2, Flat 02': 61010,
			'Darashia 2, Flat 03': 61011,
			'Darashia 2, Flat 04': 61012,
			'Darashia 2, Flat 05': 61013,
			'Darashia 2, Flat 06': 61014,
			'Darashia 2, Flat 07': 61015,
			'Darashia 2, Flat 11': 61016,
			'Darashia 2, Flat 12': 61017,
			'Darashia 2, Flat 13': 61018,
			'Darashia 2, Flat 14': 61019,
			'Darashia 2, Flat 15': 61020,
			'Darashia 2, Flat 16': 61021,
			'Darashia 2, Flat 17': 61022,
			'Darashia 2, Flat 18': 61023,
			'Darashia 3, Flat 01': 61024,
			'Darashia 3, Flat 02': 61025,
			'Darashia 3, Flat 03': 61026,
			'Darashia 3, Flat 04': 61027,
			'Darashia 3, Flat 05': 61028,
			'Darashia 3, Flat 11': 61029,
			'Darashia 3, Flat 12': 61030,
			'Darashia 3, Flat 13': 61031,
			'Darashia 3, Flat 14': 61032,
			'Darashia 4, Flat 01': 61033,
			'Darashia 4, Flat 02': 61034,
			'Darashia 4, Flat 03': 61035,
			'Darashia 4, Flat 04': 61036,
			'Darashia 4, Flat 05': 61037,
			'Darashia 4, Flat 11': 61038,
			'Darashia 4, Flat 12': 61039,
			'Darashia 4, Flat 13': 61040,
			'Darashia 4, Flat 14': 61041,
			'Darashia 5, Flat 01': 61042,
			'Darashia 5, Flat 02': 61043,
			'Darashia 5, Flat 03': 61044,
			'Darashia 5, Flat 04': 61045,
			'Darashia 5, Flat 05': 61046,
			'Darashia 5, Flat 11': 61047,
			'Darashia 5, Flat 12': 61048,
			'Darashia 5, Flat 13': 61049,
			'Darashia 5, Flat 14': 61050,
			'Darashia 6a': 62000,
			'Darashia 6b': 62001,
			'Darashia 7, Flat 01': 62002,
			'Darashia 7, Flat 02': 62003,
			'Darashia 7, Flat 03': 62004,
			'Darashia 7, Flat 04': 62005,
			'Darashia 7, Flat 05': 62006,
			'Darashia 7, Flat 11': 62007,
			'Darashia 7, Flat 12': 62008,
			'Darashia 7, Flat 13': 62009,
			'Darashia 7, Flat 14': 62010,
			'Darashia 8, Flat 01': 62011,
			'Darashia 8, Flat 02': 62012,
			'Darashia 8, Flat 03': 62013,
			'Darashia 8, Flat 04': 62014,
			'Darashia 8, Flat 05': 62015,
			'Darashia 8, Flat 11': 62019,
			'Darashia 8, Flat 12': 62020,
			'Darashia 8, Flat 13': 62021,
			'Darashia 8, Flat 14': 62022
		},
		'Edron': {
			'Castle, 3rd Floor, Flat 01': 50104,
			'Castle, 3rd Floor, Flat 02': 50105,
			'Castle, 3rd Floor, Flat 03': 50106,
			'Castle, 3rd Floor, Flat 04': 50107,
			'Castle, 3rd Floor, Flat 05': 50108,
			'Castle, 3rd Floor, Flat 06': 50109,
			'Castle, 3rd Floor, Flat 07': 50110,
			'Castle, 4th Floor, Flat 01': 50111,
			'Castle, 4th Floor, Flat 02': 50112,
			'Castle, 4th Floor, Flat 03': 50113,
			'Castle, 4th Floor, Flat 04': 50114,
			'Castle, 4th Floor, Flat 05': 50115,
			'Castle, 4th Floor, Flat 06': 50116,
			'Castle, 4th Floor, Flat 07': 50117,
			'Castle, 4th Floor, Flat 08': 50118,
			'Castle, 4th Floor, Flat 09': 50119,
			'Castle, Basement, Flat 01': 50120,
			'Castle, Basement, Flat 02': 50121,
			'Castle, Basement, Flat 03': 50122,
			'Castle, Basement, Flat 04': 50123,
			'Castle, Basement, Flat 05': 50124,
			'Castle, Basement, Flat 06': 50125,
			'Castle, Basement, Flat 07': 50126,
			'Castle, Basement, Flat 08': 50127,
			'Castle, Basement, Flat 09': 50128,
			'Castle Shop 1': 50101,
			'Castle Shop 2': 50102,
			'Castle Shop 3': 50103,
			'Castle Street 1': 50201,
			'Castle Street 2': 50202,
			'Castle Street 3': 50203,
			'Castle Street 4': 50204,
			'Castle Street 5': 50205,
			'Central Circle 1': 50401,
			'Central Circle 2': 50402,
			'Central Circle 3': 50403,
			'Central Circle 4': 50404,
			'Central Circle 5': 50405,
			'Central Circle 6 (Shop)': 50406,
			'Central Circle 7 (Shop)': 50407,
			'Central Circle 8 (Shop)': 50408,
			'Central Circle 9a': 50409,
			'Central Circle 9b': 50410,
			'Cormaya 1': 54013,
			'Cormaya 10': 54025,
			'Cormaya 11': 54026,
			'Cormaya 2': 54014,
			'Cormaya 3': 54015,
			'Cormaya 4': 54016,
			'Cormaya 5': 54017,
			'Cormaya 6': 54018,
			'Cormaya 7': 54019,
			'Cormaya 8': 54020,
			'Cormaya 9a': 54021,
			'Cormaya 9b': 54022,
			'Cormaya 9c': 54023,
			'Cormaya 9d': 54024,
			'Cormaya Flats, Flat 01': 54001,
			'Cormaya Flats, Flat 02': 54002,
			'Cormaya Flats, Flat 03': 54003,
			'Cormaya Flats, Flat 04': 54004,
			'Cormaya Flats, Flat 05': 54005,
			'Cormaya Flats, Flat 06': 54006,
			'Cormaya Flats, Flat 11': 54007,
			'Cormaya Flats, Flat 12': 54008,
			'Cormaya Flats, Flat 13': 54009,
			'Cormaya Flats, Flat 14': 54010,
			'Cormaya Flats, Flat 15': 54011,
			'Cormaya Flats, Flat 16': 54012,
			'Edron Flats, Basement Flat 1': 50325,
			'Edron Flats, Basement Flat 2': 50326,
			'Edron Flats, Flat 01': 50301,
			'Edron Flats, Flat 02': 50302,
			'Edron Flats, Flat 03': 50303,
			'Edron Flats, Flat 04': 50304,
			'Edron Flats, Flat 05': 50305,
			'Edron Flats, Flat 06': 50306,
			'Edron Flats, Flat 07': 50307,
			'Edron Flats, Flat 08': 50308,
			'Edron Flats, Flat 11': 50309,
			'Edron Flats, Flat 12': 50310,
			'Edron Flats, Flat 13': 50311,
			'Edron Flats, Flat 14': 50312,
			'Edron Flats, Flat 15': 50313,
			'Edron Flats, Flat 16': 50314,
			'Edron Flats, Flat 17': 50315,
			'Edron Flats, Flat 18': 50316,
			'Edron Flats, Flat 21': 50317,
			'Edron Flats, Flat 22': 50318,
			'Edron Flats, Flat 23': 50319,
			'Edron Flats, Flat 24': 50320,
			'Edron Flats, Flat 25': 50321,
			'Edron Flats, Flat 26': 50322,
			'Edron Flats, Flat 27': 50323,
			'Edron Flats, Flat 28': 50324,
			'Magic Academy, Flat 1': 50703,
			'Magic Academy, Flat 2': 50704,
			'Magic Academy, Flat 3': 50705,
			'Magic Academy, Flat 4': 50706,
			'Magic Academy, Flat 5': 50707,
			'Magic Academy, Shop': 50702,
			'Sky Lane, Sea Tower': 50604,
			'Stonehome Flats, Flat 01': 52010,
			'Stonehome Flats, Flat 02': 52011,
			'Stonehome Flats, Flat 03': 52012,
			'Stonehome Flats, Flat 04': 52013,
			'Stonehome Flats, Flat 05': 52014,
			'Stonehome Flats, Flat 06': 52015,
			'Stonehome Flats, Flat 11': 52016,
			'Stonehome Flats, Flat 12': 52017,
			'Stonehome Flats, Flat 13': 52018,
			'Stonehome Flats, Flat 14': 52019,
			'Stonehome Flats, Flat 15': 52020,
			'Stonehome Flats, Flat 16': 52021,
			'Stonehome Village 1': 52001,
			'Stonehome Village 2': 52002,
			'Stonehome Village 3': 52003,
			'Stonehome Village 4': 52004,
			'Stonehome Village 5': 52005,
			'Stonehome Village 6': 52006,
			'Stonehome Village 7': 52007,
			'Stonehome Village 8': 52008,
			'Stonehome Village 9': 52009,
			'Wood Avenue 1': 50501,
			'Wood Avenue 10a': 50512,
			'Wood Avenue 10b': 50513,
			'Wood Avenue 11': 50514,
			'Wood Avenue 2': 50502,
			'Wood Avenue 3': 50503,
			'Wood Avenue 4': 50504,
			'Wood Avenue 4a': 50515,
			'Wood Avenue 4b': 50516,
			'Wood Avenue 4c': 50517,
			'Wood Avenue 5': 50505,
			'Wood Avenue 6a': 50506,
			'Wood Avenue 6b': 50507,
			'Wood Avenue 7': 50508,
			'Wood Avenue 8': 50509,
			'Wood Avenue 9a': 50510,
			'Wood Avenue 9b': 50511
		},
		'Farmine': {
			'Caveman Shelter': 15001,
			'Eastern House of Tranquility': 15002
		},
		'Gray Beach': {
			'Old Sanctuary of God King Qjell': 17001
		},
		'Kazordoon': {
			'Hare\x27s Den': 32016,
			'Lost Cavern': 33001,
			'Lower Barracks 1': 30501,
			'Lower Barracks 10': 30510,
			'Lower Barracks 11': 30511,
			'Lower Barracks 12': 30512,
			'Lower Barracks 13': 30513,
			'Lower Barracks 14': 30514,
			'Lower Barracks 15': 30515,
			'Lower Barracks 16': 30516,
			'Lower Barracks 17': 30517,
			'Lower Barracks 18': 30518,
			'Lower Barracks 19': 30519,
			'Lower Barracks 2': 30502,
			'Lower Barracks 20': 30520,
			'Lower Barracks 21': 30521,
			'Lower Barracks 22': 30522,
			'Lower Barracks 23': 30523,
			'Lower Barracks 24': 30524,
			'Lower Barracks 3': 30503,
			'Lower Barracks 4': 30504,
			'Lower Barracks 5': 30505,
			'Lower Barracks 6': 30506,
			'Lower Barracks 7': 30507,
			'Lower Barracks 8': 30508,
			'Lower Barracks 9': 30509,
			'Nobility Quarter 1': 30201,
			'Nobility Quarter 2': 30202,
			'Nobility Quarter 3': 30203,
			'Nobility Quarter 4': 30204,
			'Nobility Quarter 5': 30205,
			'Nobility Quarter 6': 30206,
			'Nobility Quarter 7': 30207,
			'Nobility Quarter 8': 30208,
			'Nobility Quarter 9': 30209,
			'Outlaw Camp 1': 32001,
			'Outlaw Camp 10': 32010,
			'Outlaw Camp 11': 32011,
			'Outlaw Camp 12 (Shop)': 32012,
			'Outlaw Camp 13 (Shop)': 32013,
			'Outlaw Camp 14 (Shop)': 32014,
			'Outlaw Camp 2': 32002,
			'Outlaw Camp 3': 32003,
			'Outlaw Camp 4': 32004,
			'Outlaw Camp 5': 32005,
			'Outlaw Camp 6': 32006,
			'Outlaw Camp 7': 32007,
			'Outlaw Camp 8': 32008,
			'Outlaw Camp 9': 32009,
			'The Farms 1': 30101,
			'The Farms 2': 30102,
			'The Farms 3': 30103,
			'The Farms 4': 30104,
			'The Farms 5': 30105,
			'The Farms 6, Fishing Hut': 30106,
			'The Market 1 (Shop)': 30401,
			'The Market 2 (Shop)': 30402,
			'The Market 3 (Shop)': 30403,
			'The Market 4 (Shop)': 30404,
			'Tunnel Gardens 1': 30601,
			'Tunnel Gardens 10': 30610,
			'Tunnel Gardens 11': 30611,
			'Tunnel Gardens 12': 30612,
			'Tunnel Gardens 2 ': 30602,
			'Tunnel Gardens 3': 30603,
			'Tunnel Gardens 4': 30604,
			'Tunnel Gardens 5': 30605,
			'Tunnel Gardens 6': 30606,
			'Tunnel Gardens 7': 30607,
			'Tunnel Gardens 8': 30608,
			'Tunnel Gardens 9': 30609,
			'Upper Barracks 1': 30301,
			'Upper Barracks 10': 30310,
			'Upper Barracks 11': 30311,
			'Upper Barracks 12': 30312,
			'Upper Barracks 13': 30313,
			'Upper Barracks 2': 30302,
			'Upper Barracks 3': 30303,
			'Upper Barracks 4': 30304,
			'Upper Barracks 5': 30305,
			'Upper Barracks 6': 30306,
			'Upper Barracks 7': 30307,
			'Upper Barracks 8': 30308,
			'Upper Barracks 9': 30309
		},
		'Liberty Bay': {
			'Admiral\x27s Avenue 1': 63005,
			'Admiral\x27s Avenue 2': 63006,
			'Admiral\x27s Avenue 3': 63007,
			'Freedom Street 1': 64001,
			'Freedom Street 2': 64002,
			'Harvester\x27s Haven, Flat 01': 64014,
			'Harvester\x27s Haven, Flat 02': 64015,
			'Harvester\x27s Haven, Flat 03': 64016,
			'Harvester\x27s Haven, Flat 04': 64017,
			'Harvester\x27s Haven, Flat 05': 64018,
			'Harvester\x27s Haven, Flat 06': 64019,
			'Harvester\x27s Haven, Flat 07': 64020,
			'Harvester\x27s Haven, Flat 08': 64021,
			'Harvester\x27s Haven, Flat 09': 64022,
			'Harvester\x27s Haven, Flat 10': 64023,
			'Harvester\x27s Haven, Flat 11': 64024,
			'Harvester\x27s Haven, Flat 12': 64025,
			'Ivory Circle 1': 63008,
			'Ivory Circle 2': 63009,
			'Litter Promenade 1': 65018,
			'Litter Promenade 2': 65019,
			'Litter Promenade 3': 65020,
			'Litter Promenade 4': 65021,
			'Litter Promenade 5': 65022,
			'Marble Lane 1': 63001,
			'Marble Lane 2': 63002,
			'Marble Lane 3': 63003,
			'Marble Lane 4': 63004,
			'Meriana Beach': 63010,
			'Rum Alley 1': 65009,
			'Rum Alley 2': 65010,
			'Rum Alley 3': 65011,
			'Shady Trail 1': 65006,
			'Shady Trail 2': 65007,
			'Shady Trail 3': 65008,
			'Smuggler Backyard 1': 65001,
			'Smuggler Backyard 2': 65002,
			'Smuggler Backyard 3': 65003,
			'Smuggler Backyard 4': 65004,
			'Smuggler Backyard 5': 65005,
			'Straycat\x27s Corner 1': 65012,
			'Straycat\x27s Corner 2': 65013,
			'Straycat\x27s Corner 3': 65014,
			'Straycat\x27s Corner 4': 65015,
			'Straycat\x27s Corner 5': 65016,
			'Straycat\x27s Corner 6': 65017,
			'Sugar Street 1': 64006,
			'Sugar Street 2': 64007,
			'Sugar Street 3a': 64008,
			'Sugar Street 3b': 64009,
			'Sugar Street 4a': 64010,
			'Sugar Street 4b': 64011,
			'Sugar Street 4c': 64012,
			'Sugar Street 4d': 64013,
			'Sugar Street 5': 64027,
			'The Tavern 1a': 64029,
			'The Tavern 1b': 64030,
			'The Tavern 1c': 64031,
			'The Tavern 1d': 64032,
			'The Tavern 2a': 64033,
			'The Tavern 2b': 64034,
			'The Tavern 2c': 64035,
			'The Tavern 2d': 64036,
			'The Yeah Beach Project': 63011,
			'Trader\x27s Point 1': 64003,
			'Trader\x27s Point 2 (Shop)': 64004,
			'Trader\x27s Point 3 (Shop)': 64005
		},
		'Port Hope': {
			'Bamboo Garden 1': 46019,
			'Bamboo Garden 2': 46020,
			'Bamboo Garden 3': 46021,
			'Banana Bay 1': 46001,
			'Banana Bay 2': 46002,
			'Banana Bay 3': 46003,
			'Banana Bay 4': 46004,
			'Coconut Quay 1': 46022,
			'Coconut Quay 2': 46023,
			'Coconut Quay 3': 46024,
			'Coconut Quay 4': 46025,
			'Crocodile Bridge 1': 46005,
			'Crocodile Bridge 2': 46006,
			'Crocodile Bridge 3': 46007,
			'Crocodile Bridge 4': 46008,
			'Crocodile Bridge 5': 46009,
			'Flamingo Flats 1': 46014,
			'Flamingo Flats 2': 46015,
			'Flamingo Flats 3': 46016,
			'Flamingo Flats 4': 46017,
			'Flamingo Flats 5': 46018,
			'Haggler\x27s Hangout 1': 45001,
			'Haggler\x27s Hangout 2': 45002,
			'Haggler\x27s Hangout 3': 45003,
			'Haggler\x27s Hangout 4a (Shop)': 45004,
			'Haggler\x27s Hangout 4b (Shop)': 45005,
			'Haggler\x27s Hangout 5 (Shop)': 45006,
			'Haggler\x27s Hangout 6': 45007,
			'Jungle Edge 1': 46030,
			'Jungle Edge 2': 46031,
			'Jungle Edge 3': 46032,
			'Jungle Edge 4': 46033,
			'Jungle Edge 5': 46034,
			'Jungle Edge 6': 46035,
			'River Homes 1': 46026,
			'River Homes 2a': 46027,
			'River Homes 2b': 46028,
			'River Homes 3': 46029,
			'Woodway 1': 46010,
			'Woodway 2': 46011,
			'Woodway 3': 46012,
			'Woodway 4': 46013
		},
		'Svargrond': {
			'Arena Walk 1': 55011,
			'Arena Walk 2': 55012,
			'Arena Walk 3': 55013,
			'Bears Paw 1': 55101,
			'Bears Paw 2': 55102,
			'Bears Paw 3': 55103,
			'Bears Paw 4': 55104,
			'Bears Paw 5': 55105,
			'Corner Shop (Shop)': 55131,
			'Fimbul Shelf 1': 55207,
			'Fimbul Shelf 2': 55208,
			'Fimbul Shelf 3': 55209,
			'Fimbul Shelf 4': 55210,
			'Furrier Quarter 1': 55211,
			'Furrier Quarter 2': 55212,
			'Furrier Quarter 3': 55213,
			'Glacier Side 1': 55002,
			'Glacier Side 2': 55003,
			'Glacier Side 3': 55004,
			'Glacier Side 4': 55005,
			'Mammoth House': 55014,
			'Pilchard Bin 1': 55116,
			'Pilchard Bin 10': 55125,
			'Pilchard Bin 2': 55117,
			'Pilchard Bin 3': 55118,
			'Pilchard Bin 4': 55119,
			'Pilchard Bin 5': 55120,
			'Pilchard Bin 6': 55121,
			'Pilchard Bin 7': 55122,
			'Pilchard Bin 8': 55123,
			'Pilchard Bin 9': 55124,
			'Raven Corner 1': 55106,
			'Raven Corner 2': 55107,
			'Raven Corner 3': 55108,
			'Shady Rocks 1': 55126,
			'Shady Rocks 2': 55127,
			'Shady Rocks 3': 55128,
			'Shady Rocks 4 (Shop)': 55129,
			'Shady Rocks 5': 55130,
			'Shelf Site': 55001,
			'Skiffs End 1': 55109,
			'Skiffs End 2': 55110,
			'Spirit Homes 1': 55006,
			'Spirit Homes 2': 55007,
			'Spirit Homes 3': 55008,
			'Spirit Homes 4': 55009,
			'Spirit Homes 5': 55010,
			'Trout Plaza 1': 55111,
			'Trout Plaza 2': 55112,
			'Trout Plaza 3': 55113,
			'Trout Plaza 4': 55114,
			'Trout Plaza 5 (Shop)': 55115,
			'Tusk Flats 1': 55201,
			'Tusk Flats 2': 55202,
			'Tusk Flats 3': 55203,
			'Tusk Flats 4': 55204,
			'Tusk Flats 5': 55205,
			'Tusk Flats 6': 55206
		},
		'Thais': {
			'Alai Flats, Flat 01': 10301,
			'Alai Flats, Flat 02': 10302,
			'Alai Flats, Flat 03': 10303,
			'Alai Flats, Flat 04': 10304,
			'Alai Flats, Flat 05': 10305,
			'Alai Flats, Flat 06': 10306,
			'Alai Flats, Flat 07': 10307,
			'Alai Flats, Flat 08': 10308,
			'Alai Flats, Flat 11': 10311,
			'Alai Flats, Flat 12': 10312,
			'Alai Flats, Flat 13': 10313,
			'Alai Flats, Flat 14': 10314,
			'Alai Flats, Flat 15': 10315,
			'Alai Flats, Flat 16': 10316,
			'Alai Flats, Flat 17': 10317,
			'Alai Flats, Flat 18': 10318,
			'Alai Flats, Flat 21': 10320,
			'Alai Flats, Flat 22': 10319,
			'Alai Flats, Flat 23': 10321,
			'Alai Flats, Flat 24': 10322,
			'Alai Flats, Flat 25': 10323,
			'Alai Flats, Flat 26': 10324,
			'Alai Flats, Flat 27': 10325,
			'Alai Flats, Flat 28': 10326,
			'Beach Home Apartments, Flat 01': 10201,
			'Beach Home Apartments, Flat 02': 10202,
			'Beach Home Apartments, Flat 03': 10203,
			'Beach Home Apartments, Flat 04': 10204,
			'Beach Home Apartments, Flat 05': 10205,
			'Beach Home Apartments, Flat 06': 10206,
			'Beach Home Apartments, Flat 11': 10211,
			'Beach Home Apartments, Flat 12': 10212,
			'Beach Home Apartments, Flat 13': 10213,
			'Beach Home Apartments, Flat 14': 10214,
			'Beach Home Apartments, Flat 15': 10215,
			'Beach Home Apartments, Flat 16': 10216,
			'Demon Tower': 10006,
			'Farm Lane, 1st floor (Shop)': 10702,
			'Farm Lane, 2nd Floor (Shop)': 10703,
			'Farm Lane, Basement (Shop)': 10701,
			'Fibula Village, Bar': 12009,
			'Fibula Village, Tower Flat': 12008,
			'Fibula Village, Villa': 12100,
			'Fibula Village 1': 12003,
			'Fibula Village 2': 12004,
			'Fibula Village 3': 12005,
			'Fibula Village 4': 12006,
			'Fibula Village 5': 12007,
			'Greenshore Village, Shop': 14004,
			'Greenshore Village, Villa': 14003,
			'Greenshore Village 1': 14005,
			'Greenshore Village 2': 14006,
			'Greenshore Village 3': 14007,
			'Greenshore Village 4': 14008,
			'Greenshore Village 5': 14009,
			'Greenshore Village 6': 14010,
			'Greenshore Village 7': 14011,
			'Harbour Place 1 (Shop)': 11404,
			'Harbour Place 2 (Shop)': 11401,
			'Harbour Street 4': 10602,
			'Lower Swamp Lane 1': 10403,
			'Lower Swamp Lane 3': 10404,
			'Main Street 9, 1st floor (Shop)': 10802,
			'Main Street 9a, 2nd floor (Shop)': 10803,
			'Main Street 9b, 2nd floor (Shop)': 10804,
			'Mill Avenue 1 (Shop)': 10901,
			'Mill Avenue 2 (Shop)': 10902,
			'Mill Avenue 3': 10903,
			'Mill Avenue 4': 10904,
			'Mill Avenue 5': 10905,
			'Open-Air Theatre': 10007,
			'Sorcerer\x27s Avenue 1a': 10501,
			'Sorcerer\x27s Avenue 1b': 10502,
			'Sorcerer\x27s Avenue 1c': 10503,
			'Sorcerer\x27s Avenue 5': 10504,
			'Sorcerer\x27s Avenue Labs 2a': 10505,
			'Sorcerer\x27s Avenue Labs 2b': 10506,
			'Sorcerer\x27s Avenue Labs 2c': 10507,
			'Sorcerer\x27s Avenue Labs 2d': 10508,
			'Sorcerer\x27s Avenue Labs 2e': 10509,
			'Sorcerer\x27s Avenue Labs 2f': 10510,
			'Sunset Homes, Flat 01': 10101,
			'Sunset Homes, Flat 02': 10102,
			'Sunset Homes, Flat 03': 10103,
			'Sunset Homes, Flat 11': 10104,
			'Sunset Homes, Flat 12': 10112,
			'Sunset Homes, Flat 13': 10113,
			'Sunset Homes, Flat 14': 10114,
			'Sunset Homes, Flat 21': 10121,
			'Sunset Homes, Flat 22': 10122,
			'Sunset Homes, Flat 23': 10123,
			'Sunset Homes, Flat 24': 10124,
			'Thais Hostel': 10603,
			'The City Wall 1a': 11022,
			'The City Wall 1b': 11023,
			'The City Wall 3a': 11016,
			'The City Wall 3b': 11017,
			'The City Wall 3c': 11018,
			'The City Wall 3d': 11019,
			'The City Wall 3e': 11020,
			'The City Wall 3f': 11021,
			'The City Wall 5a': 11001,
			'The City Wall 5b': 11002,
			'The City Wall 5c': 11003,
			'The City Wall 5d': 11004,
			'The City Wall 5e': 11005,
			'The City Wall 5f': 11006,
			'The City Wall 7a': 11007,
			'The City Wall 7b': 11008,
			'The City Wall 7c': 11009,
			'The City Wall 7d': 11010,
			'The City Wall 7e': 11011,
			'The City Wall 7f': 11012,
			'The City Wall 7g': 11013,
			'The City Wall 7h': 11014,
			'The City Wall 9': 11015,
			'Upper Swamp Lane 10': 10407,
			'Upper Swamp Lane 12': 10408,
			'Upper Swamp Lane 2': 10401,
			'Upper Swamp Lane 4': 10402,
			'Upper Swamp Lane 8': 10405
		},
		'Venore': {
			'Dagger Alley 1': 35006,
			'Dream Street 1 (Shop)': 35009,
			'Dream Street 2': 35010,
			'Dream Street 3': 35011,
			'Dream Street 4': 35012,
			'Elm Street 1': 35013,
			'Elm Street 2': 35014,
			'Elm Street 3': 35015,
			'Elm Street 4': 35016,
			'Iron Alley 1': 35007,
			'Iron Alley 2': 35008,
			'Loot Lane 1 (Shop)': 35056,
			'Lucky Lane 1 (Shop)': 35019,
			'Market Street 1': 35058,
			'Market Street 2': 35059,
			'Market Street 3': 35060,
			'Market Street 4 (Shop)': 35061,
			'Market Street 5 (Shop)': 35062,
			'Market Street 6': 35063,
			'Market Street 7': 35064,
			'Mystic Lane 1': 35050,
			'Mystic Lane 2': 35051,
			'Old Lighthouse': 35057,
			'Paupers Palace, Flat 01': 35020,
			'Paupers Palace, Flat 02': 35021,
			'Paupers Palace, Flat 03': 35022,
			'Paupers Palace, Flat 04': 35023,
			'Paupers Palace, Flat 05': 35024,
			'Paupers Palace, Flat 06': 35025,
			'Paupers Palace, Flat 07': 35026,
			'Paupers Palace, Flat 11': 35027,
			'Paupers Palace, Flat 12': 35028,
			'Paupers Palace, Flat 13': 35029,
			'Paupers Palace, Flat 14': 35030,
			'Paupers Palace, Flat 15': 35031,
			'Paupers Palace, Flat 16': 35032,
			'Paupers Palace, Flat 17': 35033,
			'Paupers Palace, Flat 18': 35034,
			'Paupers Palace, Flat 21': 35035,
			'Paupers Palace, Flat 22': 35036,
			'Paupers Palace, Flat 23': 35037,
			'Paupers Palace, Flat 24': 35038,
			'Paupers Palace, Flat 25': 35039,
			'Paupers Palace, Flat 26': 35040,
			'Paupers Palace, Flat 27': 35041,
			'Paupers Palace, Flat 28': 35042,
			'Paupers Palace, Flat 31': 35043,
			'Paupers Palace, Flat 32': 35044,
			'Paupers Palace, Flat 33': 35045,
			'Paupers Palace, Flat 34': 35046,
			'Salvation Street 1 (Shop)': 35047,
			'Salvation Street 2': 35048,
			'Salvation Street 3': 35049,
			'Seagull Walk 1': 35017,
			'Seagull Walk 2': 35018,
			'Silver Street 1': 35052,
			'Silver Street 2': 35053,
			'Silver Street 3': 35054,
			'Silver Street 4': 35055,
			'The Lair': 35065
		},
		'Yalahar': {
			'Aureate Court 1': 37001,
			'Aureate Court 2': 37002,
			'Aureate Court 3': 37003,
			'Aureate Court 4': 37004,
			'Fortune Wing 1': 37005,
			'Fortune Wing 2': 37006,
			'Fortune Wing 3': 37007,
			'Fortune Wing 4': 37008,
			'Luminous Arc 1': 37009,
			'Luminous Arc 2': 37010,
			'Luminous Arc 3': 37011,
			'Luminous Arc 4': 37012,
			'Radiant Plaza 1': 37013,
			'Radiant Plaza 2': 37014,
			'Radiant Plaza 3': 37015,
			'Radiant Plaza 4': 37016
		}
	}
};

// Skip the annoying intro page
if (/^\/mmorpg\/free\-multiplayer\-online\-role\-playing\-game\.php/.test(location.pathname)) {
	location.href = 'http://www.tibia.com/news/?subtopic=latestnews';
	return;
}

var elCharacters = document.getElementById('characters');

// Enhance the character info page
if (elCharacters) {

	var currentTable;
	function $table(header, callback) {
		var tables = document.querySelectorAll('table');
		var result;
		each(tables, function(table) {
			if (table.querySelector('td').innerText == header) {
				return result = table;
			}
		});
		if (result) {
			currentTable = result;
			callback(currentTable);
		}
	}

	function $cell(header, callback) {
		var cells = currentTable.querySelectorAll('td');
		var nextCell;
		var text;
		each(cells, function(cell, index) {
			if (cell.innerText == (header + ':')) {
				nextCell = cells[++index];
				text = nextCell.innerText;
				return false; // break
			}
		});
		if (nextCell && callback) {
			return nextCell.innerHTML = callback(nextCell, text);
		}
		// Quick hack to make sure an `HTMLElement` is always returned
		return nextCell || new Option;
	}

	function encode(string) {
		return String(string).replace(/\x20|\xA0/g, '+');
	}

	function each(array, callback) {
		var index = -1;
		var length = array.length;
		while (++index < length) {
			if (callback(array[index], index) === false) {
				break;
			}
		}
	}

	// Character information table
	$table('Character Information', function() {

		var charCell;
		var charName;
		var charNameEncoded;
		$cell('Name', function(element, text) {
			// Account for “Foo, will be deleted at Oct 1 2012, 17:00:00 CEST”
			charCell = element;
			charName = text.match('^[^,]+')[0];
			charNameEncoded = encode(charName);
			return charName + ' <span style="font-size: 90%;">(' + [
				'PvP history'.link('http://www.tibiaring.com/char.php?lang=en&c=' + charNameEncoded),
				'online time'.link('http://tibiafanstats.com/timecounter.php?player=' + charNameEncoded),
				'experience history'.link('http://tibiafanstats.com/xphist.php?player=' + charNameEncoded)
			].join(', ') + ')</span>';
		});
		charCell.querySelector('a').focus();

		var queryString = '?subtopic=characters&name=' + charNameEncoded;
		if (location.search.indexOf(queryString) == -1) {
			history.replaceState({}, charName, queryString);
		}

		// Married?
		$cell('Married to').classList.add('block-links');

		// World name
		var world;
		$cell('World', function(element, text) {
			world = text;
			element.classList.add('block-links');
			return text.link('http://www.tibia.com/community/?subtopic=worlds&amp;order=level_desc&amp;world=' + encode(text));
		});

		// Former world name (if any)
		$cell('Former World', function(element, text) {
			element.classList.add('block-links');
			return text.link('http://www.tibia.com/community/?subtopic=worlds&amp;order=level_desc&amp;world=' + encode(text));
		});

		// Link to House detail page
		$cell('House', function(element, text) {
			var city = text.match(/\(([^\)]+)\)\x20is/)[1];
			var houseName = text.match(/^(.+)\x20\([^\)]+\)\x20is/)[1];
			var houseID = buildings.houses[city][houseName];
			element.classList.add('block-links');
			return text.link('http://www.tibia.com/community/?subtopic=houses&amp;page=view&amp;world=' + encode(world) + '&amp;town=' + encode(city) + '&amp;houseid=' + encode(houseID));
		});

	});

	// Other characters on the account
	$table('Characters', function(table) {
		var cells = table.querySelectorAll('td[width]:first-child');
		each(cells, function(cell) {
			var text = cell.innerText;
			var charName = text.match(/^\d+\.(?:\xA0|\x20)(.*)/)[1];
			cell.classList.add('block-links');
			// `<nobr>`… I know! But that’s what they’re using:
			cell.innerHTML = '<nobr>' + text.link('http://www.tibia.com/community/?subtopic=characters&amp;name=' + encode(charName)) + '</nobr>';
		});
	});

	// Make the character search form perform a clean GET
	each(document.querySelectorAll('form[action="http://www.tibia.com/community/?subtopic=characters"]'), function(form) {
		form.method = 'get';
		var button = form.querySelector('input[name="Submit"]');
		if (button) {
			button.type = 'submit';
			button.removeAttribute('name');
		}
	});

	// Bookmarklets
	var bookmarklets = document.createElement('div');
	bookmarklets.innerHTML = '<br>Bookmarklets: <a href="data:text/html,<script>(function(){var%20q=prompt(\'Player%20name:\');if(q){document.location=\'http://www.tibia.com/community/?subtopic=characters&name=\'+q.replace(/%20/g,\'+\');}})();</script>">Player lookup</a>';
	elCharacters.querySelector('.Border_3 .BoxContent').appendChild(bookmarklets);
}

// Enhance the guild page
var guildContent = document.querySelector('#guilds .BoxContent');
if (guildContent) {
	guildContent.innerHTML = guildContent.innerHTML.replace(/Their home on ([a-zA-Z]+) is ([a-zA-Z\x20,]+)./, function($0, $1, $2) {
		return $0.link('http://www.tibia.com/community/?subtopic=houses&amp;world=' + $1 + '&amp;page=view&amp;houseid=' + buildings.guildhalls[$2]);
	});
}

// Remove social media bullshit
var elNetworkBox = document.getElementById('NetworksBox');
if (elNetworkBox) {
	elNetworkBox.parentNode.removeChild(elNetworkBox);
}

// Insert some CSS
var style = document.createElement('style');
style.innerHTML = [
	// Apply Fitts’s Law: increase clickable area for some links
	'.block-links a { display: block; }',
	// Hide the Facebook login button as it’s a very bad idea to link accounts
	'#FB_LoginButton { display: none; }'
].join('');
document.head.appendChild(style);


}());
