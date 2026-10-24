CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  event_type text NOT NULL CHECK (event_type IN ('wedding','corporate','private','other')),
  event_date date,
  guest_count integer CHECK (guest_count IS NULL OR guest_count BETWEEN 1 AND 5000),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.enquiries TO anon, authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an enquiry" ON public.enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);