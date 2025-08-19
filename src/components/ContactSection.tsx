import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40" id="contact-us">
      <FadeIn className="-mx-6 rounded-4xl bg-sky-800 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Let's build something together!
            </h2>
            <div className="mt-6 flex">
              <Button href="mailto:contact@flexnode.com" invert>
                Contact Us
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                We are based in Kota Kinabalu, Sabah, Malaysia.
              </h3>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
