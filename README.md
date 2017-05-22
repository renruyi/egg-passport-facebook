# egg-passport-facebook

facebook passport plugin for egg

## Install

```bash
$ npm i egg-passport-facebook --save
```

## Usage

```js
// config/plugin.js
exports.passportFacebook = {
  enable: true,
  package: 'egg-passport-facebook',
};
```

## Configuration

```js
// config/config.default.js
exports.passportFacebook = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
