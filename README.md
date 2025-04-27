# Connect with Appium Inspector

1. Open Android Studio and turn on Android device.

2. Open Appium Inspector with the config:

        {
            "appium:platformName": "Android",
            "appium:platformVersion": "16",
            "appium:deviceName": "Pixel 3",
            "appium:automationName": "UiAutomator2",
            "appium:app": "/D/automationTesting/mobileLearining/project/wdio-appium/app/android/ApiDemos-debug.apk"

        }

3. Connect with the current port from `wdio.conf.js` file

    `appium -p ` + `port number`

4. Click on `Start Session` button on the Appium Inspector

5. Start the testing, using command: `npx wdio`