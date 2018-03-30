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

    init: function() { // Initialization

        // create main scene
        this.scene = new THREE.Scene();

        var SCREEN_WIDTH = window.innerWidth,
            SCREEN_HEIGHT = window.innerHeight;

        // prepare camera
        var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.scene.add(this.camera);
        this.camera.position.set(-1000, 1000, 0);
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
        var groundGeometry = new THREE.PlaneGeometry(1000, 1000, 1, 1);
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
        //shelf dasar
                // add cube shape
        var cube1Z0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1Z0.position.x = -300;
        cube1Z0.position.y = 50;
        cube1Z0.position.z = 300;
        this.scene.add(cube1Z0);

        var cube1A0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'red', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1A0.position.x = -300;
        cube1A0.position.y = 50;
        cube1A0.position.z = 200;
        this.scene.add(cube1A0);

        var cube1B0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'green', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1B0.position.x = -300;
        cube1B0.position.y = 50;
        cube1B0.position.z = 100;
        this.scene.add(cube1B0);

        var cube1C0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'yellow', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1C0.position.x = -300;
        cube1C0.position.y = 50;
        cube1C0.position.z = 0;
        this.scene.add(cube1C0);

        var cube1D0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1D0.position.x = -300;
        cube1D0.position.y = 50;
        cube1D0.position.z = -100;
        this.scene.add(cube1D0);

        var cube1E0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1E0.position.x = -300;
        cube1E0.position.y = 50;
        cube1E0.position.z = -200;
        this.scene.add(cube1E0);

        var cube1F0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1F0.position.x = -300;
        cube1F0.position.y = 50;
        cube1F0.position.z = -300;
        this.scene.add(cube1F0);

        //shelf kedua

        // add cube shape
        var cube1Z1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1Z1.position.x = -300;
        cube1Z1.position.y = 150;
        cube1Z1.position.z = 300;
        this.scene.add(cube1Z1);

        var cube1A1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'red', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1A1.position.x = -300;
        cube1A1.position.y = 150;
        cube1A1.position.z = 200;
        this.scene.add(cube1A1);

        var cube1B1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'green', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1B1.position.x = -300;
        cube1B1.position.y = 150;
        cube1B1.position.z = 100;
        this.scene.add(cube1B1);

        var cube1C1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'yellow', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1C1.position.x = -300;
        cube1C1.position.y = 150;
        cube1C1.position.z = 0;
        this.scene.add(cube1C1);

        var cube1D1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1D1.position.x = -300;
        cube1D1.position.y = 150;
        cube1D1.position.z = -100;
        this.scene.add(cube1D1);

        var cube1E1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1E1.position.x = -300;
        cube1E1.position.y = 150;
        cube1E1.position.z = -200;
        this.scene.add(cube1E1);

        var cube1F1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1F1.position.x = -300;
        cube1F1.position.y = 150;
        cube1F1.position.z = -300;
        this.scene.add(cube1F1);

//  ATASNYA

       // add cube shape
        var cube1Z2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1Z2.position.x = -300;
        cube1Z2.position.y = 250;
        cube1Z2.position.z = 300;
        this.scene.add(cube1Z2);

        var cube1A2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'red', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1A2.position.x = -300;
        cube1A2.position.y = 250;
        cube1A2.position.z = 200;
        this.scene.add(cube1A2);

        var cube1B2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'green', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1B2.position.x = -300;
        cube1B2.position.y = 250;
        cube1B2.position.z = 100;
        this.scene.add(cube1B2);

        var cube1C2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'yellow', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1C2.position.x = -300;
        cube1C2.position.y = 250;
        cube1C2.position.z = 0;
        this.scene.add(cube1C2);

        var cube1D2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1D2.position.x = -300;
        cube1D2.position.y = 250;
        cube1D2.position.z = -100;
        this.scene.add(cube1D2);

        var cube1E2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1E2.position.x = -300;
        cube1E2.position.y = 250;
        cube1E2.position.z = -200;
        this.scene.add(cube1E2);

        var cube1F2 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube1F2.position.x = -300;
        cube1F2.position.y = 250;
        cube1F2.position.z = -300;
        this.scene.add(cube1F2);
// SISI KANAN

        var cube9Z1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9Z1.position.x = 300;
        cube9Z1.position.y = 150;
        cube9Z1.position.z = 300;
        this.scene.add(cube9Z1);

        var cube9A1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'red', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9A1.position.x = 300;
        cube9A1.position.y = 150;
        cube9A1.position.z = 200;
        this.scene.add(cube9A1);

        var cube9B1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'green', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9B1.position.x = 300;
        cube9B1.position.y = 150;
        cube9B1.position.z = 100;
        this.scene.add(cube9B1);

        var cube9C1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'yellow', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9C1.position.x = 300;
        cube9C1.position.y = 150;
        cube9C1.position.z = 0;
        this.scene.add(cube9C1);

        var cube9D1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9D1.position.x = 300;
        cube9D1.position.y = 150;
        cube9D1.position.z = -100;
        this.scene.add(cube9D1);

        var cube9E1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9E1.position.x = 300;
        cube9E1.position.y = 150;
        cube9E1.position.z = -200;
        this.scene.add(cube9E1);

        var cube9F1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9F1.position.x = 300;
        cube9F1.position.y = 150;
        cube9F1.position.z = -300;
        this.scene.add(cube9F1);


// layer 0

        var cube9Z0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9Z0.position.x = 300;
        cube9Z0.position.y = 50;
        cube9Z0.position.z = 300;
        this.scene.add(cube9Z0);

        var cube9A0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'red', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9A0.position.x = 300;
        cube9A0.position.y = 50;
        cube9A0.position.z = 200;
        this.scene.add(cube9A0);

        var cube9B0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'green', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9B0.position.x = 300;
        cube9B0.position.y = 50;
        cube9B0.position.z = 100;
        this.scene.add(cube9B0);

        var cube9C0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'yellow', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9C0.position.x = 300;
        cube9C0.position.y = 50;
        cube9C0.position.z = 0;
        this.scene.add(cube9C0);

        var cube9D0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9D0.position.x = 300;
        cube9D0.position.y = 50;
        cube9D0.position.z = -100;
        this.scene.add(cube9D0);

        var cube9E0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9E0.position.x = 300;
        cube9E0.position.y = 50;
        cube9E0.position.z = -200;
        this.scene.add(cube9E0);

        var cube9F0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'pink', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube9F0.position.x = 300;
        cube9F0.position.y = 50;
        cube9F0.position.z = -300;
        this.scene.add(cube9F0);


// DEPAN

        var cube2Z0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube2Z0.position.x = -200;
        cube2Z0.position.y = 50;
        cube2Z0.position.z = 300;
        this.scene.add(cube2Z0);

        var cube2Z1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube2Z1.position.x = -200;
        cube2Z1.position.y = 150;
        cube2Z1.position.z = 300;
        this.scene.add(cube2Z1);


        var cube3Z0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube3Z0.position.x = -100;
        cube3Z0.position.y = 50;
        cube3Z0.position.z = 300;
        this.scene.add(cube3Z0);

        var cube3Z1 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube3Z1.position.x = -100;
        cube3Z1.position.y = 150;
        cube3Z1.position.z = 300;
        this.scene.add(cube3Z1);


        var cube4Z0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube4Z0.position.x = 100;
        cube4Z0.position.y = 50;
        cube4Z0.position.z = 300;
        this.scene.add(cube4Z0);


        var cube5Z0 = new THREE.Mesh(new THREE.CubeGeometry(90, 90, 90), new THREE.MeshLambertMaterial({ color: 'blue', opacity:0.7, transparent:true }));
       // cube.rotation.x = cube.rotation.z = Math.PI * 0.1;
        cube5Z0.position.x = 200;
        cube5Z0.position.y = 50;
        cube5Z0.position.z = 300;
        this.scene.add(cube5Z0);

        
        // LABEL
    var spritey = makeTextSprite( "AXIS: sumbu X", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(0,5,380);
    this.scene.add( spritey );


    var spritey = makeTextSprite( "BARAT", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(0,265,360);
    this.scene.add( spritey );

    var spritey = makeTextSprite( "SELATAN", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(360,265,0);
    this.scene.add( spritey );

    var spritey = makeTextSprite( "UTARA", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(-360,265,0);
    this.scene.add( spritey );


    var spritey = makeTextSprite( " RACK 01-A-0", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(-360,25,365);
    this.scene.add( spritey );

    var spritey = makeTextSprite( " RACK 01-A-1", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(-360,125,365);
    this.scene.add( spritey );

    var spritey = makeTextSprite( " RACK 01-A-2", 
        { fontsize: 32, borderColor: {r:255, g:0, b:0, a:1.0}, backgroundColor: {r:255, g:100, b:100, a:0.8} } );
    spritey.position.set(-360,225,365);
    this.scene.add( spritey );



    var spritey = makeTextSprite( " RACK 09-A, ", 
        { fontsize: 32, fontface: "Georgia", borderColor: {r:0, g:0, b:255, a:1.0} } );
    spritey.position.set(355,205,325);
    this.scene.add( spritey );

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
