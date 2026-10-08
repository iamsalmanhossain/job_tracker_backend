$ErrorActionPreference = "Stop"

# Set Git Author identity if not already set (fallback)
# git config user.name "Salman"
# git config user.email "salman@example.com"

# --- OCTOBER 7 COMMITS (9 commits) ---
$env:GIT_AUTHOR_DATE="2026-10-07T10:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T10:00:00"
git add prisma/upload.prisma prisma/resume.prisma
git commit -m "feat(db): add upload and resume models"

$env:GIT_AUTHOR_DATE="2026-10-07T11:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T11:00:00"
git add prisma/jobApplication.prisma prisma/interview.prisma
git commit -m "feat(db): add job application and interview models"

$env:GIT_AUTHOR_DATE="2026-10-07T12:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T12:00:00"
git add prisma/note.prisma prisma/followUp.prisma prisma/notification.prisma
git commit -m "feat(db): add note, follow-up, and notification models"

$env:GIT_AUTHOR_DATE="2026-10-07T13:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T13:00:00"
git add prisma/auditLog.prisma
git commit -m "feat(db): add audit log model"

$env:GIT_AUTHOR_DATE="2026-10-07T14:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T14:00:00"
git add prisma/enum.prisma
git commit -m "chore(db): update enums for new models"

$env:GIT_AUTHOR_DATE="2026-10-07T15:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T15:00:00"
git add prisma/main.prisma
git commit -m "chore(db): enable prismaSchemaFolder preview feature"

$env:GIT_AUTHOR_DATE="2026-10-07T16:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T16:00:00"
git add prisma/user.prisma
git commit -m "feat(db): add emailVerified and soft delete to user model"

$env:GIT_AUTHOR_DATE="2026-10-07T17:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T17:00:00"
git add prisma/session.prisma
git commit -m "feat(db): update session model with ip and user agent tracking"

$env:GIT_AUTHOR_DATE="2026-10-07T18:00:00"
$env:GIT_COMMITTER_DATE="2026-10-07T18:00:00"
if (Test-Path "script.ps1") {
    git rm script.ps1
    git commit -m "chore: remove unused powershell script"
} elseif (git ls-files script.ps1) {
    git rm script.ps1
    git commit -m "chore: remove unused powershell script"
} else {
    # dummy commit if script not found
    git commit --allow-empty -m "chore: cleanup project files"
}


# --- OCTOBER 8 COMMITS (6 commits) ---
$env:GIT_AUTHOR_DATE="2026-10-08T10:00:00"
$env:GIT_COMMITTER_DATE="2026-10-08T10:00:00"
git add src/middleware/auth.ts
git commit -m "feat(auth): add JWT authentication middleware"

$env:GIT_AUTHOR_DATE="2026-10-08T12:00:00"
$env:GIT_COMMITTER_DATE="2026-10-08T12:00:00"
git add src/modules/auth/auth.validation.ts
git commit -m "feat(auth): update validation schemas for extended profile"

$env:GIT_AUTHOR_DATE="2026-10-08T14:00:00"
$env:GIT_COMMITTER_DATE="2026-10-08T14:00:00"
git add src/modules/auth/auth.controller.ts
git commit -m "feat(auth): implement get and soft delete profile controllers"

$env:GIT_AUTHOR_DATE="2026-10-08T16:00:00"
$env:GIT_COMMITTER_DATE="2026-10-08T16:00:00"
git add src/modules/auth/auth.route.ts
git commit -m "feat(auth): secure profile and logout routes with auth middleware"

$env:GIT_AUTHOR_DATE="2026-10-08T18:00:00"
$env:GIT_COMMITTER_DATE="2026-10-08T18:00:00"
git add src/modules/auth/auth.service.ts
git commit -m "feat(auth): refactor service for profile updates, IP tracking, and OTP expiry"

$env:GIT_AUTHOR_DATE="2026-10-08T20:00:00"
$env:GIT_COMMITTER_DATE="2026-10-08T20:00:00"
git add .
git commit -m "chore: compile and update build artifacts"

Write-Host "Commits successfully created!"
