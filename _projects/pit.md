---
layout: project
title: "Programmable Interval Timer (PIT)"
image: /assets/images/projects/pit/pit32.jpg
date: 2025-07-23
author: Stuart Rogers
tags: [ESP32, Temperature Control, IoT, Hardware Design]
order: 2
---

Initially conceived of in May of 2016, the Programmable Interval Timer (PIT) began as a custom solution for a specific need: a programmable timer with integrated temperature control capabilities. While initially designed for a friend's unique application, the project evolved into a versatile control system with potential applications in 3D printing and environmental monitoring.

During development, I used the PIT to monitor and control the temperature inside my 3D printer enclosure. While a basic thermometer can handle simple monitoring, the PIT stands out for its advanced features and programmability.

[View on GitHub](https://github.com/rogersstuart/ProgrammableIntervalTimer)

## Original Interface
The first version featured a simple but effective user interface:

<div style="display: flex; gap: 2%; justify-content: center;">
  <img src="/assets/images/projects/pit/pit_main.jpg" alt="PIT v1" style="width:45%;">
  <img src="/assets/images/projects/pit/pit_if1.jpg" alt="PIT Interface 2" style="width:45%;">
</div>

## Version 2.0 Enhancements
The second iteration brought significant improvements:
- Rotary encoder for intuitive control
- Color backlit character LCD display
- Integrated temperature sensor with remote sensing
- Proximity detection capabilities

However, this version also taught valuable lessons about hardware development. Several issues emerged during production:
- Incorrect speaker documentation led to compatibility issues
- JLCPCB supplied the wrong ESP32 module and refused to fix their mistake. A reason to do inhouse assembly.
- A reversed connector highlighted the importance of thorough design review

You can download a copy of the schematic [here](/assets/files/projects/pit/PITSchematicWIP.PDF). Please keep in mind this is a WIP.

Here's a brief video of me playing with the prototype.

<br>

<iframe 
  src="https://www.youtube.com/embed/f8sBEKwTnHU?autoplay=1&mute=1&loop=1&playlist=f8sBEKwTnHU&controls=0&modestbranding=1" 
  frameborder="0" 
  allow="autoplay; encrypted-media" 
  style="width:45%; height:250px; border-radius:8px;">
</iframe>

Photos of the board.

<div style="display: flex; gap: 2%; justify-content: center;">
  <img src="/assets/images/projects/pit/pitv2left.jpg" alt="PIT v2 Front" style="width:45%;">
  <img src="/assets/images/projects/pit/pitv2right.jpg" alt="PIT v2 Back" style="width:45%;">
</div>

Renders

<div style="display: flex; gap: 2%; justify-content: center;">
  <img src="/assets/images/projects/pit/PITRenderFront.jpg" alt="PIT v2 Front" style="width:45%;">
  <img src="/assets/images/projects/pit/PITRenderBack.jpg" alt="PIT v2 Back" style="width:45%;">
</div>

Backlight Testing

<img src="/assets/images/projects/pit/pit.gif" alt="PIT v2 Backlight" style="width:45%;">

## Innovative Solutions
One interesting aspect of this project is the use of a proximity sensor. While it looks cool, the dead bug soldered chip is the result of forgetting to mirror the gerber for the DIY method of PCB fabrication.

<img src="/assets/images/projects/pit/deadbug.jpg" alt="Proximity Sensor Dead Bug Construction" style="width:45%;">

While the project is currently on hold, its source code remains available on GitHub for reference and potential future development.




