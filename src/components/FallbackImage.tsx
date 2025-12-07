"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  fallbackSrc?: string;
};

export default function FallbackImage({ src, alt, width, height, fill, className, fallbackSrc }: Props) {
  const [failed, setFailed] = useState(false);
  const [failedTwice, setFailedTwice] = useState(false);

  const onError = () => {
    if (!failed) setFailed(true);
    else setFailedTwice(true);
  };

  const actualSrc = failed
    ? fallbackSrc || "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2070&auto=format&fit=crop"
    : src;

  if (fill) {
    return (
      <Image src={failedTwice ? "/logo.svg" : actualSrc} alt={alt} fill className={className} onError={onError} />
    );
  }
  return (
    <Image src={failedTwice ? "/logo.svg" : actualSrc} alt={alt} width={width!} height={height!} className={className} onError={onError} />
  );
}
