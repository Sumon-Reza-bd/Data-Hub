
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://jonkzprbhmysoeugfczy.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impvbmt6cHJiaG15c29ldWdmY3p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI0MzYwNDgsImV4cCI6MjA4ODAxMjA0OH0.H4ZCWWoojm95IpAyzJKA9Mf4ag8auCMbS5JLlEf_B4s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
