'use strict';

require('./config/process');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _console = require('console');

var _routes = require('./routes');

var routes = _interopRequireWildcard(_routes);

var _questions = require('./data/questions.json');

var _questions2 = _interopRequireDefault(_questions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEV = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;

const app = (0, _express2.default)();

app.engine('.hbs', _expressHandlebars2.default.create({
  extname: '.hbs',
  layoutsDir: 'client/views/layouts',
  partialsDir: ['client/views/partials'],
  defaultLayout: 'main',
  cache: !DEV,
  helpers: { production: () => DEV, inc: n => n + 1 }
}).engine);

app.set('views', 'client/views');
app.set('view engine', '.hbs');

app.use(_express2.default.static('static'));
app.use((0, _bodyParser.json)());
app.use((0, _morgan2.default)(DEV ? 'dev' : 'combined'));

app.use('/api', routes.api);

app.get('/survey', (_, res) => res.render('survey', { questions: _questions2.default }));
app.get('*', (_, res) => res.render('home'));

app.listen(PORT);
(0, _console.log)(`\u2714 started on port: ${PORT}`);
//# sourceMappingURL=index.js.map