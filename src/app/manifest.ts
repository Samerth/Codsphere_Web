import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CodSphere - AI ERP, CRM & Automation',
    short_name: 'CodSphere',
    description: 'CodSphere builds next-gen CRM systems, scalable ERP platforms, and business automation tools',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait',
    icons: [
      {
        src: '/logo-icon-black.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/logo-icon-black.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  };
}