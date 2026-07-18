# Security Policy

## Reporting a vulnerability

Do not open a public issue for a suspected vulnerability in this documentation site or related public repositories.

Use GitHub's **private vulnerability reporting** feature when enabled on the affected repository. If unavailable, contact the repository owner through an established private channel.

Include:

- Affected component (site path, repo name, workflow file)
- Reproduction steps
- Potential impact
- Suggested mitigation, if known

Do not include secrets, personal data, client data, or exploit material in a public issue.

## Scope

This policy applies to:

- `Tmgilliam/tmgilliam.github.io` (this portfolio site)
- Public content and GitHub Actions workflows in this repository

Related flagship repositories maintain their own `SECURITY.md` files—for example, the [BBI AI Readiness Diagnostic Kit](https://github.com/Brilliant-Brainstorm-Intelligence-LLC/bbi-ai-readiness-diagnostic-kit/blob/main/SECURITY.md).

## Public content boundaries

Public repositories and this site must not contain:

- API keys, tokens, or connection strings
- Personal or client-identifying data
- Employer-confidential or proprietary implementation details
- Private BBIOS or Nova operational records

See [PUBLIC_PROOF_GATE.md](./PUBLIC_PROOF_GATE.md) and [ADR-002](/docs/architecture-decisions/adr-002-public-proof-boundary).

## Supported versions

| Version                       | Supported   |
| ----------------------------- | ----------- |
| Latest commit on `main`       | Yes         |
| Older static deploy snapshots | Best effort |

## Response expectations

Maintainer will acknowledge good-faith reports within a reasonable window and coordinate fix/disclosure for confirmed issues affecting public users.
