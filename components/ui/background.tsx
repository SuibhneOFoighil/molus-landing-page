export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base background - using a gradient instead of solid black */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black" />
      
      {/* Green ellipse - moved higher and made larger for more top coverage */}
      <div 
        className="absolute w-[500px] h-[500px] -left-[110px] top-[-100px]"
        style={{
          background: '#0EE574',
          filter: 'blur(130px)',
          opacity: '0.7',
        }}
      />
      
      {/* Blue ellipse 1 */}
      <div 
        className="absolute w-[756px] h-[756px] -left-[100px] top-[340px]"
        style={{
          background: '#12C7E0',
          filter: 'blur(130px)',
          opacity: '0.6',
        }}
      />
      
      {/* Yellow ellipse */}
      <div 
        className="absolute w-[756px] h-[756px] left-[380px] top-[560px]"
        style={{
          background: '#E2D210',
          filter: 'blur(130px)',
          opacity: '0.5',
        }}
      />
      
      {/* Blue ellipse 2 */}
      <div 
        className="absolute w-[378px] h-[378px] left-[979px] top-[670px]"
        style={{
          background: '#12C7E0',
          filter: 'blur(130px)',
          opacity: '0.6',
        }}
      />
      
      {/* Semi-transparent overlay with backdrop blur - reduced opacity */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(32.5px)',
        }}
      />
    </div>
  )
} 