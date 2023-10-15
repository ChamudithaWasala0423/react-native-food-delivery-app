import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import resturant from './schemas/resturant';
import category from './schemas/category'
import dish from './schemas/dish'
import featured from './schemas/featured'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'FoodDeliveryApp',

  projectId: 'uwl20q9a',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: [...schemaTypes, resturant, category, dish,featured], // add the resturant schema to the schemaTypes array
  },
})

