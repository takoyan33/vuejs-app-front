import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export default (_, inject) => {
  const supabase = createClient(supabaseUrl, supabaseKey);
  inject("supabase", supabase);
};


