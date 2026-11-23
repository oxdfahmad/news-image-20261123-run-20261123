// news-image-20261123 entry (Node 22, standard library only).
//
// The front page shipped beside this file (entry.png) sums up Monday
// 23 November 2026 in ten verified stories plus a five-item ticker.
// This program only checks that image and places it at
// $MAKEFUN_OUTPUT_DIR/entry.png (default /output).
//
// No network, no randomness, no clock reads: the same input bytes
// always produce the same output bytes, so two runs write identical
// files. Outside the grader's container, MAKEFUN_OUTPUT_DIR stands
// in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const SIZE_CAP = 1_048_576;
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function readPngSize(blob: Buffer): { width: number; height: number } {
  // Layout after the 8-byte magic: 4-byte big-endian chunk length,
  // 4-byte chunk type ("IHDR"), then width and height as 4-byte
  // big-endian unsigned integers.
  if (blob.length < 33) fail('entry.png is too short to hold a complete IHDR chunk');
  const length = blob.readUInt32BE(8);
  const chunkType = blob.subarray(12, 16).toString('ascii');
  if (chunkType !== 'IHDR' || length !== 13) fail('entry.png has no valid IHDR chunk');
  return { width: blob.readUInt32BE(16), height: blob.readUInt32BE(20) };
}

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(targetDir, 'entry.png');

let blob: Buffer;
try {
  blob = readFileSync(source);
} catch {
  fail('entry.png is missing from the repository');
}

if (!blob!.subarray(0, 8).equals(PNG_MAGIC)) fail('entry.png does not start with the PNG magic bytes');
if (blob!.length > SIZE_CAP) fail(`entry.png is ${blob!.length} bytes, over the 1 MiB cap`);

const { width, height } = readPngSize(blob!);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  fail(`entry.png is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}

mkdirSync(targetDir, { recursive: true });
writeFileSync(target, blob!);
const digest = createHash('sha256').update(blob!).digest('hex');
console.log(`wrote ${target} (${blob!.length} bytes, ${width}x${height}, sha256 ${digest})`);
