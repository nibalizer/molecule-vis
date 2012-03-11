/*
var a = CSG.cube();
var b = CSG.sphere({ radius: 1.2 });
var c = CSG.cylinder({ radius: 0.7, start: [-1, 0, 0], end: [1, 0, 0] });
var d = CSG.cylinder({ radius: 0.7, start: [0, -1, 0], end: [0, 1, 0] });
var e = CSG.cylinder({ radius: 0.7, start: [0, 0, -1], end: [0, 0, 1] });
c.setColor(0, 0, 1);
d.setColor(0, 1, 0);
e.setColor(1, 0, 0);
a.setColor(1, 0, 0);
b.setColor(0, 0, 1);
return c.intersect(d.intersect(e))
*/

//methane molecule (in [[Ångström]]s)
//C        0.000000        0.000000        0.000000
carbon1 = CSG.sphere({ radius: 1.70, center: [0.000000, 0.000000, 0.000000] });
hydrogen1 = CSG.sphere({ radius: 1.20, center: [0.000000, 0.000000, 1.089000] });
hydrogen2 = CSG.sphere({ radius: 1.20, center: [1.026719,        0.000000,       -0.363000] });
hydrogen3 = CSG.sphere({ radius: 1.20, center: [-0.513360,       -0.889165,       -0.363000] });
hydrogen4 = CSG.sphere({ radius: 1.20, center: [-0.513360,        0.889165,       -0.363000] });
//H        0.000000        0.000000        1.089000
//H        1.026719        0.000000       -0.363000
//H       -0.513360       -0.889165       -0.363000
//H       -0.513360        0.889165       -0.363000
carbon1.setColor(0, 0, 0);
hydrogen1.setColor(1, 1, 1);
hydrogen2.setColor(1, 1, 1);
hydrogen3.setColor(1, 1, 1);
hydrogen4.setColor(1, 1, 1);

return carbon1.union(hydrogen1.union(hydrogen2.union(hydrogen3.union(hydrogen4))))
