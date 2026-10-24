<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- The site is a single scrolling page (src/routes/index.tsx) composed from section components in src/components/site/; the user chose one long page over separate routes.
- Enquiries are inserted from the browser into the `enquiries` table (insert-only RLS, no public read); validation lives in src/lib/enquiry.ts and is shared by tests.
