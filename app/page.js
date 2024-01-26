const Section = ({ bgColor = 'white', headline = null, text = null, children }) => {
  if(headline || text || children) {
    return (
      <section className={`bg-${bgColor} py-20`}>
        <div className="container mx-auto px-4">
          {(headline || text) && (
            <div className="max-w-2xl mx-auto text-center">
              {headline && <h1 className="text-4xl font-bold mb-6">{headline}</h1>}
              
              {text && <p className="text-gray-600 mb-12">{text}</p>}
            </div>
          )}

          {children}
        </div>
      </section>
    )
  }
}

const Card = ({ number = null, headline = null, text = null, link = null }) => {
  if(number || headline || text || link) {
    return (
      <div className="w-full md:w-1/3 px-4 mb-8">
        <div className="rounded-md bg-white shadow-md p-8">
          {number && <div className="text-4xl font-bold text-purple-600 mb-4">{number}</div>}

          {headline && <h3 className="text-2xl font-bold mb-4">{headline}</h3>}

          {text && <p className="text-gray-600 mb-4">{text}</p>}

          {link && (
            <a class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={link} target="_blank">
              <span>View</span>
              <svg class="fill-none stroke-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          )}
        </div>
      </div>
    )
  }
}

export default function Home() {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <Section headline="hypa.net" text="We're web developers and a web host but we don't sell hosting. If you know us, please feel free to reach out." />

      {/* <Section bgColor="gray-200" text="Some of the sites we've built or host:">
        <div className="flex flex-wrap -mx-4 mt-12">
          <Card number="01" headline="Site 1" text="Nulla sollicitudin libero vel vulputate tristique. Fusce sit amet justo nisl. Nullam ultrices augue." link="https://google.com" />
          <Card number="02" headline="Site 2" text="Phasellus eu neque massa. Ut hendrerit interdum elit, sed commodo magna convallis quis. Praesent id." link="https://google.com" />
          <Card number="03" headline="Site 3" text="Cras quis scelerisque enim, et sagittis ligula. Maecenas ut lacinia nibh. Aliquam volutpat molestie." link="https://google.com" />
        </div>
      </Section> */}

      <Section text={`© ${new Date().getFullYear()} hypa.net`} />
    </div>
  )
}
