# react-motion-float-button 🌈
#### 🧚 A simple React component floating button library which can be customized by developers 🧚
<img src="https://user-images.githubusercontent.com/22907830/112833400-a114ed80-90d1-11eb-9fce-5b0701782d69.gif" alt="drawing" width="300"/>
<hr>

### 🏃‍♂️ Getting Started

#### installation
```
npm install react-motion-float-button --save
```
or
```
yarn add react-motion-float-button
```
#### emotion-icons
you can easily use icons in button by installing emotion-icons

[npm emotion-icons](https://www.npmjs.com/package/emotion-icons)

```
npm install emotion-icons --save
```
or
```
yarn add emotion-icons
```

[👀 icon explorer](https://emotion-icons.dev/)

<br>

### 📃 Usage
You can customize opening direction, size, colors of buttons via props. Other motions and options will be added soon
```js
import {
  Direction,
  FloatMenuItemButton,
  FloatingGroup,
  Size,
} from "react-motion-float-button";

```
you can add emotion-icons and use various icons by importing only you need
```js
import { Twitter } from "@emotion-icons/simple-icons";
import { Facebook, Instagram, Share } from "@emotion-icons/remix-fill";
```
also can customize icons, colors and define functions
```js
  const handleButton = () => {
    console.log("you clicked first icon!");
  };

  return (
    <>
        <FloatingGroup size={Size.REGULAR} direction={Direction.TOP} spacing={100}>
          <FloatMenuItemButton
            icon={<Twitter size="50%" />}
            buttonColor="#00ACEE"
            onClick={handleButton}
          />
          <FloatMenuItemButton
            icon={<Instagram size="60%" />}
            buttonColor="#4f5bd5"
          />
          <FloatMenuItemButton
            icon={<Facebook size="20%" />}
            buttonColor="#3B5998"
          />
          <FloatMenuItemButton
            icon={<Share size="50%" />}
            buttonColor="#16dbc2"
          />
        </FloatingGroup>
    </>
  );

```

<br>

### 👀 Props

#### FloatingGroup
|Prop|Type|Description|
|----|----|-----------|
|size|String|Button size;  REGULAR is 56px, SMALL is 40px|
|Direction|String|spread direction; TOP, BOTTOM, LEFT, RIGHT|
|Spacing|Number|margin of button container; default is 20|

#### FloatMenuItemButton
|Prop|Type|Description|
|----|----|-----------|
|icon|Component|icon component|
|buttonColor|String|each icon's color|

<br>

### 😎 contributors
4 FE Developers 🧞‍♂️

 [jinsun Park(jinsunee)](https://github.com/jinsunee)
 
 [JungHun Choi(chjjh0)](https://github.com/chjjh0)
 
 [Wonjong Oh(dev-owen)](https://github.com/dev-owen)
 
 [SeoYoung Um(tjdud0123)](https://github.com/tjdud0123)
