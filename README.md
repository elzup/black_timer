BlackClock
===

締め切りと戦っている人を支援するタイマー

## Description

## Requirement

* npm

## Usage
timer defined by rest parameter

| key      | description                    | default | example             |
|----------|--------------------------------|---------|---------------------|
| \* name  | 締め切りと戦っている人の名前   | -       | Elzup               |
| end-time | 締め切り                       | 1時間後 | 2015-10-07 23:59:59 |
| un       | うまるちゃんの数 (0 <= n <= 6) | 2       | 3                   |

\* require

```
start http://localhost:8888/?name=Elzup&end-time=2015-10-07%2023:59:59
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

[elzzup](https://github.com/elzzup)
