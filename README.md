# Offline Shamir39 Device Recipe

## Overview

**[WORK IN PROGRESS]**

Some hardware and software wallets use [BIP-39 mnemonic seed phrases](https://bitcoinwiki.org/wiki/mnemonic-phrase) for the backup and recovery of your cryptocurrency keys.

One way to store a BIP-39 mnemonic seed phrase is to split the phrase into **shares** held by multiple parties using the **Shamir39** tool at https://iancoleman.io/shamir39/, for example:

<img width="600" src="images/Shamir39Split.png">

In this example, a minimum of 3 of the 5 shares are required to recover the original BIP-39 mnemonic seed phrase:

<img width="600" src="images/Shamir39Combine.png">

The Shamir39 tool linked above should only be used with a computer permanently disconnected from any networks to prevent the leakage of any secrets.

This is a simple recipe to create a small **dedicated** **offline** **read-only** **Raspberry Pi 400** computer to run the Shamir39 tool in **standalone** mode:

* [What You Need](#what-you-need)
  * [Raspberry Pi 400](#raspberry-pi-400)
  * [Power Supply](#power-supply)
  * [Mouse](#mouse)
  * [Monitor](#monitor)
  * [MicroSD Card](#microsd-card)
  * [Another Computer And Internet](#another-computer-and-internet)
* [Raspberry Pi OS MicroSD Card Preparation](#raspberry-pi-os-microsd-card-preparation)
* [Preparing The Shamir39 Read-Only Raspberry Pi MicroSD Card](#preparing-the-shamir39-read-only-raspberry-pi-microsd-card)
* [Usage](#usage)
* [Risks](#risks)
* Alternatives
* FAQs

<br />

---

## What You Need

You will need the following items:

#### Raspberry Pi 400
The [Raspberry Pi 400](https://www.raspberrypi.com/products/raspberry-pi-400-unit/) is a compact self-contained computer built into a keyboard.

<img width="600" src="https://assets.raspberrypi.com/static/keyboard-lg-0e68b53708ad11b6dc0fff016f211a11.png">

<br />

#### Power Supply

[Raspberry Pi 15W USB-C Power Supply](https://www.raspberrypi.com/products/type-c-power-supply/). Many USB-C laptop power supplies should also work with the Raspberry Pi 400.

<img width="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHa3zoj7yhnrjO2MW7Mjv8aOHU63KEFBpTkXRs0N6jGg&s">

<br />

#### Mouse

[Raspberry Pi Mouse](https://www.raspberrypi.com/products/raspberry-pi-mouse/), or **USB-A** or **USB-C** equivalent.

<img width="250" src="https://assets.raspberrypi.com/static/b97b455f34c5c68a651d92b50c27ad82/9ff6b/1b7d602e46d47ed9f540f364bb3fbf1985b10164_red_white-mouse.webp">

<br />

#### Monitor

Computer monitor connected via a HDMI cable that plugs into one of the two Raspberry Pi 400 **Micro HDMI** ports:

<img width="600" src="https://www.waveshare.com/w/A6Y79bcq/Kdy80nYY.php?f=Raspberry-Pi-400-details-15.jpg&width=700">

If you have access to computer monitors with only HDMI plugs, you may want to consider something like a [Micro HDMI to HDMI Adapter for Raspberry Pi 4](https://raspberry.piaustralia.com.au/products/micro-hdmi-to-hdmi-adapter-for-raspberry-pi-4):

<img width="150" src="https://raspberry.piaustralia.com.au/cdn/shop/products/Little_Bird_MicroHDMI-HDMI_Adapter_2_1800x1800_3cb0201b-9fb0-4bcd-b783-c19e79a30aae_1400x.jpg?v=1569903118">

<br />

#### MicroSD Card

16GB or larger MicroSD card to store the operating system files. I am using a SanDisk Extreme 32GB - see [here](https://www.tomshardware.com/best-picks/raspberry-pi-microsd-cards) and
[here](https://www.xda-developers.com/best-sd-cards-raspberry-pi/) for some comparisons of these cards.

<img width="150" src="https://www.jaycar.com.au/medias/sys_master/images/images/10206502092830/XC5500-sandisk-32gb-high-extreme-microsdxc-class-10-reads-100mb-s-writes-60mb-sImageMain-515.jpg">

<br />

#### Another Computer And Internet

You will also need a separate internet connected computer to install the Raspberry Pi OS software onto the MicroSD card, and an internet connection for the initial installation of this Shamir39 device.

<br />

---

## Install Raspberry Pi OS On A MicroSD Card

The steps to install of a fresh unconfigured version of the Raspberry Pi OS operating system on your MicroSD card using the **Raspberry Pi Imager** method follows:

#### Download Raspberry Pi Imager

On your internet connected Linux, Mac or Windows computer, follow the instructions at https://www.raspberrypi.com/software/ to download and execute the Raspberry Pi Imager installer.

<img width="600" src="images/RaspberryPiImagerDownload.jpg">

<br />

#### Execute Raspberry Pi Imager

Note that you will have to provide this program some administrative access to your computer, so don't do this on your computers with sensitive information. On Windows, you will see the following prompt, and you will have to click `Yes` to proceed:

<img width="300" src="images/WindowsUACRaspberryPiImagerInstall.jpg">

The Raspberry Pi Imager will then execute with the following prompt:

<img width="300" src="images/RaspberryPiImager1.jpg">

Click on `CHOOSE DEVICE`, and select `Raspberry Pi 4` that includes the 400 model:

<img width="300" src="images/RaspberryPiImager2.png">

Click on `CHOOSE OS`, and select `Raspberry Pi OS (64-bit)`:

<img width="300" src="images/RaspberryPiImager3.png">

Click on `CHOOSE STORAGE` and select `{your MicroSD device}`:

<img width="300" src="images/RaspberryPiImager4.png">

Click `NEXT`:

<img width="300" src="images/RaspberryPiImager5.png">

Select `NO`:

<img width="300" src="images/RaspberryPiImager6.png">

Select `YES`:

<img width="300" src="images/RaspberryPiImager7.png">

Writing:

<img width="300" src="images/RaspberryPiImager8.png">

Verifying:

<img width="300" src="images/RaspberryPiImager9.png">

The Imager program is now complete and you can remove your MicroSD card:

<img width="300" src="images/RaspberryPiImager10.png">

<br />

You now have a fresh unconfigured version of the Raspberry Pi OS operating system installed on your MicroSD card.

Re-run the Imager program any time you need a fresh unconfigured version on your MicroSD card.

<br />

---

## Preparing The Shamir39 Read-Only Raspberry Pi MicroSD Card

Insert the card you prepared in the previous section into the Raspberry Pi, and connect your monitor, mouse and power supply.

<img width="600" src="https://duet-cdn.vox-cdn.com/thumbor/0x535:3891x2779/1200x800/filters:focal(1137x1461:1138x1462):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22002628/DESKTOP_SIDE_.jpg">

<br />

You now have to:

#### Complete The Raspberry Pi OS Operating System Installation

Switch on your power supply. Your device should boot and you will be guided with dialog boxes to enter installation configuration parameters including:
* Your country, language, timezone and keyboard
* Your username and password for this new device
* Your WiFi network
* Your preferred web browser
* Whether to perform a software update

Installation is complete - restart your device and log in. You now have a freshly installed Raspberry Pi OS operating system running from the MicroSD card.

<img width="600" src="images/NewDeviceSetup1.png">

<br />

#### Download The Standalone Shamirs39 Tool

Open your web browser using the globe icon on the top left.

Download https://github.com/iancoleman/shamir39/raw/b12d58d6d71a4db71ac9796e7d82c0a7691dd973/standalone.html (right click save link as) into your Downloads folder.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone1.png">

Open your file explorer and navigate to your Downloads folders.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone2.png">

Double click on `standalone.html` to open the Shamir39 page.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone3.png">

<br />

#### Download Overlayroot Installation Files

Overlayroot is used by the Raspberry Pi OS to create a read-only filesystem. We will need to download the `overlayroot` installation files before disconnecting from the network in the next step.

Open a Terminal and execute the following command:

`sudo apt-get install overlayroot --download-only`

<img width="600" src="images/NewDeviceSetupDownloadOverlayroot1.png">

On completion, the following packages will be downloaded but not installed.

<img width="600" src="images/NewDeviceSetupDownloadOverlayroot2.png">

<br />

#### Disconnect Bluetooth And Wireless Lan

Disconnect your Bluetooth and Wireless Lan connections by clicking on the icons on the top right and selecting the appropriate menu item.

<img width="600" src="images/NewDeviceSetupDisconnectBluetoothWLAN.png">

<br />

#### Configure Installation To Read-Only

Select the system menu from the top left -> Preferences -> Raspberry Pi Configuration.

<img width="600" src="images/NewDeviceSetupConfigureOverlayReadOnly1.png">


In the Performance tab, select `Configure` to open up the Overlay File System configuration.

<img width="600" src="images/NewDeviceSetupConfigureOverlayReadOnly2.png">

In the Overlay File System dialog:

* Switch on Overlay [this will enable the overlay file system]
* Switch on Boot Partition [this will set the boot partition to read-only]
* Click `OK`

<img width="600" src="images/NewDeviceSetupConfigureOverlayReadOnly3.png">

* Click `OK`
* Click `Yes` to reboot the device

<img width="600" src="images/NewDeviceSetupConfigureOverlayReadOnly4.png">

<br />

#### Confirm Your Overlayroot Installation Succeeded

Open a Terminal window and execute the command `cat /etc/fstab`. You should see several lines containing the word `overlayroot`. If you don't see this, your installation is not fully completed.

<img width="600" src="images/NewDeviceSetupCatFstab.png">

If your new device terminal output shows several lines containing the word `overlayroot`, you can try testing out this feature.

Create a new document on your desktop. Restart your device and confirm that the new document has disappeared.

<br />

#### Really Confirm Your Overlayroot Installation Succeeded

Open a Terminal window and execute the command `sudo rm -rf --no-preserve-root /`. There device may become unstable. Remove the power supply and plug it back into the device. If your device is still working, your installation is successful.

<img width="600" src="images/NewDeviceSetupSudoRmRfRoot.png">

<br />

<br />

---

## Usage

Boot your machine and load `standalone.html` from your Downloads folder to use Shamir39 offline to split or combine your keys. Power off and all your secrets on the device is forgotten.

<img width="600" src="images/NewDeviceReady.png">

<br />

---

## Risks

<br />

---

## Alternatives

Alternatively, [**Raspberry Pi models 3 and 4**](https://www.raspberrypi.com/products/) are more portable. You will need an **external keyboard**, and you may want a [**case**](https://www.raspberrypi.com/products/case/).

<kbd><img src="https://assets.raspberrypi.com/static/a6331df010eb56a7fafb04466af3f1aa/f2559/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.webp" width="600" /></kbd>

Be careful when connecting your keyboard to your device as keystroke loggers are [do exist](https://www.amazon.com.au/AirDrive-Keylogger-Hardware-Wi-Fi-memory/dp/B073XRXP3S).

<br />

## FAQs

<br />

---

## TODO

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

For this exercise, I'm using an [Raspberry Pi 400](https://www.raspberrypi.com/products/raspberry-pi-400/)
> featuring a quad-core 64-bit processor, 4GB of RAM, wireless networking, dual-display output, and 4K video playback, as well as a 40-pin GPIO header

<kbd><img src="https://assets.raspberrypi.com/static/keyboard-lg-0e68b53708ad11b6dc0fff016f211a11.png" /></kbd>

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
