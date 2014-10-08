---
layout: post
title: "Make your Moto G super awesome!"
published: true
---

Installing a custom ROM on your Moto G could be a tedious process. But there is an easier solution for this! You can have all those features of a custom ROM in your stock ROM without any hassle ( a little hassle)..

##Steps in brief

* Backup all your data (may be on your PC) because unlocking the bootloader on a Motorola device will automatically wipe all device data
* Root your phone (Unlocking the device)
* Install Xposed Module
* Install Gravity box



##Step 1 : Take deep breaths!
Yes you are rooting your Moto G. Your warranty will be void. Your phone coud be months old and you are afraid to do any stupid thing on it. Take deep breaths. Don't worry if you brick your phone, you can always unbrick it.

##Step 2 : Root your Moto G
Yes root it. So what are the things you need for that.

* A minimum of 70% battery charge on the phone (Not really necessary)
* A USB cable
* We assume that you have a PC

###Unlocking
1. Configure your computer for fastboot.
2. Enable USB debugging on the device.
3. Connect the device to the computer through USB.
4. From a terminal on a computer, type the following to boot the device into fastboot mode

	
		adb reboot bootloader
		
5.Once the device is in fastboot mode, verify your PC sees the device by typing {% highlight js %}
fastboot devices
{% endhighlight %}
6. If you don't see your device serial number, and instead see "<waiting for device>", fastboot is not configured properly on your machine. See [fastboot](http://forum.xda-developers.com/showthread.php?t=2277112) documentation for more info.
7. If you see "no permissions	fastboot", try running fastboot as root.
From the same terminal, type the following command to obtain your bootloader unlock code:
$ fastboot oem get_unlock_data
Visit the Motorola Bootloader Unlock website and follow the instructions there to obtain your unlock key.
If the device doesn't automatically reboot, reboot it from the menu. It should now be unlocked.
Since the device resets completely, you will need to re-enable USB debugging on the device to continue.