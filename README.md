# Read-Only Offline Shamir39 Device Recipe

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

You will need the following items:

### Raspberry Pi 400
The [Raspberry Pi 400](https://www.raspberrypi.com/products/raspberry-pi-400-unit/) is a compact self-contained computer built into a keyboard.

<img width="600" src="https://assets.raspberrypi.com/static/keyboard-lg-0e68b53708ad11b6dc0fff016f211a11.png">

<br />

### MicroSD Card

8GB or larger MicroSD card to store the operating system files. I am using a SanDisk Extreme 32GB - see [here](https://www.tomshardware.com/best-picks/raspberry-pi-microsd-cards) and
[here](https://www.xda-developers.com/best-sd-cards-raspberry-pi/) for some comparisons of these cards.

<img width="150" src="https://www.jaycar.com.au/medias/sys_master/images/images/10206502092830/XC5500-sandisk-32gb-high-extreme-microsdxc-class-10-reads-100mb-s-writes-60mb-sImageMain-515.jpg">

<br />

### USB-C Power Supply

[Raspberry Pi 15W USB-C Power Supply](https://www.raspberrypi.com/products/type-c-power-supply/). Many USB-C laptop power supplies should also work with the Raspberry Pi 400.

<img width="250" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHa3zoj7yhnrjO2MW7Mjv8aOHU63KEFBpTkXRs0N6jGg&s">

<br />

### USB-A or USB-C Mouse

[Raspberry Pi Mouse](https://www.raspberrypi.com/products/raspberry-pi-mouse/), or **USB-A** or **USB-C** equivalent.

<img width="250" src="https://assets.raspberrypi.com/static/b97b455f34c5c68a651d92b50c27ad82/9ff6b/1b7d602e46d47ed9f540f364bb3fbf1985b10164_red_white-mouse.webp">

<br />

### Monitor With Micro HDMI Cable

Computer monitor connected via a HDMI cable that plugs into one of the two Raspberry Pi 400 **Micro HDMI** ports:

<img width="600" src="https://www.waveshare.com/w/A6Y79bcq/Kdy80nYY.php?f=Raspberry-Pi-400-details-15.jpg&width=700">

If you have access to computer monitors with only HDMI plugs, you may want to consider something like a [Micro HDMI to HDMI Adapter for Raspberry Pi 4](https://raspberry.piaustralia.com.au/products/micro-hdmi-to-hdmi-adapter-for-raspberry-pi-4):

<img width="150" src="https://raspberry.piaustralia.com.au/cdn/shop/products/Little_Bird_MicroHDMI-HDMI_Adapter_2_1800x1800_3cb0201b-9fb0-4bcd-b783-c19e79a30aae_1400x.jpg?v=1569903118">

<br />

### Component Prices

| Component | AUD, in Australia |
| --- | ---:|
| Raspberry Pi 400 | [149](https://www.jaycar.com.au/raspberry-pi-400-keyboard-desktop-computer/p/XC9115) |
| 32GB MicroSD Card | [22](https://www.jaycar.com.au/sandisk-32gb-high-extreme-microsdxc-class-10-reads-100mb-s-writes-60mb-s/p/XC5500) |
| Power Supply | [25](https://www.jaycar.com.au/15-3w-raspberry-pi-4-power-supply-5-1vdc-at-3a/p/XC9122) |
| Mouse | ~15 |
| Monitor | ~100 |

<br />

### Separate Computer And Wireless Internet

You will also need a separate internet connected computer to install the Raspberry Pi OS software onto the MicroSD card, and a wireless internet connection for the initial installation of this Shamir39 device.

<br />

---

## Preparing The Raspberry Pi OS Installation MicroSD Card

The steps to install of a fresh unconfigured version of the Raspberry Pi OS operating system on your MicroSD card using the **Raspberry Pi Imager** method follows:

### Download Raspberry Pi Imager

On your internet connected Linux, Mac or Windows computer, follow the instructions at https://www.raspberrypi.com/software/ to download and execute the Raspberry Pi Imager installer.

<img width="600" src="images/RaspberryPiImagerDownload.jpg">

<br />

### Execute Raspberry Pi Imager

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

## Building The Read-Only Offline Shamir39 Device

Insert the card you prepared in the previous section into the Raspberry Pi, and connect your monitor, mouse and power supply.

<img width="600" src="https://duet-cdn.vox-cdn.com/thumbor/0x535:3891x2779/1200x800/filters:focal(1137x1461:1138x1462):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22002628/DESKTOP_SIDE_.jpg">

<br />

You now have to:

### Complete The Raspberry Pi OS Operating System Installation

Switch on your power supply. Your device should boot and you will be guided with dialog boxes to enter installation configuration parameters including:
* Your country, language, timezone and keyboard
* Your username and password for this new device
* Your WiFi network
* Your preferred web browser
* Whether to perform a software update

Restart your device and log in. You now have a freshly installed Raspberry Pi OS operating system running from the MicroSD card.

<img width="600" src="images/NewDeviceSetup1.png">

<br />

### Download The Standalone Shamirs39 Tool

Open your web browser using the globe icon on the top left.

Download https://github.com/iancoleman/shamir39/raw/b12d58d6d71a4db71ac9796e7d82c0a7691dd973/standalone.html (right click save link as) into your Downloads folder.

A backup of the contents at the above link has been made to [copy/standalone_iancoleman_shamir39_b12d58d6d71a4db71ac9796e7d82c0a7691dd973.html](https://raw.githubusercontent.com/bokkypoobah/ReadOnlyOfflineShamir39DeviceRecipe/main/copy/standalone_iancoleman_shamir39_b12d58d6d71a4db71ac9796e7d82c0a7691dd973.html), just in case.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone1.png">

Open your file explorer and navigate to your Downloads folders.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone2.png">

Double click on `standalone.html` to open the Shamir39 page.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone3.png">

<br />

### Download Overlayroot Installation Files

[Overlayroot](https://spin.atomicobject.com/protecting-ubuntu-root-filesystem/) is used by the Raspberry Pi OS to create a read-only filesystem. You will need to download the `overlayroot` installation files before disconnecting from the network in the next step.

Open a Terminal session and execute the following command:

> sudo apt-get install overlayroot --download-only

<img width="600" src="images/NewDeviceSetupDownloadOverlayroot1.png">

On completion, the following packages will be downloaded but not installed.

<img width="600" src="images/NewDeviceSetupDownloadOverlayroot2.png">

<br />

### Disconnect Bluetooth And Wireless Lan

Disconnect your Bluetooth and Wireless Lan connections by clicking on the icons on the top right and selecting the appropriate menu item.

<img width="600" src="images/NewDeviceSetupDisconnectBluetoothWLAN.png">

<br />

### Configure Installation To Read-Only

Select the system menu from the top left -> Preferences -> Raspberry Pi Configuration.

<img width="600" src="images/NewDeviceSetupConfigureOverlayReadOnly1.png">


In the Performance tab, select `Configure` to open up the Overlay File System configuration.

NOTE: This step will fail if you have not downloaded the Overlayroot files as described [above](#download-overlayroot-installation-files).

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

### Confirm Your Overlayroot Installation Succeeded

To confirm that your device is in read-only mode, open a Terminal window and execute the command
> cat /etc/fstab

You should see several lines containing the word `overlayroot`. If you don't see this, your installation is not fully completed.

<img width="600" src="images/NewDeviceSetupCatFstab.png">

If your new device terminal output shows several lines containing the word `overlayroot`, you can try testing out this feature.

Then create a new document on your desktop. Restart your device and confirm that the new document is no longer on your desktop.

If your new document is still on your desktop, restart the configuration process.

<br />

### Really Confirm Your Overlayroot Installation Succeeded

If you really want to confirm that your device is in read-only mode, open a Terminal window and execute the command
> sudo rm -rf --no-preserve-root /

to remove all files from the running system. Your device will become unstable and crash. Remove the power supply and plug it back into the device.

If your device is still working, your installation is successful.

If your device is no longer working, restart the configuration process.

<img width="600" src="images/NewDeviceSetupSudoRmRfRoot.png">

<br />

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

## Alternatives

[Raspberry Pi models 4 and B](https://www.raspberrypi.com/products/) may also work. You may need a [**case**](https://www.raspberrypi.com/products/case/), and a USB-A or USB-C keyboard.

<p float="center">
  <img width="200" src="https://assets.raspberrypi.com/static/a6331df010eb56a7fafb04466af3f1aa/f2559/3a15d4da-46e3-4940-8be6-9fc7d201affe_RPi_4B_FEATURED.webp">
  <img width="200" src="https://assets.raspberrypi.com/static/492cb6e88e7d697fbb53f89f48350133/f2559/488f4e12-de49-4297-bbc6-c3753c060d40_Case%2BWhite.webp">
</p>

Similar steps can be used to build this device on [other platforms](https://www.zdnet.com/article/best-raspberry-pi-alternative/) using the Ubuntu (or similar Linux) operating system.

<br />

---

## FAQs

#### Why Raspberry Pi And Why 400?

The parts are simple, readily available and cheap enough to make redundant backups.

There are no moving components (fans, disk drives) and should have a long lifespan.

The software is well supported, and documentation is easily accessible.

The fully prepared MicroSD card is cheap and can easily be duplicated and distributed.

The 400 comes in convenient keyboard case - one less thing to worry about.

#### What Is So Cool About This Recipe?

When running this device using the Overlayroot mode, any secrets generated in your use of this tool is lost when you power down this device. The Linux operating system overlays writes to Random Access Memory (RAM), while keeping the contents of the MicroSD card as read-only.

Note that you will still need a secure HDMI connected computer monitor to use this tool securely.

#### What Is Overlayroot?

[Overlayroot](https://spin.atomicobject.com/protecting-ubuntu-root-filesystem/) is used by the Raspberry Pi OS to create a read-only filesystem.

#### Is This Different From Trezors Shamir Backup?

Yes. Trezor have their own Shamir backup system requiring different tools - see [What is Shamir backup?](https://trezor.io/learn/a/what-is-shamir-backup). You can still use this device on your Trezor's BIP-39 mnemonic seed phrase.

#### How Do I Remove The Read-Only Mode?

See [here](https://core-electronics.com.au/guides/read-only-raspberry-pi/) and [here](https://learn.adafruit.com/read-only-raspberry-pi/overview) for steps.

#### What Is BIP-39?

See the official [BIP-39 specification](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) and [What is BIP39?](https://trezor.io/learn/a/what-is-bip39).

#### What Is Shamir39?

See the [Shamir39 specification](https://github.com/iancoleman/shamir39/blob/master/specification.md). There is only one known implementation of this specification at https://github.com/iancoleman/shamir39 by the same author.

#### What Is Shamir's Secret Sharing?

See [Dev Corner: A Detailed Guide to Shamir Backup](https://blog.trezor.io/shamir-backup-a-new-security-standard-3aa42a6ebb5f).

#### What Wallets Support BIP-39?

Here are some wallets. Check the individual models for specifics:

| Wallet | Type | BIP-39 Support? |
| --- | --- | --- |
| [Gridplus Lattice1](https://gridplus.io/products/grid-lattice1) | Hardware | [Yes](https://docs.gridplus.io/lattice1/security-features/lattice1-random-number-generation) |
| [Ledger](https://www.ledger.com/) | Hardware | [Yes](https://support.ledger.com/hc/en-us/articles/4415198323089-How-Ledger-device-generates-24-word-recovery-phrase?docs=true) |
| [MetaMask](https://metamask.io/) | Software | [Yes](https://support.metamask.io/hc/en-us/articles/4404722782107-User-Guide-Secret-Recovery-Phrase-password-and-private-keys) |
| [Trezor](https://trezor.io/) | Hardware | [Yes](https://trezor.io/learn/a/what-is-bip39) |

#### What Other Tools Could Be Useful For This Read-Only Offline Device?

##### Simple Shamir's Secret Sharing

Simple Shamir's Secret Sharing (s4) at https://simon-frey.com/s4/ allows you to encrypt and decrypt messages. Save a copy of the web page in your Downloads folder before you remove the network connectivity and set the device to read-only mode.

A backup of the contents of the link https://simon-frey.com/s4/ has been made to [copy/Simple Shamir's Secret Sharing (s4).html](https://raw.githubusercontent.com/bokkypoobah/ReadOnlyOfflineShamir39DeviceRecipe/main/copy/Simple%20Shamir's%20Secret%20Sharing%20(s4).html), just in case.

<img width="400" src="images/SimpleShamirsSecretSharing.png">

You may have to distribute these shares by copying them onto USB storage, as these shares are much harder to write down.

Research and test yourself before real use!

##### Banana Split

Banana Split at https://github.com/paritytech/banana_split splits secrets into QR code shares for printing, with an additional handwritten passphrase required to recover your original secret.

<img width="400" src="images/BananaSplit1.png">

<img width="400" src="images/BananaSplit2.png">

NOTE: You will need a [camera](https://www.raspberrypi.com/products/camera-module-v2/) for your Raspberry Pi device to restore your secret from the QR codes. You may be able to use USB webcams as well. I have not tested that this will work.

A backup of the contents of the link https://bs.parity.io/ has been made to [copy/Banana split.html](https://raw.githubusercontent.com/bokkypoobah/ReadOnlyOfflineShamir39DeviceRecipe/main/copy/Banana%20split.html), just in case.

Research and test yourself before real use!

<br />

<br />

Enjoy!

© Bok Consulting Pty Ltd 2024, CC0-1.0 license
