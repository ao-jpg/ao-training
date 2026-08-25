# Ortho Tech Training Manual - batch video compression (NVIDIA NVENC)
#
# Put your original videos in a folder called "originals" next to this script.
# Compressed files land in "video\" ready for the manual.
# Originals are never modified.
#
# Requires ffmpeg on your PATH. If ComfyUI installed it, point $ffmpeg at that copy instead.

$ErrorActionPreference = "Stop"

$ffmpeg   = "ffmpeg"          # or e.g. "H:\ComfyUI\ffmpeg\bin\ffmpeg.exe"
$srcDir   = ".\originals"
$outDir   = ".\video"

# --- quality settings -------------------------------------------------------
# height : 720 is right for training video. Use 1080 only if fine detail matters
#          (e.g. reading a bracket slot). 1080 roughly doubles file size.
# cq     : quality. Lower = better + bigger. 24 = near-transparent, 28 = good,
#          32 = noticeably soft. Start at 26.
# maxrate: ceiling so a busy scene cannot spike the file size.
$height   = 720
$cq       = 26
$maxrate  = "4M"
$bufsize  = "8M"
$audioBr  = "128k"
# ---------------------------------------------------------------------------

if (-not (Test-Path $srcDir)) {
    New-Item -ItemType Directory -Path $srcDir | Out-Null
    Write-Host "Created '$srcDir'. Put your original videos in there and run this again." -ForegroundColor Yellow
    return
}
if (-not (Test-Path $outDir)) { New-Item -ItemType Directory -Path $outDir | Out-Null }

$videos = Get-ChildItem -Path $srcDir -File |
          Where-Object { $_.Extension -match '^\.(mp4|mov|m4v|avi|mkv|wmv|mts|m2ts)$' }

if ($videos.Count -eq 0) { Write-Host "No videos found in $srcDir" -ForegroundColor Yellow; return }

Write-Host "`nCompressing $($videos.Count) video(s) to ${height}p...`n" -ForegroundColor Cyan

$beforeTotal = 0; $afterTotal = 0; $results = @()

foreach ($v in $videos) {
    # safe lowercase-hyphen output name
    $base  = [System.IO.Path]::GetFileNameWithoutExtension($v.Name).ToLower()
    $base  = ($base -replace '[\s_]+','-') -replace '[^a-z0-9\-]','' -replace '-+','-'
    $base  = $base.Trim('-'); if (-not $base) { $base = "clip" }
    $out   = Join-Path $outDir "$base.mp4"

    $n = 2
    while (Test-Path $out) { $out = Join-Path $outDir "$base-$n.mp4"; $n++ }

    Write-Host ("-> {0}" -f (Split-Path $out -Leaf))

    & $ffmpeg -hide_banner -loglevel error -stats -i $v.FullName `
        -c:v h264_nvenc -preset p5 -rc vbr -cq $cq -b:v 0 `
        -maxrate $maxrate -bufsize $bufsize `
        -vf "scale=-2:$height" `
        -pix_fmt yuv420p -profile:v high `
        -c:a aac -b:a $audioBr -ac 2 `
        -movflags +faststart `
        $out

    if ($LASTEXITCODE -ne 0) { Write-Host "   FAILED on $($v.Name)" -ForegroundColor Red; continue }

    $beforeMB = [math]::Round($v.Length/1MB,1)
    $afterMB  = [math]::Round((Get-Item $out).Length/1MB,1)
    $beforeTotal += $v.Length; $afterTotal += (Get-Item $out).Length

    $results += [pscustomobject]@{
        File   = Split-Path $out -Leaf
        Before = "$beforeMB MB"
        After  = "$afterMB MB"
        Saved  = "$([math]::Round((1 - $afterMB/[math]::Max($beforeMB,0.1))*100))%"
        Upload = if ((Get-Item $out).Length -gt 100MB) { "TOO BIG - use Drive" }
                 elseif ((Get-Item $out).Length -gt 25MB) { "GitHub Desktop" }
                 else { "Web drag-drop OK" }
    }
}

Write-Host "`n"
$results | Format-Table -AutoSize

$bt = [math]::Round($beforeTotal/1MB,1); $at = [math]::Round($afterTotal/1MB,1)
Write-Host "Total: $bt MB  ->  $at MB" -ForegroundColor Green
if ($at -gt 900) { Write-Host "Still near the 1 GB Pages ceiling. Lower `$height to 540 or raise `$cq to 30." -ForegroundColor Yellow }
Write-Host ""
