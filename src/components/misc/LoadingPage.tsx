import './LoadingPage.css'

const LoadingPage = () => {
  return (
      <div className="fixed inset-0 bg-background-dark overflow-hidden flex">
        {/* Ambient velvet glow */}
        <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
            style={{background: 'radial-gradient(circle, rgba(139,58,58,0.22) 0%, rgba(10,10,11,0) 70%)'}}
        />
        <div className="m-auto relative z-10 flex flex-col items-center gap-6">
          <div className="m-auto relative loading-page-container">
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
          <span className="text-sm font-extrabold tracking-tight uppercase text-white">
            <span className="text-velvet-gradient">Lounge</span> Velvet
          </span>
        </div>
      </div>
  )
}

export default LoadingPage