const SUPABASE_URL = "https://bokrdyglxoyqazkpvrlz.supabase.co";

const SUPABASE_ANON_KEY =
"sb_publishable_lRLqTDoy-tC34wsmrgOiIw_RnvYzDc9";

const sb = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

const VAPID_PUBLIC_KEY =
"BLPDIl-eIo6-ppl-kpKp0a3hNTUkL_l89NmMFVGluX7KhfQUAC9xcoxIVLt1txRFbIPRNFXKdZXIBxgWVNlgS6w";