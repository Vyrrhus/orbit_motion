// SATELLITES DEMONSTRATION
//var _SCRIPT = new Script("Satellites demonstration", {focus: BODIES.EARTH, dT: 1e2, scale: 988.192120, epoch: new Date(2019,0,1), plane: {x: I, y: J}});
var _SCRIPT = new Script("Satellites demonstration", {focus: BODIES.EARTH, dT: 3e2, scale: 988.192120, epoch: new Date(2019,0,1), plane: {x: I, y: K}});


_SCRIPT.add_body(BODIES.EARTH, 		{x:-2.565776021787787E+07, 	y:1.459776792940268E+08, 	z:-1.550401880809665E+04, 	vx:-2.984330712865031E+01, 	vy:-5.272844547694333E+00, 	vz:9.257075114927904E-04});
//_SCRIPT.add_body(SATELLITES.ISS, 		{x:1747.70185114206, y:0, z:6562.2664893766405, vx:0, vy:7.63270913188559, vz:0, reference: BODIES.EARTH});
//_SCRIPT.add_body(SATELLITES.GEO, 		{x:38679.025673208154, y:0, z:16767.420218906234, vx:0, vy:3.0748760710235925, vz:0, reference: BODIES.EARTH});
//_SCRIPT.add_body(SATELLITES.POLAR, 	{x:0, y:-2852.178656615763, z:6579.395640089331, vx:7.455424529554587, vy:0, vz:0, reference: BODIES.EARTH});
//_SCRIPT.add_body(SATELLITES.MOLNIYA, 	{x:4.552697954638234e-13, y:-410.27021572905585, z:-7423.792007086785, vx:9.602465253717867, vy:3.2444837841682955e-17, vz:5.870855806880708e-16, reference: BODIES.EARTH});
//_SCRIPT.add_body(SATELLITES.EQUATOR, 	{x:6762.8954973643495, y:0, z:2931.726141680019, vx:0, vy:7.35358372172849, vz:0, reference: BODIES.EARTH});
//_SCRIPT.add_body(SATELLITES.ECLIPTIC, {x:7371.009, y:0, z:0, vx:0, vy:7.35358372172849, vz:0, reference: BODIES.EARTH});
 
_SCRIPT.add_body(BODIES.MOON, 		{x:-2.594384028858606E+07, 	y:1.457191985018245E+08, 	z:1.877793847522885E+04, 	vx:-2.920041610288576E+01, 	vy:-6.056705066205493E+00, 	vz:-1.966943187050774E-02});
const SATs = {
                _1: new Body('SAT 1', '#FF0000', 0, 0),
                _2: new Body('SAT 2', '#FF5500', 0, 0),
                _3: new Body('SOI TEST', '#55FF99', 0, 0),
                _4: new Body('CRASH TEST', '#5555FF', 0, 0),
                _5: new Body('SAT 5', '#FF9900', 0, 0),
                _6: new Body('SAT 6', '#FF0099', 0, 0)
             }
              
//_SCRIPT.add_body(SATs._1,{i: 5.27, W: 116, e:0.5, a: BODIES.EARTH.radius + 230000, w:0, v:270, body:BODIES.EARTH});
//_SCRIPT.add_body(SATs._2,{i: 5.27, W: 116, e:0.5, a: BODIES.EARTH.radius + 230000, w:25, v:270, body:BODIES.EARTH});
//_SCRIPT.add_body(SATs._3,{i: 5.27, W: 116, e:0.98, a: BODIES.EARTH.radius + 230000, w:25, v:90, body:BODIES.EARTH});
//_SCRIPT.add_body(SATs._3,{i: 5.27, W: 116, e:0.5, a: BODIES.EARTH.radius + 230000, w:50, v:270, body:BODIES.EARTH});
//_SCRIPT.add_body(SATs._4,{i: 5.27, W: 116, e:0.5, a: BODIES.EARTH.radius + 230000, w:75, v:270, body:BODIES.EARTH});
//_SCRIPT.add_body(SATs._5,{i: 5.27, W: 116, e:0.5, a: BODIES.EARTH.radius + 230000, w:100, v:270, body:BODIES.EARTH});
//_SCRIPT.add_body(SATs._6,{i: 5.27, W: 116, e:0.5, a: BODIES.EARTH.radius + 230000, w:125, v:270, body:BODIES.EARTH});


// Hyperbola around the Moon
//_SCRIPT.add_body(SATs._3,{i: 5.330838730096627, W: 121.86930112466496, e:1.028350862472642, a: -305905.47975987464, w:221.22688733310392, v:231.4800831341708, body:BODIES.MOON});
//_SCRIPT.add_body(SATs._4,{i: 5.330838730096627, W: 121.86930112466496, e:1.003350862472642, a: -500905.47975987464, w:221.22688733310392, v:211.4800831341708, body:BODIES.MOON});
//_SCRIPT.add_body(SATs._3,{i: 5.330838730096627, W: 121.86930112466496, e:0.9, a: BODIES.MOON.radius + 50000, w:221.22688733310392, v:231.4800831341708, body:BODIES.MOON});

// Inclined SATS crossing MOON's orbit
const ENCOUNTER = {
    a: new Body('CIRCULAR INCLINED', '#00FF99', 0, 0)
}

_SCRIPT.add_body(ENCOUNTER.a, {i: 30, W: 0, e: 0.8039626608269475, a: 214244, w: 0, v: 0, body:BODIES.EARTH})