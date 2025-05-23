export interface FileSaverOptions {
  /**
   * Automatically provide Unicode text encoding hints
   * @default false
   */
  autoBom: boolean
}

/**
 * FileSaver.js implements the saveAs() FileSaver interface in browsers that do not natively support it.
 * @param data - The actual file data blob or URL.
 * @param filename - The optional name of the file to be downloaded. If omitted, the name used in the file data will be used. If none is provided "download" will be used.
 * @param options - Optional FileSaver.js config
 */
export function saveAs(
  data: Blob | string,
  filename?: string,
  options?: FileSaverOptions,
): void
