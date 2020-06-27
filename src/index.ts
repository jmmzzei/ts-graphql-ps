import 'reflect-metadata'
import {startServer} from './app'
import {connect} from './config/typeorm'

(async() =>  {
  connect()
  const app = await startServer()
  app.set('port', 3000)
  app.listen(app.get('port'))
  console.log('server started on port: ', app.get('port'))
}
)()
