const Footer = () => {
  return (
    <footer className="py-8 border-t border-cyber-cyan/10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <p className="text-cyber-gray text-sm font-mono">
          <span className="text-cyber-cyan">{'<'}</span>
          {' Designed & Built with '}
          <span className="text-cyber-pink">{'♥'}</span>
          {' '}
          <span className="text-cyber-cyan">{'/>'}</span>
        </p>
        <p className="text-cyber-gray/60 text-xs mt-2">
          © 2026 EDGAR_GALVAN. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
