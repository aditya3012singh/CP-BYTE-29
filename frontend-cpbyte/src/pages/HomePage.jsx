import SectionTitle from '../components/common/SectionTitle'
import { SITE_CONFIG } from '../constants/site'
import { useCounter } from '../hooks/useCounter'

function HomePage() {
  const { count, increment, reset } = useCounter(0)

  return (
    <section className="mx-auto flex min-h-[calc(100vh-130px)] max-w-4xl flex-col items-center justify-center gap-8 px-6 py-12 text-center">
      <SectionTitle title={SITE_CONFIG.name} subtitle="Project Structure Ready" />
      <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
        Your frontend now has dedicated folders for components, pages, hooks,
        services, utilities, and constants. Start adding feature-specific code
        in these directories as your app grows.
      </p>
      <div className="flex items-center gap-3">
        <button
          className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
          onClick={increment}
        >
          Count is {count}
        </button>
        <button
          className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </section>
  )
}

export default HomePage
