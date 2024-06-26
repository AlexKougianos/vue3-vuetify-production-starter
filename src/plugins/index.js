/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '../router'
import { createPinia } from 'pinia'
import initAxios from './axios'

export function registerPlugins(app) {
  app.use(vuetify)
  app.use(router)
  app.use(createPinia())
  initAxios()
}
