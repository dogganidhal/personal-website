import {
  defineConfig,
  presetTypography,
  presetWebFonts,
  presetWind3,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3({ dark: 'class' }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:400,500,600',
        mono: 'JetBrains Mono:400,500',
      },
    }),
  ],
});
