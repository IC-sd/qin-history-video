#!/usr/bin/env bash
# edge-tts TTS provider — free, no API key
# Docs: https://github.com/rany2/edge-tts

tts_check() {
  command -v edge-tts >/dev/null || { echo "✗ edge-tts not found" >&2; return 1; }
}

tts_install_help() {
  cat <<'EOF' >&2
Install edge-tts (free, uses Microsoft Edge's TTS backend, no API key):
  pip install edge-tts
List available voices:
  edge-tts --list-voices | less
EOF
}

tts_synthesize() {
  local text="$1" out="$2" voice="${3:-zh-CN-YunxiNeural}"
  edge-tts --text "$text" --voice "$voice" --write-media "$out" >/dev/null 2>&1
}
