/**
 *
 * WebGL With Three.js - Lesson 1
 * http://www.script-tutorials.com/webgl-with-three-js-lesson-1/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

var colors = [
    0xFF62B0,
    0x9A03FE,
    0x62D0FF,
    0x48FB0D,
    0xDFA800,
    0xC27E3A,
    0x990099,
    0x9669FE,
    0x23819C,
    0x01F33E,
    0xB6BA18,
    0xFF800D,
    0xB96F6F,
    0x4A9586
];
var particleLight;
var sprite1;
var context1, texture1;


var lesson1 = {
    scene: null,
    camera: null,
    renderer: null,
    container: null,
    controls: null,
    clock: null,
    stats: null,
    cubes:[],

    init: function() { // Initialization

        // create main scene
        this.scene = new THREE.Scene();

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(-1100, 1100, 0);
        this.camera.lookAt(new THREE.Vector3(0,0,0));

        // prepare renderer
        this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: false});
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
        this.renderer.setClearColor(0xffffff);

//        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;

        // prepare container
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);

        // events
        THREEx.WindowResize(this.renderer, this.camera);

        // prepare controls (OrbitControls)
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0, 0, 0);

        // prepare clock
        this.clock = new THREE.Clock();

        // prepare stats
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.bottom = '0px';
        this.stats.domElement.style.zIndex = 10;
        this.container.appendChild( this.stats.domElement );

        // add directional light
        var dLight = new THREE.DirectionalLight(0xffffff);
        dLight.position.set(1, 500, 1);
        dLight.castShadow = true;
        dLight.shadowCameraVisible = true;
        dLight.shadowDarkness = 0.2;
 //       dLight.shadowMapWidth = dLight.shadowMapHeight = 500;
        this.scene.add(dLight);

        // add particle of light
   /*
        particleLight = new THREE.Mesh( new THREE.SphereGeometry(10, 10, 10), new THREE.MeshBasicMaterial({ color: 0x44ff44 }));
        particleLight.position = dLight.position;
        this.scene.add(particleLight);
*/
        // add simple ground
        var groundGeometry = new THREE.PlaneGeometry(1300, 1300, 1, 1);
        ground = new THREE.Mesh(groundGeometry, new THREE.MeshLambertMaterial({
            color: this.getRandColor()
        }));
        ground.position.y = 0;
        ground.rotation.x = - Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // add circle shape
        /*
        var circle = new THREE.Mesh(new THREE.CircleGeometry(70, 50), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        circle.rotation.x = - Math.PI / 2;
        circle.rotation.y = - Math.PI / 3;
        circle.rotation.z = Math.PI / 3;
        circle.position.x = -300;
        circle.position.y = 150;
        circle.position.z = -300;
        circle.castShadow = circle.receiveShadow = true;
        this.scene.add(circle);
        */
        var cubes_array= [
        // bARIS kANAN
                            ['1A1', 700, 50, -300],
                            ['1A2', 700, 150, -300],
                            ['1A3', 700, 250, -300],
                            ['1A4', 700, 350, -300],

                            ['1B1', 700, 50, -200],
                            ['1B2', 700, 150, -200],
                            ['1B3', 700, 250, -200],
                            ['1B4', 700, 350, -200],

                            ['1C1', 700, 50, -100],
                            ['1C2', 700, 150, -100],
                            ['1C3', 700, 250, -100],
                            ['1C4', 700, 350, -100],

                            ['1D1', 700, 50, 00],
                            ['1D2', 700, 150, 00],
                            ['1D3', 700, 250, 00],
                            ['1D4', 700, 350, 00],

                            ['1E1', 700, 50, 100],
                            ['1E2', 700, 150, 100],
                            ['1E3', 700, 250, 100],
                            ['1E4', 700, 350, 100],

                            ['1F1', 700, 50, 200],
                            ['1F2', 700, 150, 200],
                            ['1F3', 700, 250, 200],
                            ['1F4', 700, 350, 200],

                            ['1G1', 700, 50, 300],
                            ['1G2', 700, 150, 300],
                            ['1G3', 700, 250, 300],
                            ['1G4', 700, 350, 300],
 
                            ['9G1', 700, 50, -400],
                            ['9G2', 700, 150, -400],
                            ['9G3', 700, 250, -400],
                            ['9G4', 700, 350, -400],

                            ['9G1', 700, 50, -500],
                            ['9G2', 700, 150, -500],
                            ['9G3', 700, 250, -500],
                            ['9G4', 700, 350, -500],

                            ['9G1', 700, 50, -600],
                            ['9G2', 700, 150, -600],
                            ['9G3', 700, 250, -600],
                            ['9G4', 700, 350, -600],

                            ['9G1', 700, 50, -700],
                            ['9G2', 700, 150, -700],
                            ['9G3', 700, 250, -700],
                            ['9G4', 700, 350, -700],
// DEPANNYA KIRI
                            ['1A1', 900, 50, -300],
                            ['1A2', 900, 150, -300],

                            ['1B1', 900, 50, -200],
                            ['1B2', 900, 150, -200],

                            ['1C1', 900, 50, -100],
                            ['1C2', 900, 150, -100],

                            ['1D1', 900, 50, 00],
                            ['1D2', 900, 150, 00],

                            ['1E1', 900, 50, 100],
                            ['1E2', 900, 150, 100],

                            ['1F1', 900, 50, 200],
                            ['1F2', 900, 150, 200],

                            ['1G1', 900, 50, 300],
                            ['1G2', 900, 150, 300],
 
                            ['9G1', 900, 50, -400],
                            ['9G2', 900, 150, -400],

                            ['9G1', 900, 50, -500],
                            ['9G2', 900, 150, -500],

                            ['9G1', 900, 50, -600],
                            ['9G2', 900, 150, -600],

                            ['9G1', 900, 50, -700],
                            ['9G2', 900, 150, -700],


            //BARIS KIRI                            
                            ['9A1', -700, 50, -300],
                            ['9A2', -700, 150, -300],
                            ['9A3', -700, 250, -300],
                            ['9A4', -700, 350, -300],

                            ['9B1', -700, 50, -200],
                            ['9B2', -700, 150, -200],
                            ['9B3', -700, 250, -200],
                            ['9B4', -700, 350, -200],

                            ['9C1', -700, 50, -100],
                            ['9C2', -700, 150, -100],
                            ['9C3', -700, 250, -100],
                            ['9C4', -700, 350, -100],

                            ['9D1', -700, 50, 00],
                            ['9D2', -700, 150, 00],
                            ['9D3', -700, 250, 00],
                            ['9D4', -700, 350, 00],

                            ['9E1', -700, 50, 100],
                            ['9E2', -700, 150, 100],
                            ['9E3', -700, 250, 100],
                            ['9E4', -700, 350, 100],

                            ['9F1', -700, 50, 200],
                            ['9F2', -700, 150, 200],
                            ['9F3', -700, 250, 200],
                            ['9F4', -700, 350, 200],

                            ['9G1', -700, 50, -400],
                            ['9G2', -700, 150, -400],
                            ['9G3', -700, 250, -400],
                            ['9G4', -700, 350, -400],

                            ['9G1', -700, 50, -500],
                            ['9G2', -700, 150, -500],
                            ['9G3', -700, 250, -500],
                            ['9G4', -700, 350, -500],

                            ['9G1', -700, 50, -600],
                            ['9G2', -700, 150, -600],
                            ['9G3', -700, 250, -600],
                            ['9G4', -700, 350, -600],

                            ['9G1', -700, 50, -700],
                            ['9G2', -700, 150, -700],
                            ['9G3', -700, 250, -700],
                            ['9G4', -700, 350, -700],

// DEPANNYA KANAN
                            ['1A1', -900, 50, -300],
                            ['1A2', -900, 150, -300],

                            ['1B1', -900, 50, -200],
                            ['1B2', -900, 150, -200],

                            ['1C1', -900, 50, -100],
                            ['1C2', -900, 150, -100],

                            ['1D1', -900, 50, 00],
                            ['1D2', -900, 150, 00],

                            ['1E1', -900, 50, 100],
                            ['1E2', -900, 150, 100],

                            ['1F1', -900, 50, 200],
                            ['1F2', -900, 150, 200],

                            ['1G1', -900, 50, 300],
                            ['1G2', -900, 150, 300],
 
                            ['9G1', -900, 50, -400],
                            ['9G2', -900, 150, -400],

                            ['9G1', -900, 50, -500],
                            ['9G2', -900, 150, -500],

                            ['9G1', -900, 50, -600],
                            ['9G2', -900, 150, -600],

                            ['9G1', -900, 50, -700],
                            ['9G2', -900, 150, -700],


// BARIS DEPAN SUMBU X
                            
                            ['2A1', -600, 50, 500],
                            ['2A2', -600, 150, 500],
                            ['2A3', -600, 250, 500],
                            ['2A4', -600, 350, 500],
                            ['2A1', -600, 50, 500],
                            
                            ['2A1', -500, 50, 500],
                            ['2A2', -500, 150, 500],
                            ['2A3', -500, 250, 500],
                            ['2A4', -500, 350, 500],
                            ['2A1', -500, 50, 500],
                            
                            ['2A1', -400, 50, 500],
                            ['2A2', -400, 150, 500],
                            ['2A3', -400, 250, 500],
                            ['2A4', -400, 350, 500],
                            ['2A1', -400, 50, 500],
                            
                            ['2A1', -300, 50, 500],
                            ['2A2', -300, 150, 500],
                            ['2A3', -300, 250, 500],
                            ['2A4', -300, 350, 500],

                            ['2A1', -200, 50, 500],
                            ['2A2', -200, 150, 500],
                            ['2A3', -200, 250, 500],
                            ['2A4', -200, 350, 500],

                            ['3A1', -100, 50, 500],
                            ['3A2', -100, 150, 500],
                            ['3A3', -100, 250, 500],
                            ['3A4', -100, 350, 500],

                            ['3A1', 100, 50, 500],
                            ['3A2', 100, 150, 500],
                            ['3A3', 100, 250, 500],
                            ['3A4', 100, 350, 500],

                            ['4A1', 200, 50, 500],
                            ['4A2', 200, 150, 500],
                            ['4A3', 200, 250, 500],
                            ['4A4', 200, 350, 500],

                            ['5A1', 300, 50, 500],
                            ['5A2', 300, 150, 500],
                            ['5A3', 300, 250, 500],
                            ['5A4', 300, 350, 500],

                            ['6A1', 400, 50, 500],
                            ['6A2', 400, 150, 500],
                            ['6A3', 400, 250, 500],
                            ['6A4', 400, 350, 500],

                            ['7A1', 500, 50, 500],
                            ['7A2', 500, 150, 500],
                            ['7A3', 500, 250, 500],
                            ['7A4', 500, 350, 500],

                            ['8A1', 600, 50, 500],
                            ['8A2', 600, 150, 500],
                            ['8A3', 600, 250, 500],
                            ['8A4', 600, 350, 500],

                            ['9A1', 600, 50, 500],
                            ['9A2', 600, 150, 500],
                            ['9A3', 600, 250, 500],
                            ['9A4', 600, 350, 500],
// DEPANNYA DEPAN

                            
                            ['2A1', -300, 50, 700],
                            ['2A2', -300, 150, 700],

                            ['2A1', -200, 50, 700],
                            ['2A2', -200, 150, 700],

                            ['3A1', -100, 50, 700],
                            ['3A2', -100, 150, 700],

                            ['3A1', 100, 50, 700],
                            ['3A2', 100, 150, 700],

                            ['4A1', 200, 50, 700],
                            ['4A2', 200, 150, 700],

                            ['5A1', 300, 50, 700],
                            ['5A2', 300, 150, 700]
                        ];
            var cube;

        for (var i=0; i<cubes_array.length; i++){
             cube = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.8, transparent:true }));
            cube.position.x = cubes_array[i][1];
            cube.position.y = cubes_array[i][2];
            cube.position.z = cubes_array[i][3];
            cube.name = cubes_array[i][0];
            this.scene.add(cube);
        }

        cube = new THREE.Mesh(new THREE.CubeGeometry(40, 10, 40), new THREE.MeshLambertMaterial({ color: 'green', transparent:true }));
            cube.position.x = -100;
            cube.position.y = 330;
            cube.position.z = 550;
            cube.name = 'barang';
            this.scene.add(cube);

    var labels = [
            ['AXIS: Sumbu X', 0, 5, 780],
            ['BARAT', 0, 435, 560],
            ['SELATAN', 760, 435, 0],
            ['UTARA',  -760, 435, 0],
            ['B1-D-1', -300, 385, 505],
            ['B1-D-2', -300, 405, 505],
            ['B1-D-3', -300, 425, 505],
            ['B1-D-4', -300, 445, 505],

            ['B1-A-1', -600, 385, 505],
            ['B1-A-2', -600, 405, 505],
            ['B1-A-3', -600, 425, 505],
            ['B1-A-4', -600, 445, 505],

            ['B1-B-1', -500, 385, 505],
            ['B1-B-2', -500, 405, 505],
            ['B1-B-3', -500, 425, 505],
            ['B1-B-4', -500, 445, 505],

            ['B1-C-1', -400, 385, 505],
            ['B1-C-2', -400, 405, 505],
            ['B1-C-3', -400, 425, 505],
            ['B1-C-4', -400, 445, 505],

            ['B1-L-1', 600, 385, 505],
            ['B1-L-2', 600, 405, 505],
            ['B1-L-3', 600, 425, 505],
            ['B1-L-4', 600, 445, 505],

            ['B2-C-1', -300, 185, 705],
            ['B2-C-2', -300, 205, 705],

            ['B2-D-1', -300, 185, 705],
            ['B2-D-2', -300, 205, 705],

            ['B2-E-1', -200, 185, 705],
            ['B2-E-2', -200, 205, 705],

            ['B2-F-1', -100, 185, 705],
            ['B2-F-2', -100, 205, 705],
// UTARA
            ['U1-A-1', -700, 385, -705],
            ['U1-A-2', -700, 405, -705],
            ['U1-A-3', -700, 425, -705],
            ['U1-A-4', -700, 445, -705],

            ['U1-B-1', -700, 385, -605],
            ['U1-B-2', -700, 405, -605],
            ['U1-B-3', -700, 425, -605],
            ['U1-B-4', -700, 445, -605],

            ['U1-J-1', -700, 385, 205],
            ['U1-J-2', -700, 405, 205],
            ['U1-J-3', -700, 425, 205],
            ['U1-J-4', -700, 445, 205],

            ['U2-A-1', -900, 185, -705],
            ['U2-A-2', -900, 205, -705],

            ['U2-B-1', -900, 185, -605],
            ['U2-B-2', -900, 205, -605],

            ['U2-C-1', -900, 185, -505],
            ['U2-C-2', -900, 205, -505],

//SELATAN
            ['S1-A-1', 700, 385, 305],
            ['S1-A-2', 700, 405, 305],
            ['S1-A-3', 700, 425, 305],
            ['S1-A-4', 700, 445, 305],

            ['S1-B-1', 700, 385, 205],
            ['S1-B-2', 700, 405, 205],
            ['S1-B-3', 700, 425, 205],
            ['S1-B-4', 700, 445, 205],

            ['S1-K-1', 700, 385, -705],
            ['S1-K-2', 700, 405, -705],
            ['S1-K-3', 700, 425, -705],
            ['S1-K-4', 700, 445, -705],

            ['S2-A-1', 900, 185, 305],
            ['S2-A-2', 900, 205, 305],

            ['S2-K-1', 900, 185, -705],
            ['S2-K-2', 900, 205, -705],

            ['Barang Dicari', -100, 480, 550]
    ];
    

    for (var i=0; i<labels.length; i++){
        var spritey = makeTextSprite( labels[i][0], 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
        spritey.position.set(labels[i][1], labels[i][2], labels[i][3]);
        this.scene.add( spritey );
    }

        // LABEL
    

// simulasi pencarian barang.

        var materialLine = new THREE.LineBasicMaterial({
            color: 'yellow'
        });

        var geometry = new THREE.Geometry();
        geometry.vertices.push(
            new THREE.Vector3( -100, 330, 550 ),
            new THREE.Vector3( -100, 500, 550 )
        );

        var line = new THREE.Line( geometry, materialLine );
        this.scene.add( line );

/*
        // add cylinder shape
        var cube = new THREE.Mesh(new THREE.CylinderGeometry(60, 80, 90, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube.position.x = -300;
        cube.position.y = 150;
        cube.position.z = 100;
        cube.castShadow = cube.receiveShadow = true;
        this.scene.add(cube);
*/
        // add extrude geometry shape

/*        var extrudeSettings = {
            amount: 10,
            steps: 10,
            bevelSegments: 10,
            bevelSize: 10,
            bevelThickness: 10
        };
        var triangleShape = new THREE.Shape();
        triangleShape.moveTo(  0, -50 );
        triangleShape.lineTo(  -50, 50 );
        triangleShape.lineTo( 50, 50 );
        triangleShape.lineTo(  0, -50 );
*/
/*
        var extrude = new THREE.Mesh(new THREE.ExtrudeGeometry(triangleShape, extrudeSettings), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        extrude.rotation.y = Math.PI / 2;
        extrude.position.x = -300;
        extrude.position.y = 150;
        extrude.position.z = 300;
        extrude.castShadow = extrude.receiveShadow = true;
        this.scene.add(extrude);

        // add icosahedron shape
        var icosahedron = new THREE.Mesh(new THREE.IcosahedronGeometry(70), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        icosahedron.position.x = -100;
        icosahedron.position.y = 150;
        icosahedron.position.z = -300;
        icosahedron.castShadow = icosahedron.receiveShadow = true;
        this.scene.add(icosahedron);

        // add octahedron shape
        var octahedron = new THREE.Mesh(new THREE.OctahedronGeometry(70), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        octahedron.position.x = -100;
        octahedron.position.y = 150;
        octahedron.position.z = -100;
        octahedron.castShadow = octahedron.receiveShadow = true;
        this.scene.add(octahedron);
*/
        // add ring shape
        /*
        var ring = new THREE.Mesh(new THREE.RingGeometry(30, 70, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        ring.rotation.y = -Math.PI / 2;
        ring.position.x = -100;
        ring.position.y = 150;
        ring.position.z = 100;
        ring.castShadow = ring.receiveShadow = true;
        this.scene.add(ring);

        // add shape geometry shape

        var shapeG = new THREE.Mesh(new THREE.ShapeGeometry(triangleShape), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        shapeG.rotation.y = -Math.PI / 2;
        shapeG.position.x = -100;
        shapeG.position.y = 150;
        shapeG.position.z = 300;
        shapeG.castShadow = shapeG.receiveShadow = true;
        this.scene.add(shapeG);
        

        // add sphere shape
        var sphere = new THREE.Mesh(new THREE.SphereGeometry(70, 32, 32), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        sphere.rotation.y = -Math.PI / 2;
        sphere.position.x = 100;
        sphere.position.y = 150;
        sphere.position.z = -300;
        sphere.castShadow = sphere.receiveShadow = true;
        this.scene.add(sphere);

        // add tetrahedron shape
        var tetrahedron = new THREE.Mesh(new THREE.TetrahedronGeometry(70), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        tetrahedron.position.x = 100;
        tetrahedron.position.y = 150;
        tetrahedron.position.z = -100;
        tetrahedron.castShadow = tetrahedron.receiveShadow = true;
        this.scene.add(tetrahedron);
*/
        // add torus shape
  /*
        var torus = new THREE.Mesh(new THREE.TorusGeometry(70, 20, 16, 100), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        torus.rotation.y = -Math.PI / 2;
        torus.position.x = 100;
        torus.position.y = 150;
        torus.position.z = 100;
        torus.castShadow = torus.receiveShadow = true;
        this.scene.add(torus);

        // add torus knot shape
        var torusK = new THREE.Mesh(new THREE.TorusKnotGeometry(70, 20, 16, 100), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        torusK.rotation.y = -Math.PI / 2;
        torusK.position.x = 100;
        torusK.position.y = 150;
        torusK.position.z = 300;
        torusK.castShadow = torusK.receiveShadow = true;
        this.scene.add(torusK);
*/
        // add tube shape
        /*
        var points = [];
        for (var i = 0; i < 10; i++) {
            var randomX = -100 + Math.round(Math.random() * 200);
            var randomY = -100 + Math.round(Math.random() * 200);
            var randomZ = -100 + Math.round(Math.random() * 200);

            points.push(new THREE.Vector3(randomX, randomY, randomZ));
        }

        
        var tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.SplineCurve3(points), 64, 20), new THREE.MeshLambertMaterial({ color: this.getRandColor() }));
        tube.rotation.y = -Math.PI / 2;
        tube.position.x = 0;
        tube.position.y = 500;
        tube.position.z = 0;
        tube.castShadow = tube.receiveShadow = true;
        this.scene.add(tube);
        */
    },
    getRandColor: function() {
        return colors[Math.floor(Math.random() * colors.length)];
    }
};


function makeTextSprite( message, parameters )
{
    if ( parameters === undefined ) parameters = {};
    
    var fontface = parameters.hasOwnProperty("fontface") ? 
        parameters["fontface"] : "Arial";
    
    var fontsize = parameters.hasOwnProperty("fontsize") ? 
        parameters["fontsize"] : 18;
    
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
        parameters["borderThickness"] : 4;
    
    var borderColor = parameters.hasOwnProperty("borderColor") ?
        parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
        parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };

   // var spriteAlignment = THREE.SpriteAlignment.topLeft;
        
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;
    
    // get size data (height depends only on font size)
    var metrics = context.measureText( message );
    var textWidth = metrics.width;
    
    // background color
    context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
                                  + backgroundColor.b + "," + backgroundColor.a + ")";
    // border color
    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
                                  + borderColor.b + "," + borderColor.a + ")";

    context.lineWidth = borderThickness;
    roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 6);
    // 1.4 is extra height factor for text below baseline: g,j,p,q.
    
    // text color
    context.fillStyle = "rgba(0, 0, 0, 1.0)";

    context.fillText( message, borderThickness, fontsize + borderThickness);
    
    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;

    var spriteMaterial = new THREE.SpriteMaterial( 
        { map: texture, useScreenCoordinates: false } );
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,50,1.0);
    return sprite;  
}

// function for drawing rounded rectangles
function roundRect(ctx, x, y, w, h, r) 
{
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();   
}

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    render();
//    update();
}

// Update controls and stats
function update() {
    lesson1.controls.update(lesson1.clock.getDelta());
    lesson1.stats.update();

    // smoothly move the particleLight
    var timer = Date.now() * 0.000025;
    particleLight.position.x = Math.sin(timer * 5) * 1200;
    particleLight.position.z = Math.cos(timer * 5) * 1200;
}

// Render the scene
function render() {
    if (lesson1.renderer) {
        lesson1.renderer.render(lesson1.scene, lesson1.camera);
    }
}

// Initialize lesson on page load
function initializeLesson() {
    lesson1.init();
    animate();
}

if (window.addEventListener)
    window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
    window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;
