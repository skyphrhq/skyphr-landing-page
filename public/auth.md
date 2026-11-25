# Skyphr auth.md

## Audience

This document is for AI agents and agent platforms that want to access
skyphr.com, the public marketing website of Skyphr (AI, SaaS and custom
software studio).

## Registration

Skyphr does not offer agent registration, accounts, API keys or OAuth. There is
no registration endpoint and no credentials to obtain. Every resource on
skyphr.com is public.

To start a project or partnership with Skyphr, a human should use the contact
form at https://skyphr.com/contact. Agents must not submit that form, or any
other form, on a user's behalf without the user's explicit consent.

## Supported access method

- **Anonymous HTTPS:** Use plain `GET` requests with no `Authorization` header.
  This covers every public page, `robots.txt`, `llms.txt`, `sitemap.xml` and the
  discovery documents under `/.well-known/`.
- **Markdown:** Request any page with `Accept: text/markdown`, or read it under
  `/agent` (for example `https://skyphr.com/agent/about-us`).
- **Capability manifest:** `https://skyphr.com/.well-known/ai-catalog.json`
  lists the agent-readable resources.
- **In-browser tools:** Pages register read-only WebMCP tools
  (`navigate_site`, `search_site`, `retrieve_page`) through
  `document.modelContext`.

## Credential use

No credentials are issued or accepted. Do not send tokens, cookies or
passwords to skyphr.com, and do not create accounts on a user's behalf. Respect
the rules and Content-Signal preferences in `robots.txt`
(`ai-train=no, search=yes, ai-input=yes`) and the privacy policy at
https://skyphr.com/privacy-policy.
