import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cvgyyvcckyppgwhuviac.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2Z3l5dmNja3lwcGd3aHV2aWFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Njc1NzMsImV4cCI6MjA2NzA0MzU3M30.Sioyaf1LNFBfln8R9KM2RROv5l4gOz7swR2ZSbxuTgs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
