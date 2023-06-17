import { createClient } from '@supabase/supabase-js'
import { DB_SUPABASE_URL, DB_SUPABASE_API_KEY } from '../config.ts'

export const supabase = createClient(DB_SUPABASE_URL, DB_SUPABASE_API_KEY)
