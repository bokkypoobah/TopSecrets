# Read-Only Offline Crypto Device Recipe - Installation

[< Back to **Read-Only Offline Crypto Device Recipe**](README.md)

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

A backup of the contents at the above link has been made to [copy/standalone_iancoleman_shamir39_b12d58d6d71a4db71ac9796e7d82c0a7691dd973.html](copy/standalone_iancoleman_shamir39_b12d58d6d71a4db71ac9796e7d82c0a7691dd973.html), just in case.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone1.png">

Open your file explorer and navigate to your Downloads folders.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone2.png">

Double click on `standalone.html` to open the Shamir39 page.

<img width="600" src="images/NewDeviceSetupDownloadShamir39Standalone3.png">

<br />

### Download Overlayroot Installation Files

[Overlayroot](https://spin.atomicobject.com/protecting-ubuntu-root-filesystem/) is used by the Raspberry Pi OS to create a read-only filesystem. You will need to download the `overlayroot` installation files before disconnecting from the network in the next step.

Open a Terminal session and execute the following command:

    sudo apt-get install overlayroot --download-only

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

    cat /etc/fstab

You should see several lines containing the word `overlayroot`. If you don't see this, your installation is not fully completed.

<img width="600" src="images/NewDeviceSetupCatFstab.png">

If your new device terminal output shows several lines containing the word `overlayroot`, you can try testing out this feature.

Then create a new document on your desktop. Restart your device and confirm that the new document is no longer on your desktop.

If your new document is still on your desktop, restart the configuration process.

<br />

### Really Confirm Your Overlayroot Installation Succeeded

If you really want to confirm that your device is in read-only mode, open a Terminal window and execute the command

    sudo rm -rf --no-preserve-root /

to remove all files from the running system. Your device will become unstable and crash. Remove the power supply and plug it back into the device.

If your device is still working, your installation is successful.

If your device is no longer working, restart the configuration process.

<img width="600" src="images/NewDeviceSetupSudoRmRfRoot.png">

<br />



Summary

## Complete Raspberry Pi OS Installation

## Install Overlayroot Packages

## Install Other Software

## Disconnect From Networks

## Switch To Read-Only Mode

## Confirm Installation Is Read-Only

## How To Switch Off Read-Only Mode

<br />

<br />

Enjoy!

© Bok Consulting Pty Ltd 2024, CC0-1.0 license
