const SUPABASE_URL = "https://bokrdyglxoyqazkpvrlz.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_lRLqTDoy-tC34wsmrgOiIw_RnvYzDc9";

const sb = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

const VAPID_PUBLIC_KEY =
"BNXpcTusmd5gU2TpgjnzrFLwZOrNG0-gkn08cKQePwM2xtq8mazfLn-AiqLO7b1maFYV65pyrcuGOAyXHb0D7Iw";