import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({
  children,
  client,
  className,
}: {
  children: React.ReactNode
  client: { avatar: ImageProps['src']; name: string; title: string }
  className?: string
}) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full mask-[linear-gradient(to_bottom_left,white_50%,transparent_60%)] fill-neutral-100 stroke-neutral-950/5"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-x-6">
              <Image
                src={client.avatar}
                alt={client.name}
                className="size-12 rounded-full bg-neutral-50"
              />
              <div className="text-sm/6">
                <div className="text-base font-semibold text-sky-800">
                  {client.name}
                </div>
                <div className="mt-0.5 text-neutral-800">{client.title}</div>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
