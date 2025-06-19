
const GradientBackground = () => {
  return (
    <div
      className="min-h-screen w-full overflow-hidden fixed inset-0 -z-10 scroll-pt-16"
      style={{
        backgroundImage: 'radial-gradient(at 0% 0%, hsla(142.8, 64.2%, 40%, 0.3) 0%, hsl(0, 0%, 5%) 70%)',
        backgroundColor: 'hsl(0, 0%, 5%)',
      }}
    />
  );
};

export default GradientBackground;
