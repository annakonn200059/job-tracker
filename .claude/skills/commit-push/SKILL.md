---
name: commit-push
description: Stage all changes, generate a concise commit message from the diff, commit, and push to the current branch. Triggered by /commit-push or /ship.
user-invocable: true
---

# Commit & Push

Stage everything, write a commit message, and push — all in one shot.

## Steps

Run these in sequence:

1. **Get the full picture** — run these in parallel:
   - `git status` to see what's changed
   - `git diff HEAD` to see all staged and unstaged changes
   - `git log --oneline -5` to match the repo's commit message style

2. **Generate a commit message** from the diff:
   - One concise imperative-mood subject line (≤72 chars)
   - Focus on *what* changed and *why*, not the file list
   - No bullet body unless there are genuinely distinct concerns
   - Append `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`

3. **Stage, commit, and push**:
   ```bash
   git add .
   git commit -m "$(cat <<'EOF'
   <generated message>

   Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
   EOF
   )"
   git push
   ```

4. **Confirm** — print the commit hash and the remote URL it was pushed to.

## Rules

- Never skip hooks (`--no-verify`)
- Never force-push
- If `git push` fails because the remote branch doesn't exist yet, re-run with `-u origin <branch>`
- If pre-commit hooks fail, fix the issue and create a **new** commit (do not amend)
