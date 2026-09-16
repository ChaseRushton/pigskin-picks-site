type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageKitLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const endpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  if (!endpoint) {
    throw new Error(
      'NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT is not set. Configure it before building.'
    );
  }

  const trimmedSrc = src.startsWith('/') ? src.slice(1) : src;
  const params = [`w-${width}`, `q-${quality ?? 80}`];

  return `${endpoint}/${trimmedSrc}?tr=${params.join(',')}`;
}
