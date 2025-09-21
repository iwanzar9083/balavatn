export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient font-display mb-4" data-testid="footer-title">
              RATHWA BALAVANT
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto" data-testid="footer-description">
              Aspiring Computer Engineer & AI Enthusiast building the future through innovative technology solutions.
            </p>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground" data-testid="footer-copyright">
              © 2024 Rathwa Balavant Trikam Bhai. All rights reserved. Built with passion and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
