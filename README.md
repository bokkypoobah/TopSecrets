# Top Secrets

**Work in Progress**

<p align="center">
  <img height="150" src="https://raw.githubusercontent.com/bokkypoobah/TopSecrets/main/images/topsecrets.svg" />
</p>

**Top Secrets** is a **read-only** **offline** crypto device. This is a "simple" recipe for you to create your own Top Secrets device using readily available and inexpensive parts.

The Operating System (OS) for this device is configured to write any file system changes to Random Access Memory (RAM) and these changes are lost when power to the device is disconnected.

The following open source software tools are installed for offline execution.

| Tool | GitHub | Some Uses, And URL For Testing |
| --- | --- | --- |
| Shamir39 | [iancoleman/shamir39](https://github.com/iancoleman/shamir39) | Split BIP-39 mnemonic seed phrases into shares that can be combined to recreate the original phrase.<br />[https://iancoleman.io/shamir39/](https://iancoleman.io/shamir39/) |
| BIP39 Tool | [iancoleman/bip39](https://github.com/iancoleman/bip39) | Extract private key, public key and addresses derived from BIP-39 mnemonic seed phrases.<br />[https://iancoleman.io/bip39/](https://iancoleman.io/bip39/) |
| Simple Shamir's Secret Sharing (s4) | [simonfrey/s4](https://github.com/simonfrey/s4) | Encrypt messages into shares that can be combined to recreate the original unencrypted messages.<br />[https://simon-frey.com/s4/](https://simon-frey.com/s4/) |
| Banana Split | [paritytech/banana_split](https://github.com/paritytech/banana_split) | Encrypt messages up to 1024 characters into QR code shares that can be combined to recreate the original unencrypted messages. Requires a camera to scan the QR codes for the combining process.<br />[https://bs.parity.io/](https://bs.parity.io/)  |
| Vanity-ETH | [bokub/vanity-eth](https://github.com/bokub/vanity-eth) | Generate (vanity) Ethereum addresses as private and public key pairs or password protected .json keystore files.<br />[https://vanity-eth.tk/](https://vanity-eth.tk/) |

Please see [Risks](#risks) before any serious use.

## Overview

![](images/mindmap_20240415_1245.png)

<br />

---

## TODO REVISE BELOW

If you hold, or will hold cryptocurrency, you will eventually search for a tool to distribute parts of your private keys to multiple locations or parties.

This guide is a recipe for you to build a read-only offline Raspberry Pi 400 device to split and combine your private keys, in the form of BIP-39 mnemonic seed phrases, using the [Shamir39 tool](https://github.com/iancoleman/shamir39).

<br />

## Table Of Contents

* [Overview](#overview)
* [Shopping List](#shopping-list)
  * [Raspberry Pi 400](#raspberry-pi-400)
  * [MicroSD Card](#microsd-card)
  * [USB-C Power Supply](#usb-c-power-supply)
  * [USB-A or USB-C Mouse](#usb-a-or-usb-c-mouse)
  * [Monitor With Micro HDMI Cable](#monitor-with-micro-hdmi-cable)
  * [Component Prices](#comonent-prices)
  * [Separate Computer And Wireless Internet](#separate-computer-and-wireless-internet)
* [Preparing The Raspberry Pi OS Installation MicroSD Card](#preparing-the-raspberry-pi-os-installation-microsd-card)
* [Building The Read-Only Offline Shamir39 Device](#building-the-read-only-offline-shamir39-device)
* [Using The Read-Only Offline Shamir39 Device](#using-the-read-only-offline-shamir39-device)
* [Risks](#risks)
* [Alternatives](#alternatives)
* [FAQs](#faqs)

<br />

---

## Overview

Many hardware and software wallets use [BIP-39 mnemonic seed phrases](https://bitcoinwiki.org/wiki/mnemonic-phrase) for the backup and recovery of the private keys.

<p float="center">
  <img height="200" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*k3nEHUbojyK-MLzz3Up2rw.jpeg" />
  <img height="200" src="https://cdn05.zipify.com/jWNo4pZh2__jUAKAXeA3R-YxN5A=/fit-in/2048x0/45fbab1bcc044dd59250acd4286f53df/trezor-one-confirm-seed.jpg" />
</p>

One "safer" way to store the BIP-39 mnemonic seed phrases is to split them into **shares** using the **Shamir39** tool at https://iancoleman.io/shamir39/. These shares can then be distributed to multiple locations or parties for safekeeping, and combined when required to recover the original BIP-39 mnemonic seed phrases.

Here is an example of a BIP-39 mnemonic seed phrase split into 5 shares, with a minimum of 3 shares required to recover the original BIP-39 mnemonic seed phrase.

<img width="800" src="images/Shamir39Split.png">

<br />

Here are the minimum three shares combined to recover the original BIP-39 mnemonic seed phrase.

<img width="800" src="images/Shamir39Combine.png">

<br />

The Shamir39 tool linked above should only be used with a computer permanently disconnected from any networks to prevent the leakage of any secrets.

This is a simple recipe to create a small **dedicated** **offline** **read-only** **Raspberry Pi 400** computer to run the Shamir39 tool in **standalone** mode.

When this device is being used, any changes to the file system is written to Random Access Memory (RAM) instead of the MicroSD card storage, and these changes will be lost when the device loses power.

Please see [Risks](#risks) before any serious use.

<br />

---

## Shopping List

See [Hardware](Hardware.md).

<br />

---

## Preparing The Raspberry Pi OS Installation MicroSD Card

See [Storage Preparations](StoragePreparation.md).

<br />

---

## Building The Read-Only Offline Shamir39 Device

See [Installation](Installation.md).

<br />

---

## Using The Read-Only Offline Shamir39 Device

Boot your machine and load `standalone.html` from your Downloads folder to use Shamir39 offline to split or combine your keys. Power off and all your secrets on the device are forgotten.

<img width="600" src="images/NewDeviceReady.png">

<br />

---

## Risks

### Shamir39 Tool

The [Shamir39 tool](https://iancoleman.io/shamir39/) could have some weaknesses in the algorithms, or in the implementation of the algorithms. Please carefully read the warnings messages in this tool.

#### Recoverability Of Original Keys

To be fully confident that you can recover your original BIP-39 mnemonic seed phrase from your shares, manually test the different combinations in this same tool.

#### Randomness

Use your hardware wallet to generate your BIP-39 mnemonic seed phrase in preference to using the `Generate` button in this Shamir39 tool. This will reduce any risks in case of vulnerabilities in the random number generation process using this Shamir39 tool.

#### Algorithm Not Standardised

The Shamir39 tools does not use a standardised algorithm and there is no alternative implementation.

When splitting important keys using this tool, remember to keep several "backups" of this offline Shamir39 devices.

The main backups are copies of your offline Shamir39 MicroSD card.

Having the Raspberry Pi hardware backup is slightly less important, as you can use your MicroSD card in any readily available Raspberry Pi Model 4 series.

Also keep good documentation as you may only access these devices and MicroSD cards very infrequently.

#### Hope And Pray

Hope and pray that there are no serious vulnerabilities in the Shamir39 and Shamirs Secret Sharing algorithms, and this implementation.

<br />

### Hardware

#### Computer Monitor HDMI Connection

The signals from the Micro HDMI connection of this device to your computer monitor can leak your secrets. Only use computer monitors, cables and adaptors that your trust "enough".

#### Keyboard

The reason why the Raspberry Pi 400 is chosen for this recipe is because you do not have to connect an external keyboard to your offline device. If you are using one of the [Alternatives](#alternatives) requiring a keyboard, the signals from your keyboard can [leak your secrets](https://www.amazon.com.au/AirDrive-Keylogger-Hardware-Wi-Fi-memory/dp/B073XRXP3S). Only use keyboards and adaptors that you trust "enough".

<br />

---

## FAQs

Moved to [FAQs.md](FAQs.md).

<br />

<br />

Enjoy!

© Bok Consulting Pty Ltd 2024, CC0-1.0 license
