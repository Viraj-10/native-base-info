#!/usr/bin/node

const fs = require("fs");
const envinfo = require("envinfo");

let packages = [
  "react",
  "react-native",
  "native-base",
  "react-dom",
  "react-native-svg",
  "react-native-safe-area-context",
  "@react-native-community/cli",
  "react-native-web",
  "expo",
];

function getInfo() {
  try {
    envinfo
      .run({
        System: ["OS", "CPU", "Memory", "Shell"],
        Binaries: ["Node", "Yarn", "npm", "Watchman"],
        IDEs: ["Xcode", "Android Studio", "Visual Studio"],
        SDKs: ["iOS SDK", "Android SDK", "Windows SDK"],
        npmPackages: packages,
        npmGlobalPackages: ["*react-native*"],
      })
      .then((res) => {
        console.log(res);
      });
  } catch (error) {
    console.log(error);
  }
}

getInfo();
