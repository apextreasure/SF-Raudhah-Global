// Retired: this script previously overwrote supplied project photographs with
// generated placeholder illustrations. Project assets must remain original photos.
// Intentionally perform no filesystem writes, even when assets are missing.
console.error(
  'Image generation is disabled to protect the original project photographs. ' +
  'Restore missing files from the supplied originals; do not generate replacements.'
);
process.exitCode = 1;
