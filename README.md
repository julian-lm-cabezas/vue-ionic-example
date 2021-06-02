# vue-ionic-example
<p float="left">
    <img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/julian-lm-cabezas/vue-ionic-example">
    <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/julian-lm-cabezas/vue-ionic-example">
    <img src="https://badges.pufler.dev/visits/julian-lm-cabezas/vue-ionic-example">
    <img src="https://badges.pufler.dev/created/julian-lm-cabezas/vue-ionic-example">
</p>

## Frameworks

<a href="https://v3.vuejs.org/" title="Vue"><img src="https://v3.vuejs.org/logo.png" width="50" height="50"/></a>
<a href="https://ionicframework.com/" title="Ionic"><img src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/ionic.png" width="50" height="50"/></a>
<a href="https://capacitorjs.com/" title="Capacitor"><img src="https://seeklogo.com/images/C/capacitor-logo-DF3634DD70-seeklogo.com.png" width="50" height="50"/></a>

- **Vue 3**: Frontend framework for web development
- **Ionic v5**: UI framwork for native mobile look and feel
- **Capacitor v3**: Transpiler for APK conversion and mobile plugin access

## Requirements

- Node 12 and above
- Git
- Android Studio (Android development)
- XCode (IOS development)

## Project setup
```
npm install -g @ionic/cli@latest
npm install
```

### Add target platforms
```
npm install @capacitor/<platform>
npx cap init
npx cap add <platform>
```
*set android, electron and/or ios in platform, web is already included

### Compiles and hot-reloads for development
```
npm start
```

**Mobile devices**
```
ionic capacitor open <platform>
ionic capacitor run <platform> --livereload --external

```

### Compiles and minifies for production
```
ionic capacitor build --prod
```

### Compiles and builds APK for Android
```
ionic capacitor build android --prod
```

### Compiles and builds APK for IOS
```
ionic capacitor build ios --prod
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://ionicframework.com/docs).



## Contribuitors

<table>
    <tr><td ><h5>Developers</h5></td></tr>
    <tr>
        <td align="center">
            <a href="https://github.com/julian-lm-cabezas">
                <img src="https://avatars.githubusercontent.com/u/53000155?s=64&v=4?s=100" width="100px;" alt=""/>
                <br /><sub><b>Julián Cabezas</b></sub>
            </a>
        </td>
    </tr>
</table>