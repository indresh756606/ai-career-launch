const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/60 py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="font-heading text-primary-foreground font-semibold text-lg mb-2">ISIT</p>
        <p>Nanak Ganj, Sipri Bazar, Jhansi UP 284003</p>
        <p className="mt-1">Phone: 8543962191</p>
        <p className="mt-4 text-primary-foreground/40">© {new Date().getFullYear()} ISIT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
