var BODIES = {
	SUN: new Body('SUN', 'yellow', 1988500e24, 6.957e5),
	MERCURY: new Body('MERCURY', '#929292', 3.302e23, 2440),
	EARTH: new Body('EARTH', '#5880b8', 5.97219e24, 6371.009),
	MOON: new Body('MOON', '#D8D8D8', 7.349e22, 1737.53),
	VENUS: new Body('VENUS', '#dabeac', 48.685e23, 6051.893),
	MARS: new Body('MARS', '#d8b059', 6.4171e23, 3389.92),
	JUPITER: new Body('JUPITER', '#a98723', 1898.13e24, 69911),
	IO: new Body('IO', '#E8D76F', 8.933e22, 1821.3),
	SATURN: new Body('SATURN', '#f7e4c8', 5.6834e26, 58232),
	URANUS: new Body('URANUS', '#b0b2c8', 86.813e24, 25362),
	NEPTUNE: new Body('NEPTUNE', '#004e73', 102.413e24, 24624),
	PLUTO: new Body('PLUTO', '#d8d8d8', 1.307e22, 1188.3),
	ULTIMA_THULE: new Body('ULTIMA_THULE', '#d8d8d8', 6e17, 30),
}

var SATELLITES = {
	ISS: new Body('ISS', 'white', 419725, 0),
	GEO: new Body('GEO', 'white', 50, 0),
	POLAR: new Body('POLAR', 'white', 50, 0),
	MOLNIYA: new Body('MOLNIYA', 'white', 50, 0),
	EQUATOR: new Body('EQUATOR', 'white', 50, 0),
	ECLIPTIC: new Body('ECLIPTIC', 'white', 50, 0)
}

var KERBAL = {
	KERBOL: new Body('KERBOL', '#FFF087', 1.7565459e28, 261600),
	MOHO: new Body('MOHO', '#6C5748', 2.5263314e21, 250),
	EVE: new Body('EVE', '#473353', 1.2243980e23, 700),
	GILLY: new Body('GILLY', '#927F71', 1.2420363e17,13),
	KERBIN: new Body('KERBIN', '#2F3644', 5.2915158e22,600),
	MUN: new Body('MUN', '#565857', 9.7599066e20,200),
	MINMUS: new Body('MINMUS', '#A8E4CB', 2.6457580e19,60),
	DUNA: new Body('DUNA', '#7E381F', 4.5154270e21,320),
	IKE: new Body('IKE', '#504F50', 2.7821615e20,130),
	DRES: new Body('DRES', '#5A5555', 3.2190937e20,138),	
	JOOL: new Body('JOOL', '#3F7C0F', 4.2332127e24,6000),
	LAYTHE: new Body('LAYTHE', '#31323B', 2.9397311e22,500),
	VALL: new Body('VALL', '#4F5D62', 3.1087655e21,300),
	TYLO: new Body('TYLO', '#F6ECDD', 4.2332127e22,600),
	BOP: new Body('BOP', '#54483F', 3.7261090e19,65),
	POL: new Body('POL', '#ACA57C', 1.0813507e19,44),
	EELOO: new Body('EELOO', '#B5BCB1', 1.1149224e21,210),
	
}

var _SAT = new Body('SAT', 'white', 5000, 0);
var CONSTELLATION = {
	SAT1:	_SAT.copy('SAT1'),
	SAT2: 	_SAT.copy('SAT2'),
	SAT3: 	_SAT.copy('SAT3'),
	SAT4: 	_SAT.copy('SAT4'),
	SAT5: 	_SAT.copy('SAT5'),
	SAT6: 	_SAT.copy('SAT6'),
	SAT7: 	_SAT.copy('SAT7'),
	SAT8: 	_SAT.copy('SAT8'),
	SAT9: 	_SAT.copy('SAT9'),
	SAT10: 	_SAT.copy('SAT10'),
	SAT11: 	_SAT.copy('SAT11'),
	SAT12: 	_SAT.copy('SAT12'),
	SAT13: 	_SAT.copy('SAT13'),
	SAT14: 	_SAT.copy('SAT14'),
	SAT15: 	_SAT.copy('SAT15'),
	SAT16: 	_SAT.copy('SAT16'),
	SAT17: 	_SAT.copy('SAT17'),
	SAT18: 	_SAT.copy('SAT18'),
	SAT19: 	_SAT.copy('SAT19'),
	SAT20: 	_SAT.copy('SAT20'),
	SAT21: 	_SAT.copy('SAT21'),
	SAT22: 	_SAT.copy('SAT22'),
	SAT23: 	_SAT.copy('SAT23'),
	SAT24: 	_SAT.copy('SAT24'),
	SAT25: 	_SAT.copy('SAT25'),
	SAT26: 	_SAT.copy('SAT26'),
	SAT27: 	_SAT.copy('SAT27'),
	SAT28: 	_SAT.copy('SAT28'),
	SAT29: 	_SAT.copy('SAT29'),
	SAT30: 	_SAT.copy('SAT30')
}

var _CONSTELLATION = new Scenario("Constellation", {dT: 100, scale: 1e2, epoch:new Date(2019,0,1), plane:{x: U, y: V}});
_CONSTELLATION.add_body(BODIES.EARTH, 		{x:-2.565776021787787E+07, 	y:1.459776792940268E+08, 	z:-1.550401880809665E+04, 	vx:-2.984330712865031E+01, 	vy:-5.272844547694333E+00, 	vz:9.257075114927904E-04});
_CONSTELLATION.add_body(CONSTELLATION.SAT1,	{i: 80, W: 0, 	e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT2,	{i: 80, W: 12, 	e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT3,	{i: 80, W: 24, 	e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT4,	{i: 80, W: 36, 	e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT5,	{i: 80, W: 48, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT6,	{i: 80, W: 60, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT7,	{i: 80, W: 72, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT8,	{i: 80, W: 84, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT9,	{i: 80, W: 96, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT10,{i: 80, W: 108, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT11,{i: 80, W: 120, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT12,{i: 80, W: 132, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT13,{i: 80, W: 144, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT14,{i: 80, W: 156, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT15,{i: 80, W: 168, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT16,{i: 80, W: 180, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT17,{i: 80, W: 192, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT18,{i: 80, W: 204, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT19,{i: 80, W: 216, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT20,{i: 80, W: 228, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT21,{i: 80, W: 240, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT22,{i: 80, W: 252, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT23,{i: 80, W: 264, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT24,{i: 80, W: 276, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT25,{i: 80, W: 288, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT26,{i: 80, W: 300, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT27,{i: 80, W: 312, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT28,{i: 80, W: 324, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT29,{i: 80, W: 336, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});
_CONSTELLATION.add_body(CONSTELLATION.SAT30,{i: 80, W: 348, e: 0, a: 27371.009, w: 0, v: 0, body: BODIES.EARTH});


var _SOLAR_SYSTEM 	= new Scenario("Solar System", {dT: 86400, scale: 2e6, epoch: new Date(2019,0,1), plane: {x: I, y: J}});
_SOLAR_SYSTEM.add_body(BODIES.SUN, 			{x:-1.130770710405938E+05, 	y:1.111341040984885E+06, 	z:-8.582688999394013E+03, 	vx:-1.360829795261448E-02, 	vy:3.428136241289523E-03, 	vz:3.477659644068242E-04});
_SOLAR_SYSTEM.add_body(BODIES.MERCURY, 		{x:-4.726161342120799E+07, 	y:-4.671439022096695E+07, 	z:4.087209407470208E+05, 	vx:2.476489744104856E+01, 	vy:-3.197373462580866E+01, 	vz:-4.885743761365100E+00});
_SOLAR_SYSTEM.add_body(BODIES.VENUS, 		{x:-8.238116306186400E+07, 	y:7.005404821376544E+07, 	z:5.684896309465516E+06, 	vx:-2.263904817693262E+01, 	vy:-2.701728801057535E+01, 	vz:9.352522844122291E-01});
_SOLAR_SYSTEM.add_body(BODIES.EARTH, 		{x:-2.565776021787787E+07, 	y:1.459776792940268E+08, 	z:-1.550401880809665E+04, 	vx:-2.984330712865031E+01, 	vy:-5.272844547694333E+00, 	vz:9.257075114927904E-04});
_SOLAR_SYSTEM.add_body(BODIES.MARS, 		{x:1.629806212726895E+08, 	y:1.449170333840721E+08, 	z:-9.972368219362050E+05, 	vx:-1.511758798465740E+01, 	vy:2.024466077262084E+01, 	vz:7.950950455491554E-01});
_SOLAR_SYSTEM.add_body(BODIES.JUPITER, 		{x:-3.193986316705537E+08, 	y:-7.327080675278934E+08, 	z:1.018341837851065E+07,  	vx:1.181967750862382E+01, 	vy:-4.596934312858922E+00, 	vz:-2.453097000998508E-01});
_SOLAR_SYSTEM.add_body(BODIES.SATURN, 		{x:2.930357272742532E+08, 	y:-1.474989349350961E+09, 	z:1.398158636015511E+07, 	vx:8.941486927659556E+00, 	vy:1.852790863250741E+00, 	vz:-3.886265200862431E-01});
_SOLAR_SYSTEM.add_body(BODIES.URANUS, 		{x:2.545454156357764E+09, 	y:1.533457391444894E+09, 	z:-2.728139907989663E+07, 	vx:-3.564093126719102E+00, 	vy:5.515824366688635E+00, 	vz:6.657171681175544E-02});
_SOLAR_SYSTEM.add_body(BODIES.NEPTUNE, 		{x:4.335591065956462E+09, 	y:-1.119172792078858E+09, 	z:-7.687083777550554E+07, 	vx:1.322600079901178E+00, 	vy:5.294500383846667E+00, 	vz:-1.402073339253425E-01});
_SOLAR_SYSTEM.add_body(BODIES.PLUTO, 		{x:1.612405510576705E+09, 	y:-4.740221572680201E+09, 	z:4.082792987688375E+07, 	vx:5.247720955673930E+00, 	vy:5.933043038488106E-01, 	vz:-1.592783598544555E+00});
_SOLAR_SYSTEM.add_body(BODIES.ULTIMA_THULE,	{x:1.800663337453121E+09, 	y:-6.207048215373701E+09, 	z:2.204881725396426E+08, 	vx:4.348889927676993E+00, 	vy:1.452447862002007E+00, 	vz:-1.243769425502123E-01});
_SOLAR_SYSTEM.add_body(BODIES.MOON, 		{x:-2.594384028858606E+07, 	y:1.457191985018245E+08, 	z:1.877793847522885E+04, 	vx:-2.920041610288576E+01, 	vy:-6.056705066205493E+00, 	vz:-1.966943187050774E-02});
_SOLAR_SYSTEM.add_body(BODIES.IO, 			{x:-3.197666284245768E+08, 	y:-7.329147542961717E+08, 	z:1.017069501840085E+07,  	vx:2.036894434504372E+01, 	vy:-1.965020107559456E+01, 	vz:-6.702641921764574E-01});

var _SAT_DEMO 	= new Scenario("Satellites demonstration", {focus: SATELLITES.MOLNIYA, dT: 100, scale: 1e2, epoch: new Date(2019,0,1), plane: {x: U, y: V}});
_SAT_DEMO.add_body(BODIES.EARTH, 		{x:-2.565776021787787E+07, 	y:1.459776792940268E+08, 	z:-1.550401880809665E+04, 	vx:-2.984330712865031E+01, 	vy:-5.272844547694333E+00, 	vz:9.257075114927904E-04});
//_SAT_DEMO.add_body(BODIES.MOON, 		{x:-2.594384028858606E+07, 	y:1.457191985018245E+08, 	z:1.877793847522885E+04, 	vx:-2.920041610288576E+01, 	vy:-6.056705066205493E+00, 	vz:-1.966943187050774E-02});
//_SAT_DEMO.add_body(SATELLITES.ISS, 		{x:1747.70185114206, y:0, z:6562.2664893766405, vx:0, vy:7.63270913188559, vz:0, reference: BODIES.EARTH});
_SAT_DEMO.add_body(SATELLITES.GEO, 		{x:38679.025673208154, y:0, z:16767.420218906234, vx:0, vy:3.0748760710235925, vz:0, reference: BODIES.EARTH});
//_SAT_DEMO.add_body(SATELLITES.POLAR, 	{x:0, y:-2852.178656615763, z:6579.395640089331, vx:7.455424529554587, vy:0, vz:0, reference: BODIES.EARTH});
//_SAT_DEMO.add_body(SATELLITES.EQUATOR, 	{x:6762.8954973643495, y:0, z:2931.726141680019, vx:0, vy:7.35358372172849, vz:0, reference: BODIES.EARTH});
//_SAT_DEMO.add_body(SATELLITES.ECLIPTIC, {x:7371.009, y:0, z:0, vx:0, vy:7.35358372172849, vz:0, reference: BODIES.EARTH});
//_SAT_DEMO.add_body(SATELLITES.MOLNIYA, 	{x:4.552697954638234e-13, y:-410.27021572905585, z:-7423.792007086785, vx:9.602465253717867, vy:3.2444837841682955e-17, vz:5.870855806880708e-16, reference: BODIES.EARTH});

var _KERBOL_SYSTEM = new Scenario('Kerbol System', {UA: 13599840.256, dT: 86400/60, scale: 466, epoch: new Date(2019,0,1), plane: {x: X, y: Y}});
//_KERBOL_SYSTEM.add_body(KERBAL.KERBOL, 	{x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0});
//_KERBOL_SYSTEM.add_body(KERBAL.MOHO, 	{i: 7, 		W: 70, 		e: 0.2, 	a: 5263138.304, 	w: 15,	v: 3.14,	body: KERBAL.KERBOL});
//_KERBOL_SYSTEM.add_body(KERBAL.EVE, 	{i: 2.1, 	W: 15, 		e: 0.01, 	a: 9832684.544, 	w: 0,	v: 3.14,	body: KERBAL.KERBOL});
//_KERBOL_SYSTEM.add_body(KERBAL.GILLY, 	{i: 12, 	W: 80, 		e: 0.55, 	a: 31500, 			w: 10,	v: 0.9, 	body: KERBAL.EVE});
//_KERBOL_SYSTEM.add_body(KERBAL.KERBIN, 	{i: 0, 		W: 0, 		e: 0,		a: 13599840.256, 	w: 0,	v: 3.14,	body: KERBAL.KERBOL});
//_KERBOL_SYSTEM.add_body(KERBAL.MUN, 	{i: 0, 		W: 0, 		e: 0, 		a: 12000, 			w: 0,	v: 1.7, 	body: KERBAL.KERBIN});
//_KERBOL_SYSTEM.add_body(KERBAL.MINMUS, 	{i: 6, 		W: 78, 		e: 0, 		a: 47000, 			w: 38,	v: 0.9, 	body: KERBAL.KERBIN});
//_KERBOL_SYSTEM.add_body(KERBAL.DUNA, 	{i: 0.06, 	W: 135.5, 	e: 0.051, 	a: 20726155.264, 	w: 0,	v: 3.14,	body: KERBAL.KERBOL});
//_KERBOL_SYSTEM.add_body(KERBAL.IKE, 	{i: 0.2, 	W: 0, 		e: 0.03, 	a: 3200, 			w: 0,	v: 1.7, 	body: KERBAL.DUNA});
//_KERBOL_SYSTEM.add_body(KERBAL.DRES, 	{i: 5, 		W: 280, 	e: 0.145, 	a: 40839348203, 	w: 90,	v: 3.14,	body: KERBAL.KERBOL});
_KERBOL_SYSTEM.add_body(KERBAL.JOOL, 	{i: 1.304, 	W: 52, 		e: 0.05, 	a: 68773560.320, 	w: 0,	v: 0.1, 	body: KERBAL.KERBOL});
_KERBOL_SYSTEM.add_body(KERBAL.LAYTHE, 	{i: 0,		W: 0, 		e: 0, 		a: 27184, 			w: 0,	v: 3.14,	body: KERBAL.JOOL});
_KERBOL_SYSTEM.add_body(KERBAL.VALL, 	{i: 0, 		W: 0, 		e: 0, 		a: 43152, 			w: 0,	v: 0.9, 	body: KERBAL.JOOL});
_KERBOL_SYSTEM.add_body(KERBAL.TYLO, 	{i: 0.025, 	W: 0, 		e: 0, 		a: 68500, 			w: 0,	v: 3.14,	body: KERBAL.JOOL});
_KERBOL_SYSTEM.add_body(KERBAL.BOP, 	{i: 15, 	W: 10, 		e: 0.235, 	a: 128500, 			w: 25,	v: 0.9, 	body: KERBAL.JOOL});
_KERBOL_SYSTEM.add_body(KERBAL.POL, 	{i: 4.25, 	W: 2, 		e: 0.171, 	a: 179890, 			w: 15,	v: 0.9, 	body: KERBAL.JOOL});
//_KERBOL_SYSTEM.add_body(KERBAL.EELOO, 	{i: 6.15, 	W: 50, 		e: 0.26, 	a: 90118820, 		w: 260,	v: 3.14,	body: KERBAL.KERBOL});

const _SCENARIO = _SOLAR_SYSTEM;
//const _SCENARIO = _SAT_DEMO;
//const _SCENARIO = _KERBOL_SYSTEM;
//const _SCENARIO = _CONSTELLATION;