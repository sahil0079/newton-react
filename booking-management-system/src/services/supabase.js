
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ukcxolgldbcrigibevjw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrY3hvbGdsZGJjcmlnaWJldmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4NzQ1MjksImV4cCI6MjAxMzQ1MDUyOX0.PNg8en2All2P5o0bLxLr5SXPCd2H7J1IxyU2m1ECOqI';
//This key is safe to use in browser if we have enable Row Level Security for the tables and configured policies;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;