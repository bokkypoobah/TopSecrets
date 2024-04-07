# Offline Shamir39 Device Recipe

## Overview

**[WORK IN PROGRESS]**

Some hardware and software wallets use [BIP-39 mnemonic seed phrases](https://bitcoinwiki.org/wiki/mnemonic-phrase) for the backup and recovery of your cryptocurrency keys.

One way to store a BIP-39 mnemonic seed phrase is to split the phrase into **shares** held by multiple parties using the Shamir39 tool at https://iancoleman.io/shamir39/, for example:

<img width="600" alt="image" src="https://github.com/bokkypoobah/OfflineShamir39DeviceRecipe/assets/17121975/2114469e-7e6f-4b74-9ac5-267749ae4c20">

In this example, a minimum of 3 of the 5 shares are required to recover the original BIP-39 mnemonic seed phrase:

<img width="600" alt="image" src="https://github.com/bokkypoobah/OfflineShamir39DeviceRecipe/assets/17121975/be59cb5d-05e6-47fe-809b-ca93190633d3">

The Shamir39 tool linked above should only be used with a computer permanently disconnected from any networks to prevent the leakage of any secrets.

This is a simple recipe to create a small dedicated **offline** **read-only** **Raspberry Pi 400** computer to run the Shamir39 tool in **standalone** mode:

* Connect Hardware
* Install Software
* Usage
* Risks
* Alternatives
* FAQs

<br />

## Connect Hardware

Obtain and connect your: 
* [**Raspberry Pi 400**](https://www.raspberrypi.com/products/raspberry-pi-400-unit/), or see Alternatives below<br />
<kbd><img src="https://assets.raspberrypi.com/static/keyboard-lg-0e68b53708ad11b6dc0fff016f211a11.png" width="600"/></kbd>
* with a [**Raspberry Pi 15W USB-C Power Supply**](https://www.raspberrypi.com/products/type-c-power-supply/), or equivalent (e.g., USB-C laptop power adaptor)
* and a [Raspberry Pi Mouse](https://www.raspberrypi.com/products/raspberry-pi-mouse/), or **USB-A** or **USB-C** equivalent
* with your **monitor** via a **HDMI cable** that plugs into the Raspberry Pi 400's **Micro HDMI** port

<br />

## Install Software

On your Linux, Mac or Windows computer, follow the instructions at https://www.raspberrypi.com/software/ to install the latest Raspberry Pi OS on your **8GB** (or more) **MicroSD card**.

* Testing

<br />

## Usage

* Boot
* Access downloaded Shamir39 page

<br />

## Risks

<br />

## Alternatives

Alternatively, [**Raspberry Pi models 3 and 4**](https://www.raspberrypi.com/products/) are more portable. You will need an **external keyboard**, and you may want a [**case**](https://www.raspberrypi.com/products/case/).

<kbd><img src="https://assets.raspberrypi.com/static/a6331df010eb56a7fafb04466af3f1aa/f2559/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.webp" width="600" /></kbd>

Be careful when connecting your keyboard to your device as keystroke loggers are [do exist](https://www.amazon.com.au/AirDrive-Keylogger-Hardware-Wi-Fi-memory/dp/B073XRXP3S).

<br />

## FAQs

<br />

---

## TODO

* Install Raspberry Pi OS on a MicroSD card
* Insert the MicroSD card into your Raspberry Pi device and boot the device
* Connect to the network
* Download a standalone version of the Shamir39 tool onto your device
* Permanently switch off your network and your wireless signals
* Switch the MicroSD card filesystem into readonly mode and reboot
* Use the standalone Shamir39 tool. Any secrets stored in temporary memory will be lost when the device is powered down


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
* [Read-Only Raspberry Pi](https://learn.adafruit.com/read-only-raspberry-pi/overview)
