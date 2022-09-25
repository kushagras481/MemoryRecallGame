// db.js
import Dexie from 'dexie'

export const db = new Dexie('memoryRecallDB')
db.version(1).stores({
  game_data: '++id, img, name, type', // Primary key and indexed props
})
