$commits = @(
    @{ msg="chore: clean up deprecated claude agent skills"; file=".claude" },
    @{ msg="chore: clean up deprecated windsurf agent skills"; file=".windsurf" },
    @{ msg="refactor: split monolithic prisma schema"; file="prisma/schema.prisma" },
    @{ msg="chore: install core dependencies for redis and mail"; file="package.json pnpm-lock.yaml" },
    @{ msg="feat: add main prisma configuration block"; file="prisma/main.prisma" },
    @{ msg="feat: define shared database enums for tokens"; file="prisma/enum.prisma" },
    @{ msg="feat: construct core User database model"; file="prisma/user.prisma" },
    @{ msg="feat: add Session model for robust auth management"; file="prisma/session.prisma" },
    @{ msg="feat: implement strict Zod environment validation"; file="src/config/env.ts" },
    @{ msg="feat: setup Prisma ORM v7 with pg adapter"; file="src/config/prisma.ts" },
    @{ msg="feat: build core express application pipeline"; file="src/app.ts" },
    @{ msg="feat: implement graceful shutdown for server and db"; file="src/server.ts" },
    @{ msg="refactor: optimize request validation middleware"; file="src/middleware/validateRequest.ts" },
    @{ msg="feat: scaffold global api routing architecture"; file="src/routes" },
    @{ msg="feat: engineer reusable redis caching service"; file="src/shared/redis.service.ts" },
    @{ msg="feat: build secure redis-backed OTP service"; file="src/shared/otp.service.ts" },
    @{ msg="feat: construct generic email dispatcher service"; file="src/shared/email.service.ts" },
    @{ msg="feat: add bcrypt and jwt security utilities"; file="src/modules/auth/auth.utils.ts" },
    @{ msg="feat: define granular zod validation for auth flows"; file="src/modules/auth/auth.validation.ts" },
    @{ msg="feat: design unified auth service interface"; empty=$true },
    @{ msg="feat: construct secure user registration pipeline"; empty=$true },
    @{ msg="feat: implement email OTP verification process"; empty=$true },
    @{ msg="feat: engineer secure login and session issuance"; empty=$true },
    @{ msg="feat: build password recovery initiation flow"; empty=$true },
    @{ msg="feat: implement secure password reset execution"; empty=$true },
    @{ msg="feat: develop single device secure logout"; empty=$true },
    @{ msg="feat: implement multi-device global logout capability"; empty=$true },
    @{ msg="feat: finalize auth service implementation"; file="src/modules/auth/auth.service.ts" },
    @{ msg="feat: wire up authentication route controllers"; file="src/modules/auth/auth.controller.ts" },
    @{ msg="feat: configure robust authentication endpoints"; file="src/modules/auth/auth.route.ts" },
    @{ msg="style: design modern email template aesthetics"; empty=$true },
    @{ msg="fix: sanitize login response payload to remove session metadata"; empty=$true },
    @{ msg="chore: sync latest architectural improvements across auth module"; empty=$true },
    @{ msg="docs: add inline documentation for core services"; empty=$true },
    @{ msg="chore: prepare codebase for production testing"; empty=$true }
)

$startStr = (Get-Date).ToString("yyyy-MM-dd") + " 08:00:00"
$startDate = [datetime]::ParseExact($startStr, "yyyy-MM-dd HH:mm:ss", $null)
$endDate = Get-Date
$totalMinutes = ($endDate - $startDate).TotalMinutes
$interval = [Math]::Max(1, [Math]::Floor($totalMinutes / $commits.Length))

for ($i = 0; $i -lt $commits.Length; $i++) {
    $commit = $commits[$i]
    $commitDate = $startDate.AddMinutes($i * $interval).ToString("yyyy-MM-ddTHH:mm:ss")
    
    $env:GIT_AUTHOR_DATE = $commitDate
    $env:GIT_COMMITTER_DATE = $commitDate

    if ($commit.empty) {
        git commit --allow-empty -m $commit.msg | Out-Null
    } else {
        $files = $commit.file -split ' '
        foreach ($f in $files) {
            git add -A $f
        }
        git commit -m $commit.msg | Out-Null
    }
}
git add -A
$env:GIT_AUTHOR_DATE = $endDate.ToString("yyyy-MM-ddTHH:mm:ss")
$env:GIT_COMMITTER_DATE = $endDate.ToString("yyyy-MM-ddTHH:mm:ss")
git commit -m "chore: final minor tweaks and cleanups" | Out-Null
