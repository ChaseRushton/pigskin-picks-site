import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import imageKitLoader from './imagekit-loader';

describe('imageKitLoader', () => {
  const ORIGINAL_ENV = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT =
      'https://ik.imagekit.io/pigskinpicks';
  });

  afterEach(() => {
    process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT = ORIGINAL_ENV;
  });

  it('builds a transformation URL with width and default quality', () => {
    const url = imageKitLoader({ src: '/screenshots/01-schedule.png', width: 800 });
    expect(url).toBe(
      'https://ik.imagekit.io/pigskinpicks/screenshots/01-schedule.png?tr=w-800,q-80'
    );
  });

  it('respects an explicit quality value', () => {
    const url = imageKitLoader({
      src: '/screenshots/02-game-detail.png',
      width: 400,
      quality: 60,
    });
    expect(url).toBe(
      'https://ik.imagekit.io/pigskinpicks/screenshots/02-game-detail.png?tr=w-400,q-60'
    );
  });

  it('strips a leading slash from src before joining with the endpoint', () => {
    const url = imageKitLoader({ src: 'icon.png', width: 200 });
    expect(url).toBe('https://ik.imagekit.io/pigskinpicks/icon.png?tr=w-200,q-80');
  });

  it('throws when the endpoint env var is missing', () => {
    delete process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
    expect(() => imageKitLoader({ src: '/icon.png', width: 200 })).toThrow(
      /NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT/
    );
  });
});
