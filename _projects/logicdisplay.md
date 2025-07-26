---
layout: project
title: "Logic Display"
image: /assets/images/projects/logicdisplay/logicdisplayback.jpg
date: 2025-07-26
author: Stuart Rogers
tags: [multimeter, OLED display, SSD1303, SSD1305, logic chips, PCB design, hardware reverse engineering, Hackaday, soldering, repair, four-layer PCB, thermal management, user modification]
order: 1
---

This project is a display module designed to replace the OLED display in the U1273A/AX or U1253A/B multimeter. It performs SSD1303 to SSD1305 command conversion using only logic chips. The original concept was developed by the community, and I first encountered its application in a coffee maker repair featured on Hackaday. After reverse engineering the community layout, I created my own variant.

The following images are of the current version of the display module for the U1253 series. The U1273 series simply have the screw holes moved to a different location.

<div class="flex-row">
  <img src="/assets/images/projects/logicdisplay/logicdisplayfront.jpg" alt="U1253 Display Front">
  <img src="/assets/images/projects/logicdisplay/logicdisplayback.jpg" alt="U1253 Display Back">
</div>

The version shown here is the second revision of the design. The initial iteration was a simple adapter board intended for end-user soldering, as presented by the community. The original board, shown on the left, differed primarily by the addition of mousebites. After analyzing the schematic, I revised the PCB, transitioning to a four-layer design. Internal copper fills were added to minimize warping and improve heat distribution during soldering. Trace and via placement was also optimized to reduce the risk of shorts, accounting for variability in PCB manufacturing and user soldering techniques.

<div class="flex-row">
  <img src="/assets/images/projects/logicdisplay/original.jpg" alt="Original Adapter">
  <img src="/assets/images/projects/logicdisplay/revb.jpg" alt="Revised Adapter">
</div>

While the design was functional, it placed significant reliance on the user's soldering and debugging skills. This occasionally led to issues, such as adapters being installed offset by one pin, or users misinterpreting probe readings as shorts—sometimes resulting in the addition of modification wires. In one instance, a user dislodged several passive components, necessitating a mail-in repair. There was also a case where a board was damaged by excessive heat. Additional challenges arose from thermal expansion and the softening of the FR4 substrate.

<div class="flex-row">
  <img src="/assets/images/projects/logicdisplay/torch.jpg" alt="Torched Board">
  <img src="/assets/images/projects/logicdisplay/mod.jpg" alt="Mod Wire">
</div>
<div class="flex-row">
  <img src="/assets/images/projects/logicdisplay/components.jpg" alt="Missing Components">
</div>

To help mitigate these issues, I provided instructions for assembly and troubleshooting. While the written documentation has unfortunately been lost, some audiovisual content remains available.

<div class="flex-row">
  <img src="/assets/images/projects/logicdisplay/instructions.jpg" alt="Instructions" style="width:45%;">
  <iframe 
    src="https://www.youtube.com/embed/JvKGLjt6IR0?autoplay=1&mute=1&loop=1&playlist=JvKGLjt6IR0&controls=0&modestbranding=1" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    style="width:45%; height:250px; border-radius:8px;">
  </iframe>
</div>





