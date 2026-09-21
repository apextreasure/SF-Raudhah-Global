import React from 'react';
import { Maximize2 } from 'lucide-react';
import { imageMapData } from '../data/imageMap';

interface ProjectPhotoProps {
  src: string;
  title?: string;
  label?: string;
  variant?: 'hero' | 'featured' | 'profile' | 'service';
  eager?: boolean;
  onOpen: (file: string) => void;
}

/** Presentation only: original asset, full frame, captions outside the image. */
export const ProjectPhoto: React.FC<ProjectPhotoProps> = ({
  src, title, label = 'Foto projek', variant = 'featured', eager = false, onOpen
}) => {
  const file = src.replace(/^\//, '');
  const photo = imageMapData.find(item => item.file === file);
  const caption = title || photo?.featuredTitle || photo?.alt_ms || 'Foto projek';

  return (
    <figure className={`project-photo project-photo--${variant}`}>
      <button
        type="button"
        className="project-photo__open"
        aria-label={`Lihat foto penuh: ${caption}`}
        onClick={() => onOpen(file)}
      >
        <img
          src={`/${file}`}
          alt={photo?.alt_ms || caption}
          width={photo?.dimensions.width}
          height={photo?.dimensions.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="project-photo__image"
        />
      </button>
      <figcaption className="project-photo__caption">
        <span className="project-photo__label">{label}</span>
        <p className="project-photo__title">{caption}</p>
        <span className="project-photo__hint"><Maximize2 size={16} aria-hidden="true" /> Klik foto untuk paparan penuh</span>
      </figcaption>
    </figure>
  );
};
