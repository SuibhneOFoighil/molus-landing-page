export function Background() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Base background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
      
      {/* Primary green glow */}
      <div 
        className="absolute w-[60vmin] h-[60vmin] -left-[5vmin] top-[10vh]"
        style={{
          background: 'radial-gradient(circle, rgba(14, 229, 116, 0.4), rgba(14, 229, 116, 0.1))',
          filter: 'blur(calc(8vmin))',
        }}
      />
      
      {/* Large blue sphere */}
      <div 
        className="absolute w-[70vmin] h-[70vmin] -right-[10vmin] top-[5vh]"
        style={{
          background: 'radial-gradient(circle, rgba(18, 199, 224, 0.3), rgba(18, 199, 224, 0.1))',
          filter: 'blur(calc(10vmin))',
        }}
      />
      
      {/* Central yellow sphere */}
      <div 
        className="absolute w-[50vmin] h-[50vmin] left-[30vw] top-[20vh]"
        style={{
          background: 'radial-gradient(circle, rgba(226, 210, 16, 0.25), rgba(226, 210, 16, 0.1))',
          filter: 'blur(calc(7vmin))',
        }}
      />

      {/* Additional green accent */}
      <div 
        className="absolute w-[45vmin] h-[45vmin] right-[20vw] top-[40vh]"
        style={{
          background: 'radial-gradient(circle, rgba(14, 229, 116, 0.2), rgba(14, 229, 116, 0.05))',
          filter: 'blur(calc(6vmin))',
        }}
      />

      {/* Small blue sphere */}
      <div 
        className="absolute w-[40vmin] h-[40vmin] left-[10vw] top-[60vh]"
        style={{
          background: 'radial-gradient(circle, rgba(18, 199, 224, 0.25), rgba(18, 199, 224, 0.1))',
          filter: 'blur(calc(5vmin))',
        }}
      />

      {/* Bottom yellow glow */}
      <div 
        className="absolute w-[55vmin] h-[55vmin] right-[5vw] bottom-[10vh]"
        style={{
          background: 'radial-gradient(circle, rgba(226, 210, 16, 0.2), rgba(226, 210, 16, 0.05))',
          filter: 'blur(calc(8vmin))',
        }}
      />
      
      {/* Subtle grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Refined glass effect overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(40px)',
        }}
      />
    </div>
  )
} 