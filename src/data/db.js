// db.js
import Dexie from 'dexie'

export const db = new Dexie('memoryRecallDB')
db.version(2).stores({
  users: '++id, username',
  game_data: '++id, img, name, type', // Primary key and indexed props
  user_stats: '++id, username_id, question_id, result, datetime',
})
