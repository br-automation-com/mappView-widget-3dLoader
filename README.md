
# MappView widget 3D model loader


  This repo is a PoC of what we can do using custom widget in MappView from B&R Automation, here the widget is able to load multiple type of 3d models.

  > **_Note:_** I'm not a MappView or Web developer, I was just curious to see what could be done with MappView.

  List of 3d model currently supported
    - .3dm
    - .3ds
    - .3mf
    - .amf
    - .bvh
    - .dae
    - .drc
    - .fbx
    - .glb 
    - .gltf

  This widget is using ThreeJs library, version in project is 0.141.0 (r141) current release is r155. https://github.com/mrdoob/three.js
  All 3d files are already in the project, they are from ThreeJs examples.

  Some functions are still hard-coded into the widget.


## Requirements
- Automation Studio 4.9.5.36
- AR G4.90
- mappView V5.18.1
