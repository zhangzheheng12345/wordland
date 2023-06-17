export const SITE_TITLE = '文字岛 | Wordland 🏝️'
export const SITE_DESCRIPTION = '在繁华的世界里 找寻文字的痕迹'

export const AUTHORS = {
  'Youzuo Zhang': {
    cnName: '张又左',
    badges: ['编辑', '撰写人'],
    email: 'zhangzheheng12345@163.com'
  },
  'Yanru Chen': {
    cnName: '陈晏如',
    badges: ['撰写人'],
    email: 'WAIT TO COME'
  }
}

// Get the project url & API key for Supabase from the system's env vars
export const DB_SUPABASE_URL = process.env.WORDLAND_DB_SUPABASE_URL
export const DB_SUPABASE_API_KEY = process.env.WORDLAND_DB_SUPABASE_API_KEY
