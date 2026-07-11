function Hero() {
  const heroImage = "https://www.figma.com/api/mcp/asset/5da3a43f-d434-4d47-b785-ed29c7b18899"
  const placeholder = 'https://via.placeholder.com/1600x900?text=Image+indisponible'

  return (
    <section className="relative h-96 lg:h-[500px] bg-cover bg-center overflow-hidden">
      {/* Background Image using an <img> to allow error handling */}
      <div className="absolute inset-0">
        <img
          src={'/images/hero.jpg'}
          alt="Hero background"
          aria-hidden
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            // fallback to remote Figma url first, then placeholder
            if (target.src !== heroImage && target.src !== placeholder) {
              target.src = heroImage
            } else if (target.src !== placeholder) {
              target.src = placeholder
            }
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 lg:px-12 max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 font-gravitas">
          Trouvez le bien immobilier<br />
          qui vous correspond<br />
          au Sénégal
        </h1>

        <p className="text-white text-base lg:text-lg max-w-2xl">
          Achat, vente, location, gestion locative ou investissement, nous vous accompagnons à chaque étape
        </p>
      </div>
    </section>
  )
}

export default Hero
