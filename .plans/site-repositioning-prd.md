# PRD 1: sasha.vincic.org repositioning

## Problem Statement

When someone googles Sasha Vinčić, the homepage should quickly explain who Sasha is today, what he is good at, and where his current professional energy is going.

The current site is broadly correct, but too generic. It says AI engineering, software leadership, workshops, and writing, but it does not yet make the current identity sharp enough:

- Sasha is a senior software engineer and founder.
- Sasha is now focused on agentic engineering and practical AI adoption.
- Sasha runs AI workshops, with deepest expertise for software teams, but also practical workshops for marketing, HR/PX, sales, and leadership teams.
- Sasha is building an angel-investing angle.
- The site should be up to date and credible first, with sales as a secondary outcome.

The blog listing also needs cleanup. The current large image layout is too spread out, and it is not always visually clear which title, intro, and image belong together. For the main blog index, clarity matters more than magazine-style imagery.

## Solution

Reposition `sasha.vincic.org` as Sasha's personal/professional identity site:

- identity-first homepage,
- sharper current-focus sections,
- updated About page with narrative career arc,
- focused Work page for AI workshops and agentic engineering enablement,
- Contact page that recommends LinkedIn DM,
- cleaner Blog page with curated sections first and text-only chronological listing below,
- homepage blog cards with small, consistent images for manually featured posts,
- archived legacy posts hidden from default browsing and RSS while remaining directly reachable.

This is not a sales funnel. It is the site people land on when they search for Sasha. It should make the right sales conversations easier, but it should first establish identity, credibility, taste, and current direction.

## Goals

1. A visitor should understand in under 10 seconds that Sasha is a senior software engineer/founder focused on agentic engineering, AI workshops, and technical judgement.
2. The homepage should feel current without sounding like generic AI consulting copy.
3. The site should make it easy to contact Sasha, with LinkedIn DM as the recommended channel.
4. The Work page should clearly explain Sasha's practical AI workshop offer.
5. The About page should tell Sasha's career arc without duplicating LinkedIn.
6. The Blog page should lead with curated relevant content and then provide a clean chronological list.
7. Archived legacy posts should stop appearing in default blog browsing, homepage sections, tags, and RSS.
8. Existing old article URLs should remain reachable for now.

## Non-goals

- Do not build `digitalviking.se` in this project.
- Do not migrate technical posts to Digital Viking yet.
- Do not delete old posts in this release.
- Do not write the full new article series in this release.
- Do not add pricing.
- Do not add a newsletter.
- Do not turn the homepage into a hard sales landing page.
- Do not turn the About page into a pasted LinkedIn résumé.

## Target positioning

### 10-second takeaway

> Sasha Vinčić is a senior software engineer, founder, and practical AI engineer who now focuses on agentic engineering, practical AI workshops, and technical judgement for teams and startups.

### Public phrasing for investing angle

Use:

- `angel investing`
- `learning angel investing`

Avoid public homepage phrasing like:

- `wannabe angel investor`
- `business angel` as a primary headline unless backed by named investments

### Digital Viking

Use **Digital Viking** as flavor only on this site.

- Primary brand: Sasha Vinčić.
- Digital Viking: experiments/writing/alter ego reference.
- Future technical alter-ego site: `digitalviking.se`.

## Information Architecture

Main navigation should be:

1. About
2. Work
3. Blog
4. Contact

Rationale:

- The site is identity-first because visitors often arrive by googling Sasha.
- Work is secondary sales.
- Blog shows thinking.
- Contact is the action.

## Homepage Requirements

### Hero

The homepage hero should identify Sasha first, not a service.

Recommended direction:

**Eyebrow:**

`Agentic engineering · AI workshops · technical judgement`

**Headline:**

`Sasha Vinčić`

or a combined identity headline such as:

`Software engineer, founder and practical AI engineer.`

**Intro copy:**

`I am a Malmö-based software engineer, founder, and practical AI engineer focused on agentic engineering, practical AI adoption, and the judgement needed to turn experiments into working systems.`

The exact copy can be sharpened during implementation, but it must stay identity-first.

### Hero CTAs

Primary CTA:

- `Contact me` → `/contact/`

Secondary CTA:

- `Read the blog` → `/blog/`

Avoid primary hero CTAs like:

- `Book an AI workshop`
- `Transform your team`
- `Start your AI journey`

Those are too funnel-like for this site.

### What I do now

Add a section that explains current work in plain language:

- Main work as AI Engineer at Eletive.
- Part-time AI workshops and consulting through Valentine Web Systems.
- Technical experiments and writing under the Digital Viking name.
- Operator-minded angel investing / learning angel investing.

Include one sentence that broadens workshop relevance beyond software teams:

> My deepest work is with software teams, but I also help marketing, HR/PX, sales, and leadership teams turn AI from novelty into useful workflows.

### Short About / proof block

Add a short homepage block:

**Title:**

`About Sasha`

**Copy direction:**

`I have spent more than 25 years building software, leading technical work, starting companies, and helping teams make technology useful. Today my work is centered on agentic engineering, practical AI adoption, and the judgement needed to turn experiments into systems.`

Add link:

- `More about me →` → `/about/`

### Credibility strip

Homepage should show compact proof, not a résumé.

Use terse proof points such as:

- 25+ years building software through Valentine Web Systems.
- Senior Software Engineer / AI Engineer at Eletive.
- Early developer and tech lead during Eletive's growth.
- CTO and co-founder of Servitant.
- Built systems for Netnod, EEA, Öresundsbron, CADtorget, GameAnalytics, and others.

Do not paste long LinkedIn descriptions.

### From the blog

Homepage blog section title:

`From the blog`

Intro:

`Selected notes on agentic engineering, software work, founders, and the occasional personal detour.`

Behavior:

- Show manually selected featured posts only.
- Use small image cards, not giant spread-out cards.
- Image, title, date, and intro must be inside the same visual card.
- Link to `/blog/` with `Read the blog →`.

Initial featured posts:

1. `2025/07/chasing-energy-fuels-passion.md`
   - Title: `Chase Energy, Not Hours`
2. `2025/05/boombox-bonding.md`
   - Card title may be shortened to `Boombox bonding`
3. `2025/01/progress-and-protocol.md`
   - Title may stay `Balancing Progress and Protocol` or be shortened to `Progress and protocol`

These are acceptable first-release features. Replace one with a flagship agentic-engineering article once it exists.

### Homepage images

Homepage featured cards should have small, consistent thumbnails.

Image rules:

1. Use existing/personal images where they fit.
2. Replace generic or inconsistent images.
3. If generating new images, use a consistent editorial style:
   - muted,
   - slightly rough,
   - human,
   - not glossy,
   - no fake text,
   - no humanoid robots,
   - no glowing brains,
   - no corporate stock-photo AI clichés.

For first release:

- `Chase Energy, Not Hours`: use existing running/energy image if good.
- `Boombox bonding`: prefer real boombox/project image if available; otherwise generate/select a simple workbench/boombox editorial image.
- `Balancing Progress and Protocol`: use existing crossroads/protocol-style image if good; otherwise generate/select a simple editorial metaphor.

## About Page Requirements

`/about/` should be career narrative first, selected experience second.

Structure:

1. Current identity.
2. Career arc from early web/software systems to agentic engineering.
3. What Sasha is good at.
4. Selected experience.
5. Current focus.
6. Link to LinkedIn for full CV.

The page should include the substance of the LinkedIn log, but not the LinkedIn style.

Use compact selected experience, including:

- Valentine Web Systems.
- Eletive.
- Servitant.
- Cenito / Öresundsbron.
- Netnod.
- GameAnalytics.
- EEA / Plone / Zope.
- CADtorget.
- Innodev / Telia Mobilsvar.

Include an explicit LinkedIn link for full formal résumé.

Do not make the homepage carry this full detail.

## Work Page Requirements

`/work/` should be narrowed to AI workshops and agentic engineering enablement.

### Page positioning

Headline direction:

`Practical AI workshops for software teams`

Subhead direction:

`I help teams move from prompting experiments to agentic engineering workflows they can actually use.`

### Boundary statement

Include this idea high on the page:

`These workshops are not generic ChatGPT training. My deepest work is with software teams and technical leaders: code, repositories, review, testing, documentation, workflow design, and guardrails.`

Then include the broader team signal:

`I also run practical AI workshops for marketing, HR/PX, sales, and leadership teams when the goal is to improve real work. The examples change. The principle does not: less AI theatre, more useful workflows.`

### Workshop audiences

Sections:

1. **For software teams**
   - agentic coding workflows,
   - review,
   - tests,
   - documentation,
   - delivery,
   - guardrails.

2. **For business teams**
   - marketing,
   - HR/PX,
   - sales,
   - leadership,
   - practical AI workflows.

3. **Common principle**
   - workflow change,
   - judgement,
   - safe adoption,
   - Monday-morning changes.

### Workshop formats

Advertise three lightweight formats:

1. **Talk / keynote: 45–90 minutes**
   - For leadership groups, engineering orgs, internal inspiration days.
   - Topic: from prompting to agentic engineering.
   - Outcome: shared vocabulary and realistic expectations.

2. **Practical team workshop: half day**
   - For engineering/product teams or business teams with concrete workflow goals.
   - Hands-on with AI workflows, code/review/tests/docs where relevant, and guardrails.
   - Outcome: concrete workflow changes.

3. **Enablement sprint: 1–2 weeks**
   - For teams ready to change how they work.
   - Design and test real workflows in their repo/tooling/team context.
   - Outcome: working practices, not slides.

Do not add exact pricing in this release.

### CTA

Use LinkedIn DM via `/contact/`:

- `Contact me`
- `Talk to me about a workshop`
- `Invite me for a workshop`

## Contact Page Requirements

`/contact/` should recommend LinkedIn DM as the best channel for now.

Copy direction:

`Best way to reach me right now is LinkedIn DM. I am happy to talk about agentic engineering, practical AI workshops, technical leadership, useful software, and early-stage companies.`

Include:

- LinkedIn profile link.
- Optional email if desired.
- No contact form unless spam handling is already solved.

Hero CTA on homepage should go to `/contact/`, not directly off-site.

## Blog Page Requirements

Keep the navigation/page label as **Blog**, not Writing.

### Blog page structure

1. Intro:

   `Notes on agentic engineering, software work, founders, and the occasional personal detour.`

2. Curated sections first:

   - Agentic engineering
   - Software craft
   - Founder notes
   - Personal field notes

3. Chronological list below:

   - `All posts`
   - public/non-archived posts only
   - compact text-only list

### Curated sections

Use hardcoded curated post IDs for the first release.

Reason:

- existing tags are inconsistent,
- manual curation gives better signal,
- taxonomy cleanup can happen later.

### Blog list visual design

Main `/blog/` list should be text-only.

Rules:

- No giant first post.
- No thumbnails in the chronological list.
- No masonry/magazine wall.
- Each post row/card should include:
  - date,
  - tags,
  - title,
  - description.
- Compact bordered rows are preferred.

Suggested layout:

```text
JUL 05, 2025 · PRODUCTIVITY · MINDSET
Chase Energy, Not Hours
Long hours are not always the problem. The wrong work is. Energy is often a better signal than time.
```

Images remain allowed on article pages and homepage featured cards.

## Content Visibility Requirements

Add support for frontmatter:

```yaml
archived: true
```

Default behavior if missing:

- post is public/visible.

`archived: true` means:

- excluded from homepage featured/latest content,
- excluded from `/blog/` default listing,
- excluded from curated blog sections,
- excluded from `/blog/tags/`,
- excluded from `/blog/tags/[tag]`,
- excluded from RSS,
- still directly reachable by article URL for now.

Do not delete archived posts in this release.

## Initial Archived Posts

Mark obvious legacy/noisy posts as `archived: true` in the first release.

Initial candidates:

- `2009/07/hur-ett-ord-som-elitism-kan-trigga-mediadrevet.md`
- `2011/02/att-mingla-med-e-handlare-och-föredette.md`
- `2011/04/kunskapen-är-större-utanför-sverige.md`
- `2011/04/övervakaren-apple-är-avslöjad.md`
- `2013/07/sswc-ung-cancer.md`
- `2013/10/sas-business-class.md`
- `2014/03/blogg100.md`
- `2014/04/drupal-meetup.md`
- `2016/09/skydive.md`
- `2024/07/art-of-effective-programming.md`
- `2024/08/power-of-less.md`
- `2024/08/recharging-vacation.md`
- `2024/07/desk-escape.md`
- `2024/07/5g-by-the-sea.md`
- `2024/07/unplugged-thoughts.md`

Possibly keep/update rather than archive:

- `2014/10/microconf-hackernytt.md`
- `2016/05/time-for-change.md`
- `sswc-swedens-social-web-camp-allt-mojligt.md`

Final archive decisions can be adjusted during implementation.

## User Stories

1. As a person googling Sasha, I want to quickly confirm who he is today, so that I know I found the right person.
2. As a CTO, I want to understand Sasha's current AI/workshop focus, so that I can decide whether to contact him.
3. As an engineering manager, I want to see that Sasha works with real engineering workflows, so that I do not mistake the offer for generic ChatGPT training.
4. As a marketing, HR/PX, sales, or leadership stakeholder, I want to see that Sasha can run practical AI workshops for business teams too, so that I know the offer is not only for developers.
5. As a founder, I want to understand Sasha's founder background, so that I know whether his judgement is relevant.
6. As an investor/startup contact, I want to see Sasha's angel-investing angle, so that I understand what kinds of companies interest him.
7. As a reader, I want the blog index to be easy to scan, so that I can find relevant posts quickly.
8. As a reader, I want old legacy posts not to dominate the default blog experience, so that the site feels current.
9. As Sasha, I want old posts to remain directly reachable for now, so that I can delete them later deliberately.
10. As Sasha, I want homepage blog cards to be manually featured, so that the homepage does not drift based on newest posts.
11. As Sasha, I want LinkedIn DM to be the recommended contact channel, so that inbound messages arrive where I currently want them.

## Implementation Decisions

1. Keep `sasha.vincic.org` identity-first, sales-second.
2. Keep main nav as `About · Work · Blog · Contact`.
3. Use Digital Viking as flavor only.
4. Link to LinkedIn from About for full CV.
5. Narrow `/work/` to practical AI workshops and agentic engineering enablement.
6. Mention business-team workshops while preserving software-team specialization.
7. Use `/contact/` as the hero CTA target.
8. Recommend LinkedIn DM on `/contact/`.
9. Use `featured: true` for homepage blog cards.
10. Use small images for homepage featured blog cards.
11. Use text-only compact rows for the main `/blog/` chronological list.
12. Use hardcoded curated post IDs for first-release blog sections.
13. Add `archived: true` frontmatter support.
14. Exclude archived posts from homepage, blog list, blog curated sections, tag indexes, tag detail pages, and RSS.
15. Keep archived article URLs generated/reachable for now.

## Testing Decisions

1. Run the Astro production build.
2. Verify `/` renders and contains the new identity-first positioning.
3. Verify `/about/` renders and links to LinkedIn.
4. Verify `/work/` renders and includes software-team and business-team workshop language.
5. Verify `/contact/` renders and recommends LinkedIn DM.
6. Verify `/blog/` renders curated sections and a text-only chronological list.
7. Verify homepage featured cards use small images and only featured posts.
8. Verify archived posts are excluded from `/blog/`.
9. Verify archived posts are excluded from `/blog/tags/`.
10. Verify archived posts are excluded from `/blog/tags/[tag]`.
11. Verify archived posts are excluded from `/rss.xml`.
12. Verify an archived post remains reachable by direct URL.
13. Verify posts without images do not break the blog listing.
14. Verify mobile layout for homepage featured cards and blog list.

## First Release Scope

Include:

1. Homepage repositioning.
2. About page rewrite.
3. Work page rewrite.
4. Contact page update.
5. Blog listing redesign.
6. Homepage featured posts with small thumbnails.
7. `featured: true` support for homepage cards.
8. `archived: true` support for visibility filtering.
9. Initial archiving of obvious legacy posts.
10. RSS/tag exclusion for archived posts.

Exclude:

1. New article series.
2. Hard deletion of old posts.
3. Digital Viking site.
4. Pricing.
5. Newsletter.
6. Contact form.
7. Full taxonomy cleanup.

## Open Questions For Implementation

1. What exact LinkedIn profile URL should be used?
2. Which existing image is best for each of the first three featured posts?
3. Should `featured: true` be limited to three posts or allow more with homepage slicing to three?
4. Should the blog curated sections appear even if a section has no public posts after archiving?
5. Should an `/archive/` page be added later, or should archived posts stay direct-link only until deletion?
