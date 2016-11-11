BlackTimer
===

![](https://raw.githubusercontent.com/elzup/black_timer/master/ScreenShot/screenshot-black-timer.gif)
![](https://raw.githubusercontent.com/elzup/black_timer/master/ScreenShot/screenshot-black-timer-config.gif)

## 締め切りと戦っている人を支援する


## Requirement

* npm

## Usage
timer defined by rest parameter

| key(\*required)      | description                    | default | example             |
|----------|--------------------------------|---------|---------------------|
| \* name  | 締め切りと戦っている人の名前   | -       | Elzup               |
| end-time | 締め切り (YYYY-MM-DDTHH:mm:ii) | 1時間後 | 2015-10-07T23:59:59 |
| un       | うまるちゃんの数 (0 <= n <= 6) | 2       | 3                   |



```
start http://localhost:8888/?name=Elzup&end-time=2015-10-07T23:59:59
```

## Install

```
# project building
npm run build

# run server
npm start
```

## Contribution

## Licence

## Author

[elzup](https://github.com/elzup)
