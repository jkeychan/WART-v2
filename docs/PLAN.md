# wART Radio Website Modernization Plan

## Design Principle: Simplicity Over Cleverness

You're the technical lead; the rest of the team is not. The goal is a site that is:

1. **Supportable** – When you step back, someone else can reasonably take over
2. **Easy to update** – No Git, no config files, no "developer workflow" for daily edits
3. **Not technically complex** – Minimal moving parts, nothing that requires deep expertise to fix

## Current State Analysis

### Hosting and Platform

**Platform: Wix**  
The site is hosted on [Wix](https://www.wix.com/), as evidenced by:

- All images served from `static.wixstatic.com` (Wix CDN)
- Uploaded files (e.g. program schedule PDF) from `wartfm.org/_files/ugd/`
- Wix's multi-cloud hosting (GCP, AWS, Fastly CDN)

**Streaming:** [VosCast](http://station.voscast.com/5530050e0a38b/) for the live stream.

### Dynamic vs. Static Content

| Content                | Type                     | Update Frequency                           |
| ---------------------- | ------------------------ | ------------------------------------------ |
| Home page              | Static                   | Rare (post-flood photos, location updates) |
| Program Schedule       | Static PDF               | Regular (replace file, update link)        |
| Contact form           | Dynamic                  | Form submission only                       |
| News                   | Static (currently empty) | Would be occasional posts                  |
| Archives               | Static links             | Occasional (volunteer sites)               |
| Who We Are / Volunteer | Static                   | Rare                                       |

Overall: almost all content is static. The only interactive piece is the contact form; everything else is text, images, links, and PDFs.

### Current Pain Points

1. **Outdated info** – Home may still describe the pre-flood caboose location; flood recovery narrative should be clear.
2. **Heavy Wix footprint** – Generic templates, extra JS, harder to control performance and security.
3. **Fragmented UX** – Program schedule as a PDF instead of an on-page schedule.
4. **No real news/blog** – News page is empty; no structured updates for flood recovery, events, etc.
5. **Limited accessibility** – Wix templates often don't prioritize semantic HTML or strong a11y.
6. **App links** – Android/iOS app links should be clearly surfaced.

## Recommended Approach: Two Simple Paths

Pick one based on who will do most updates.

### Path A: Static Site + You as Editor (Simplest)

**Best when:** Updates are infrequent (a few times a month) and you're okay being the point person.

| Layer           | Choice                                   | Why                                                        |
| --------------- | ---------------------------------------- | ---------------------------------------------------------- |
| Site            | **Plain HTML/CSS** or **Astro** (static) | Nothing runtime, nothing to break                          |
| Hosting         | **Netlify** or **Vercel**                | Connect Git repo, auto-deploy on push. Free.               |
| Content         | **Simple text/HTML files** or **JSON**   | You edit when volunteers send changes (email, Slack, etc.) |
| Forms           | **Formspree** or **Netlify Forms**       | Add a script tag. No backend.                              |
| Stream / Donate | VosCast embed, PayPal button             | Same as today                                              |

**Update workflow:** Volunteer says "update the schedule to X" → you edit a file → push to Git → site redeploys automatically. No CMS, no logins, no config for volunteers.

**Supportability:** If you hand this off, the next person needs basic Git + "edit this file, push." Document that in a README. Small surface area.

### Path B: WordPress.com (If Volunteers Must Self-Serve)

**Best when:** You want volunteers to update content themselves without involving you.

| Layer           | Choice                                 | Why                                                                |
| --------------- | -------------------------------------- | ------------------------------------------------------------------ |
| Platform        | **WordPress.com** (managed)            | Log in, click Edit, change text, Publish. Everyone understands it. |
| Hosting         | Included                               | No server, no deploy, no Git                                       |
| Updates         | WordPress handles security and updates | You don't maintain a stack                                         |
| Forms           | Built-in or plugin                     | Native support                                                     |
| Stream / Donate | Embed blocks                           | Works fine                                                         |

**Update workflow:** Give volunteers Editor accounts. They log in, edit pages, hit Publish. Zero technical steps.

**Supportability:** Very high. No custom code. If something breaks, WordPress.com support. Any web-savvy person can eventually take over.

### What to Avoid

- **Decap/Netlify CMS** – Requires Git, OAuth, and config. When it breaks, only a dev can fix it.
- **Headless CMS (Strapi, Contentful, etc.)** – API keys, more services, more failure modes.
- **Custom backends or databases** – Unnecessary and hard to hand off.
- **Complex JS frameworks** – Next.js, React, etc. are overkill here; add maintenance burden with no benefit for a small site.

### Choosing Path A vs Path B

| If...                                                          | Then                                            |
| -------------------------------------------------------------- | ----------------------------------------------- |
| Updates are infrequent, you're fine being the editor           | **Path A** – Less to explain, smaller stack     |
| Multiple volunteers need to post news or change the schedule   | **Path B** – WordPress gives them Editor access |
| You want maximum control over design and zero platform lock-in | **Path A**                                      |
| You want the next maintainer to need zero technical knowledge  | **Path B**                                      |

## Design Direction: Clean, Accessible, Community-Focused

**Tone:** Local, resilient, volunteer-driven; reflects post-flood recovery.

**Principles:**

- Clear hierarchy – Listen Live, schedule, and donate always accessible
- Generous whitespace, readable typography
- Strong contrast, semantic HTML, keyboard-nav support (WCAG 2.1 AA)
- Mobile-first, fast load times
- Storytelling – flood impact, temporary home, recovery
- Consistent color palette and simple, local imagery

## Content to Prioritize

- Updated narrative: flood of 9/27/2024, temporary location (CHC/Reclaim Madison)
- Clear Listen Live placement
- Donate CTA and challenge grant info
- App download links (Android, iOS)
- Program schedule in a readable, updatable format
- Flood and recovery photos with captions
- Links to Visit Madison County, Town of Marshall, Madison County Library
- Contact details: 828-649-1301, 152 North Main St, Marshall, NC 28753, PO Box 32

## Estimated Scope

- **Path A (Static + you edit):** ~1 week for a polished, production-ready site
- **Path B (WordPress.com):** ~2–3 days to build and migrate content; ongoing updates are zero-touch for you

No CMS setup, no DevOps. The "complex" part is front-loaded in the initial build; day-to-day maintenance is minimal.
