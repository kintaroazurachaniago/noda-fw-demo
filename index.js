const { Start, Route, Controller } = require('noda-fw')
const { home } = Controller

Route.get('/', home.index)
Route.get('/home', home.index)
Route.get('/about', home.about)
Route.get('/contact', home.contact)

Start(Route, 4120, _ => console.log('Server running on port 4120'))