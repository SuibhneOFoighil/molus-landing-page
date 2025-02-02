export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />
      
      {/* Primary green glow */}
      <div 
        className="absolute w-[600px] h-[600px] -left-[110px] top-[-150px]"
        style={{
          background: 'linear-gradient(135deg, rgba(14, 229, 116, 0.7), rgba(14, 229, 116, 0.3))',
          filter: 'blur(140px)',
          transform: 'rotate(-5deg)',
        }}
      />
      
      {/* Dynamic blue ellipse */}
      <div 
        className="absolute w-[800px] h-[800px] -left-[100px] top-[340px]"
        style={{
          background: 'radial-gradient(circle, rgba(18, 199, 224, 0.6), rgba(18, 199, 224, 0.2))',
          filter: 'blur(130px)',
        }}
      />
      
      {/* Energetic yellow glow */}
      <div 
        className="absolute w-[800px] h-[800px] left-[380px] top-[560px]"
        style={{
          background: 'linear-gradient(45deg, rgba(226, 210, 16, 0.5), rgba(226, 210, 16, 0.2))',
          filter: 'blur(140px)',
          transform: 'rotate(15deg)',
        }}
      />
      
      {/* Secondary blue accent */}
      <div 
        className="absolute w-[450px] h-[450px] left-[979px] top-[670px]"
        style={{
          background: 'radial-gradient(circle, rgba(18, 199, 224, 0.5), rgba(18, 199, 224, 0.1))',
          filter: 'blur(130px)',
        }}
      />
      
      {/* Subtle grid overlay for depth */}
      <div 
        className="absolute inset-0 opacity-20"
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

// Add these animations to your globals.css or tailwind.config.js
// @keyframes float {
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-20px); }
// } 