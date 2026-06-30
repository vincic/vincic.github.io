# Personal site Hemingway migration

Source blog branch: digital-viking-se hermes/current-jekyll-content-migration @ 23223ec
Theme: Hemingway from /tmp/hemingway_q2_v7_2026.zip
Target branch: hermes/astro-hemingway-personal

Counts:
- Posts copied: 67
- Images copied: 39

Cleanup:
- Removed Hemingway demo posts, podcast, pricing, login, signup, legal, system pages, demo authors.
- Replaced demo navigation with personal Sasha sections: About, Work, Writing, Contact.
- Preserved migrated post routes as /blog/<post id>/ rather than /blog/posts/<id>/.
- Blog cards render images only when a migrated post has a real image.
- Article pages suppress a layout hero when the same image appears inline in the migrated Markdown.

LinkedIn/profile note:
- Public LinkedIn snippets found Sasha listed with 25+ years of software engineering experience, Valentine Web Systems, and Digital Viking/business angel wording.
- About/Work copy uses conservative wording and includes a note to paste exact LinkedIn text for a sharper final profile.
