const SUPABASE_URL = "https://bokrdyglxoyqazkpvrlz.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_lRLqTDoy-tC34wsmrgOiIw_RnvYzDc9";

const sb = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

const VAPID_PUBLIC_KEY =
"BNetzWJll8tN2RUgi7LQExapXMfc0cu_SK0-2Hbu_PdquxEsFQVI-BPsuIVfAjW-NCr7zlSxqwF8UqC2hl8l3wo";