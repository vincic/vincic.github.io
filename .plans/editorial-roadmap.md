# Editorial roadmap: sasha.vincic.org blog cleanup and future articles

## Purpose

This document separates editorial strategy from the implementation PRD for `sasha.vincic.org`.

The site repositioning release should make the homepage, About, Work, Contact, and Blog structure clearer. This roadmap decides what to do with existing articles and what Sasha should write next.


## Implementation Sequence

Do this in phases:

1. **Archive first**
   - Hide obvious legacy/draft-quality posts from default browsing using `archived: true`.
   - Keep direct URLs buildable.
   - Do not delete or consolidate yet.

2. **Prepare GitHub Pages deployment**
   - Make the Astro site ready to replace the current Jekyll implementation in `vincic/vincic.github.io`.
   - Preserve custom domain support with `public/CNAME`.
   - Add the GitHub Actions Pages deployment workflow described in `.plans/github-pages-deployment-plan.md`.

3. **Publish the repositioned site**
   - Deploy the current cleaned-up site first.
   - Verify homepage, Blog, RSS, direct archived URLs, and custom domain.

4. **Editorial consolidation after publishing**
   - Only after the new site is live, start consolidating overlapping articles into stronger essays.
   - Do not redirect/delete old articles until the replacement article exists and has been reviewed.


## Editorial Positioning

`sasha.vincic.org` is Sasha's personal/professional identity site.

Use it for:

- who Sasha is today,
- current professional focus,
- selected essays that support Sasha's judgement and credibility,
- agentic engineering and practical AI adoption when written for a professional audience,
- founder reflections,
- angel-investor thinking,
- personal essays that reveal taste, values, or judgement.

Do not let it become the full technical lab notebook. That role can later belong to `digitalviking.se`.

## Relationship to Digital Viking

For now, focus only on `sasha.vincic.org`.

Later split:

- `sasha.vincic.org`: identity, credibility, selected professional writing.
- `digitalviking.se`: deeper technical experiments, coding agents, self-hosted AI, rough field notes, stronger opinions, and what Sasha wants to build next.

Current rule for this site:

> If the article helps someone understand Sasha's judgement, credibility, or current professional direction, keep it visible on `sasha.vincic.org`. If it is mainly a technical experiment, consider moving or cross-posting to Digital Viking later.

## Blog Structure

Keep the label **Blog**.

Recommended `/blog/` structure:

1. Intro.
2. Curated sections:
   - Agentic engineering.
   - Software craft.
   - Founder notes.
   - Personal field notes.
3. Text-only archive grouped by year, showing only date and title for each public/non-archived post.

Homepage section:

- Title: `From the blog`.
- Manually selected `featured: true` posts.
- Small images inside compact cards.

Curated blog sections:

- Selection is manual by post ID, not tag-driven.
- Each section has a heading and short intro.
- Cards are text-only: date, title, and intro/description.
- Do not show tags in the curated cards; the current tag set is too messy to drive the editorial structure.
- Do not show images in the four curated sections unless we later create a stronger, deliberate visual system.

## First Featured Homepage Posts

Use these for first release:

1. `2025/07/chasing-energy-fuels-passion.md`
   - Public title: `Chase Energy, Not Hours`
   - Why: current voice, judgement, work/energy philosophy.
   - Image: use existing running/energy image if good.

2. `2025/05/boombox-bonding.md`
   - Card title can be shortened to `Boombox bonding`.
   - Why: human, practical AI/building story, shows curiosity and technology as a family/building tool.
   - Suggested card description: `Building a small thing with my son, ChatGPT, and the kind of curiosity that makes technology worth keeping around.`
   - Image: prefer real boombox/project image if available; otherwise use simple editorial workbench/boombox image.

3. `2025/01/progress-and-protocol.md`
   - Title can remain `Balancing Progress and Protocol` or be shortened to `Progress and protocol`.
   - Why: leadership judgement, process vs progress, relevant to teams.
   - Suggested card description: `When breaking process helps, when it hurts, and why judgement matters more than rule worship.`
   - Image: use existing crossroads/protocol-style image if good.

Replace one of these with a flagship agentic-engineering article once it exists.

## Existing Posts: Keep Visible / Feature Candidates

These posts support the new positioning or show useful current voice.

### Current voice and judgement

1. `2025/07/chasing-energy-fuels-passion.md`
   - Keep visible.
   - Feature on homepage for first release.

2. `2025/05/boombox-bonding.md`
   - Keep visible.
   - Feature on homepage for first release.
   - Update frontmatter/card description now; deeper rewrite later if needed.

3. `2025/01/progress-and-protocol.md`
   - Keep visible.
   - Feature on homepage for first release.
   - Possibly tighten title/description.

### AI / agentic engineering history

4. `2024/07/16/exploring-selfhosted-ai-augmented-coding.md`
   - Keep visible for now.
   - Update later to connect to current agentic engineering viewpoint.

5. `2024/07/beyond-copilot-ai-augmented-coding.md`
   - Keep visible or merge later with the self-hosted AI post.
   - Needs updating before homepage feature.

6. `2024/07/ai-assistant-team-amplifier.md`
   - Keep visible if rewritten.
   - Current topic fits, but likely too generic.

7. `2024/07/fine-tuning-llms.md`
   - Keep only if updated as an educational basics post.
   - Otherwise demote later.

### Software craft / technical leadership

8. `2024/07/beyond-the-hammer-developer-toolbox.md`
   - Keep/update.
   - Useful craft positioning.

9. `2024/07/mastering-git-blame.md`
   - Keep visible.
   - Strong code archaeology / senior engineering credibility.

10. `2024/06/mastering-git-commit-message.md`
    - Keep/update title.
    - Useful technical leadership/craft post.

11. `2024/09/piping-curl-to-bash-convenient-but-risky.md`
    - Keep visible.
    - Good security/skepticism signal.

12. Git mini-series:
    - `2024/07/git-rerere-streamline-conflict-resolution.md`
    - `2024/07/git-rebase-update-refs.md`
    - `2024/07/automate-git-maintenance.md`
    - Keep visible for now.
    - Later consolidate into a stronger guide: `Git hygiene for agentic engineering`.

13. `2024/07/sql-raw-queries.md`
    - Keep as archive/public for now.
    - Update later if tying to mature engineering judgement.

14. `2024/07/security-validation.md`
    - Too short.
    - Expand or merge into an AI/engineering guardrails post.

15. `2024/07/ready-vs-done.md`
    - Keep/update later.

16. `2024/07/power-of-why-in-problem-solving.md`
    - Keep/update later.
    - Could merge with `ready-vs-done` into a judgement-before-automation essay.

### Founder history

17. `2024/06/from-advisor-to-full-time.md`
    - Keep/update.
    - Important Eletive/founder story.

18. `2016/05/time-for-change.md`
    - Keep/update.
    - Useful founder/Servitant arc.

19. `2014/10/microconf-hackernytt.md`
    - Keep/update if framed as early founder learning.

20. `sswc-swedens-social-web-camp-allt-mojligt.md`
    - Maybe keep if it says something durable about community/startups.

### Books / self-leadership

21. `2024/06/the-pragmatic-programmer.md`
    - Keep as public archive.
    - Update only if linking to current engineering practice.

22. `2024/06/reflections-on-the-unicorn-project.md`
    - Keep as public archive.
    - Good if connected to engineering culture and flow.

23. Best Eletive/productivity/self-leadership posts from June-August 2024
    - Keep only the strongest visible.
    - Archive or demote overlap later.

## Existing Posts: Archive First

Use `archived: true` for posts that should be hidden from default browsing and RSS but remain directly reachable.

Initial archive candidates:

1. `2009/07/hur-ett-ord-som-elitism-kan-trigga-mediadrevet.md`
   - Dated event/media reaction.

2. `2011/02/att-mingla-med-e-handlare-och-föredette.md`
   - Dated event note.

3. `2011/04/kunskapen-är-större-utanför-sverige.md`
   - Dated event note unless rewritten as durable knowledge essay.

4. `2011/04/övervakaren-apple-är-avslöjad.md`
   - Dated security/news reaction.

5. `2013/07/sswc-ung-cancer.md`
   - Short event/logistics post.

6. `2013/10/sas-business-class.md`
   - Personal travel note.

7. `2014/03/blogg100.md`
   - Meta-blogging note.

8. `2014/04/drupal-meetup.md`
   - Dated meetup note.

9. `2016/09/skydive.md`
   - 29 words.

10. `2024/07/art-of-effective-programming.md`
    - 73 words and generic.

11. `2024/08/power-of-less.md`
    - 68 words; merge later or keep hidden.

12. `2024/08/recharging-vacation.md`
    - Generic seasonal note.

13. `2024/07/desk-escape.md`
    - Personal/travel note; not default professional signal.

14. `2024/07/5g-by-the-sea.md`
    - Personal/travel note.

15. `2024/07/unplugged-thoughts.md`
    - Personal note; can be hidden for now.

These may be deleted later after review, but the next step is archive-only. Do not delete or consolidate these before the GitHub Pages migration is live.

## Existing Posts: Later Update / Consolidation Ideas

These are intentionally **post-publication** tasks. First archive and deploy the cleaned-up site. Then consolidate overlapping posts into stronger new articles.

### AI posts

Consolidate or update:

- `Exploring selfhosted AI-Augmented coding`
- `Beyond Copilot: Chasing the Dream of AI-Augmented Coding`
- `The Ripple Effect: How one AI assistant amplifies an entire team`

Potential new combined direction:

`From Copilot to agentic engineering`

Angle:

- 2024 was about assistants.
- 2026 is about workflows, agents, review, tests, and team adoption.
- The hard part is not prompting. The hard part is changing engineering practice safely.

### Git posts

Consolidate:

- git blame,
- commit messages,
- rerere,
- rebase update-refs,
- maintenance.

Potential article:

`Git habits that make AI agents safer`

Angle:

- small commits,
- useful commit messages,
- blame/context,
- rerere,
- stacked branches,
- easy rollback.

### Process/judgement posts

Consolidate/update:

- `Ready vs Done`,
- `The power of Why`,
- `Progress and Protocol`,
- `Security Validation`.

Potential article:

`Judgement before automation`

Angle:

- AI makes it easier to do work fast.
- That makes choosing the right work more important.

## New Article Backlog

### Flagship / agentic engineering

1. **From prompting to agentic engineering**
   - The flagship essay behind the current positioning.
   - Define the ladder: prompt, assistant, workflow, agent, team practice.
   - Should be the first new article if possible.

2. **Prompting is not the skill**
   - Core argument: the real skill is turning AI into repeatable engineering workflows.
   - Good workshop-support article.

3. **The boring part of agentic engineering**
   - Git, tests, logs, context, permissions, review, rollback.
   - Strong Sasha voice: the boring part is where AI becomes useful.

4. **What an AI workshop should actually change on Monday morning**
   - Concrete outcomes from workshops.
   - Good sales-support article without becoming sales copy.

5. **How I use agents without letting them run the company**
   - Guardrails, judgement, review, autonomy levels.

6. **Agentic engineering for teams, not heroes**
   - Shared workflow, not one wizard with a magic prompt file.

7. **The code review is where AI becomes engineering**
   - Tie AI to review, tests, ownership, and safety.

8. **A practical maturity model for AI-assisted development**
   - Useful framework for CTOs and team leads.

### AI engineering field notes

9. **What self-hosted AI taught me about developer tools**
   - Update from 2024 self-hosted experiments.

10. **Multi-agent systems are mostly coordination problems**
    - Connect Eletive role, Hermes usage, and practical engineering.

11. **MCP is boring infrastructure, which is why it matters**
    - Useful if Sasha wants to write about agent-executable websites/WebMCP.

12. **AI security starts with workflow design**
    - Avoid abstract AI safety; write from engineering practice.

### Founder/angel-investor track

13. **What I look for as a founder learning angel investing**
    - Honest and useful.
    - Does not pretend Sasha is a fund.

14. **The founder signal I trust most: useful technical taste**
    - Bridges founder experience and investment thinking.

15. **Boring B2B software is underrated**
    - Strong match for Sasha's history: portals, CMSs, workflow systems, employee engagement, home IT services.

16. **The technical due diligence questions I ask first**
    - Useful for founders and investors.

17. **Why early products need less architecture and more judgement**
    - Draw from Innodev, Valentine, Servitant, Eletive.

18. **Lessons from being the first developer**
    - Eletive story.
    - Strong credibility piece.

### Personal credibility / story

19. **Twenty-five years of Valentine Web Systems**
    - Reflective founder essay, not a résumé.

20. **The projects that shaped my taste**
    - CADtorget, EEA/Plone, GameAnalytics, Öresundsbron, Servitant, Eletive.

21. **The startup I did not join**
    - GameAnalytics regret.
    - Human, memorable, investor-relevant.

22. **From Perl CMS to AI agents**
    - Long arc from early web systems to agentic software.

## Recommended First 5 New/Updated Articles

1. **From prompting to agentic engineering**
   - New.
   - Highest priority.
   - Should replace one homepage featured post when published.

2. **What an AI workshop should actually change on Monday morning**
   - New.
   - Supports `/work/`.

3. **Lessons from being the first developer**
   - New or based on Eletive experience.
   - Supports founder credibility.

4. **Git habits that make AI agents safer**
   - Consolidated from existing Git posts.
   - Bridges craft and agentic engineering.

5. **What I look for as a founder learning angel investing**
   - New.
   - Supports angel investing angle.

## Editorial Tone

Use Sasha's blog voice:

- clear,
- sharp,
- direct,
- dry when useful,
- practical,
- not corporate,
- not LinkedIn-bro,
- not generic AI hype,
- not over-polished.

Avoid phrases like:

- unlock,
- leverage,
- game-changer,
- in today's fast-paced world,
- seamless,
- robust unless technically specific,
- cutting-edge,
- transformation journey.

## Later Deletion Review

After first release and after checking whether archived posts have value, decide whether to:

1. delete them,
2. keep them direct-link only,
3. move them to a legacy archive,
4. move some technical posts to Digital Viking.

Deletion should be a separate deliberate task, not part of PRD 1.
