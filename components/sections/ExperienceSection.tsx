import { FadeIn } from '@/components/animations/FadeIn'
import { GoldDivider } from '@/components/ui/GoldDivider'

const experiences = [
  { icon: '🏛️', title: 'Sacred City Access', desc: 'Walk or cycle to Anuradhapura\'s ancient stupas, moonstone carvings, and the 2,300-year-old sacred Bodhi tree.' },
  { icon: '🌿', title: 'Garden Café', desc: 'Our open-air café serves Sri Lankan breakfasts, artisan coffee, and seasonal dishes surrounded by tropical garden.' },
  { icon: '🌊', title: 'Lake Serenity', desc: 'Nuwara Wewa stretches just beyond our garden. Watch elephants at dusk, kayak at dawn, or simply breathe it all in.' },
  { icon: '🎋', title: 'Cultural Immersion', desc: 'Private temple tours, cooking classes, and tuk-tuk adventures curated by our team of passionate local guides.' },
  { icon: '🐆', title: 'Wildlife Journeys', desc: 'Wilpattu National Park — home to leopards, sloth bears, and hundreds of birds — is an hour\'s drive away.' },
  { icon: '🧘', title: 'Slow Living', desc: 'No crowds, no rush. Hammocks, afternoon tea, and the kind of silence that only ancient places carry.' },
]

export function ExperienceSection() {
  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="label-caps text-gold mb-4">Why The Ivy Lake</p>
          <GoldDivider className="justify-center mb-6" />
          <h2 className="heading-section text-forest text-4xl md:text-5xl">More Than a Hotel Stay</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <FadeIn key={exp.title} delay={i * 80} className="group p-8 border border-charcoal/8 bg-white hover:border-gold/40 transition-all duration-500 hover:shadow-md">
              <div className="text-3xl mb-5">{exp.icon}</div>
              <h3 className="font-serif text-xl text-forest mb-3">{exp.title}</h3>
              <p className="text-sm font-sans text-muted leading-relaxed">{exp.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
