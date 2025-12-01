import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://byzkpxbrbxqkjrlgjzyz.supabase.co';

console.log("SERVICE ROLE:", process.env.SUPABASE_SERVICE_ROLE);

export const supabase = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE
);
