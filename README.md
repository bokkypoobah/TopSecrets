# Offline Shamir39 Device Recipe
Recipe to create an offline device to split and combine BIP39 Mnemonics using Shamir39

**WORK IN PROGRESS**

## Aims

* Create a device that does not store any information in permanent storage
  * This setup runs the Raspberry OS with the MicroSD storage device in read-only mode
* Create a device cheap enough that it can be dedicated for a single use and kept permanently offline
* Create a device out of easily obtainable hardware and software
* Document this process, and make it easily reproducible

## Risks

* Could have weaknesses in the algorithms, or in the implementation of the algorithms

## Hardware

* Raspberry Pi
* MicroSD Card flashed with most recent Raspberry Pi OS
* Power Supply 
* Monitor and HDMI cable
* Mouse and Keyboard

## Sofware

* Raspberry Pi Operating System - https://www.raspberrypi.com/software/operating-systems/

## Notes

* Disable Bluetooth, WiFi. Tape over network port after setup completed.

## References 

* [Shamir39 Tool](https://iancoleman.io/shamir39/) - Note warnings about usage of this software
* [Read-Only Raspberry Pi - Never Corrupt your Micro-SD Card](https://core-electronics.com.au/guides/read-only-raspberry-pi/)
