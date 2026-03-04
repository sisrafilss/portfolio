'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import { Card, CardContent } from '@/components/ui/card';

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images.map((img) => ({
    src: img,
  }));

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <Card
            key={i}
            className="group overflow-hidden rounded-2xl border border-border hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          >
            <CardContent className="p-0">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={img}
                  alt={`Project screenshot ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
      />
    </>
  );
}
