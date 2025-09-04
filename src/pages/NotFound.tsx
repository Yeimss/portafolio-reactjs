import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

  return (
    <main
      className="
        min-h-screen relative overflow-hidden
        bg-gradient-to-b from-purple-50 via-white to-purple-50
        dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
        flex items-center justify-center px-6
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30 bg-purple-300 dark:bg-purple-600" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30 bg-pink-300 dark:bg-pink-600" />
      </div>

      <section
        className="
          relative z-10 w-full max-w-xl
          rounded-3xl border border-purple-200/60 dark:border-white/10
          bg-white/70 dark:bg-white/5 backdrop-blur-xl
          shadow-xl p-8 md:p-10 text-center
        "
      >
        {/* Ghost SVG */}
        <div className="mx-auto mb-6 w-24 h-24">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-sm animate-bounce"
          >
            <defs>
              <linearGradient id="ghostGradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <path
              d="M100 20c-33 0-60 27-60 60v58c0 8 9 12 15 7l10-8 12 10c6 5 15 5 21 0l12-10 10 8c6 5 15 1 15-7V80c0-33-27-60-60-60z"
              fill="url(#ghostGradient)"
              opacity="0.9"
            />
            <circle cx="80" cy="85" r="8" fill="#0f172a" />
            <circle cx="120" cy="85" r="8" fill="#0f172a" />
            <circle cx="100" cy="115" r="6" fill="#0f172a" opacity="0.65" />
          </svg>
        </div>

        <h1
          className="
            text-6xl font-extrabold tracking-tight mb-2
            bg-clip-text text-transparent
            bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500
            dark:from-purple-300 dark:via-fuchsia-300 dark:to-pink-300
          "
        >
          404
        </h1>
        <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">
          Página no encontrada
        </p>
        <p className="mt-2 text-slate-600 dark:text-slate-300">
          La ruta que buscaste no existe o fue movida.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
              bg-gradient-to-r from-purple-600 to-pink-600 text-white
              shadow-lg shadow-purple-500/20
              hover:scale-[1.02] active:scale-[0.99]
              transition-transform
            "
          >
            Volver al inicio
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
              border border-slate-300/60 dark:border-white/15
              bg-white/70 dark:bg-white/5 text-slate-800 dark:text-slate-100
              hover:bg-white/90 dark:hover:bg-white/10
              transition-colors
            "
          >
            Regresar
          </button>

          <a
            href="mailto:tu.email@dominio.com?subject=404%20en%20mi%20portafolio"
            className="
              inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
              text-purple-700 dark:text-purple-300
              hover:underline
            "
          >
          </a>
        </div>
      </section>
    </main>
  );
}
export default NotFound