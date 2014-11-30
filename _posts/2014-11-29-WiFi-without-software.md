---
layout: post
title: WiFi Hotspot on Windows 7 Without any Software!
published: true
---
Many a times we have to share the internet connection that is available in our laptop to other devices say a phone, another laptop. One way to do that is by using a third party software like Connectify, Virtual Router Manager, Mhotspot etc. ,

The other way, the simpler way is to use your laptop itself as a **WiFi Hotspot**

Here it goes

##Step 1: 
Open the Command prompt as Administrator (Right click and select Run as administrator).

##Step 2:
Type the following command in the command prompt and hit 'Enter'


<code>netsh wlan set hostednetwork mode=allow ssid=Redgadgets  key=ReDGadGeT@321</code>


**SSID:** Name of your WiFi Hotspot.


**Password:** Password to connect to the newly created WiFi

##Step 3:

Enable the HotSpot

Type the following command and hit enter.
<code>netsh wlan start hostednetwork</code>

Now go to Network And Sharing center and You can see your newly created wifi hotspot connection.But, as you can see, it has no network access.We need to fix this by enabling sharing of internet connection for your working Internet connection.In my case, it is wifi connection, but it can be Ethernet or any other working internet connection.

##Step 4: 

In order to stop the Wifi hotspot, Just type the following command in the command prompt.
<code>netsh wlan stop hostednetwork</code>



##Step 5:

To enable sharing, Click on your default Internet connection and select Properties. Under the Sharing tab, tick the box saying – Allow other network users to connect through this computer’s Internet connection. Under the Home networking Connection, select the connection which is showing as your hotspot connection.

###Note:

For easy access, use **.bat** where these commands are loaded in it.

Lazy to do that?

[WiFi-Hotspot.zip](/files/WiFi-HotSpot.zip)
                                                         
-------------------------
