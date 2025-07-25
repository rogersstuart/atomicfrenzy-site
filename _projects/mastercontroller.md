---
layout: project
title: "Master Controller"
image: /assets/images/projects/earlyprojects/ws2812b.jpg
date: 2025-07-24
author: Stuart Rogers
tags: []
order: 4
---

[Jump to Software Overview](#software-overview)  
[Jump to History](#History of the Master Controller)  
[Jump to GitHub](#github)

## Software Overview

The following is mostly a copy and paste from the GitHub readme.

MasterController v2 Suite is an offline access control and building device management system. It allows administrators to manage RFID card access (store and sync card UIDs to door controllers), monitor and control building hardware (door locks, sensors, relays), and interface with external systems (e.g., via MQTT for web dashboards). The suite includes a Windows desktop application for configuration and monitoring, and background services for real-time device communication.

C# (.NET 4.6.1) with WinForms for the admin UI. MySQL database for storing users, cards, and device data. Entity Framework 6 (planned integration) – currently using MySQL Connector/ADO.NET for data access. Windows Service components for hardware communication (sockets, UDP broadcasts, MQTT messaging). Integration of third-party libraries: MQTT (for IoT messaging), BouncyCastle (cryptography), EPPlus (Excel import/export), etc.

The core functionality (card management, device interfacing, etc.) is in place and was tested in a live environment with legacy hardware controllers. Some features (e.g., initial database setup, SIP integration, and video monitoring) are prototypes or pending completion. Given more time, I would improve this project by migrating to Entity Framework (to simplify database interactions) and adding a setup wizard to handle first-time database initialization. I would also refactor some modules for better separation of concerns (e.g., decouple the service logic from the UI).

Feel free to explore the code; notable sections include the custom MySQL connection pool in MCICommon and the DeviceServer service that manages device networks.

This project was developed as a prototype for a building security system in a 12 story building. It successfully controlled 30 doors in real-time.

[View on GitHub](https://github.com/rogersstuart/MasterController-v2-Suite)

## History of the Master Controller

The Master Controller originated from a collaborative effort between myself and my employer to develop custom hardware solutions. At the time, we were in the process of acquiring an office building equipped with an outdated access control system that relied on Wiegand wire cards. As my first significant project, I anticipated a learning curve and potential setbacks.

Initially, I attempted to simulate a Wiegand card swipe using an Arduino, but was unsuccessful due to the challenges of debugging in less-than-ideal environments—either in a hot mechanical room or in public spaces with limited access. Ultimately, I decided to rewire the system so that bridging two wires would unlock the door through the existing controller. The first prototype consisted of an Arduino housed in a simple enclosure, with a hardcoded list of NFC card UIDs. Updating the list required removing the front panel and connecting a USB cable, which quickly proved inconvenient. To streamline this process, I added a TTL RS232 interface, allowing the software to parse a CSV file and upload it to the panel. Over time, we transitioned to using Excel spreadsheets (with native XLSX support) and eventually migrated to a MariaDB database for greater flexibility.

The hardware underwent several revisions. Beyond the front door panel, a battery-powered timer served as the initial version of the elevator access control system. This device interfaced with the elevator controller in the same manner as the original access control system, utilizing relays connected to an Arduino powered by a battery. It featured a basic serial interface that required a physical connection for access.

<div style="display: flex; gap: 2%; justify-content: center; align-items: center;">
  <img src="/assets/images/projects/mastercontroller/timersw.jpg" alt="Timer Switch" style="width:45%;">
  <iframe 
    src="https://www.youtube.com/embed/3-v7LREPuWk?autoplay=1&mute=1&loop=1&playlist=3-v7LREPuWk&controls=0&modestbranding=1" 
    frameborder="0" 
    allow="autoplay; encrypted-media" 
    style="width:45%; height:250px; border-radius:8px;">
  </iframe>
</div>

The first fully functional system capable of maintaining a card list was a hand-soldered prototype built on perfboard. This version incorporated an Arduino, RTC, EEPROMs, battery, LEDs, and several transistors. Although my understanding of transistor-based switching was limited at the time (today, I would use a triac), the circuit performed reliably and remained in service for an extended period.

<img src="/assets/images/projects/mastercontroller/elevatorv1.jpg" alt="Master Controller v1" style="width:45%;">

This installation remained operational well beyond the introduction of the PCB version of the controller, only being replaced once the system was fully networked and transitioned to an MQTT-based architecture. As my first PCB design, it had several shortcomings. While the routing was functional, I was dissatisfied with its aesthetics. The screw terminals had minor gaps, causing them to rotate when tightened, and the board lacked expandability. Most notably, there was no header for programming the MCU—a feature present in the original perfboard prototype. Programming required attaching test clips directly to the MCU, which often meant working in awkward positions within mechanical rooms.

Below is a photo of the control board and its schematic. The schematic, drawn in 2013, reflects my skills at the time. Interestingly, the actual PCB was laid out manually and never had a formal schematic, though the one shown here is nearly identical except for the inclusion of an ICSP header.

<div style="display: flex; gap: 2%; justify-content: center;">
<img src="/assets/images/projects/mastercontroller/v2programming.jpg" alt="Master Controller v2" style="width:45%;">
<img src="/assets/images/projects/mastercontroller/mcsch.jpg" alt="Master Controller v2 Schematic" style="width:45%;">
</div>

Past the earliest prototype there have existed door panels. Like the rest of the system they were based on Arduinos. They featured an PN532 NFC card reader as well as the arduino, voltage regulator (switching in later versions to avoid voltage drop), and RGB led.

Here are some photos 
