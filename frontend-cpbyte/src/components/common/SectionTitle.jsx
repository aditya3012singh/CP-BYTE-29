function SectionTitle({ title, subtitle }) {
  return (
    <div className="space-y-3 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        {subtitle}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
