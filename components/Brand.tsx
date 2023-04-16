import Image from "next/image";

export default function Brand(brand: Brand) {
  return (
    <div className="m-4">
      <a href={brand.url} target="_blank">
        <Image
          className="h-auto max-h-36 w-auto max-w-xs"
          src={brand.logo}
          alt={brand.name}
          width={brand.logoWidth}
          height={brand.logoHeight}
        />
      </a>
    </div>
  );
}
