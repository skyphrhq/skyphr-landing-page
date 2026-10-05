# Skyphr auth.md

## Audience

This document is for AI agents and agent platforms that need to discover how
to access Skyphr's public website and services.

## Authentication

Public pages and discovery documents require no credentials. Protected agent
access uses the OAuth 2.0 authorization-code flow described by the public
metadata at:

- `https://skyphr.com/.well-known/oauth-protected-resource`
- `https://skyphr.com/.well-known/oauth-authorization-server`

## agent_auth

```yaml
agent_auth:
  skill: https://skyphr.com/auth.md
  register_uri: https://skyphr.com/oauth/register
  methods:
    - id: oauth2-authorization-code
      type: oauth2
      grant_type: authorization_code
      authorization_endpoint: https://skyphr.com/oauth/authorize
      token_endpoint: https://skyphr.com/oauth/token
      scopes: [openid]
      credential_type: bearer_access_token
      use: Send the access token in the HTTP Authorization header as Bearer <token>.
```

Agents should use the registration URI to obtain client credentials, then
complete the authorization-code flow before requesting protected resources.

## Supported access method

- **Public web access:** Use standard HTTPS `GET` requests to access public
  pages, `robots.txt`, `llms.txt`, the XML sitemap, and other published agent
  discovery documents.
- **OAuth 2.0:** Use a bearer access token in the `Authorization` header for
  protected resources.

## Credential use

Do not submit credentials or attempt to create an account on behalf of an
agent. Respect the site's published robots rules, Content-Signal preferences,
and any applicable privacy or usage policies.
