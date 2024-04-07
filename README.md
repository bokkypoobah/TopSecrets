# Offline Shamir39 Device Recipe

## Overview

**[WORK IN PROGRESS]**

Your BIP39 mnemonic seed phrase can be split into multiple "shares" using the Shamir39 tool at https://iancoleman.io/shamir39/:

<img width="600" alt="image" src="https://github.com/bokkypoobah/OfflineShamir39DeviceRecipe/assets/17121975/2114469e-7e6f-4b74-9ac5-267749ae4c20">

You can then combine the minimum number of these shares to recreate your original mnemonic seed phrase:

<img width="600" alt="image" src="https://github.com/bokkypoobah/OfflineShamir39DeviceRecipe/assets/17121975/be59cb5d-05e6-47fe-809b-ca93190633d3">

The Shamir39 tool linked above should be used offline to prevent leakage of your secrets. This recipe describes the steps to create a dedicated small Raspberry Pi computer to run the Shamir39 tool without connections to any networks.

The steps required are:

* Obtain and assemble a Raspberry Pi device with a power supply, keyboard and screen
* On a separate Linux, Mac or Windows computer, install the required Raspberry Pi operating system on a MicroSD card
* Insert the MicroSD card into your Raspberry Pi device and boot the device
* Connect to the network and download the standalone version of the Shamir39 tool onto your device
* Switch the MicroSD card filesystem into readonly mode, reboot the system and you now have your offline device
* Use the Shamir39 tool offline. Switch off the power and all your secrets are forgotten

<br />

## Obtain And Assemble The Device

The Raspberry Pi 400 is currently the "easiest" device for this purpose, as it based on the Raspberry Pi 4, to fit into a small keyboard.

<kbd><img src="https://assets.raspberrypi.com/static/keyboard-lg-0e68b53708ad11b6dc0fff016f211a11.png" /></kbd>

Other [Raspberry Pi models](https://en.wikipedia.org/wiki/Raspberry_Pi#Raspberry_Pi) 2 and above should also work. 

If you are not using a Raspberry Pi 400, you will need an external keyboard.

You will need a monitor with a HDMI cable to connect to the Raspberry Pi. The Raspberry Pi 400 uses a Micro HDMI connector. I use a Micro HDMI to HDMI adaptor so I can attach this device to standard HDMI connections.

Be careful with your keyboard and monitor devices and connections, as hardware keystroke loggers can easily be [purchased on the net](https://www.amazon.com.au/AirDrive-Keylogger-Hardware-Wi-Fi-memory/dp/B073XRXP3S).

<br />

## Aims

* Create a device that does not store any information in permanent storage
  * When completed, this setup allows the Raspberry OS to execute with the MicroSD storage device in read-only mode
* Create a device cheap enough that it can be dedicated for a single use and kept permanently offline
* Create a device out of easily obtainable hardware and software
* Document this process, and make it easily reproducible

<br />

## Risks

* Shamir39 tool could have some weaknesses in the algorithms, or in the implementation of the algorithms

<br />

## Hardware

* Raspberry Pi model 2 or above should work. See [Raspberry Pi - Series And Generations](https://en.wikipedia.org/wiki/Raspberry_Pi#Raspberry_Pi)
* Micro SD card, 4GB or larger
* Power Supply 
* Monitor and HDMI cable
* Mouse and Keyboard

For this exercise, I'm using an [Raspberry Pi 400](https://www.raspberrypi.com/products/raspberry-pi-400/)
> featuring a quad-core 64-bit processor, 4GB of RAM, wireless networking, dual-display output, and 4K video playback, as well as a 40-pin GPIO header

<kbd><img src="https://assets.raspberrypi.com/static/keyboard-lg-0e68b53708ad11b6dc0fff016f211a11.png" /></kbd>

<br />

For storage, I'm using a 8GB Micro SD card. You may be able to fit the Raspberry Pi OS image on a 2GB Micro SD card.

<kbd><img src="https://upload.wikimedia.org/wikipedia/commons/d/da/MicroSD_cards_2GB_4GB_8GB.jpg" width="300" /></kbd>

<br />

## Sofware

* Raspberry Pi Operating System - https://www.raspberrypi.com/software/operating-systems/
  * Raspberry Pi OS with desktop 1,158MB
  * Raspberry Pi OS with desktop and recommended software 2,678MB

<br />

## Steps

* Assemble hardware
* Download and install the OS on the MicroSD card
* Insert MicroSD card into the RPi and boot
* Connect to network and download https://github.com/iancoleman/shamir39/raw/b12d58d6d71a4db71ac9796e7d82c0a7691dd973/standalone.html (right click save link as)
* Configure the OS for read-only mode and restart

<br />

## Notes

* Disable Bluetooth, WiFi. Tape over network port after setup completed.
* No standard for using Shamirs Secret Sharing with BIP-39 mnemonics. Make sure the same Shamir39 tool is available when required
* Trezor have their own Shamir backup system requiring different tools - see [What is Shamir backup?](https://trezor.io/learn/a/what-is-shamir-backup)

<br />

## References 

* [Shamir39 Tool](https://iancoleman.io/shamir39/) - Note warnings about usage of this software
* [Read-Only Raspberry Pi - Never Corrupt your Micro-SD Card](https://core-electronics.com.au/guides/read-only-raspberry-pi/)
