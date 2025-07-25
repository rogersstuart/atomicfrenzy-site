---
layout: project
title: "Input Switching Test 3"
image: /assets/images/projects/inputswitchingtest3/still.jpg
date: 2025-07-23
author: Stuart Rogers
tags: [power supply, input protection, switching converter, reverse polarity, SCR, MOV, polyfuse, hardware design]
order: 3
---

Input Switching Test 3 is a switching converter designed to interface PIT v2 with a high input voltage of 36V, generating both 3.3V and 5V outputs. The concept behind this design was to enable the 36V input to both power the PIT and to control external devices, eliminating the need for additional power adapters or circuitry.

The converter supports two input sources: USB and an external connection. The external input features reverse polarity protection, while both inputs are equipped with backflow protection and automatic switchover, utilizing a current mirror-based input protection circuit inspired by the Raspberry Pi.

In the initial version, input clamping was achieved using a varistor across the input, with a polyfuse providing protection against prolonged overcurrent. Although theoretically sound, this approach proved too slow in practice. The project was originally set aside along with PIT v2, but was revisited several years later to improve the input protection scheme.

By incorporating a thyristor (SCR), the design leverages the increasing voltage drop across the MOV to trigger rapid protection. Instead of relying on the slow response of the MOV, the SCR activates immediately, tripping the polyfuse and safeguarding the circuit. With this enhancement, the device is now suitable for commercial applications.

<img src="/assets/images/projects/inputswitchingtest3/PCB3.png" alt="Render" style="width:45%;">

This did exist as a DIY PCB prototype. The purpose was test the backflow and reverse polarity protection.

<div class="flex-row">
<img src="/assets/images/projects/inputswitchingtest3/diyboard.jpg" alt="Dead Bug" style="width:45%;">
<img src="/assets/images/projects/inputswitchingtest3/prox.gif" alt="Sensor Testing" style="width:45%;">
</div>