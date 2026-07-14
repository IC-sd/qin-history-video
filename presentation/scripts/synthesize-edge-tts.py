"""synthesize-edge-tts.py — edge-tts bulk synthesis for qin-history-video.

Reads audio-segments.json, calls edge-tts for each segment,
writes mp3 to public/audio/<chapter>/<step>.mp3.
Skips existing files unless --force is passed.
"""
import json, os, subprocess, sys, time

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SEGMENTS = os.path.join(ROOT, "audio-segments.json")
OUT_DIR = os.path.join(ROOT, "public", "audio")
FORCE = "--force" in sys.argv
VOICE = "zh-CN-YunxiNeural"

if not os.path.exists(SEGMENTS):
    print(f"✗ {SEGMENTS} not found. Run: npm run extract-narrations")
    sys.exit(1)

with open(SEGMENTS, encoding="utf-8") as f:
    segments = json.load(f)

total = len(segments)
synthesized = skipped = failed = 0

for i, seg in enumerate(segments, 1):
    chapter = seg["chapter"]
    step = seg["step"]
    text = seg["text"]
    if not text.strip():
        print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  skip (empty text)")
        skipped += 1
        continue

    out_dir = os.path.join(OUT_DIR, chapter)
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, f"{step}.mp3")

    if os.path.exists(out_path) and not FORCE:
        print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  skip (exists)")
        skipped += 1
        continue

    start = time.time()
    result = subprocess.run(
        ["edge-tts", "--text", text, "--voice", VOICE, "--write-media", out_path],
        capture_output=True, text=True, timeout=120
    )
    elapsed = time.time() - start

    if result.returncode == 0:
        synthesized += 1
        print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  ✓ {elapsed:.1f}s")
    else:
        failed += 1
        err = result.stderr.strip()[:120]
        print(f"[{i:3d}/{total}] {chapter}/{step}.mp3  ✗ FAILED ({err})")

print(f"\n✓ done — synthesized {synthesized}, skipped {skipped}, failed {failed}")
sys.exit(0 if failed == 0 else 2)
