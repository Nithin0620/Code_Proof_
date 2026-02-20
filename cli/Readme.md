CodeProof CLI
=============

CodeProof is a security-focused CLI that scans your codebase, blocks risky commits, and reports findings to a server-backed dashboard.

Features
--------
- Run security scans on staged or full files.
- Enforce commit safety with configurable rules.
- Generate local reports and optionally sync them to the server.
- Usage tracking with monthly limits (free tier default 20 runs).

Installation
------------
Use npx (recommended):

```bash
npx codeproof init
```

Or install globally:

```bash
npm install -g codeproof
codeproof init
```

Quick Start
-----------
1. Initialize in a Git repo:

```bash
codeproof init
```

2. Run a scan:

```bash
codeproof run
```

3. View reports in the dashboard (requires server):

```bash
codeproof report@dashboard
```

Commands
--------
- init: Initialize CodeProof in the current Git repo.
- run: Run a security scan based on your config.
- report@dashboard: Send latest report and show dashboard link.
- move-secret: Move high-risk secrets to .env safely.
- ignore: Temporarily disable commit enforcement.
- apply: Re-enable commit enforcement.
- whoami: Show the local clientId.
- help: Show CLI help.

Configuration
-------------
CodeProof uses codeproof.config.json at the repo root.

Example:

```json
{
	"projectId": "<uuid>",
	"projectType": "Node",
	"scanMode": "staged",
	"enforcement": "enabled",
	"features": {
		"reporting": true,
		"integration": true,
		"aiEscalation": false,
		"secretRemediation": false
	},
	"integration": {
		"enabled": true,
		"endpointUrl": "http://127.0.0.1:4000/api/reports"
	}
}
```

Usage Limits (Server-Enforced)
------------------------------
CodeProof enforces monthly run limits on the server.

- Default plan: free
- Default monthly limit: 20
- The CLI checks usage before each run
- If the server is unreachable, the CLI fails closed and stops the run

API Base Override
-----------------
By default the CLI uses http://127.0.0.1:4000/api for usage checks.
Override with:

```bash
set CODEPROOF_API_BASE=http://your-server:4000/api
```

move-secret Command
-------------------
Safely moves high-risk secrets to .env with backups:

```bash
codeproof move-secret --yes
```

Server Setup (Required for Dashboard)
-------------------------------------
This CLI expects the CodeProof server to be running for:

- Usage enforcement
- Report ingestion
- Dashboard views

If you only want local scanning, disable integration in your config.

Dashboard
---------
The Next.js dashboard displays:

- Project and report metrics
- Analytics charts
- Usage and limit graphs

License
-------
Proprietary. All rights reserved.
