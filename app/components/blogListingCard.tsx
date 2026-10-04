import { COMMON_BORDER_RADIUS } from "@/app/utils/constants/common.constant";
import { FormatBlogDate } from "@/app/utils/helpers/helper";
import { BlogListingCardInterface } from "@/app/utils/interface/common.interface";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { twMerge } from "tailwind-merge";

function BlogListingCard({ data, readMoreLabel, featuredLabel, className }: BlogListingCardInterface) {
  const { listing } = data;
  const displayDate = FormatBlogDate(data.publishedAt);

  return (
    // The whole card is one link, so there is no nested button inside it
    <Link
      href={`/blog/${data.slug}`}
      title={listing.title}
      className={twMerge(
        "group/blog-card h-full flex flex-col overflow-hidden bg-(--root-white-color) border border-(--border-color) transition-colors duration-300 hover:border-(--cta-button-background) focus-visible:outline-2 focus-visible:outline-(--cta-button-background) reveal-animation",
        COMMON_BORDER_RADIUS,
        className,
      )}>
      <div className="relative w-full aspect-1200/630 overflow-hidden bg-(--about-us-card-bg)">
        <Image
          src={listing.image.url}
          alt={listing.image.alt || listing.title}
          title={listing.image.alt || listing.title}
          width={listing.image.width}
          height={listing.image.height}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover/blog-card:scale-105"
        />
        {listing.isFeatured && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-(--root-white-color) font-inter text-xs font-semibold text-(--cta-button-background)">
            {featuredLabel}
          </span>
        )}
      </div>

      <div className="grow flex flex-col gap-4 p-5 md:p-6">
        <h2 className="font-instrument-sans text-xl lg:text-2xl font-bold leading-tight text-(--text-main-color)">
          {listing.title}
        </h2>
        <p className="font-inter text-sm leading-relaxed text-(--text-secondary-color) line-clamp-3">
          {listing.description}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between gap-4 border-t border-(--border-color)">
          <span className="font-inter text-xs text-(--text-secondary-color)">
            {listing.authorName}
            {displayDate && (
              <>
                <span aria-hidden="true"> · </span>
                <time dateTime={data.publishedAt}>{displayDate}</time>
              </>
            )}
          </span>
          <span className="flex items-center gap-1 font-instrument-sans text-sm font-semibold text-(--cta-button-background)">
            {readMoreLabel}
            <GoArrowUpRight className="transition-transform duration-300 group-hover/blog-card:translate-x-0.5 group-hover/blog-card:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogListingCard;
