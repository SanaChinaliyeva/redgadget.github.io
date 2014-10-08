---
layout: post
title: "Make your Moto G super awesome!"
published: true
---

Installing a custom ROM on your Moto G could be a tedious process. But there is an easier solution for this! You can have all those features of a custom ROM in your stock ROM without any hassle ( a little hassle).

##Steps in brief
> Our main goal is to install Xposed Framework on your device. [What is Xposed Framework?](http://www.xda-developers.com/android/android-basics-101-understanding-xposed-framework-xda-developer-tv/)

* Backup all your data (may be on your PC) because unlocking the bootloader on a Motorola device will automatically wipe all device data
* Root your phone (Unlocking the device)
* Install Recovery
* Install Xposed Framework
* Install Gravity box


That's all!


#Rooting

##Step 1 : Take deep breaths!
Yes you are rooting your Moto G. Your warranty will be void. Your phone could just be months old and you are afraid to do any stupid thing on it. Take deep breaths. Don't worry if you brick your phone, you can always unbrick it.
##Step 2: Backup all your data
Once you root your device, you'll lose all the data stored your phone. So backup any sensitive data or media on a PC. 

##Step 3 : Root your Moto G
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
		
5. Once the device is in fastboot mode, verify your PC sees the device by typing 
		fastboot devices

	*If you don't see your device serial number, and instead see "<waiting for device>", fastboot is not configured properly on your machine. See [fastboot](http://forum.xda-developers.com/showthread.php?t=2277112) documentation for more info.
	*If you see "no permissions	fastboot", try running fastboot as root.
6. From the same terminal, type the following command to obtain your bootloader unlock code:
		
        fastboot oem get_unlock_data
        
7. Visit the [Motorola Bootloader Unlock](https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a/action/auth) website and follow the instructions there to obtain your unlock key.
8. If the device doesn't automatically reboot, reboot it from the menu. It should now be unlocked.
9. Since the device resets completely, you will need to re-enable USB debugging on the device to continue.

Ok it's not done yet, that's just rooting your device. You have to install a recovery.

### Placing the [XposedFramework.zip](http://dl.xposed.info/modules/de.robv.android.xposed.installer_v33_36570c.apk) in the phone.
Download and move the [XposedFramework.zip](http://dl.xposed.info/modules/de.robv.android.xposed.installer_v33_36570c.apk) to your phone.

##Step 4: Recovery
### Installing Recovery on Moto G

1. Download recovery from [Unstable Apps Recovery Downloader](http://builder.unstableapps.com/#/latest/clockworkmodrecovery/falcon) to obtain the latest version of ClockworkMod recovery for your device.
2. Connect the Moto G to the computer via USB.
3. Make sure the fastboot binary is in your PATH or that you place the recovery image in the same directory as fastboot.


4. Open a terminal on your PC and reboot the device into fastboot mode by typing
		
        
        adb reboot bootloader
        

	or by using the hardware key combination for your device while it is powered off.



5. Once the device is in fastboot mode, verify your PC sees the device by typing
		
        
        
        fastboot devices
        
            
         
         
         
         
     // If you don't see your device serial number, and instead see "waiting for device", fastboot is not configured properly on your machine. See fastboot documentation for more info.
     //If you see "no permissions fastboot", make sure your [UDEV](http://developer.android.com/tools/device.html) rules are setup correctly.





6. Flash recovery onto your device by entering the following command:
		
        fastboot flash recovery your_recovery_image.img



	where the latter part is the filename of the recovery image.

7. Once the flash completes successfully, reboot the device into recovery to verify the installation. Boot to recovery instructions: Hold <b>Volume Down</b> & <b>Power</b> simultaneously. On the next screen use <b>Volume Down</b> to scroll to recovery and then use <b>Volume Up</b> to select.


We are almost there...

##Step 5: Xposed Framework

Now that you are in recovery mode, remember that you have moved [XposedFramework.zip](http://dl.xposed.info/modules/de.robv.android.xposed.installer_v33_36570c.apk) into your phone. It's time to install that.

![Moto G recovery mode](https://lh3.googleusercontent.com/-woLIu-D6554/VDU6Fp6IQHI/AAAAAAAAAAk/jvGvMIQN5bY/w620-h323-no/Recovery-Mode.jpg)
Once you see the above screenshot, navigate to 'install zip from sdcard'.

Now it opens up a list of all the folders and files on your phone. Navigate to XposedFramework.zip and click on <b>Power button</b>
This will install XposedFramework.zip on your device. Now reboot your device.
It will look like the below screenshot.
![Xposed Framework](https://lh4.googleusercontent.com/N4S2sV8JfrrdKLDgx1fvE-WvAbCMPXWUGR2H5uYnYQ=w928-h550-no)



