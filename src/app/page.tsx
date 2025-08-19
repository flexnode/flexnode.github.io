import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLim from '@/images/team/ts-lim.jpg'
import imageJohn from '@/images/team/john.jpg'
import imageVishen from '@/images/clients/mindvalley/vishen.jpg'
import logoMindvalley from '@/images/clients/mindvalley/logo.png'
import logoSays from '@/images/clients/says/logo.png'
import logoRadionyx from '@/images/clients/radionyx/logo.png'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Expertise() {
  return (
    <div className="mt-24 rounded-4xl bg-sky-800 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our expertise"
        title="Blending strategy, product, and architecture to help ideas scale."
        invert
        id="our-expertise"
      >
        <p>
          We bring together more than a decade of hands-on experience to guide,
          build, and architect solutions that deliver real business impact.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Strategy" invert>
            We help chart the right path forward from refining business models
            to shaping product roadmaps that drive growth.
          </GridListItem>
          <GridListItem title="Product" invert>
            We craft user-centric products that not only work but make a lasting
            impact on your customers.
          </GridListItem>
          <GridListItem title="Architecture" invert>
            We design scalable, resilient systems that evolve with your business
            and support long-term success.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Our Clients"
        className="mt-24 sm:mt-32 lg:mt-40"
        id="our-clients"
      >
        <p>
          For more than a decade, we’ve helped companies build and scale
          products and teams that grow their business.
        </p>
        <Button
          href="https://www.clipsoflogic.com/what-ive-built-and-learned-in-12-years-at-mindvalley/"
          aria-label="What I’ve Built and Learned in 12 Years at Mindvalley"
          className="mt-8"
        >
          Read about our journey in Mindvalley
        </Button>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn key="mindvalley" className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <Link href="https://www.mindvalley.com">
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={logoMindvalley}
                    alt="Mindvalley"
                    className="h-16 w-auto"
                    unoptimized
                  />
                </Link>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <span className="font-semibold">Mindvalley</span>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>2013-2025</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Scaled a startup into a global Ed-Tech ecosystem
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Helped Mindvalley grow from niche beginnings into a global
                learning brand. We drove technology strategy, architecture, and
                team reorganization, while building platforms like Quest, Elula,
                and Omvana Online—enabling millions of learners, faster product
                launches, and future-proofed operations.
              </p>
            </article>
          </FadeIn>
          <FadeIn key="says" className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <Link href="https://www.says.com">
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={logoSays}
                    alt="Says.com"
                    className="h-16 w-auto"
                    unoptimized
                  />
                </Link>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <span className="font-semibold">Says.com</span>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>2011</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Relaunched Malaysia’s leading digital news platform
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Architected and built Says.com v2, transforming the platform
                into a scalable digital news hub. The relaunch boosted
                engagement and established Says as a leading voice in Malaysia’s
                online media.
              </p>
            </article>
          </FadeIn>
          <FadeIn key="radionyx" className="flex">
            <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <h3>
                <Link href="https://www.radionyx.io">
                  <span className="absolute inset-0 rounded-3xl" />
                  <Image
                    src={logoRadionyx}
                    alt="Radionyx"
                    className="h-16 w-auto"
                    unoptimized
                  />
                </Link>
              </h3>
              <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                <span className="font-semibold">Radionyx</span>
                <span className="text-neutral-300" aria-hidden="true">
                  /
                </span>
                <span>2023-2025</span>
              </p>
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Rebuilt and scaled a next-gen consignment ERP
              </p>
              <p className="mt-4 text-base text-neutral-600">
                Partnered with Radionyx to rebuild and scale RadiCON v2, a
                modern consignment ERP. Delivered tech strategy, team
                upskilling, and business alignment, resulting in a more
                reliable, scalable, and market-ready platform for retail
                partners.
              </p>
            </article>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  )
}

const team = [
  {
    title: 'Our Team',
    people: [
      {
        name: 'T. S. Lim',
        role: 'Founder',
        image: { src: imageLim },
      },
      {
        name: 'John Wong',
        role: 'Co-Founder',
        image: { src: imageJohn },
      },
    ],
  },
]

function Team() {
  return (
    <Container id="our-team" className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Services"
        title="From idea to scale, we bring your vision to life"
        className="mt-24 sm:mt-32 lg:mt-40"
        id="our-services"
      >
        <p>
          We bring years of experience building and scaling products to
          supercharge your idea.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Product Development">
              We craft impactful, scalable products that deliver measurable
              results.
            </ListItem>
            <ListItem title="Architecture & Infrastructure">
              We design solutions and systems that grow seamlessly with your
              business.
            </ListItem>
            <ListItem title="Startup Strategy">
              We guide startups on business models and product roadmaps for
              sustainable growth.
            </ListItem>
            <ListItem title="Technology Consulting">
              We help you evaluate, implement, and optimize technology to
              support your goals.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Flexnode helps businesses build and scale products with expertise in strategy, product development, and architecture.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-sky-700 sm:text-7xl">
            We build and scale products that matter.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            From product strategy to full-scale development, Flexnode helps
            companies design and launch solutions that scale.
          </p>
        </FadeIn>
      </Container>

      <Expertise />

      <CaseStudies caseStudies={caseStudies} />

      <Team />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: 'Vishen Lakhiani',
          title: 'CEO of Mindvalley',
          avatar: imageVishen,
        }}
      >
        For over a decade, Lim and John played a pivotal role in shaping
        Mindvalley’s platforms. They bring the same expertise and reliability to
        any project they take on. If you’re serious about building products that
        last, they’re the team you want.
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
